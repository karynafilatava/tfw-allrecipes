"use strict";
var EC = protractor.ExpectedConditions;

var Header = function() {
    this.elements = {
        dropdownNavProfile: $('*.login-state.authenticated-user'),
        recognizedUser: $('*.nav-profile.recognized-user'),
       	signedUser: $('*.login-state.authenticated-user'),
        username: $('*.nav-profile>a>div>span.username'),
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
};

Header.prototype.searchGlobal = function(query) {
	return this.elements.inputs.globalSearch.clear()
		.then(() => this.elements.inputs.globalSearch.sendKeys(query))
		.then(() => this.searchGo('global'));
};

Header.prototype.searchIngridients = function(queryArray) {
	return this.elements.buttons.ingridientsSearch.click() 
		.then(() => queryArray.forEach((ingridient) => this.addIngridient(ingridient)))
		.then(() => this.searchGo('ingridients'));
};

Header.prototype.addIngridient = function(ingridient) {
	return this.elements.inputs.ingridientAdd.clear()
		.then(() => this.elements.inputs.ingridientAdd.sendKeys(ingridient))
		.then(() => this.elements.buttons.ingridientAdd.click());
};

Header.prototype.searchGo = function(searchType) {
	switch(searchType) {
	case 'global':
		return this.elements.buttons.searchGoGlobal.click();	
		break;
	case 'ingridients':
		return this.elements.buttons.searchGoIngridients.click();	
		break;
	}
};

Header.prototype.clickNavProfile = function() {
    return this.elements.links.navProfile.click();
};

Header.prototype.checkSigned = function() {
	return browser.wait(EC.presenceOf(this.elements.signedUser), 5000);
};

Header.prototype.checkRecognized = function() {
	return browser.wait(EC.presenceOf(this.elements.recognizedUser), 5000);
};

Header.prototype.checkUsername = function() {
	var usernameIsNotSignIn = EC.not(EC.textToBePresentInElement(this.elements.username, 'Sign In'));
	var usernameIsNotCreateAccount = EC.not(EC.textToBePresentInElement(this.elements.username, 'Create account'));
	return browser.wait(EC.and(usernameIsNotSignIn, usernameIsNotCreateAccount), 1000);
};

Header.prototype.showDropdownNavProfile = function() {
	return this.elements.dropdownNavProfile.click();
};

Header.prototype.signOut = function() {
	return this.elements.buttons.signout.click();
};

module.exports = new Header();