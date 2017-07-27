var Header = require('../common/header.js');

var BasePage = function() {};

BasePage.prototype.header = new Header();

BasePage.prototype.navigate = function(site) {
    return browser.get(site || this.url);
};

BasePage.prototype.fillInput = function(element, text) {
	return element.clear()
		.then(() => element.sendKeys(text));
};

module.exports = BasePage;