import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('participant-viewer', 'ParticipantViewerComponent', {
  // specify the other units that are required for this test
  needs: ['component:gravatar-image', 'component:user-icon']
});

var User = Ember.Object.extend();
var participant = User.create({id: '1'});


test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject({participant: participant, activeAuthorId: 1});
  assert.equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  assert.equal(component._state, 'inDOM');
});

test('#isActive when author is active', function(assert) {
  var component = this.subject({participant: participant, activeAuthorId: 1});
  assert.equal(component.get('isActive'), "active");
});

test('#isActive when author is not active', function(assert) {
  var component = this.subject({participant: participant, activeAuthorId: 2});
  assert.equal(component.get('isActive'), '');
});
