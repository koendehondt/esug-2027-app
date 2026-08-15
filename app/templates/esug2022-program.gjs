import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "ESUG 2022 Program"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/esug2022-program.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo
        @route="esug2022"
        class="page-back"
        aria-label="ESUG 2022 Archive"
      >
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
    <h1>ESUG 2022 Conference Program</h1>
    <p class="page-notice">
      The full schedule, with links to abstracts and presentations, will be
      added here.
    </p>
  </article>

  {{outlet}}
</template>
