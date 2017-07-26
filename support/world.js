var { defineSupportCode } = require('cucumber');
var pageFactory = require('./po/pages/pageFactory.js');

function CustomWorld() {
	this.pageFactory = new pageFactory();
}

defineSupportCode(function({ setWorldConstructor, setDefaultTimeout }) {
    setWorldConstructor(CustomWorld);
    setDefaultTimeout(60 * 1000);
})