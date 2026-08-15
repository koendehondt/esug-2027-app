import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "City Information"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/city.jpg" alt="" class="page-hero-image" />
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
