/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'peoples-trimet',
    environment: environment,
    contentSecurityPolicy: {

       'default-src': "'none'",
       'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com https://*.googleapis.com https://*.gstatic.com",
       'font-src': "'self' https://*.gstatic.com",
       'connect-src': "'self' wss://*.firebaseio.com https://www.reddit.com/r/*.json http://www.reddit.com/r/*.json",
       'img-src': "'self' *",
       'style-src': "'self' 'unsafe-inline' https://*.googleapis.com",
       'frame-src': "'self' https://*.firebaseio.com"

      },
    firebase: 'https://peoples-trimet.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
