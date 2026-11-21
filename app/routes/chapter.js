import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { chapterById, homeChapter } from '../data/chapters';

export default class ChapterRoute extends Route {
  @service router;
  @service programScheduleState;
  @service chapters;

  model({ chapter_id }) {
    return chapterById(chapter_id);
  }

  afterModel(chapter) {
    // Unknown chapter, the home chapter under its /chapters/ URL, or no
    // chapters on this device (the home page shows them all).
    if (!chapter || chapter === homeChapter || !this.chapters.useChapters) {
      this.router.replaceWith('index');
    }
  }

  activate() {
    // The archive page's back arrow points at "home"; the chapters service
    // and scroll-restoration send it back to this chapter.
    this.programScheduleState.archiveEntryRoute = 'index';
  }
}
