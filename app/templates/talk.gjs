import Component from '@glimmer/component';
import { service } from '@ember/service';
import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

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

export default class TalkTemplate extends Component {
  @service programScheduleState;

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
            >Download the slides (PDF)</a>
          </p>
        {{/if}}

        <p class="talk-source-note">
          From the ESUG 2026 program, reproduced here as a preview of what a
          typical ESUG talk looks like.
        </p>
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
