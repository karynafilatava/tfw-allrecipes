"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ When, Then }) {

    When(/^I sign in$/, function() {
        return this.pageFactory.currentPage.header.clickNavProfile()
            .then(() => this.pageFactory.getPage('authentication').chooseToSignIn())
            .then(() => this.pageFactory.getPage('signin').fillFormSubmit())
            .then(() => this.pageFactory.getPage('home'));
    });

    When(/^I sign out$/, function() {
        return this.pageFactory.currentPage.header.showDropdownNavProfile()
            .then(() => this.pageFactory.currentPage.header.signOut());
    });

    Then(/^I should be signed in and see username$/, function() {
        var promiseCheck = this.pageFactory.currentPage.header.check('signed')
            .then(() => this.pageFactory.currentPage.header.check('username'));
        return promiseCheck.should.be.fulfilled;
    });

    Then(/^I should be (unr|r)ecognized user$/, function(isRecognized) {
        switch (isRecognized) {
        case 'unr':
            return this.pageFactory.currentPage.header.check('recognized').should.be.rejected;
        case 'r':
            return this.pageFactory.currentPage.header.check('recognized').should.be.fulfilled;
        }
    });
});