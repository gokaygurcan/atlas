describe('The search-reducers factory', function () {
    var searchReducers,
        DEFAULT_STATE,
        ACTIONS;

    DEFAULT_STATE = {
        map: {
            baseLayer: 'topografie',
            overlays: [],
            viewCenter: [52.3719, 4.9012],
            zoom: 9,
            showActiveOverlays: false,
            isFullscreen: false,
            isLoading: false
        },
        layerSelection: {
            isEnabled: false
        },
        search: null,
        page: {
            name: 'home'
        },
        detail: null,
        straatbeeld: null,
        dataSelection: null,
        atlas: {
            isPrintMode: false
        }
    };

    beforeEach(function () {
        angular.mock.module('atlas');

        angular.mock.inject(function (_searchReducers_, _ACTIONS_) {
            searchReducers = _searchReducers_;
            ACTIONS = _ACTIONS_;
        });
    });

    describe('FETCH_SEARCH_RESULTS_BY_QUERY', function () {
        it('sets the search query and resets the search location and active category', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = {
                query: null,
                location: [12.345, 6.789],
                category: 'adres',
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.search.isLoading).toBe(true);
            expect(output.search.query).toBe('linnaeus');
            expect(output.search.location).toBeNull();
            expect(output.search.category).toBeNull();
            expect(output.search.numberOfResults).toBeNull();
        });

        it('sets query to null on empty string payload', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = {
                query: 'xyz',
                location: [12.345, 6.789],
                category: 'adres',
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, '');

            expect(output.search.query).toBe(null);
        });

        it('sets query isFullscreen to true', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = {
                query: 'xyz',
                location: [12.345, 6.789],
                category: 'adres',
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, '');

            expect(output.search.isFullscreen).toBe(true);
        });

        it('hides the layer selection, page, detail, straatbeeld and dataSelection', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.layerSelection.isEnabled = true;
            inputState.page.name = 'somePage';
            inputState.page.type = 'someType';
            inputState.detail = {some: 'object'};
            inputState.straatbeeld = null;
            inputState.dataSelection = {some: 'object'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.layerSelection.isEnabled).toBe(false);
            expect(output.page.name).toBeNull();
            expect(output.page.type).toBeNull();
            expect(output.detail).toBeNull();
            expect(output.straatbeeld).toBeNull();
            expect(output.dataSelection).toBeNull();
        });

        it('clears the straatbeeld when no straatbeeld id exists', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {some: 'text'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('clears the straatbeeld when a straatbeeld is active', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {id: 'object'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('clears straatbeeld when a straatbeeld is active with a location', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {id: 'object', location: [1, 2], some: 'abc'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('disables the fullscreen mode of the map', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.map.isFullscreen = true;

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, 'linnaeus');

            expect(output.map.isFullscreen).toBe(false);
        });

        it('when map and layerSelection and page are not an object', function () {
            const inputState = angular.copy(DEFAULT_STATE);
            inputState.map = null;
            inputState.layerSelection = null;
            inputState.page = null;

            const output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_QUERY.id](inputState, '');
            expect(output.map).toBeNull();
            expect(output.layerSelection).toBeNull();
            expect(output.page).toBeNull();
        });
    });

    describe('FETCH_SEARCH_RESULTS_BY_LOCATION', function () {
        it('resets the search query and active category and sets the search location', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = {
                query: 'some query',
                location: null,
                category: 'adres',
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.search.isLoading).toBe(true);
            expect(output.search.query).toBeNull();
            expect(output.search.location).toEqual([52.001, 4.002]);
            expect(output.search.category).toBeNull();
            expect(output.search.numberOfResults).toBeNull();
        });

        it('sets query isFullscreen to false', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = {
                query: 'some query',
                location: null,
                category: 'adres',
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.search.isFullscreen).toBe(false);
        });

        it('rounds the search location with a precision of 7 decimals', () => {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.search = null;

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](
                inputState,
                [52.123456789, 4.12345671]
            );

            expect(output.search.location).toEqual([52.1234568, 4.1234567]);
        });

        it('hides the layer selection, active overlays, page, detail, straatbeeld and dataSelection', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.layerSelection.isEnabled = true;
            inputState.map.showActiveOverlays = true;
            inputState.page.name = 'somePage';
            inputState.detail = {some: 'object'};
            inputState.staatbeeld = {some: 'object'};
            inputState.dataSelection = {some: 'object'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.layerSelection.isEnabled).toBe(false);
            expect(output.map.showActiveOverlays).toBe(false);
            expect(output.page.name).toBeNull();
            expect(output.detail).toBeNull();
            expect(output.straatbeeld).toBeNull();
            expect(output.dataSelection).toBeNull();
        });

        it('changes the viewCenter when layerSelection or fullscreen mode is enabled', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            // With fullscreen disabled, it doesn't change the viewCenter
            inputState.map.viewCenter = [52.123, 4.789];
            inputState.map.isFullscreen = false;
            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.map.viewCenter).toEqual([52.123, 4.789]);

            // With fullscreen enabled, it changes the viewCenter
            inputState.map.isFullscreen = true;
            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.map.viewCenter).toEqual([52.001, 4.002]);

            // With layer selection enabled
            inputState.layerSelection.isEnabled = true;
            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);
            expect(output.map.viewCenter).toEqual([52.001, 4.002]);
        });

        it('clears the straatbeeld', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {some: 'text'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('clears the straatbeeld when a straatbeeld is active', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {id: 'object'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('clears the straatbeeld when a straatbeeld is active with a location', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.straatbeeld = {id: 'object', location: [1, 2], some: 'abc'};

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, 'linnaeus');

            expect(output.straatbeeld).toBeNull();
        });

        it('disables the fullscreen mode of the map', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.map.isFullscreen = true;

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.map.isFullscreen).toBe(false);
        });

        it('removes a drawn line from the map', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.map.geometry).toEqual([]);
        });

        it('does not depend on a map being present', function () {
            var inputState = angular.copy(DEFAULT_STATE),
                output;

            inputState.map = null;

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);

            expect(output.map).toBeNull();
        });

        it('when map and layerSelection and page are not an object', function () {
            const inputState = angular.copy(DEFAULT_STATE);
            inputState.layerSelection = null;
            inputState.page = null;

            const output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_BY_LOCATION.id](inputState, [52.001, 4.002]);
            expect(output.layerSelection).toBeNull();
            expect(output.page).toBeNull();
        });
    });

    describe('FETCH_SEARCH_RESULTS_CATEGORY', function () {
        var inputState,
            output;

        beforeEach(function () {
            inputState = angular.copy(DEFAULT_STATE);
            inputState.search = {
                isLoading: false,
                query: 'Jan Beijerpad',
                location: null,
                category: null,
                numberOfResults: 23
            };

            output = searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_CATEGORY.id](inputState, 'adres');
        });

        it('sets the active category', function () {
            expect(output.search.category).toBe('adres');
        });

        it('sets the number of search results to null', function () {
            expect(output.search.numberOfResults).toBeNull();
        });

        it('sets isLoading to true', function () {
            expect(output.search.isLoading).toBe(true);
        });
    });

    describe('FETCH_SEARCH_RESULTS_CATEGORY', function () {
        it('only updates the search state when a search is active', function () {
            const inputState = angular.copy(DEFAULT_STATE);
            delete inputState.search;
            searchReducers[ACTIONS.FETCH_SEARCH_RESULTS_CATEGORY.id](inputState, 'adres');
            expect(inputState.search).toBeUndefined();
        });
    });

    describe('SHOW_SEARCH_RESULTS', function () {
        var inputState,
            output;

        beforeEach(function () {
            inputState = angular.copy(DEFAULT_STATE);
            inputState.search = {
                isLoading: true,
                query: 'Jan Beijerpad',
                location: null,
                category: null,
                numberOfResults: null
            };
            inputState.map = { isLoading: true };

            output = searchReducers[ACTIONS.SHOW_SEARCH_RESULTS.id](inputState, 23);
        });

        it('sets the number of search results', function () {
            expect(output.search.numberOfResults).toBe(23);
        });

        it('sets isLoading to false', function () {
            expect(output.search.isLoading).toBe(false);
        });

        it('sets map isLoading to false when map is available', function () {
            expect(output.map.isLoading).toBe(false);
        });

        it('does not set map isLoading to false when map is not available', function () {
            delete inputState.map;
            output = searchReducers[ACTIONS.SHOW_SEARCH_RESULTS.id](inputState, 23);
            expect(output.map).toBeUndefined();
        });
    });

    describe('SHOW_SEARCH_RESULTS', function () {
        it('only updates the search state when a search is active', function () {
            const inputState = angular.copy(DEFAULT_STATE);
            delete inputState.search;
            searchReducers[ACTIONS.SHOW_SEARCH_RESULTS.id](inputState, 23);
            expect(inputState.search).toBeUndefined();
        });
    });
});
