"use strict";
var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var HomePage = function() {
	var _this = this;
    _this.url = 'https://allrecipes.com';
};

inheritance.inherits(BasePage, HomePage);
module.exports = HomePage;