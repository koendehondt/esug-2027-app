import { pageTitle } from 'ember-page-title';
import HomeTile from 'esug-2027-app/components/home-tile';
import tiles, { archiveTiles } from 'esug-2027-app/data/home-tiles';

<template>
  {{pageTitle "ESUG 2027"}}

  <header class="site-header">
    <span class="site-header-tagline-main">Get ready for</span>
    <img
      src="/images/esug-2027-logo.png"
      alt="ESUG 2027 - European Smalltalk User Group, Brussels, Belgium"
      class="site-logo"
    />
    <p class="site-header-tagline">
      <span class="site-header-tagline-sub">Brussels, 6-9 July 2027</span>
    </p>
  </header>

  <section class="tile-grid" aria-label="Conference sections">
    {{#each tiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>

  <h2 class="home-section-heading">Past conferences</h2>
  <section class="tile-grid" aria-label="Past conferences">
    {{#each archiveTiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>
</template>
