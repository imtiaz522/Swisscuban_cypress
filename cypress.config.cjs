const { defineConfig } = require("cypress");

//Cucumber
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
  },
  e2e: {
    //to stop auto-execution after code changes in cypress
    watchForFileChanges:false,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});



