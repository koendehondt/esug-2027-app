import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Capacitor } from '@capacitor/core';
import chapters, { chapterById, chapterForRoute, homeChapter } from '../data/chapters';

// Keeps track of the chapter (see app/data/chapters.js) the visitor is in,
// so the tab bar can highlight it -- also on the pages inside a chapter --
// and the in-app back arrows to "home" can return to that chapter.
//
// Chapters and the tab bar are for mobile devices only (`useChapters`):
// the native apps, and phones/tablets in a browser (touch screen) or any
// narrow window. Elsewhere the home page shows every chapter's tiles as
// sections, as before.
const MOBILE_QUERY = '(max-width: 767px), (pointer: coarse)';

export default class ChaptersService extends Service {
  @service router;

  @tracked current = homeChapter;
  @tracked useChapters = false;

  all = chapters;

  constructor() {
    super(...arguments);

    if (Capacitor.isNativePlatform()) {
      this.useChapters = true;
    } else {
      const mobile = window.matchMedia(MOBILE_QUERY);
      this.useChapters = mobile.matches;
      mobile.addEventListener('change', () => (this.useChapters = mobile.matches));
    }

    this.router.on('routeDidChange', () => this.update());
    this.update();
  }

  update() {
    const route = this.router.currentRoute;
    if (!route) {
      return;
    }

    let chapter;
    if (route.name === 'index') {
      chapter = homeChapter;
    } else if (route.name === 'chapter') {
      chapter = chapterById(route.params.chapter_id);
    } else {
      chapter = chapterForRoute(route.name);
    }

    if (chapter && chapter !== this.current) {
      this.current = chapter;
    }
  }

  isChapterRoute(routeName) {
    return routeName === 'index' || routeName === 'chapter';
  }
}
