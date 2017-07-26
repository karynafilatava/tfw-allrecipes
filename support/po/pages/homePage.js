var BasePage = require('./basePage.js');

var HomePage = function() {
    this.url = 'https://allrecipes.com';
};
HomePage.prototype = new BasePage();

module.exports = HomePage;