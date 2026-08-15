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
  this.route('call-for-presentations');
  this.route('workshop');
  this.route('award');
  this.route('showcase');
  this.route('registration');
  this.route('program');
  this.route('esug2026');
  this.route('esug2026-program');
  this.route('esug2025');
  this.route('esug2025-program');
  this.route('esug2024');
  this.route('esug2024-program');
  this.route('esug2023');
  this.route('esug2023-program');
  this.route('esug2022');
  this.route('esug2022-program');
  this.route('talk', { path: '/talk/:talk_id' });
});
