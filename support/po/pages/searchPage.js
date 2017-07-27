var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var SearchPage = function() {
    this.elements = {
        queryResults: $('*.search-results__text'),
        queryResultsIngridients: $('*.search-results__text--include')
    };

    this.getResultsQuery = function() {
        return this.elements.queryResults.getText();
    };

    this.getResultsIngridientsQuery = function() {
        return this.elements.queryResultsIngridients.getText()
            .then((ingridients) => ingridients.match(/"([^"]*)"/g).toString().replace(/"/g, ""));
    };
};

inheritance.inherits(BasePage, SearchPage);
module.exports = SearchPage;