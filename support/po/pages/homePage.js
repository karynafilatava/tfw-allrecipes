"use strict";
var BasePage = require('./basePage'),
    RecipesList = require('../common/recipesList'),
    inheritance = require('../../helpers/inheritance');

var HomePage = function() {
	var _this = this;
	_this.recipesList = new RecipesList(),
    _this.url = 'https://allrecipes.com';
};

inheritance.inherits(BasePage, HomePage);
module.exports = HomePage;