import Ember from 'ember';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('alert', params.alert_id);
  }

});
