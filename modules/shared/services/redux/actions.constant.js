(function () {
    //
    // ACTIONS are identified by their id
    // Optionally an action can specify:
    // - ignore: true
    //   The action will not change the url
    // - replace: true
    //   The action will replace the url (not adding a new entry in the browser history)
    // - isButton: true
    //   The action will be triggered by a button instead of a link
    //
    angular
        .module('dpShared')
        .constant('ACTIONS', {
            URL_CHANGE: {
                id: 'URL_CHANGE',
                ignore: true
            },

            AUTHENTICATE_USER: {
                id: 'AUTHENTICATE_USER',
                ignore: true
            },
            AUTHENTICATE_ERROR: {
                id: 'AUTHENTICATE_ERROR',
                ignore: true
            },

            FETCH_SEARCH_RESULTS_BY_QUERY: {
                id: 'FETCH_SEARCH_RESULTS_BY_QUERY',
                ignore: true
            },
            FETCH_SEARCH_RESULTS_BY_LOCATION: {
                id: 'FETCH_SEARCH_RESULTS_BY_LOCATION',
                ignore: true
            },
            FETCH_SEARCH_RESULTS_CATEGORY: {
                id: 'FETCH_SEARCH_RESULTS_CATEGORY',
                ignore: true
            },
            SHOW_SEARCH_RESULTS: {
                id: 'SHOW_SEARCH_RESULTS'
            },

            SHOW_MAP: {
                id: 'SHOW_MAP',
                isButton: false
            },
            MAP_SET_BASELAYER: {
                id: 'MAP_SET_BASELAYER',
                replace: true
            },
            MAP_ADD_OVERLAY: {
                id: 'MAP_ADD_OVERLAY',
                replace: true
            },
            MAP_REMOVE_OVERLAY: {
                id: 'MAP_REMOVE_OVERLAY',
                replace: true
            },
            MAP_ADD_PANO_OVERLAY: {
                id: 'MAP_ADD_PANO_OVERLAY',
                ignore: true
            },
            MAP_REMOVE_PANO_OVERLAY: {
                id: 'MAP_REMOVE_PANO_OVERLAY',
                ignore: true
            },
            MAP_TOGGLE_VISIBILITY_OVERLAY: {
                id: 'MAP_TOGGLE_VISIBILITY_OVERLAY',
                replace: true,
                isButton: true
            },
            MAP_CLICK: {
                id: 'MAP_CLICK',
                ignore: true
            },
            MAP_PAN: {
                id: 'MAP_PAN',
                replace: true
            },
            MAP_ZOOM: {
                id: 'MAP_ZOOM',
                replace: true
            },
            MAP_HIGHLIGHT: {
                id: 'MAP_HIGHLIGHT',
                ignore: true
            },
            MAP_FULLSCREEN: {
                id: 'MAP_FULLSCREEN',
                isButton: true
            },
            MAP_START_DRAWING: {
                id: 'MAP_START_DRAWING',
                ignore: true,
                isButton: true
            },
            MAP_CLEAR_DRAWING: {
                id: 'MAP_CLEAR_DRAWING',
                isButton: true
            },
            MAP_END_DRAWING: {
                id: 'MAP_END_DRAWING',
                isButton: true
            },
            SHOW_MAP_ACTIVE_OVERLAYS: {
                id: 'SHOW_MAP_ACTIVE_OVERLAYS',
                replace: true,
                isButton: true
            },
            HIDE_MAP_ACTIVE_OVERLAYS: {
                id: 'HIDE_MAP_ACTIVE_OVERLAYS',
                replace: true,
                isButton: true
            },

            FETCH_DETAIL: {
                id: 'FETCH_DETAIL',
                ignore: true,
                isButton: false
            },
            SHOW_DETAIL: {
                id: 'SHOW_DETAIL'
            },
            DETAIL_FULLSCREEN: {
                id: 'DETAIL_FULLSCREEN',
                replace: true
            },

            FETCH_STRAATBEELD_BY_ID: {
                id: 'FETCH_STRAATBEELD_BY_ID'
            },
            FETCH_STRAATBEELD_BY_HOTSPOT: {
                id: 'FETCH_STRAATBEELD_BY_HOTSPOT',
                ignore: true
            },
            FETCH_STRAATBEELD_BY_LOCATION: {
                id: 'FETCH_STRAATBEELD_BY_LOCATION'
            },
            SHOW_STRAATBEELD_INITIAL: {
                id: 'SHOW_STRAATBEELD_INITIAL',
                ignore: true
            },
            SHOW_STRAATBEELD_SUBSEQUENT: {
                id: 'SHOW_STRAATBEELD_SUBSEQUENT',
                replace: true
            },
            STRAATBEELD_FULLSCREEN: {
                id: 'STRAATBEELD_FULLSCREEN',
                isButton: true
            },
            HIDE_STRAATBEELD: {
                id: 'HIDE_STRAATBEELD',
                ignore: true,
                isButton: true
            },
            SET_STRAATBEELD_ORIENTATION: {
                id: 'SET_STRAATBEELD_ORIENTATION',
                replace: true
            },
            SET_STRAATBEELD_HISTORY: {
                id: 'SET_STRAATBEELD_HISTORY'
            },

            FETCH_DATA_SELECTION: {
                id: 'FETCH_DATA_SELECTION',
                ignore: true
            },
            RESET_DATA_SELECTION: {
                id: 'RESET_DATA_SELECTION',
                ignore: true
            },
            SHOW_DATA_SELECTION: {
                id: 'SHOW_DATA_SELECTION'
            },
            NAVIGATE_DATA_SELECTION: {
                id: 'NAVIGATE_DATA_SELECTION'
            },
            SET_DATA_SELECTION_VIEW: {
                id: 'SET_DATA_SELECTION_VIEW',
                isButton: true
            },

            SHOW_LAYER_SELECTION: {
                id: 'SHOW_LAYER_SELECTION',
                isButton: true
            },
            HIDE_LAYER_SELECTION: {
                id: 'HIDE_LAYER_SELECTION',
                isButton: true
            },

            SHOW_HOME: {
                id: 'SHOW_HOME'
            },
            SHOW_PAGE: {
                id: 'SHOW_PAGE'
            },

            SHOW_PRINT: {
                id: 'SHOW_PRINT'
            },
            HIDE_PRINT: {
                id: 'HIDE_PRINT',
                isButton: true
            },

            SHOW_EMBED_PREVIEW: {
                id: 'SHOW_EMBED_PREVIEW'
            },
            HIDE_EMBED_PREVIEW: {
                id: 'HIDE_EMBED_PREVIEW',
                isButton: true
            },

            APPLY_FILTERS: {
                id: 'APPLY_FILTERS',
                ignore: true
            },
            EMPTY_FILTERS: {
                id: 'EMPTY_FILTERS',
                ignore: true
            }
        });
})();
