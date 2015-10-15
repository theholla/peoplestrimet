import Ember from 'ember';

export default Ember.Component.extend({
  viewLine: false,
  activeLine: null,
  actions: {
    viewAlerts() {
      this.set('viewLine',true);
    },
    hideAlerts() {
      this.set('viewLine',false);
    },
    viewYellow() {
      this.set('viewLine',true);
      this.set('activeLine',this.yellowalerts);
    },
    viewGreen() {
      this.set('viewLine',true);
      this.set('activeLine',this.greenalerts);
    },
    viewBlue() {
      this.set('viewLine',true);
      this.set('activeLine',this.bluealerts);
    },
    viewRed() {
      this.set('viewLine',true);
      this.set('activeLine',this.redalerts);
    },
    viewOrange() {
      this.set('viewLine',true);
      this.set('activeLine',this.orangealerts);
    }
  }


});
