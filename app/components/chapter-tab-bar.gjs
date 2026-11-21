import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { fn } from '@ember/helper';
import { chapterRoute } from 'esug-2027-app/data/chapters';

const eq = (a, b) => a === b;

// Outline icons on a 24x24 grid, drawn with the tab's text colour.
const ChapterIcon = <template>
  <svg
    class="chapter-tab-icon"
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    {{#if (eq @name "calendar")}}
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.5h.01M12 17.5h.01" />
    {{else if (eq @name "people")}}
      <circle cx="9" cy="8" r="3.25" />
      <path d="M3 19.5c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <circle cx="16.5" cy="9" r="2.5" />
      <path d="M16.5 14c2.6 0 4.5 1.8 4.5 4.5" />
    {{else if (eq @name "book")}}
      <path d="M12 6.5C10.3 5 7.8 4.5 4 4.5v14c3.8 0 6.3.5 8 2 1.7-1.5 4.2-2 8-2v-14c-3.8 0-6.3.5-8 2z" />
      <path d="M12 6.5v14" />
    {{else if (eq @name "archive")}}
      <rect x="3" y="4" width="18" height="4.5" rx="1" />
      <path d="M5 8.5V19a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 19V8.5" />
      <path d="M10 12.5h4" />
    {{else if (eq @name "info")}}
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.75" r="0.6" fill="currentColor" />
    {{/if}}
  </svg>
</template>;

// The bottom tab bar that switches between the app's chapters
// (app/data/chapters.js). The tab of the chapter the visitor is in stays
// highlighted on the pages inside that chapter, too.
export default class ChapterTabBar extends Component {
  @service router;
  @service chapters;

  href = (chapter) => {
    const { routeName, models } = chapterRoute(chapter);
    return this.router.urlFor(routeName, ...models);
  };

  @action
  select(chapter, event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return;
    }
    event.preventDefault();

    const { routeName, models } = chapterRoute(chapter);
    const onChapterPage = this.chapters.isChapterRoute(this.router.currentRouteName);

    if (onChapterPage && chapter === this.chapters.current) {
      // Tapping the tab of the chapter you're looking at scrolls it back to
      // the top, as in native tab bars.
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onChapterPage) {
      // Switching between chapters replaces the history entry, so the back
      // button/gesture doesn't walk through every tab you tapped.
      this.router.replaceWith(routeName, ...models);
    } else {
      this.router.transitionTo(routeName, ...models);
    }
  }

  <template>
    <nav class="chapter-tab-bar" aria-label="Chapters">
      {{#each this.chapters.all as |chapter|}}
        <a
          href={{this.href chapter}}
          class="chapter-tab {{if (eq chapter this.chapters.current) 'chapter-tab-current'}}"
          aria-current={{if (eq chapter this.chapters.current) "page"}}
          {{on "click" (fn this.select chapter)}}
        >
          <ChapterIcon @name={{chapter.icon}} />
          <span class="chapter-tab-label">{{chapter.tabLabel}}</span>
        </a>
      {{/each}}
    </nav>
  </template>
}
