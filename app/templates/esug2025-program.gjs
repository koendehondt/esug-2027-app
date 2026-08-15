import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import ProgramSchedule from '../components/program-schedule';
import program2025 from '../data/program-2025';

<template>
  {{pageTitle "ESUG 2025 Program"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/esug2025-program.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo
        @route="esug2025"
        class="page-back"
        aria-label="ESUG 2025 Archive"
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
    <h1>ESUG 2025 Conference Program</h1>
    <p class="program-preview-intro">
      The full ESUG 2025 program &mdash; pick a day to see its sessions.
    </p>
    <ProgramSchedule @days={{program2025}} />
  </article>

  {{outlet}}
</template>
