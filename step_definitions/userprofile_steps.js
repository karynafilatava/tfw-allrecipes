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
        var promiseChecking = this.pageFactory.currentPage.header.check('signed')
            .then(() => this.pageFactory.currentPage.header.check('username'));
        return promiseChecking.should.be.fulfilled;
    });

    Then(/^I should be (unr|r)ecognized user$/, function(isRecognized) {
        var shouldByRecognition = {
            'r': 'fulfilled',
            'unr': 'rejected'
        };
        return this.pageFactory.currentPage.header.check('recognized').should.be[shouldByRecognition[isRecognized]];
    });
});