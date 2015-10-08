import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveAlert(params) {
      var newAlert = this.store.createRecord('alert',params);
      newAlert.save();
      this.transitionTo('index');
    }
  }
});
