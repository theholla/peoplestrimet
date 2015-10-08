import Ember from 'ember';

export default Ember.Component.extend({
  addNewAlert: false,
  selectedLine: "",
  lines: [
  {lineName: "MAX Blue Line"},
  {lineName: "MAX Red Line"},
  {lineName: "MAX Green Line"},
  {lineName: "MAX Orange Line"},
  {lineName: "MAX Yellow Line"}
],

  actions: {
    alertFormShow() {
      this.set('addNewAlert',true);
    },
    saveAlert() {
      var params = {
        line: this.get('selectedLine'),
        issue: this.get('issue'),
        location: this.get('location'),
        active: true,
        time_added: moment().format('llll'),
        comments: [""]
      };
      this.set('addNewAlert',false);
      this.sendAction('saveAlert',params);
    }
  }
});
