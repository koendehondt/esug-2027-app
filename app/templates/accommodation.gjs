import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Accommodation"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/accommodation.jpg"
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
    <h1>Accommodation</h1>
    <p class="page-notice">
      Recommended hotels and booking information for ESUG 2027 will be published
      here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
