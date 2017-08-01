"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ When, Then }) {

    var pickedRecipeName;

    When(/^I pick recipe from results$/, function() {
        var index;
        return this.pageFactory.currentPage.recipesList.getResultsCount()
            .then((recipesAmountOnPage) => {
                index = Math.floor(Math.random() * recipesAmountOnPage);
                return this.pageFactory.currentPage.recipesList.getRecipeName(index);
            })
            .then((recipeName) => {
                pickedRecipeName = recipeName;
                return this.pageFactory.currentPage.recipesList.pickRecipe(index);
            })
            .then(() => this.pageFactory.getPage('recipe'));
    });

    Then(/^I should see recipe name (on page|in title)$/, function(location) {
        var checkRecipeNameMethod = {
            'on page': 'getRecipeName',
            'in title': 'getTitle'
        };
        return this.pageFactory.currentPage[checkRecipeNameMethod[location]]().should.eventually.have.string(pickedRecipeName);
    });
});