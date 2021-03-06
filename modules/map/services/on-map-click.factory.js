(() => {
    'use strict';

    angular
        .module('dpMap')
        .factory('onMapClick', onMapClickFactory);

    onMapClickFactory.$inject = ['$rootScope', 'store', 'ACTIONS', 'drawTool', 'suppress', 'activeOverlays',
        'nearestDetail'];

    function onMapClickFactory ($rootScope, store, ACTIONS, drawTool, suppress, activeOverlays,
                                nearestDetail) {
        let location = [];

        return {
            initialize
        };

        function initialize (leafletMap) {
            leafletMap.on('click', onMapClick);
        }

        function onMapClick (event) {
            const visibleOverlays = activeOverlays.getVisibleOverlays(),
                state = store.getState();

            location = [event.latlng.lat, event.latlng.lng];

            if (!(suppress.isBusy() || state.atlas.isEmbedPreview || state.atlas.isEmbed || drawTool.isEnabled())) {
                if (!state.straatbeeld && visibleOverlays.length > 0) {
                    // do geosearch for nearest item in overlays
                    // if it exists go to detail of that item
                    nearestDetail.search(location, visibleOverlays, state.map.zoom, dispatchClick);
                } else {
                    $rootScope.$applyAsync(function () {
                        // old geosearch
                        dispatchClick();
                    });
                }
            }
        }

        function dispatchClick () {
            store.dispatch({
                type: ACTIONS.MAP_CLICK,
                payload: location
            });
        }
    }
})();
