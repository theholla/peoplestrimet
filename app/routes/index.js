import Ember from 'ember';
import delay from 'ember-delay/delay';

export default Ember.Route.extend({

  model: function() {
    return this.store.find('alert', {
      orderBy: 'line'
    });
  },

  alertDelay: function(alert) {
    return delay(7200000).then(function() {
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
