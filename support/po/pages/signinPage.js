var BasePage = require('./basePage.js');

var email = '444test11123@test.com',
    password = '123456789.';

var SigninPage = function() {
    this.locators = {
        email: $('input#txtUserNameOrEmail'),
        password: $('input#password'),
        form: $('form[name="signinForm"]')
    };
};
SigninPage.prototype = new BasePage();

SigninPage.prototype.fillFormSubmit = function() {
    return this.fillInput(this.locators.email, email)
    	.then(() => this.fillInput(this.locators.password, password))
        .then(() => this.locators.form.submit());
};

module.exports = SigninPage;