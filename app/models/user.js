import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr('string'),
  pieces: DS.hasMany('piece'),
  stories: DS.hasMany('story')
});
