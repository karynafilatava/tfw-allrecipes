"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ When, Then }) {

    When(/^I search '([^']*)' (globally|by ingridients)$/, function(query, searchType) {
        var searchMethod = {
            'globally': 'searchGlobal',
            'by ingridients': 'searchIngridients'
        };
        return this.pageFactory.currentPage.header[searchMethod[searchType]](query)
            .then(() => this.pageFactory.getPage('search'));
    });

    Then(/^I should see '([^']*)'(| ingridients) results$/, function(query, searchType) {
        var checkQueryMethod = {
            '': 'getResultsQuery',
            ' ingridients': 'getResultsIngridientsQuery'
        },
            queryByType = {
            '': query,
            ' ingridients': query.replace(" ", "")
        };
        return this.pageFactory.currentPage[checkQueryMethod[searchType]]().should.eventually.include(queryByType[searchType]);
    });
});