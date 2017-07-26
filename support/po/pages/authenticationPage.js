var BasePage = require('./basePage.js');

var AuthenticationPage = function() {
    this.locators = {
        signIn: by.cssContainingText('a.btns-one-large>span', 'Sign in.')
    };
};
AuthenticationPage.prototype = new BasePage();

AuthenticationPage.prototype.chooseToSignIn = function() {
    return element(this.locators.signIn).click();
};

module.exports = AuthenticationPage;