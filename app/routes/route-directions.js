import Ember from 'ember';
import Routedirectionadapter from 'peoples-trimet/adapters/routedirections';
import Stopadapter from 'peoples-trimet/adapters/stops';


export default Ember.Route.extend({

  model() {
    var adapter = Routedirectionadapter.create();
    var stops = Stopadapter.create();
    return Ember.RSVP.hash({
      north: adapter.find().then(function(routes) {
        return routes.filterBy('direction_id','0');
      }),
      south: adapter.find().then(function(routes) {
        return routes.filterBy('direction_id','1');
      }),
      maxstops: stops.find().then(function(data) {
        return data.filterBy('location_type', '1');
      })
    });
  }
});
