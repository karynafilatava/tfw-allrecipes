"use strict";

var RecipesList = function () {
	var _this = this;

	_this.elements = {
		recipesNames: $$('*.grid-col__h3')
	};

	_this.getResultsCount = function() {
		return _this.elements.recipesNames.count();
	};

	_this.pickRecipe = function(index) {
		return _this.elements.recipesNames.get(index).scrollClick();	
	};

	_this.getRecipeName = function(index) {
		return _this.elements.recipesNames.get(index).getText();
	};
};

module.exports = RecipesList;