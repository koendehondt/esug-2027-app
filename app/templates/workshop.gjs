import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "IWST"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/workshop.jpg" alt="" class="page-hero-image" />
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
    <h1>International Workshop on Smalltalk Technologies</h1>
    <p class="page-notice">
      Details about IWST 2027, co-located with ESUG, will be published here once
      confirmed.
    </p>
  </article>

  {{outlet}}
</template>
