import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Venue"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
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
