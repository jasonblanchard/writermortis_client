/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'writermortis',
    environment: environment,
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
    ENV.writermortisRealtimeHost = 'http://localhost:5001'
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
    ENV.writermortisRealtimeHost = 'https://writermortis-realtime.herokuapp.com'
  }

  if (environment === 'test') {
    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    }
  } else {
    ENV['simple-auth-devise'] = {
      serverTokenEndpoint: 'api/v1/users/sign_in'
    };
  }

  ENV['simple-auth'] = {
    crossOriginWhitelist: ['http://localhost:3000'],
    authorizer: 'simple-auth-authorizer:devise',
    routeAfterAuthentication: 'stories'
  };

  return ENV;
};
