"use strict";
var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var RecipePage = function() {
    var _this = this;
    _this.elements = {
        recipeName: $('*.recipe-summary__h1')
    };

    _this.getRecipeName = function() {
        return _this.elements.recipeName.waitForPresence()
            .then(() => _this.elements.recipeName.getText());
    }
};

inheritance.inherits(BasePage, RecipePage);
module.exports = RecipePage;