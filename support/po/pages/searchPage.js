"use strict";
var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var SearchPage = function() {
	var _this = this;
    _this.elements = {
        queryResults: $('*.search-results__text'),
        queryResultsIngridients: $('*.search-results__text--include')
    };

    _this.getResultsQuery = function() {
        return _this.elements.queryResults.getText();
    };

    _this.getResultsIngridientsQuery = function() {
        return _this.elements.queryResultsIngridients.getText()
            .then((ingridients) => ingridients.match(/"([^"]*)"/g).toString().replace(/"/g, ""));
    };
};

inheritance.inherits(BasePage, SearchPage);
module.exports = SearchPage;