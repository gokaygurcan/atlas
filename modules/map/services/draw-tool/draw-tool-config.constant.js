(function () {
    'use strict';

    angular
        .module('dpMap')
        .constant('DRAW_TOOL_CONFIG', {
            MAX_MARKERS: 10,
            MARKERS_LEFT_WARNING: 5,
            format: {
                numeric: {
                    delimiters: {
                        thousands: '.',
                        decimal: ','
                    }
                }
            },
            edit: {},
            draw: {
                polygon: {
                    allowIntersection: false,
                    showArea: true,
                    showLength: true,
                    metric: ['km', 'm'],
                    precision: {
                        m: 1
                    }
                },
                marker: false,
                circle: false,
                rectangle: false,
                polyline: false
            }
        });
})();