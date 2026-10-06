import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import committeeChairs from 'esug-2027-app/data/organising-committee';

<template>
  {{pageTitle "Organising Committee"}}

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
    <h1>Organising Committee</h1>
    <p class="page-notice">
      Not all chairs have been selected yet. Jane Doe and John Doe are
      placeholders.
    </p>

    <div class="committee-chairs">
      {{#each committeeChairs as |chair|}}
        <section class="committee-chair">
          <h2 class="committee-chair-title">{{chair.title}}</h2>
          <ul class="committee-chair-names">
            {{#each chair.names as |person|}}
              <li>
                <span class="committee-chair-name">{{person.name}}</span>
                {{#if person.organisation}}
                  <span
                    class="committee-chair-affiliation"
                  >{{person.organisation}}</span>
                {{/if}}
                {{#if person.country}}
                  <span
                    class="committee-chair-affiliation"
                  >{{person.country}}</span>
                {{/if}}
              </li>
            {{/each}}
          </ul>
        </section>
      {{/each}}
    </div>
  </article>

  {{outlet}}
</template>
