import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import ProgramSchedule from '../components/program-schedule';
import program2027Preview from '../data/program-2027-preview';

<template>
  {{pageTitle "Program"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/program.jpg" alt="" class="page-hero-image" />
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
    <h1>Conference Program</h1>
    <p class="page-notice">
      The full conference program is not published yet. The schedule of talks,
      workshops, and events will be added here once confirmed.
    </p>

    <h2 class="program-preview-heading">What to expect</h2>
    <p class="program-preview-intro">
      While the 2027 lineup is being decided, here's the shape of a typical ESUG
      day &mdash; breaks, lunch, and events. Pick a day to see it.
    </p>
    <ProgramSchedule @days={{program2027Preview}} />
  </article>

  {{outlet}}
</template>
