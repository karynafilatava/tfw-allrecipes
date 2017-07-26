var EC = protractor.ExpectedConditions;

var Header = function() {
    this.elements = {
        dropdownNavProfile: $('*.login-state.authenticated-user'),
        globalSearchInput: $('*.nav-search>*#searchText'),
        ingridientAddButton: $(''),
        ingridientAddInput: $(''),
        ingridientsSearchButton: $(''),
        navProfile: $('*.nav-profile>a'),
        recognizedUser: $('*.nav-profile.recognized-user'),
        searchGoButton: $('*.nav-search>button[ng-click="performSearch()"]'),
        signedUser: $('*.login-state.authenticated-user'),
        signoutButton: $('*.signout>button'),
        username: $('*.nav-profile>a>div>span.username')
    };
};
Header.prototype.searchGlobal = function(query) {
	return this.elements.globalSearchInput.clear()
		.then(() => this.elements.globalSearchInput.sendKeys(query))
		.then(() => this.searchGo());
};
Header.prototype.searchIngridients = function(queryArray) {
	// return this.elements.globalSearchInput.clear()
	// 	.then(() => this.elements.globalSearchInput.sendKeys(query))
	// 	.then(() => this.searchGo());
};
Header.prototype.searchGo = function() {
	return this.elements.searchGoButton.click();	
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

module.exports = new Header();