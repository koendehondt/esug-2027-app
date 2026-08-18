import Component from '@glimmer/component';
import { service } from '@ember/service';
import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { Capacitor } from '@capacitor/core';

const RichParagraph = <template>
  <p>
    {{#each @runs as |run|}}
      {{#if run.url}}
        <a
          href={{run.url}}
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >{{run.text}}</a>
      {{else}}
        {{run.text}}
      {{/if}}
    {{/each}}
  </p>
</template>;

// Maps the program route a talk was reached from to the note shown at the
// bottom of the talk page, since this same template serves the ESUG 2027
// Conference Program preview (which reproduces the 2026 program) as well as
// each past conference's own archived program.
const SOURCE_NOTES = {
  'esug2026-program': 'From the ESUG 2026 program.',
  'esug2025-program': 'From the ESUG 2025 program.',
  'esug2024-program': 'From the ESUG 2024 program.',
  'esug2023-program': 'From the ESUG 2023 program.',
  'esug2022-program': 'From the ESUG 2022 program.',
};
const DEFAULT_SOURCE_NOTE =
  'From the ESUG 2026 program, reproduced here as a preview of what a typical ESUG talk looks like.';

export default class TalkTemplate extends Component {
  @service programScheduleState;

  get sourceNote() {
    return (
      SOURCE_NOTES[this.programScheduleState.lastProgramRoute] ??
      DEFAULT_SOURCE_NOTE
    );
  }

  // The native iOS/Android app wraps a WKWebView/WebView that YouTube's
  // embedded player doesn't reliably work inside of (embed requests get
  // rejected, "Error 153"), so the native app links out to YouTube instead
  // of embedding inline. The web build embeds normally, since that works
  // fine in a real browser.
  get isNativePlatform() {
    return Capacitor.isNativePlatform();
  }

  get videoThumbnailUrl() {
    return `https://img.youtube.com/vi/${this.args.model.videoId}/hqdefault.jpg`;
  }

  get videoWatchUrl() {
    return `https://www.youtube.com/watch?v=${this.args.model.videoId}`;
  }

  <template>
    {{pageTitle (if @model.title @model.title "Talk")}}

    <article class="page">
      <div class="page-hero">
        <LinkTo
          @route={{this.programScheduleState.lastProgramRoute}}
          class="page-back"
          aria-label="Back to program"
        >
          <span class="page-back-icon">
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><path d="M15 6l-6 6 6 6" /></svg>
          </span>
        </LinkTo>

        {{#if @model.title}}
          <div class="page-hero-text">
            <h1>{{@model.title}}</h1>
            {{#if @model.presenter}}
              <p class="talk-presenter">{{@model.presenter}}</p>
            {{/if}}
          </div>
        {{/if}}
      </div>

      {{#if @model.title}}
        {{#if @model.abstractParagraphs.length}}
          <h2 class="talk-section-heading">Abstract</h2>
          {{#each @model.abstractParagraphs as |runs|}}
            <RichParagraph @runs={{runs}} />
          {{/each}}
        {{/if}}

        {{#if @model.bioParagraphs.length}}
          <h2 class="talk-section-heading">{{if
              @model.hasMultiplePresenters
              "About the speakers"
              "About the speaker"
            }}</h2>
          {{#each @model.bioParagraphs as |runs|}}
            <RichParagraph @runs={{runs}} />
          {{/each}}
        {{/if}}

        {{#if @model.presentationUrl}}
          <h2 class="talk-section-heading">Presentation</h2>
          <p>
            <a
              href={{@model.presentationUrl}}
              class="talk-link"
              target="_blank"
              rel="noopener noreferrer"
            >Download the slides</a>
          </p>
        {{/if}}

        {{#if @model.videoId}}
          <h2 class="talk-section-heading">Video</h2>
          {{#if this.isNativePlatform}}
            {{! The app's native WebView can't reliably play a YouTube embed
              (see the class comment on isNativePlatform above), so link out
              to YouTube instead of embedding inline. }}
            <a
              href={{this.videoWatchUrl}}
              class="talk-video-wrapper talk-video-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch the video on YouTube"
            >
              <img
                src={{this.videoThumbnailUrl}}
                alt=""
                class="talk-video-thumbnail"
              />
              <span class="talk-video-play-icon">
                <svg viewBox="0 0 68 48" width="68" height="48">
                  <path
                    d="M66.5 7.7c-.8-2.9-2.5-5.1-5.4-5.9C55.8.2 34 .2 34 .2s-21.8 0-27.1 1.6c-2.9.8-4.6 3-5.4 5.9C.2 12.9.2 24 .2 24s0 11.1 1.3 16.3c.8 2.9 2.5 5.1 5.4 5.9C12.2 47.8 34 47.8 34 47.8s21.8 0 27.1-1.6c2.9-.8 4.6-3 5.4-5.9C67.8 35.1 67.8 24 67.8 24s0-11.1-1.3-16.3z"
                    fill="rgba(0,0,0,0.6)"
                  /><path d="M27 34l18-10-18-10z" fill="#fff" />
                </svg>
              </span>
            </a>
          {{else}}
            <div class="talk-video-wrapper">
              <iframe
                src="https://www.youtube-nocookie.com/embed/{{@model.videoId}}"
                title="{{@model.title}} - video recording"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          {{/if}}
        {{/if}}

        <p class="talk-source-note">{{this.sourceNote}}</p>
      {{else}}
        <p class="page-notice">
          We couldn't find that talk. It may have moved &mdash;
          <LinkTo @route={{this.programScheduleState.lastProgramRoute}}>head
            back to the program</LinkTo>.
        </p>
      {{/if}}
    </article>

    {{outlet}}
  </template>
}
