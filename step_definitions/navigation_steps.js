var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {

    Given(/^I navigate to '([^']*)' page$/, function(page) {
        return this.pageFactory.getPage(page).navigate();
    });

});