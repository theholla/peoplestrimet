import Ember from 'ember';

export default Ember.Component.extend({
  viewLine: false,
  actions: {
    viewAlerts() {
      this.set('viewLine',true);
    }
  }


});
