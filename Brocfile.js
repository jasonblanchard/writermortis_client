/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp({
  'ember-cli-bootstrap-sass': {
    'importBootstrapJS': true,
    'components': false,
  },
  'fingerprint': {
    prepend: 'https://s3.amazonaws.com/writermortis-production/'
  }
});

app.import('bower_components/socket.io-client/socket.io.js');
app.import('bower_components/materialize/dist/css/materialize.css');
app.import('bower_components/materialize/dist/js/materialize.js');
var materializeFonts = pickFiles('bower_components/materialize/font/material-design-icons', {
  srcDir: '/',
  files: [
    'Material-Design-Icons.eot',
    'Material-Design-Icons.svg',
    'Material-Design-Icons.ttf',
    'Material-Design-Icons.woff',
    'Material-Design-Icons.woff2'
  ],
  destDir: '/font/material-design-icons'
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = mergeTrees([
  app.toTree(),
  materializeFonts
]);
