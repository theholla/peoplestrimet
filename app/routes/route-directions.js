import Ember from 'ember';
import Routedirectionadapter from 'peoples-trimet/adapters/routedirections';

export default Ember.Route.extend({
  // model: function() {
  //   var adapter = Routedirectionadapter.create();
  //   var allroutes = adapter.find();
  //   var northroutes = allroutes.filter(function(route){
  //     if(route.direction_id === '0') {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  //   return northroutes;
  // }

  model() {
    var adapter = Routedirectionadapter.create();
    return Ember.RSVP.hash({
      north: adapter.find().then(function(routes) {
        return routes.filterBy('direction_id','0');
      }),
      south: adapter.find().then(function(routes) {
        return routes.filterBy('direction_id','1');
      })
    });
  }
});
