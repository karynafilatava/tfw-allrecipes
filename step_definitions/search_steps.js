"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {

    When(/^I search '([^']*)' (globally|by ingridients)$/, function (query, searchType) {
    	var searchPromise = undefined;
    	switch(searchType) {
    	case 'globally':
    		searchPromise = this.pageFactory.currentPage.header.searchGlobal(query);
    		break;
    	case 'by ingridients':
    		var queryArray = query.split(",");
    		searchPromise = this.pageFactory.currentPage.header.searchIngridients(queryArray);
    		break;
    	};
    	return searchPromise
    		.then(() => this.pageFactory.getPage('search'));
    });

   	Then(/^I should see '([^']*)'(| ingridients) results$/, function (query, searchType) {
   		var textPromise;
   		switch(searchType) {
    	case '':
    		textPromise = this.pageFactory.currentPage.getResultsQuery();
    		break;
    	case ' ingridients':
    		query = query.replace(" ", "");
    		textPromise = this.pageFactory.currentPage.getResultsIngridientsQuery();
    		break;
    	};
    	return textPromise.should.eventually.include(query);
   	});
});