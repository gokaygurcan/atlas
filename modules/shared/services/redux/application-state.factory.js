(function () {
    angular
        .module('dpShared')
        .factory('applicationState', applicationStateFactory);

    applicationStateFactory.$inject = ['$window', 'Redux'];

    function applicationStateFactory ($window, Redux) {
        let reducer,
            stateUrlConverter;

        return {
            initialize,
            getStore: () => $window.reduxStore,
            getReducer: () => reducer,
            getStateUrlConverter: () => stateUrlConverter
        };

        function initialize (_reducer_, _stateUrlConverter_, defaultState, ...middleware) {
            reducer = _reducer_;
            stateUrlConverter = _stateUrlConverter_;

            $window.initializeState(Redux, _reducer_, _stateUrlConverter_, defaultState, ...middleware);
        }
    }
})();
