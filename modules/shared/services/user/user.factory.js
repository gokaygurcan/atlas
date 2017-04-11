(function () {
    'use strict';

    angular
        .module('dpShared')
        .factory('user', userFactory);

    userFactory.$inject = ['$window', '$q', '$interval', 'userSettings'];

    function userFactory ($window, $q, $interval, userSettings) {
        const USER_TYPE = { // the possible types of a user
            NONE: 'NONE',
            ANONYMOUS: 'ANONYMOUS',
            AUTHENTICATED: 'AUTHENTICATED'
        };

        const AUTHORIZATION_LEVEL = {   // The possible user authorization levels
            NONE: 'NONE',       // unkown authorization level or authorization level not set
            DEFAULT: 'DEFAULT',
            EMPLOYEE: 'EMPLOYEE',
            EMPLOYEE_PLUS: 'EMPLOYEE_PLUS'
        };

        const AUTHORIZATION_LEVEL_MAPPING = {   // maps the backend level codes upon a valid authorization level
            0: AUTHORIZATION_LEVEL.DEFAULT,
            1: AUTHORIZATION_LEVEL.EMPLOYEE,
            3: AUTHORIZATION_LEVEL.EMPLOYEE_PLUS
        };

        class User {
            constructor () {
                this.init = function () {   // initialize private properties
                    this._accessToken = null;
                    this._authorizationLevel = AUTHORIZATION_LEVEL.NONE;
                    this.name = '';
                };

                this.decodeToken = function (token) {
                    try {
                        return angular.fromJson(
                            $window.atob(token
                                .split('.')[1]
                                .replace('-', '+')
                                .replace('_', '/')
                            ));
                    } catch (e) {
                        return {};
                    }
                };

                this.parseToken = function (token) {   // private method to parse a refresh or access token
                    const content = this.decodeToken(token);

                    if (angular.isDefined(content.sub)) {   // contained in refresh token
                        this.name = content.sub || '';
                    }

                    if (angular.isDefined(content.authz)) { // contained in access token
                        this.authorizationLevel = content.authz;
                    }
                };

                this.init();

                if (this.refreshToken) {                // get any existing refresh token
                    this.parseToken(this.refreshToken); // and parse its contents
                }
            }

            clear () {
                userSettings.refreshToken.remove();
                userSettings.userType.remove();

                this.init();
            }

            get refreshToken () {
                return userSettings.refreshToken.value; // the refresh token in stored in the session
            }

            set refreshToken (value) {
                userSettings.refreshToken.value = value;
                this.parseToken(value);
            }

            get accessToken () {
                return this._accessToken;
            }

            set accessToken (value) {
                this._accessToken = value;
                this.parseToken(value);
            }

            get type () {
                return USER_TYPE[userSettings.userType.value] || USER_TYPE.NONE;
            }

            set type (value) {
                userSettings.userType.value = USER_TYPE[value];
            }

            get name () {
                return this._name;
            }

            set name (value) {
                this._name = value;
            }

            get authorizationLevel () {
                return AUTHORIZATION_LEVEL[this._authorizationLevel];
            }

            set authorizationLevel (value) {
                this._authorizationLevel = AUTHORIZATION_LEVEL_MAPPING[value] || AUTHORIZATION_LEVEL.NONE;
            }
        }

        const user = new User();

        return {
            getRefreshToken,
            setRefreshToken,
            getAccessToken,
            setAccessToken,
            waitForAccessToken,
            getName,
            getAuthorizationLevel,
            getUserType,
            clearToken,
            meetsRequiredLevel,
            USER_TYPE,
            AUTHORIZATION_LEVEL
        };

        function getRefreshToken () {
            return user.refreshToken;
        }

        function setRefreshToken (token, userType) {
            user.type = userType;
            user.refreshToken = token;
        }

        function getAccessToken () {
            return user.accessToken;
        }

        function setAccessToken (token) {
            const currentAuthorizationLevel = user.authorizationLevel;

            user.accessToken = token;

            if (!meetsRequiredLevel(currentAuthorizationLevel)) {
                onLowerAuthorizationLevel();
            }
        }

        /**
         * Returns a promise that will resolve to an access token if available.
         * When the user is in the process of loggin in, the promise will not
         * be resolved until after the loggin process has finished (or after a
         * maximum of 5 seconds).
         *
         * @return {Promise} The user access token or null.
         */
        function waitForAccessToken () {
            const defer = $q.defer(),
                token = getAccessToken();

            if (token) {
                defer.resolve(token);
            } else if (getRefreshToken()) {
                // user is logging in, refresh token is available, access token not yet
                const interval = $interval(() => {
                    const newToken = getAccessToken();
                    if (!getRefreshToken() || newToken) {
                        // Refresh token was invalid or access token has been received
                        $interval.cancel(interval);
                        defer.resolve(newToken);
                    }
                }, 250, 20);    // try every 1/4 second, for max 20 * 250 = 5 seconds

                // On interval ends resolve without a token
                interval.then(() => defer.resolve(null));
            } else {
                defer.resolve(null);
            }

            return defer.promise;
        }

        function getUserType () {
            return user.type;
        }

        function getName () {
            return user.name;
        }

        function getAuthorizationLevel () {
            return user.authorizationLevel;
        }

        function meetsRequiredLevel (requiredLevel) {
            if (angular.isDefined(AUTHORIZATION_LEVEL[requiredLevel])) {
                const access = Object.keys(AUTHORIZATION_LEVEL_MAPPING).reduce((result, value) => ({
                    user: user.authorizationLevel === AUTHORIZATION_LEVEL_MAPPING[value] ? value : result.user,
                    required: requiredLevel === AUTHORIZATION_LEVEL_MAPPING[value] ? value : result.required
                }), {
                    user: Number.NEGATIVE_INFINITY,
                    required: Number.NEGATIVE_INFINITY
                });
                return access.user >= access.required;
            } else {
                return angular.isUndefined(requiredLevel);
            }
        }

        function onLowerAuthorizationLevel () {
            // Brute fix to reload the application when the user authorization decreases
            $window.location.reload(true);
        }

        function clearToken () {
            user.clear();
            onLowerAuthorizationLevel();
        }
    }
})();
