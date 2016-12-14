(function () {
    'use strict';

    angular
        .module('dpShared')
        .factory('api', apiFactory);

    apiFactory.$inject = ['$http', 'user', 'environment'];

    function apiFactory ($http, user, environment) {
        return {
            getByUrl,
            getByUri,
            getUrl
        };

        /**
         *
         * @param {string} url
         * @param {Object} params
         * @param {Promise} cancel - an optional promise ($q.defer()) to be able to cancel the request
         * @returns {Promise}
         */
        function getByUrl (url, params, cancel) {
            let headers = {},
                userState = user.getStatus();

            if (userState.isLoggedIn) {
                headers.Authorization = 'JWT ' + userState.accessToken;
            }

            let options = {
                method: 'GET',
                url: url,
                headers: headers,
                params: params,

                /*
                 Caching is set to false to enforce distinction between logged in users and guests. The API doesn't
                 support tokens yet.
                 */
                cache: false
            };

            let isCancelled = false;

            if (angular.isObject(cancel) && cancel.promise) {
                options.timeout = cancel.promise;
                options.timeout.then(() => isCancelled = true);
            }

            return $http(options)
                .then(response => response.data)
                .finally(() => {
                    if (options.timeout && !isCancelled) {
                        cancel.reject();
                    }
                });
        }

        function getUrl (uri) {
            return environment.API_ROOT + uri;
        }

        function getByUri (uri, params) {
            let url = getUrl(uri, params);
            return getByUrl(url, params);
        }
    }
})();
