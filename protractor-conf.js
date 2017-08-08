exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],
    capabilities: { 'browserName': process.env.BROWSER },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            'support/*.js',
            'step_definitions/*_steps.js',
            'step_definitions/hooks.js'
        ]
    },
    onPrepare: function() {
        var chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        should = chai.should();
        chai.use(chaiAsPromised);
        browser.manage().window().setSize(1200, 900);
    }
};
