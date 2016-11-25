(function () {
    'use strict';

    angular
        .module('dpDataSelection')
        .component('dpDataSelectionTable', {
            bindings: {
                content: '='
            },
            templateUrl: 'modules/data-selection/components/table/table.html',
            controller: DpDataSelectionTableController,
            controllerAs: 'vm'
        });

    DpDataSelectionTableController.$inject = ['store', 'ACTIONS'];

    function DpDataSelectionTableController (store, ACTIONS) {
        let vm = this;
        console.log(vm.content);
        vm.classForField = function (format) {
            switch (format && format.align) {
                case 'right':
                    return 'u-align--right';
                default:
                    return '';
            }
        };

        vm.followLink = function (endpoint) {
            store.dispatch({
                type: ACTIONS.FETCH_DETAIL,
                payload: endpoint
            });
        };
    }
})();
