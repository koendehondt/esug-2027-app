import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { concat } from '@ember/helper';
import ProgramSchedule from '../components/program-schedule';
import HomeTile from '../components/home-tile';

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

      {{! Editions archived before this section existed (2015-2026) have no
        `tiles` -- only the program below. From the edition this was
        introduced for onward, an archived year keeps its full set of
        conference-section tiles (Venue, City, Travel, ...), frozen at
        archive time -- see PROJECT-SUMMARY.md's "Archiving a conference
        edition" notes. }}
      {{#if @model.tiles}}
        <h2 class="page-section-heading">ESUG {{@model.year}}</h2>
        <section class="tile-grid" aria-label="ESUG {{@model.year}} sections">
          {{#each @model.tiles as |tile|}}
            <HomeTile @tile={{tile}} />
          {{/each}}
        </section>
      {{/if}}

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
