import Ember from 'ember';
import Stopadapter from 'peoples-trimet/adapters/stops';


export default Ember.Route.extend({

  model: function() {
    var stops = Stopadapter.create();

    return Ember.RSVP.hash({
      alerts: this.store.find('alert', {
        orderBy: 'line'
        }),
      maxstops: stops.find().then(function(data) {
        return data.filterBy('location_type', '1');
        })

      })
    },

  actions: {
    saveAlert(params) {
      var newAlert = this.store.createRecord('alert',params);
      newAlert.save();
    }
  }

});
