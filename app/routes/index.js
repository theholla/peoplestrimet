import Ember from 'ember';
import Stopadapter from 'peoples-trimet/adapters/stops';

import delay from 'ember-delay/delay';

export default Ember.Route.extend({

  model: function() {
    var stops = Stopadapter.create();

    return Ember.RSVP.hash({
      alerts: this.store.findAll('alert', {
        orderBy: 'line'
        }),
      maxstops: stops.find().then(function(data) {
        return data.filterBy('location_type', '1');
      }),
      yellowalerts: this.store.findAll('alert').then(function(data){
        return data.filterBy('line','MAX Yellow Line');
      }),
      bluealerts: this.store.findAll('alert').then(function(data){
        return data.filterBy('line','MAX Blue Line');
      }),
      redalerts: this.store.findAll('alert').then(function(data){
        return data.filterBy('line','MAX Red Line');
      }),
      orangealerts: this.store.findAll('alert').then(function(data){
        return data.filterBy('line','MAX Orange Line');
      }),
      greenalerts: this.store.findAll('alert').then(function(data){
        return data.filterBy('line','MAX Green Line');
      })

    });
    },

  alertDelay: function(alert) {
    return delay(1000000).then(function() {
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
