import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Show Us Your Project"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/showcase.jpg" alt="" class="page-hero-image" />
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
    <h1>Show Us Your Project</h1>
    <p class="page-notice">Registration is not open yet.</p>

    <p>
      On 7 July 2027, you can do a mini-presentation, a demo, or both, but it
      should take 10 minutes max!
    </p>
    <p>Please keep in mind that the number of demonstrations is limited.</p>

    <section class="registration-tier award-submission">
      <p class="registration-tier-deadline">Submission deadline: 2 July 2027</p>
      {{! TODO: turn this into a link (<a href=... target="_blank" rel="noopener noreferrer">) once the registration site is available }}
      <span class="registration-button">Register your demo</span>
    </section>
  </article>

  {{outlet}}
</template>
