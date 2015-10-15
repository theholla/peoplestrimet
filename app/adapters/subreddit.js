import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function() {
    return ajax("https://developer.trimet.org/ws/V1/arrivals/locIDs/4043,9343/json/true/appId/96C72501E65DBBA8C6BB7B3A1");

  }

});
