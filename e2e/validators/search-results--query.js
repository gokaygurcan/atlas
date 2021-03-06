'use strict';

const searchResults = require('./search-results');

module.exports = function (page) {
    expect(page.title).toMatch(/Data met '\w+' - Dataportaal$/);

    searchResults(page);
};
