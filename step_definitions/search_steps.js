"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ When, Then }) {

    When(/^I search '([^']*)' (globally|by ingridients)$/, function (query, searchType) {
    	var searchPromise;
    	switch(searchType) {
    	case 'globally':
    		searchPromise = this.pageFactory.currentPage.header.searchGlobal(query);
    		break;
    	case 'by ingridients':
    		var queryArray = query.split(",");
    		searchPromise = this.pageFactory.currentPage.header.searchIngridients(queryArray);
    		break;
    	}
    	return searchPromise
    		.then(() => this.pageFactory.getPage('search'));
    });

   	Then(/^I should see '([^']*)'(| ingridients) results$/, function (query, searchType) {
   		var checkQueryPromise;
   		switch(searchType) {
    	case '':
    		checkQueryPromise = this.pageFactory.currentPage.getResultsQuery();
    		break;
    	case ' ingridients':
    		query = query.replace(" ", "");
    		checkQueryPromise = this.pageFactory.currentPage.getResultsIngridientsQuery();
    		break;
    	}
    	return checkQueryPromise.should.eventually.include(query);
   	});
});