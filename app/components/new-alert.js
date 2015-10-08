import Ember from 'ember';

export default Ember.Component.extend({
  addNewAlert: false,
  actions: {
    alertFormShow() {
      //function goes here
      this.set('alertFormShow',true);
    },
    saveAlert() {
      var params = {
        line: this.get('line'),
        issue: this.get('issue'),
        location: this.get('location'),
        active: true,
        time_added: moment().format('llll'),
        comments: [""]
      };
      this.set('alertFormShow',false);
      this.sendAction('saveAlert',params);
    }
  }
});
