"use strict";
var Header = require('../common/header.js');

var BasePage = function() {};

BasePage.prototype.header = new Header();

BasePage.prototype.navigate = function(url) {
    return browser.get(url || this.url);
};

BasePage.prototype.getTitle = function() {
	return browser.getTitle();	
};

module.exports = BasePage;