(function () {
    'use strict';

    angular
        .module('atlas')
        .factory('layerSelectionReducers', layerSelectionReducersFactory);

    layerSelectionReducersFactory.$inject = ['ACTIONS'];

    function layerSelectionReducersFactory (ACTIONS) {
        var reducers = {};

        reducers[ACTIONS.SHOW_LAYER_SELECTION.id] = showLayerSelectionReducer;
        reducers[ACTIONS.HIDE_LAYER_SELECTION.id] = hideLayerSelectionReducer;

        return reducers;

        function showLayerSelectionReducer (oldState) {
            var newState = angular.copy(oldState);

            newState.layerSelection.isEnabled = true;

            return newState;
        }

        function hideLayerSelectionReducer (oldState) {
            var newState = angular.copy(oldState);

            newState.layerSelection.isEnabled = false;

            return newState;
        }
    }
})();

