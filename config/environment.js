'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'authmaker-super-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.authmaker = { domainUrl: "https://astonishing-asparagus.authmaker.com", redirectUri: "http://localhost:4200/login", clientId: "149c7b354a68d47b59e8db18585c62e1dae3d29a" };
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // SPECIFY DEVELOPMENT HOST AND NAMESPACE BELOW
    ENV.apiHost = 'http://localhost:3000';
    ENV.apiNamespace = 'v1';

     ENV['ember-cli-mirage'] = {
       enabled: false
     }


  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // enable faker in production
    ENV['ember-faker'] = {
      enabled: true
    };

    ENV.authmaker = { domainUrl: "https://astonishing-asparagus.authmaker.com", redirectUri: "https://astonishing-asparagus.authmakertraining.com/login", clientId: "545437dee14275f008ebf09bb6a8c3cebeff0768" };

    // SPECIFY PRODUCTION HOST AND NAMESPACE BELOW
    // *UNIQUE* Google Cloud PROJECT NAME to the host url
    ENV.apiHost = 'https://astonishing-asparagus.appspot.com';
    ENV.apiNamespace = 'v1';

  }

  return ENV;
};
