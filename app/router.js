import EmberRouter from '@embroider/router';
import config from 'esug-2027-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('venue');
  this.route('city');
  this.route('travel');
  this.route('accommodation');
  this.route('call-for-presentations');
  this.route('workshop');
  this.route('award');
  this.route('showcase');
  this.route('registration');
  this.route('program');
  this.route('code-of-conduct');
  this.route('about-esug');
  this.route('membership-support');
  this.route('become-a-sponsor');
  this.route('sponsors');
  this.route('presentations');
  this.route('past-conferences');
  this.route('host-a-conference');
  this.route('archive', { path: '/archive/:year' });
  this.route('talk', { path: '/talk/:talk_id' });
});
