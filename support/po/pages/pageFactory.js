"use strict";
var AuthenticationPage = require('./authenticationPage'),
    HomePage = require('./homePage'),
    RecipePage = require('./recipePage'),
    SearchPage = require('./searchPage'),
    SigninPage = require('./signinPage');
    

var PageFactory = function() {
    var _this = this;
    var pages = {
        'authentication': AuthenticationPage,
        'home': HomePage,
        'recipe': RecipePage,
        'search': SearchPage,
        'signin': SigninPage
    };

    _this.currentPage = undefined;

    _this.getPage = function(page) {
        if (!pages[page]) {
            throw new Error('Wrong page name: ' + page);
        }
        _this.currentPage = new pages[page]();
        return _this.currentPage;
    };
};

module.exports = PageFactory;