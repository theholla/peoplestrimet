import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function() {
    return ajax("/maxstops.json");
  }

});
