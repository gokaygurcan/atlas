'use strict';

const link = dp.require('modules/shared/components/link/link.page-objects');

module.exports = function (straatbeeldThumbnailElement) {
    return {
        get link () {
            return link(straatbeeldThumbnailElement.element(by.css('.qa-straatbeeld-thumbnail > dp-link')));
        }
    };
};
