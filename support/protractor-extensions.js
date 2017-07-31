"use strict";
var EC = protractor.ExpectedConditions;

protractor.ElementFinder.prototype.scrollClick = function() {
    var _this = this;
    browser.executeScript("arguments[0].scrollIntoViewIfNeeded();", _this.getWebElement());
    return _this.click();
};
protractor.ElementFinder.prototype.waitForPresence = function() {
    var _this = this;
    var condition = EC.presenceOf(_this);
    return browser.wait(condition, 15000);
};
protractor.ElementFinder.prototype.fillInput = function(text) {
    var _this = this;
    return _this.clear()
        .then(() => _this.sendKeys(text));
};