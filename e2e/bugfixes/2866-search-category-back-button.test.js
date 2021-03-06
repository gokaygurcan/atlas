describe('Taiga issue #2866', () => {
    it('when opening a search category, the back button should return you to the list of all search results', () => {
        const page = dp.navigate('PAGE--HOME');

        // Search for "Dam"
        page.dashboard.siteHeader.search.setQuery('dam');
        page.dashboard.siteHeader.search.submit();

        expect(page.dashboard.rightColumn.searchResults.categories(1).header).toContain('Adressen');
        dp.validate('SEARCH-RESULTS--QUERY', page);
        const searchTitle = page.title;

        // Open the 'Adressen' category
        page.dashboard.rightColumn.searchResults.categories(1).showMore.click();
        dp.validate('SEARCH-RESULTS--CATEGORY', page);

        // Hit the back button, return to the search results overview
        browser.navigate().back();
        dp.validate('SEARCH-RESULTS--QUERY', page);

        expect(page.title).toBe(searchTitle);
    });
});
