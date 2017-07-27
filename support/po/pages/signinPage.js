"use strict";
var BasePage = require('./basePage.js'),
    inheritance = require('../../helpers/inheritance');

var email = '444test11123@test.com',
    password = '123456789.';

var SigninPage = function() {
	var _this = this;
    _this.elements = {
        emailInput: $('input#txtUserNameOrEmail'),
        form: $('form[name="signinForm"]'),
        passwordInput: $('input#password')
    };

    _this.fillFormSubmit = function() {
        return _this.fillInput(_this.elements.emailInput, email)
            .then(() => _this.fillInput(_this.elements.passwordInput, password))
            .then(() => _this.elements.form.submit());
    };
};

inheritance.inherits(BasePage, SigninPage);
module.exports = SigninPage;