import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import ProgramSchedule from '../components/program-schedule';
import program2026 from '../data/program-2026';

// The shared program-2026.js data labels its day pills with the ESUG 2027
// calendar dates (Tue 6 - Fri 9 July 2027), since that data is reused as a
// preview on the 2027 Conference Program page. This archive page shows the
// same session content but under the real ESUG 2026 dates (Tue 7 - Fri 10
// July 2026), so the day labels are remapped here rather than in the
// shared data file.
const ARCHIVE_DAY_LABELS = ['Tue 7', 'Wed 8', 'Thu 9', 'Fri 10'];
const program2026Archive = program2026.map((day, index) => ({
  ...day,
  label: ARCHIVE_DAY_LABELS[index],
}));

<template>
  {{pageTitle "ESUG 2026 Program"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/esug2026-program.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo
        @route="esug2026"
        class="page-back"
        aria-label="ESUG 2026 Archive"
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
    <h1>ESUG 2026 Conference Program</h1>
    <p class="program-preview-intro">
      The full ESUG 2026 program &mdash; pick a day to see its sessions.
    </p>
    <ProgramSchedule @days={{program2026Archive}} />
  </article>

  {{outlet}}
</template>
