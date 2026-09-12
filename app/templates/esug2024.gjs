import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import ProgramSchedule from '../components/program-schedule';
import program2024 from '../data/program-2024';

<template>
  {{pageTitle "ESUG 2024 Archive"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/esug2024.jpg" alt="" class="page-hero-image" />
      <LinkTo @route={{@model.backRoute}} class="page-back" aria-label="Back">
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
    <h1>ESUG 2024 Archive</h1>
    <p>Looking back on a great conference in Lille.</p>

    <h2 class="page-section-heading">Conference Program</h2>
    <p class="program-preview-intro">
      The full ESUG 2024 program &mdash; pick a day to see its sessions.
    </p>
    <ProgramSchedule @days={{program2024}} />
  </article>

  {{outlet}}
</template>
