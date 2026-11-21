import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Smalltalk"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/smalltalk.jpg" alt="" class="page-hero-image" />
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
    <h1>Smalltalk</h1>

    <p>
      ESUG collects "Everything Smalltalk" in the
      <a href="https://archive.esug.org" class="talk-link" target="_blank" rel="noopener noreferrer">ESUG Archive</a>.
    </p>

    <h2 class="page-section-heading">Great Old Documents</h2>
    <p>
      The ESUG Archive also holds historical documents about Smalltalk, including PDFs of
      <a
        href="https://archive.esug.org/HistoricalDocuments/TheSmalltalkReport/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      ><em>The Smalltalk Report</em></a>.
    </p>

    <h2 class="page-section-heading">Smalltalk Book Anthology</h2>
    <p>
      ESUG has been collecting old Smalltalk books into an
      <a
        href="https://hal.science/SMALLTALK_ANTHOLOGY"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >anthology</a>. If you notice a missing book and have it in PDF or another format, please contact
      <a href="mailto:esug-info@esug.org" class="talk-link">esug-info@esug.org</a>.
    </p>
  </article>

  {{outlet}}
</template>
