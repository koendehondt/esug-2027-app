import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import committeeChairs from 'esug-2027-app/data/organising-committee';

<template>
  {{pageTitle "Conference Organising Committee"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/organising-committee.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo @route="index" class="page-back" aria-label="Home">
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
    </div>
    <h1>Conference Organising Committee</h1>
    <p class="page-notice">
      The chairs for each role have not been selected yet. The names below are
      placeholders.
    </p>

    <div class="committee-chairs">
      {{#each committeeChairs as |chair|}}
        <section class="committee-chair">
          <h2 class="committee-chair-title">{{chair.title}}</h2>
          <ul class="committee-chair-names">
            {{#each chair.names as |name|}}
              <li>{{name}}</li>
            {{/each}}
          </ul>
        </section>
      {{/each}}
    </div>
  </article>

  {{outlet}}
</template>
