var BasePage = require('./basePage.js');

var SearchPage = function() {
    this.locators = {
        queryResults: $('*.search-results__text'),
        queryResultsIngridients: $('*.search-results__text--include')
    };
};
SearchPage.prototype = new BasePage();

SearchPage.prototype.getResultsQuery = function() {
    return this.locators.queryResults.getText();
};
SearchPage.prototype.getResultsIngridientsQuery = function() {
    return this.locators.queryResultsIngridients.getText()
    	.then((ingridients) => ingridients.match(/"([^"]*)"/g).toString().replace(/"/g, ""));
};

module.exports = SearchPage;