import Ember from 'ember';
import {module, test} from 'qunit';
import { initialize } from 'writermortis/initializers/realtime-socket';

var container, application;

module('RealtimeSocketInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});

