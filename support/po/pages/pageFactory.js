var HomePage = require('./homePage'),
    SigninPage = require('./signinPage'),
    AuthenticationPage = require('./authenticationPage'),
    SearchPage = require('./searchPage');

var PageFactory = function() {
    var pages = {
        'home': HomePage,
        'signin': SigninPage,
        'authentication': AuthenticationPage,
        'search': SearchPage
    };

    this.currentPage = undefined;

    this.getPage = function(page) {

        if (!pages[page]) {
            throw new Error('Wrong page name: ' + page);
        }
        this.currentPage = new pages[page]();
        return this.currentPage;
    };
};

module.exports = PageFactory;