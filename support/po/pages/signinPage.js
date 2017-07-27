var BasePage = require('./basePage.js'),
    inheritance = require('../../helpers/inheritance');

var email = '444test11123@test.com',
    password = '123456789.';

var SigninPage = function() {
    this.elements = {
        emailInput: $('input#txtUserNameOrEmail'),
        passwordInput: $('input#password'),
        form: $('form[name="signinForm"]')
    };

    this.fillFormSubmit = function() {
        return this.fillInput(this.elements.emailInput, email)
            .then(() => this.fillInput(this.elements.passwordInput, password))
            .then(() => this.elements.form.submit());
    };
};

inheritance.inherits(BasePage, SigninPage);
module.exports = SigninPage;