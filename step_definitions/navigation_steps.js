"use strict";
var { defineSupportCode } = require('cucumber');

defineSupportCode(function({ Given }) {

    Given(/^I navigate to '([^']*)' page$/, function(page) {
        return this.pageFactory.getPage(page).navigate();
    });

});