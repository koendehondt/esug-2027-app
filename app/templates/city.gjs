import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "City Information"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <img src="/images/tiles/city.jpg" alt="" class="page-hero-image" />
    <h1>City Information</h1>
    <p>
      Brussels is the capital of Belgium and the de facto capital of the
      European Union. It's a compact, walkable, multilingual city known for its
      historic Grand Place, comic strip art, chocolate, beer, and a lively mix
      of cultures.
    </p>
    <p>
      Recommendations for things to see and do while in town will be added here.
    </p>
  </article>

  {{outlet}}
</template>
