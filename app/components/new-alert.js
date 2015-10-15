import Ember from 'ember';

export default Ember.Component.extend({
  addNewAlert: false,
  selectedLine: "",
  lines: [
  {lineName: "Choose MAX Line"},
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
        location: this.get('selectedStop.stop_name'),
        active: true,
        time_added: moment().format('llll'),
        latitude: this.get('selectedStop.stop_lat'),
        longitude:this.get('selectedStop.stop_lon')
      };
      this.set('addNewAlert',false);
      this.sendAction('saveAlert',params);
    }
  }
});
