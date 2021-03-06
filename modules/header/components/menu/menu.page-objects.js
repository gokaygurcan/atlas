'use strict';

const menuDropdownPO = dp.require('modules/header/components/menu/dropdown/menu-dropdown.page-objects');

module.exports = function (menuElement) {
    return {
        get dropDownMain () {
            return menuDropdownPO(menuElement.element(by.css('dp-menu-dropdown[type=main]')));
        }
    };
};
