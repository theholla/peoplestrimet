import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
      return this.store.find('alert', {
          orderBy: 'line'
      });
  },

  actions: {
    saveAlert(params) {
      var newAlert = this.store.createRecord('alert',params);
      newAlert.save();
    }
  }
});
