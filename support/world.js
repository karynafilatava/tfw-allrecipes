"use strict";
var { defineSupportCode } = require('cucumber'),
	pageFactory = require('./po/pages/pageFactory.js');

function CustomWorld() {
	this.pageFactory = new pageFactory();
}

defineSupportCode(function({ setWorldConstructor, setDefaultTimeout }) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(90 * 1000);
})