import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Venue"}}

  <article class="page">
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
    <img src="/images/tiles/venue.jpg" alt="" class="page-hero-image" />
    <h1>Conference Venue</h1>
    <p>
      ESUG 2027 will be hosted at the
      <strong>Vrije Universiteit Brussel (VUB)</strong>, Pleinlaan 2, 1050
      Brussels, Belgium.
    </p>
    <p>
      Building and room information, campus maps, and accessibility details will
      be added here closer to the conference.
    </p>
  </article>

  {{outlet}}
</template>
