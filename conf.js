// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['BaseBuyer_login.spec.js'],

  onPrepare: function(){

  SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: 'all'
      }
      }));


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 3000000
  }
}};
