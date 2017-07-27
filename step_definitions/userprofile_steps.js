"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given, When, Then }) {

    When(/^I sign in$/, function() {
        return this.pageFactory.currentPage.header.clickNavProfile()
            .then(() => this.pageFactory.getPage('authentication').chooseToSignIn())
            .then(() => this.pageFactory.getPage('signin').fillFormSubmit())
            .then(() => this.pageFactory.getPage('home'));
    });

    Then(/^I should be signed in and see username$/, function() {
        return this.pageFactory.currentPage.header.checkSigned()
            .then(() => this.pageFactory.currentPage.header.checkUsername())
            .then(() => console.log('done!'));
        //expect smth dunno what
    });

    When(/^I sign out$/, function() {
    	return this.pageFactory.currentPage.header.showDropdownNavProfile()
    		.then(() => this.pageFactory.currentPage.header.signOut());
    });

    Then(/^I should be (unr|r)ecognized user$/, function(isRecognized) {
        switch (isRecognized) {
        case 'unr':
            return this.pageFactory.currentPage.header.checkRecognized().should.be.rejected;
            break;
        case 'r':
            return this.pageFactory.currentPage.header.checkRecognized().should.be.fulfilled;
            break;
        };
    });
});