import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('alert', {path: '/alert/:alert_id'});
  this.resource('subreddit', {path: '/r/:subreddit_id'});
  this.route('route-directions', {});
});

export default Router;
