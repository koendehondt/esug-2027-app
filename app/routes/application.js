import Route from '@ember/routing/route';
import { service } from '@ember/service';

// Routes that should reappear at the scroll position they were left at
// (e.g. going to a talk's detail page and back to the program shouldn't
// reset you to the top of the schedule). Every other route always opens
// at the top.
const RESTORABLE_ROUTES = ['index', 'program', 'esug2026-program'];

export default class ApplicationRoute extends Route {
  @service router;

  // This is a single-page app, so route transitions don't reload the page
  // and the browser/webview keeps whatever scroll position the previous
  // page was at.
  scrollPositions = new Map();

  constructor() {
    super(...arguments);

    this.router.on('routeWillChange', (transition) => {
      const fromName = transition.from?.name;
      if (fromName && RESTORABLE_ROUTES.includes(fromName)) {
        this.scrollPositions.set(fromName, window.scrollY);
      }
    });

    this.router.on('routeDidChange', (transition) => {
      const toName = transition.to?.name;
      const target = RESTORABLE_ROUTES.includes(toName)
        ? (this.scrollPositions.get(toName) ?? 0)
        : 0;

      // Wait a frame so the new template has actually rendered/painted
      // before we scroll, otherwise the page may not be tall enough yet
      // for the target position to take effect.
      requestAnimationFrame(() => window.scrollTo(0, target));
    });
  }
}
