"use strict";
var EC = protractor.ExpectedConditions;

module.exports = {
	scrollClick: function(element) {
		browser.executeScript("arguments[0].scrollIntoViewIfNeeded();", element.getWebElement());
        return element.click();
	},
	waitForPresence: function(element) {
        var condition = EC.presenceOf(element);
        return browser.wait(condition, 15000);
    },
    fillInput: function(input, text) {
		return input.clear()
			.then(() => input.sendKeys(text));
	}
};