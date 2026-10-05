import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import currentEdition from '../data/current-edition';

<template>
  {{pageTitle "IWST"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/workshop.jpg" alt="" class="page-hero-image" />
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
    <h1>International Workshop on Smalltalk Technologies</h1>

    <p>
      The goal of the workshop is to create a forum around contributions and
      experiences in building or using technologies related to Smalltalk. While
      maturity of presented ideas and results is not crucial, it is expected
      that their presentation triggers discussion and exchange of ideas. A paper
      can cover any aspect of Smalltalk, theoretical or practical. Authors are
      invited to submit research articles or industrial papers.
    </p>
    <p>
      Please refer to the
      <a
        href="https://conf.researchr.org/accessDenied/iwst-2027/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >IWST website</a>
      for information on the workshop.
    </p>

    <h2 class="page-section-heading">Important dates</h2>
    <p>
      <strong>Abstract submission deadline:</strong>
      14 March
      {{currentEdition.year}}
      AoE.
    </p>
    <p>
      <strong>Paper submission deadline:</strong>
      16 May
      {{currentEdition.year}}
      AoE.
    </p>
  </article>

  {{outlet}}
</template>
