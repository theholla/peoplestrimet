import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('alert');
  },

  actions: {
    saveAlert(params) {
      var newAlert = this.store.createRecord('alert',params);
      newAlert.save();
    }
  }
});
