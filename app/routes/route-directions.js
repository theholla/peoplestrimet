import Ember from 'ember';
import Routedirectionadapter from 'peoples-trimet/adapters/routedirections';

export default Ember.Route.extend({
  model: function() {
    var adapter = Routedirectionadapter.create();
    return adapter.find();
  }
});
