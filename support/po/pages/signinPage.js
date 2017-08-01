"use strict";
var BasePage = require('./basePage.js'),
    inheritance = require('../../helpers/inheritance');

var SigninPage = function() {
    var _this = this,
        email = 'notreallymyemail@google.com',
        password = '123456789.';
    _this.elements = {
        inputs: {
            email: $('input#txtUserNameOrEmail'),
            password: $('input#password')
        },
        form: $('form[name="signinForm"]')
    };

    _this.fillFormSubmit = function() {
        return _this.elements.inputs.email.fillInput(email)
            .then(() => _this.elements.inputs.password.fillInput(password))
            .then(() => _this.elements.form.submit());
    };
};

inheritance.inherits(BasePage, SigninPage);
module.exports = SigninPage;