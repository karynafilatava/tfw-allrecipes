"use strict";
var EC = protractor.ExpectedConditions,
	extensions = require('../../extensions/browserExtensions');;

var Header = function() {
	var _this = this;
    _this.elements = {
        dropdownNavProfile: $('*.login-state.authenticated-user'),
        recognizedUser: $('*.nav-profile.recognized-user'),
       	signedUser: $('*.login-state.authenticated-user'),
        username: $('*.username'),
        buttons: { 
        	ingridientAdd: $('a.include'),
        	ingridientsSearch: $('*.ingredient-searchtxt'),
        	searchGoGlobal: $('button.search-button'),
        	searchGoIngridients: $('button.btn-search'),
        	signout: $('*.signout>button')
        },
        inputs: {
        	globalSearch: $('*.nav-search>*#searchText'),
        	ingridientAdd: $('input#includeIngText')
        },
        links: {
        	navProfile: $('*.nav-profile>a')
        }
    };

    _this.searchGlobal = function(query) {
		return extensions.fillInput(_this.elements.inputs.globalSearch, query)
			.then(() => _this.searchGo('global'));
	};

	_this.searchIngridients = function(query) {
		var queryArray = query.split(",");
		return _this.elements.buttons.ingridientsSearch.click() 
			.then(() => queryArray.forEach((ingridient) => _this.addIngridient(ingridient)))
			.then(() => _this.searchGo('ingridients'));
	};
	
	_this.addIngridient = function(ingridient) {
		return extensions.fillInput(_this.elements.inputs.ingridientAdd, ingridient)
			.then(() => _this.elements.buttons.ingridientAdd.click());
	};

	_this.searchGo = function(searchType) {
		var goMethod = {
			'global': 'searchGoGlobal',
			'ingridients': 'searchGoIngridients'
		};
		return _this.elements.buttons[goMethod[searchType]].click();			
	};

	_this.clickNavProfile = function() {
	    return _this.elements.links.navProfile.click();
	};
	
	_this.showDropdownNavProfile = function() {
		return _this.elements.dropdownNavProfile.click();
	};
	
	_this.signOut = function() {
		return _this.elements.buttons.signout.click();
	};

	_this.check = function(type) {
		switch(type) {
		case 'recognized':
			return extensions.waitForPresence(_this.elements.recognizedUser);
		case 'signed':
			return extensions.waitForPresence(_this.elements.signedUser);
		case 'username':
			var usernameIsNotSignIn = EC.not(EC.textToBePresentInElement(_this.elements.username, 'Sign In'));
			var usernameIsNotCreateAccount = EC.not(EC.textToBePresentInElement(_this.elements.username, 'Create account'));
			return browser.wait(EC.and(usernameIsNotSignIn, usernameIsNotCreateAccount), 1000);
		}
	};
};

module.exports = Header;