import Service, { service } from '@ember/service';
import { chapterRoute } from '../data/chapters';

const STORAGE_KEY = 'esug-scroll-restoration';

// Decides where the page is scrolled after each route transition:
//
// - following a link (a tile, a talk in the program, ...) always opens the
//   new page at the top;
// - going back or forward through history (browser buttons, the iOS swipe
//   gesture, Android's back button) returns to the exact position that
//   history entry was left at.
//
// Positions are remembered per *history entry*, not per route or URL: the
// Ember HistoryLocation gives every entry it pushes a unique `uuid` in
// `history.state`, so two visits to /archive/2015 (or /archive/2015 and
// /archive/2016, which share the "archive" route) never share a position.
//
// A traversal is recognised in `routeWillChange`: on a popstate the browser
// has already switched `history.state` to the destination entry, whereas
// for a link transition Ember only pushes the new URL at the very end of the
// transition (just before `routeDidChange`).
//
// The in-app "back" arrows (`a.page-back`) are LinkTo links, but they mean
// "go back". When one points at the page the visitor actually came from, it
// is turned into `history.back()`, so it restores the previous position and
// leaves history in the same state as the system back button would.
//
// The state is kept in sessionStorage so a reload of the web build still
// restores positions for the entries of the current tab.
export default class ScrollRestorationService extends Service {
  @service router;
  @service chapters;

  // history entry key -> { url, previousKey, scrollY }
  entries = new Map();
  currentKey = null;
  isTraversal = false;

  setup() {
    if ('scrollRestoration' in window.history) {
      // We restore positions ourselves; the browser's own restoration would
      // fight with ours (and runs before the new page has rendered).
      window.history.scrollRestoration = 'manual';
    }

    this.restore();

    this.router.on('routeWillChange', (transition) => this.routeWillChange(transition));
    this.router.on('routeDidChange', (transition) => this.routeDidChange(transition));

    // Capture phase, so this runs before LinkTo's own click handler.
    document.addEventListener('click', (event) => this.handleBackLinkClick(event), true);
    window.addEventListener('pagehide', () => this.rememberCurrentPosition());
  }

  routeWillChange(transition) {
    if (!transition.from || this.currentKey === null) {
      return;
    }

    this.rememberCurrentPosition();

    if (entryKey() !== this.currentKey) {
      this.isTraversal = true;
    }
  }

  routeDidChange(transition) {
    const key = entryKey();
    const isInitial = !transition.from || this.currentKey === null;
    const known = this.entries.get(key);

    let target = 0;
    if (known && (this.isTraversal || isInitial)) {
      // Back/forward, or a reload of an entry we already know.
      target = known.scrollY ?? 0;
    } else if (key !== this.currentKey) {
      this.entries.set(key, {
        url: currentURL(),
        previousKey: isInitial ? null : this.currentKey,
        scrollY: 0,
      });
    }

    this.currentKey = key;
    this.isTraversal = false;
    this.persist();

    // Wait a frame so the new template has actually rendered/painted
    // before we scroll, otherwise the page may not be tall enough yet
    // for the target position to take effect.
    requestAnimationFrame(() => window.scrollTo(0, target));
  }

  handleBackLinkClick(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest?.('a.page-back');
    if (!link) {
      return;
    }

    const previous = this.entries.get(this.entries.get(this.currentKey)?.previousKey);
    const href = new URL(link.href, window.location.href);
    const target = href.pathname + href.search;
    if (previous && previous.url === target) {
      event.preventDefault();
      event.stopPropagation();
      window.history.back();
      return;
    }

    // Back arrows to "home" mean "back to the chapter this page is in"
    // (see app/services/chapters.js): go back if that's where the visitor
    // came from, otherwise open that chapter.
    if (this.chapters.useChapters && target === this.router.urlFor('index')) {
      const { routeName, models } = chapterRoute(this.chapters.current);
      const chapterURL = this.router.urlFor(routeName, ...models);
      if (previous?.url === chapterURL) {
        event.preventDefault();
        event.stopPropagation();
        window.history.back();
      } else if (chapterURL !== target) {
        event.preventDefault();
        event.stopPropagation();
        this.router.transitionTo(routeName, ...models);
      }
    }
  }

  rememberCurrentPosition() {
    const entry = this.entries.get(this.currentKey);
    if (entry) {
      entry.scrollY = window.scrollY;
      this.persist();
    }
  }

  restore() {
    try {
      const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) ?? '[]');
      this.entries = new Map(stored);
    } catch {
      this.entries = new Map();
    }
  }

  persist() {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...this.entries]));
    } catch {
      // Storage unavailable (private mode, quota): positions still work for
      // this session, they just don't survive a reload.
    }
  }
}

function entryKey() {
  return window.history.state?.uuid ?? `url:${currentURL()}`;
}

function currentURL() {
  return window.location.pathname + window.location.search;
}
