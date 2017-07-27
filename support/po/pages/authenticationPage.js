"use strict";
var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var AuthenticationPage = function() {
	var _this = this;
    _this.elements = {
        signInLink: element(by.cssContainingText('a.btns-one-large>span', 'Sign in.'))
    };

    _this.chooseToSignIn = function() {
        return _this.elements.signInLink.click();
    };
};

inheritance.inherits(BasePage, AuthenticationPage);
module.exports = AuthenticationPage;