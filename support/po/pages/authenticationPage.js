var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var AuthenticationPage = function() {
    this.elements = {
        signInLink: element(by.cssContainingText('a.btns-one-large>span', 'Sign in.'))
    };

    this.chooseToSignIn = function() {
        return this.elements.signInLink.click();
    };
};

inheritance.inherits(BasePage, AuthenticationPage);
module.exports = AuthenticationPage;