"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ When, Then }) {	

	var pickedRecipeName;

	When(/^I pick recipe from results$/, function() {
		var index;
    	return this.pageFactory.currentPage.recipesList.getResultsCount()
    		.then((recipesAmount) => {
    			index = Math.floor(Math.random() * recipesAmount);
    			return this.pageFactory.currentPage.recipesList.getRecipeName(index);
    		})
    		.then((recipeName) => {
    			pickedRecipeName = recipeName;
    			return this.pageFactory.currentPage.recipesList.pickRecipe(index);
    		})
    		.then(() => this.pageFactory.getPage('recipe'));
    });

    Then(/^I should see recipe name (on page|in title)$/, function(checkPlace) {
    	var checkRecipeNamePromise;
    	switch(checkPlace) {
    	case 'on page':
    		checkRecipeNamePromise = this.pageFactory.currentPage.getRecipeName();
    	case 'in title':
    	    checkRecipeNamePromise = this.pageFactory.currentPage.getTitle();
    	}
    	return checkRecipeNamePromise.should.eventually.have.string(pickedRecipeName);
    });
});