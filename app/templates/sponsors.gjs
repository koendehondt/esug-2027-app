import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import {
  platinumSponsors,
  goldSponsors,
  silverSponsors,
} from 'esug-2027-app/data/sponsors';

<template>
  {{pageTitle "Sponsors"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/sponsors.jpg" alt="" class="page-hero-image" />
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
    <h1>Sponsors</h1>

    <h2 class="page-section-heading">Platinum Sponsors</h2>
    {{#if platinumSponsors.length}}
      <div class="sponsor-logo-grid">
        {{#each platinumSponsors as |sponsor|}}
          <a
            href={{sponsor.url}}
            class="sponsor-logo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={{sponsor.logo}}
              alt={{sponsor.name}}
              class="sponsor-logo sponsor-logo-platinum"
            />
          </a>
        {{/each}}
      </div>
    {{else}}
      <p class="page-notice">Platinum sponsors will be announced here.</p>
    {{/if}}

    <h2 class="page-section-heading">Golden Sponsors</h2>
    {{#if goldSponsors.length}}
      <div class="sponsor-logo-grid">
        {{#each goldSponsors as |sponsor|}}
          <a
            href={{sponsor.url}}
            class="sponsor-logo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={{sponsor.logo}}
              alt={{sponsor.name}}
              class="sponsor-logo sponsor-logo-gold"
            />
          </a>
        {{/each}}
      </div>
    {{else}}
      <p class="page-notice">Golden sponsors will be announced here.</p>
    {{/if}}

    <h2 class="page-section-heading">Silver Sponsors</h2>
    {{#if silverSponsors.length}}
      <div class="sponsor-logo-grid">
        {{#each silverSponsors as |sponsor|}}
          <a
            href={{sponsor.url}}
            class="sponsor-logo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={{sponsor.logo}}
              alt={{sponsor.name}}
              class="sponsor-logo sponsor-logo-silver"
            />
          </a>
        {{/each}}
      </div>
    {{else}}
      <p class="page-notice">Silver sponsors will be announced here.</p>
    {{/if}}
  </article>

  {{outlet}}
</template>
