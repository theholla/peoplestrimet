import DS from 'ember-data';

export default DS.Model.extend({
  line: DS.attr(),
  active: DS.attr(),
  issue: DS.attr(),
  location: DS.attr(),
  time_added: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')

});
