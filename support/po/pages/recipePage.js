"use strict";
var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance'),
    extensions = require('../../extensions/browserExtensions');

var RecipePage = function() {
	var _this = this;
	_this.elements = {
		recipeName: $('*.recipe-summary__h1')
	};

	_this.getRecipeName = function() {
		return extensions.waitForPresence(_this.elements.recipeName)
			.then(() => _this.elements.recipeName.getText());
	}
};

inheritance.inherits(BasePage, RecipePage);
module.exports = RecipePage;