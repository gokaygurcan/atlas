describe('The alignRight filter', function () {
    let alignRightFilter;

    beforeEach(function () {
        angular.mock.module('dpDataSelection');

        angular.mock.inject(function ($filter) {
            alignRightFilter = $filter('alignRight');
        });
    });

    it('wraps a div with class u-align-right around the input (String)', function () {
        const output = angular.element(alignRightFilter('some text'));

        expect(output[0].tagName).toBe('DIV');
        expect(output.attr('class')).toBe('u-align--right');
        expect(output.text()).toBe('some text');
    });

    it('uses single quotes around attribute values', function () {
        // Bugfix tg-2333; Firefox 38 (used on ADW) can't use ng-bind-html in combination with double quotes
        const output = alignRightFilter('some text');

        expect(output).toContain('\'');
        expect(output).not.toContain('"');
    });
});
