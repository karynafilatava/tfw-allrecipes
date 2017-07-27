var EC = protractor.ExpectedConditions;

var Header = function() {
    this.elements = {
        dropdownNavProfile: $('*.login-state.authenticated-user'),
        globalSearchInput: $('*.nav-search>*#searchText'),
        ingridientAddButton: $('a.include'),
        ingridientAddInput: $('input#includeIngText'),
        ingridientsSearchButton: $('*.ingredient-searchtxt'),
        navProfile: $('*.nav-profile>a'),
        recognizedUser: $('*.nav-profile.recognized-user'),
        searchGoGlobalButton: $('button.search-button'),
        searchGoIngridientsButton: $('button.btn-search'),
        signedUser: $('*.login-state.authenticated-user'),
        signoutButton: $('*.signout>button'),
        username: $('*.nav-profile>a>div>span.username')
    };
};
Header.prototype.searchGlobal = function(query) {
	return this.elements.globalSearchInput.clear()
		.then(() => this.elements.globalSearchInput.sendKeys(query))
		.then(() => this.searchGo('global'));
};
Header.prototype.searchIngridients = function(queryArray) {
	
	return this.elements.ingridientsSearchButton.click() 
		.then(() => queryArray.forEach(
			(ingridient) => this.addIngridient(ingridient)))
		.then(() => this.searchGo('ingridients'));
	// return this.elements.globalSearchInput.clear()
	// 	.then(() => this.elements.globalSearchInput.sendKeys(query))
	// 	.then(() => this.searchGo());
};

Header.prototype.addIngridient = function(ingridient) {
	return this.elements.ingridientAddInput.clear()
		.then(() => this.elements.ingridientAddInput.sendKeys(ingridient))
		.then(() => this.elements.ingridientAddButton.click());
}
Header.prototype.searchGo = function(searchType) {

	switch(searchType) {
	case 'global':
		return this.elements.searchGoGlobalButton.click();	
		break;
	case 'ingridients':
		return this.elements.searchGoIngridientsButton.click();	
		break;
	}
};
Header.prototype.clickNavProfile = function() {
    return this.elements.navProfile.click();
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
	return browser.wait(EC.and(usernameIsNotSignIn, usernameIsNotCreateAccount), 5000);
};
Header.prototype.showDropdownNavProfile = function() {
	return this.elements.dropdownNavProfile.click();
};
Header.prototype.signOut = function() {
	return this.elements.signoutButton.click();
};

module.exports = Header;