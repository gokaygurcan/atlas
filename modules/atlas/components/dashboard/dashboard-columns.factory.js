(function () {
    'use strict';

    angular
        .module('atlas')
        .factory('dashboardColumns', dashboardColumnsFactory);

    function dashboardColumnsFactory () {
        return {
            determineVisibility: determineVisibility,
            determineColumnSizes: determineColumnSizes
        };

        function determineVisibility (state) {
            var visibility = {};

            if (angular.isObject(state.dataSelection)) {
                visibility.dataSelection = true;

                visibility.map = false;
                visibility.detail = false;
                visibility.page = false;
                visibility.searchResults = false;
                visibility.straatbeeld = false;
            } else {
                if (!state.isPrintMode) {
                    visibility.map = true;
                } else {
                    visibility.map = state.map.isFullscreen ||
                        (
                            !state.map.showLayerSelection &&
                            (angular.isObject(state.detail) || angular.isObject(state.straatbeeld))
                        );
                }

                visibility.layerSelection = state.map.showLayerSelection;

                if (state.map.showLayerSelection || state.map.isFullscreen) {
                    visibility.detail = false;
                    visibility.page = false;
                    visibility.searchResults = false;
                    visibility.straatbeeld = false;
                } else {
                    visibility.detail = angular.isObject(state.detail);
                    visibility.page = angular.isString(state.page);
                    visibility.searchResults = angular.isObject(state.search) &&
                        (angular.isString(state.search.query) || angular.isArray(state.search.location));
                    visibility.straatbeeld = angular.isObject(state.straatbeeld);
                }

                visibility.dataSelection = false;
            }

            return visibility;
        }

        function determineColumnSizes (visibility, hasFullscreenMap, isPrintMode) {
            var isFullscreen = hasFullscreenMap || visibility.dataSelection;

            if (!isPrintMode) {
                return determineColumnSizesDefault(visibility, isFullscreen);
            } else {
                return determineColumnSizesPrint(visibility, isFullscreen);
            }

            function determineColumnSizesDefault (visibility, isFullscreen) {
                var columnSizes = {};

                if (isFullscreen) {
                    columnSizes.left = 0;
                    columnSizes.middle = 12;
                } else if (visibility.layerSelection) {
                    columnSizes.left = 8;
                    columnSizes.middle = 4;
                } else {
                    columnSizes.left = 0;
                    columnSizes.middle = 4;
                }

                columnSizes.right = 12 - columnSizes.left - columnSizes.middle;

                return columnSizes;
            }

            function determineColumnSizesPrint (visibility, isFullscreen) {
                var columnSizes = {};

                if (isFullscreen) {
                    columnSizes.left = 0;
                    columnSizes.middle = 12;
                    columnSizes.right = 0;
                } else if (visibility.layerSelection) {
                    columnSizes.left = 12;
                    columnSizes.middle = 0;
                    columnSizes.right = 0;
                } else if (visibility.page || visibility.searchResults) {
                    columnSizes.left = 0;
                    columnSizes.middle = 0;
                    columnSizes.right = 12;
                } else {
                    columnSizes.left = 0;
                    columnSizes.middle = 12;
                    columnSizes.right = 12;
                }

                return columnSizes;
            }
        }
    }
})();