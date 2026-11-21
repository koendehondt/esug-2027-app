import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service scrollRestoration;

  // This is a single-page app, so route transitions don't reload the page
  // and the browser/webview would otherwise keep whatever scroll position
  // the previous page was at. See app/services/scroll-restoration.js.
  constructor() {
    super(...arguments);
    this.scrollRestoration.setup();
  }
}
