exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'chrome',
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : [
            'support/world.js',
            'step_definitions/*.js',
        ],
        format : 'pretty',
        tags: ['@user', '@search']
    },
    onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        
        expect = chai.expect;
        should = chai.should();
        chai.use(chaiAsPromised);
        browser.manage().window().setSize(1200, 900);
    }
};