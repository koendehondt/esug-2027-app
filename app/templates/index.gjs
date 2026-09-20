import { pageTitle } from 'ember-page-title';
import { concat } from '@ember/helper';
import HomeTile from 'esug-2027-app/components/home-tile';
import tiles, {
  appTiles,
  archiveTiles,
  conferencesTiles,
  esugTiles,
} from 'esug-2027-app/data/home-tiles';
import currentEdition from 'esug-2027-app/data/current-edition';

<template>
  {{pageTitle (concat "ESUG " currentEdition.year)}}

  <header class="site-header">
    <span class="site-header-tagline-main">Get ready for</span>
    <img
      src="/images/esug-{{currentEdition.year}}-logo.png"
      alt="ESUG {{currentEdition.year}} - European Smalltalk User Group,
        {{currentEdition.city}}, {{currentEdition.country}}"
      class="site-logo"
    />
    <p class="site-header-tagline">
      <span class="site-header-tagline-sub">{{currentEdition.city}},
        {{currentEdition.dates}}</span>
    </p>
  </header>

  <section class="tile-grid" aria-label="Conference sections">
    {{#each tiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>

  <h2 class="home-section-heading">ESUG</h2>
  <section class="tile-grid" aria-label="ESUG">
    {{#each esugTiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>

  <h2 class="home-section-heading">Conferences</h2>
  <section class="tile-grid" aria-label="Conferences">
    {{#each conferencesTiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>

  <h2 class="home-section-heading">Conference Archives</h2>
  <section class="tile-grid" aria-label="Archives">
    {{#each archiveTiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>

  <h2 class="home-section-heading">About this App</h2>
  <section class="tile-grid" aria-label="About this App">
    {{#each appTiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>
</template>
