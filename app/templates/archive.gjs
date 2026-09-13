import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { concat } from '@ember/helper';
import ProgramSchedule from '../components/program-schedule';

<template>
  {{pageTitle (concat "ESUG " @model.year " Archive")}}

  <article class="page">
    <div class="page-hero">
      <img src={{@model.heroImage}} alt="" class="page-hero-image" />
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

    {{#if @model.city}}
      <h1>ESUG {{@model.year}} Archive</h1>
      <p>Looking back on a great conference in {{@model.city}}.</p>

      <h2 class="page-section-heading">Conference Program</h2>
      <p class="program-preview-intro">
        The full ESUG
        {{@model.year}}
        program &mdash; pick a day to see its sessions.
      </p>
      <ProgramSchedule @days={{@model.program}} />
    {{else}}
      <h1>ESUG {{@model.year}} Archive</h1>
      <p class="page-notice">We couldn't find an archive for that year.</p>
    {{/if}}
  </article>

  {{outlet}}
</template>
