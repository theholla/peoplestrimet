import Ember from 'ember';
import SubredditAdapter from 'peoples-trimet/adapters/subreddit';

export default Ember.Route.extend({
  model: function() {
    var adapter = SubredditAdapter.create();
    return adapter.find();
  }


});
