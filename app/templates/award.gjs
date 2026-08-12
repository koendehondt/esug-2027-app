import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Technology Award"}}

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
    <img src="/images/tiles/award.jpg" alt="" class="page-hero-image" />
    <h1>Technology Award Competition</h1>
    <p class="page-notice">
      Rules and submission dates for the Technology Award Competition will be
      published here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
