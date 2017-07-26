var BasePage = require('./basePage.js');

var SearchPage = function() {
    this.locators = {
        queryResults: $('*.search-results__text'),
        queryResultsIngridients: $('')
    };
};
SearchPage.prototype = new BasePage();

SearchPage.prototype.getResultsQuery = function() {
    return this.locators.queryResults.getText();
};
SearchPage.prototype.getResultsIngridientsQuery = function() {
    return this.locators.queryResultsIngridients.getText();
};

module.exports = SearchPage;