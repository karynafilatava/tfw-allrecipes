"use strict";
var BasePage = require('./basePage.js'),
    inheritance = require('../../helpers/inheritance'),
    extensions = require('../../extensions/browserExtensions');;



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
        return extensions.fillInput(_this.elements.inputs.email, email)
            .then(() => extensions.fillInput(_this.elements.inputs.password, password))
            .then(() => _this.elements.form.submit());
    };
};

inheritance.inherits(BasePage, SigninPage);
module.exports = SigninPage;