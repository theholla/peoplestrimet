import DS from 'ember-data';

export default DS.Model.extend({
  line: DS.attr(),
  time: DS.attr(),
  active: DS.attr(),
  issue: DS.attr(),
  location: DS.attr(),
  comments: DS.attr()
});
