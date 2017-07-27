var BasePage = require('./basePage'),
    inheritance = require('../../helpers/inheritance');

var HomePage = function() {
    this.url = 'https://allrecipes.com';
};

inheritance.inherits(BasePage, HomePage);
module.exports = HomePage;