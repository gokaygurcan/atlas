(function () {
    'use strict';

    angular
        .module('dpMap')
        .factory('drawTool1', drawToolFactory);

    drawToolFactory.$inject = ['$rootScope', '$timeout', 'store', 'ACTIONS', 'L', 'DRAW_TOOL_CONFIG', 'onMapClick'];

    function drawToolFactory ($rootScope, $timeout, store, ACTIONS, L, DRAW_TOOL_CONFIG, onMapClick) {
        let leafletMap,
            drawnItems,
            drawShapeHandler,
            editShapeHandler,
            // firstMarker,
            // lastMarker,
            currentLayer;

        // Shape =
        // mode: null, DRAW, EDIT
        // drawHandler, editHandler, contents (currentLayer)

        // tmp store in session??

        let c = console;
        // let lastState;

        return {
            initialize
        };

        function initialize (map) {
            let editConfig = angular.copy(DRAW_TOOL_CONFIG.edit),
                editToolbar;

            // Init with drawMode and latLngs
            // with latlngs calls createShape, and set mode to MODE
            // withoud latlngs set mode = null
            store.subscribe(() => {
                if (store.getState().map.drawingMode) {
                    enable();
                } else {
                    c.log('Subscription!');
                    disable();
                }
            });

            // CreateShape ('polygon', coordinates) => See DELETE

            // CreateShape ('polygon')
            leafletMap = map;
            drawnItems = new L.FeatureGroup();
            drawShapeHandler = new L.Draw.Polygon(leafletMap, DRAW_TOOL_CONFIG.draw.polygon);

            editConfig.featureGroup = drawnItems;
            editToolbar = new L.EditToolbar(editConfig);
            editShapeHandler = editToolbar.getModeHandlers(leafletMap)[0].handler;

            leafletMap.addLayer(drawnItems);

            c.log('draw shape handler', drawShapeHandler);
            c.log('edit shape handler', editShapeHandler);

            Object.keys(L.Draw.Event).forEach(key => {
                leafletMap.on(L.Draw.Event[key], function (...args) {
                    c.log('Leaflet Event', key);

                    // TODO: set tooltip on mouseMove

                    let info = getHandlerInfo(drawShapeHandler);
                    // c.log('Shape info', info);
                    if (currentLayer) {
                        if (key !== 'DELETED') {
                            info = getInfo(currentLayer);
                            // c.log('Event polygon', info);
                            // TODO: clear info on mousedown, enable on mouseup??
                            L.drawLocal.edit.handlers.edit.tooltip.text = info.area;
                            L.drawLocal.edit.handlers.edit.tooltip.subtext = info.distance;
                        }
                    }

                    c.log('Info', info);
                    // c.log('Current layer', currentLayer);

                    // TODO: test create from coordinates
                    // if (key === 'DELETED') {
                    //     let recreateFrom = angular.copy(lastState);
                    //     $timeout(() => {
                    //         c.log('Recreate from', recreateFrom);
                    //         var polygon = new L.Polygon(recreateFrom);
                    //         currentLayer = polygon;
                    //         c.log('New polygon', polygon);
                    //         drawnItems.addLayer(polygon);
                    //         polygon.on('click', shapeClickHandler);
                    //         enable();
                    //     }, 1000);
                    // }

                    // lastState = angular.copy(info.latLngs);
                    // c.log('lastState', lastState, info.latLngs);

                    // TODO: switch back to last state when EDIT > maxCount
                    // if (key === 'EDITVERTEX') {
                    //     if (info.latLngs.length > 5) {
                    //         $rootScope.$applyAsync(() => {
                    //             editShapeHandler.revertLayers();
                    //             disable();
                    //         });
                    //     } else {
                    //         editShapeHandler.save();
                    //     }
                    // }

                    // TODO: ?? not needed, end EDIT on start EDIT > maxCount
                    // if (key === 'EDITSTART') {
                    //     if (info.latLngs.length > 5) {
                    //         $rootScope.$applyAsync(() => disable());
                    //     }
                    // }
                    //

                    // TODO: disable add marker when maxCount (auto close?)
                    // if (key === 'DRAWVERTEX' || key === 'DRAWSTART') {
                    //     if (info.latLngs.length >= 5) {
                    //         $rootScope.$applyAsync(() => disable());
                    //     }
                    // }

                    // TODO; save last consistent state
                });
            });

            // Click outside shape => delete shape
            leafletMap.on('click', function () {
                // Not in draw mode: new marker add!!
                if (!drawShapeHandler.enabled()) {
                    deleteShape();
                }
            });
            leafletMap.on(L.Draw.Event.DRAWSTOP, function () {
                updateState();  // State change
            });
            leafletMap.on(L.Draw.Event.DRAWVERTEX, function () {
                bindMarker();
            });
            leafletMap.on(L.Draw.Event.CREATED, function (e) {
                var type = e.layerType,
                    layer = e.layer;

                if (type === 'polygon') {
                    currentLayer = layer;
                    drawnItems.addLayer(layer);
                    layer.on('click', shapeClickHandler);
                    // TODO: 'mousemove for tooltip...
                    ['mousedown', 'mouseup'].forEach(key => layer.on(key, () => {
                        c.log('layer event', key);
                    }));
                }
            });
        }

        // Shape method for shape.info
        //
        // TODO: for two points return line length
        //
        function getDistance (latLngs, isClosed) {
            return latLngs.reduce((total, latlng, i) => {
                if (i > 0) {
                    let dist = latlng.distanceTo(latLngs[i - 1]);
                    total += dist;
                }
                return total;
            }, isClosed ? latLngs[0].distanceTo(latLngs[latLngs.length - 1]) : 0);
        }

        // before the shape is created, get the info from the drawHandler
        function getHandlerInfo (shapeHandler) {
            // returns the coordinates, area and length of the unfinished shape
            if (shapeHandler._markers) {
                let latLngs = shapeHandler._markers.map(m => m._latlng);
                let distance = getDistance(latLngs, false);
                let area = shapeHandler._area;
                return {
                    latLngs: latLngs.map(({lat, lng}) => [lat, lng]),
                    area: L.GeometryUtil.readableArea(area, true),
                    distance: L.GeometryUtil.readableDistance(distance, true)
                };
            } else {
                return {
                    latLngs: [],
                    area: L.GeometryUtil.readableArea(0, true),
                    distance: L.GeometryUtil.readableDistance(0, true)
                };
            }
        }

        // After the shape has been created get the info from the layer
        function getInfo (polygon) {
            // returns the coordinates, area and length of the polygon
            let latLngs = polygon.getLatLngs()[0];
            let area = L.GeometryUtil.geodesicArea(latLngs);
            let distance = getDistance(latLngs, true);

            return {
                latLngs: getLatLngs(polygon),
                intersects: polygon.intersects(),
                area: L.GeometryUtil.readableArea(area, true),
                distance: L.GeometryUtil.readableDistance(distance, true)
            };
        }

        // utility method
        function getLatLngs (polygon) {
            // returns an array of [[lat, lng], ...] for the polygon
            return polygon &&
                polygon
                    .getLatLngs()[0]
                    .map(({lat, lng}) => [lat, lng]);
        }

        // TODO: follow events to know DRAW or EDIT mode
        // endDraw: endDrawMode, endEditMode, startDraw: startEditMode, startDrawMode
        // endDraw => mode = null, startDraw: mode = DRAW/EDIT

        // toggle enableEdit
        function toggle () {
            if (isEnabled()) {
                disable();
            } else {
                enable();
            }
        }

        // isEnabled => shape is being created or being edited
        function isEnabled () {
            return drawShapeHandler.enabled() || editShapeHandler.enabled();
        }

        // start draw or edit mode for current layer or start create mode for new shape
        function enable () {
            if (!isEnabled()) {
                if (currentLayer) {
                    editShapeHandler.enable();
                } else {
                    drawShapeHandler.enable();
                }
                updateState();
            }
        }

        // end of draw or edit mode => in create mode complete shape, in edit mode save shape
        function disable () {
            c.log('disable');
            if (isEnabled()) {
                if (drawShapeHandler.enabled()) {
                    if (drawShapeHandler._markers && drawShapeHandler._markers.length > 1) {
                        drawShapeHandler.completeShape();
                    } else {
                        drawShapeHandler.disable();
                    }
                    updateState();
                } else {
                    editShapeHandler.save();
                    editShapeHandler.disable();
                    updateState();
                }
            }
        }

        // determine create (DRAW), edit (EDIT) or just show (possibly nothing)
        // TODO: bepaal adh events!
        // Restore dmv state (null=SHOW, create=DRAW, edit=EDIT) latlngs
        function updateState () {
            let currentMode = null; // 'SHOW'

            if (isEnabled()) {
                currentMode = drawShapeHandler.enabled() ? 'DRAW' : 'EDIT';
            }

            store.dispatch({
                type: ACTIONS.MAP_SET_DRAWING_MODE,
                payload: currentMode
            });
        }

        // delete a marker in DRAW mode
        function deleteMarker (marker) {
            let markers = drawShapeHandler._markers;
            let index = markers.findIndex(m => m._leaflet_id === marker._leaflet_id);
            if (index > 0) {    // Don't delete on click on first marker, this should close the shape
                let nDelete = markers.length - index;   // Delete all from last to marker, inclusive
                while (nDelete-- > 0) {
                    drawShapeHandler.deleteLastVertex();
                }
            }
        }

        // bind marker in DRAW mode to deleteMarker
        function bindMarker () {
            let marker = drawShapeHandler._markers[drawShapeHandler._markers.length - 1];
            ['mousedown', 'click'].forEach(key => marker.on(key, () => {
                deleteMarker(marker);
            }));
        }

        // function bindLastMarker () {
        //     c.log('ERROR, bindLastMarker called');
        //     if (lastMarker) {
        //         lastMarker.off('click', deleteLastMarker);
        //         lastMarker = null;
        //     }
        //     if (drawShapeHandler.enabled() && drawShapeHandler._markers.length) {
        //         lastMarker = drawShapeHandler._markers[drawShapeHandler._markers.length - 1];
        //         if (lastMarker) {
        //             lastMarker.on('click', deleteLastMarker);
        //         }
        //     }
        //     if (!firstMarker && lastMarker) {
        //         firstMarker = lastMarker;
        //         firstMarker.on('click', completeShape);
        //     }
        // }

        // When trying to complete a shape of only two points (a line) by
        // clicking on the first vertex again results in Leaflet draw giving an
        // error that the lines should not cross.
        //
        // When there is only one vertex, it will be deleted (see
        // previous test).
        // When there are more than two vertices Leaflet draw will
        // complete the shape.
        // In case there are exactly two vertices Leaflet draw will not
        // allow you to complete the shape because the lines are not
        // allowed to cross.
        // To prevent this last error, we will call disable which in turn will
        // call drawShapeHandler.completeShape manually which will
        // automatically complete the shape for us. And in this case without
        // an error.

        // No longer used???
        // function completeShape () {
        //     if (drawShapeHandler.enabled() && drawShapeHandler._markers.length === 2) {
        //         disable();
        //     }
        // }

        // function deleteLastMarker () {
        //     c.log('ERROR, deleteLastMarker called');
        //     if (drawShapeHandler.enabled()) {
        //         if (drawShapeHandler._markers.length === 1) {
        //             // Leaflet draw does not allow deleting the very first
        //             // marker; work around by disabling and enabling the draw
        //             // tool.
        //             disable();
        //             enable();
        //         } else if (drawShapeHandler._markers.length > 1) {
        //             drawShapeHandler.deleteLastVertex();
        //             bindLastMarker();
        //         }
        //     }
        // }

        // Click on the shape swiitches between DRAW and EDIT mode
        function shapeClickHandler (e) {
            L.DomEvent.stop(e);
            toggle();
        }

        // Click outside shape deletes the shape
        // TODO: createShape ()
        function deleteShape () {
            if (currentLayer) {
                let deletedLayers = new L.LayerGroup();
                currentLayer.off('click', shapeClickHandler);
                drawnItems.removeLayer(currentLayer);
                deletedLayers.addLayer(currentLayer);
                leafletMap.fire(L.Draw.Event.DELETED, { layers: deletedLayers });
                currentLayer = null;
                disable();
            }
        }
    }
})();
