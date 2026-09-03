import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';

function normalize(value) {
  return (value ?? '').toLowerCase();
}

// A presentation matches if every word of the query is found *somewhere*
// across its title, speaker(s), and year -- each word can come from a
// different field. Words are joined into one haystack per presentation and
// checked in a single pass, so a presentation that matches on more than one
// field (e.g. both its title and its year) still only appears once. Never
// filter title/speaker/year separately and concatenate the results -- that
// would show the same presentation more than once.
function matchesQuery(presentation, words) {
  const haystack = normalize(
    `${presentation.title} ${presentation.speaker} ${presentation.year}`,
  );
  return words.every((word) => haystack.includes(word));
}

export default class PresentationSearch extends Component {
  @tracked searchQuery = '';

  @action
  updateSearchQuery(event) {
    // Narrowing/widening the results list changes the page's height, and
    // can otherwise make the browser (WKWebView especially) reset the
    // scroll position to the top mid-reflow, even when the final,
    // fully-updated page is tall enough to stay right where you were.
    // Capture the scroll position now and reassert it once the DOM has
    // actually settled, the same way app/routes/application.js restores
    // scroll position across route transitions.
    const scrollY = window.scrollY;
    this.searchQuery = event.target.value;
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }

  get results() {
    const words = normalize(this.searchQuery).split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      return this.args.presentations;
    }

    return this.args.presentations.filter((presentation) =>
      matchesQuery(presentation, words),
    );
  }

  get resultCountLabel() {
    const count = this.results.length;
    return `${count} ${count === 1 ? 'presentation' : 'presentations'}`;
  }

  <template>
    <div class="presentation-search-filters">
      <label class="presentation-search-field">
        <span class="presentation-search-label">Search</span>
        <input
          type="search"
          placeholder="Search by title, speaker, or year&hellip;"
          autocorrect="off"
          autocapitalize="off"
          spellcheck="false"
          value={{this.searchQuery}}
          {{on "input" this.updateSearchQuery}}
        />
      </label>
    </div>

    <p class="presentation-search-count">{{this.resultCountLabel}}</p>

    {{#if this.results.length}}
      <ol class="presentation-result-list">
        {{#each this.results as |presentation|}}
          <li class="presentation-result">
            <div class="presentation-result-main">
              {{#if presentation.talkId}}
                <LinkTo
                  @route="talk"
                  @model={{presentation.talkId}}
                  class="presentation-result-title presentation-result-title-link"
                >{{presentation.title}}</LinkTo>
              {{else}}
                <span
                  class="presentation-result-title"
                >{{presentation.title}}</span>
              {{/if}}
              <span
                class="presentation-result-speaker"
              >{{presentation.speaker}}</span>
              <span class="presentation-result-meta">
                <span class="presentation-result-year">ESUG
                  {{presentation.year}}</span>
                &middot;
                <span class="presentation-result-datetime">
                  {{presentation.date}}
                  &middot;
                  {{presentation.time}}
                </span>
              </span>
            </div>
          </li>
        {{/each}}
      </ol>
    {{else}}
      <p class="page-notice">No presentations match your search.</p>
    {{/if}}
  </template>
}
