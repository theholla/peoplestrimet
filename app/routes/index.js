import Ember from 'ember';
import Stopadapter from 'peoples-trimet/adapters/stops';

import delay from 'ember-delay/delay';

export default Ember.Route.extend({

  model: function() {
    var stops = Stopadapter.create();

    return Ember.RSVP.hash({
      alerts: this.store.find('alert', {
        orderBy: 'line'
        }),
      maxstops: stops.find().then(function(data) {
        return data.filterBy('location_type', '1');
        })

      })
    },

  alertDelay: function(alert) {
    return delay(10000).then(function() {
        alert.destroyRecord();
      });
  },

  actions: {
    saveAlert(params) {
      var newAlert = this.store.createRecord('alert',params);
      this.alertDelay(newAlert);
      newAlert.save();
    }
  }

});
