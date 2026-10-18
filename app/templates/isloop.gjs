import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import currentEdition from '../data/current-edition';

<template>
  {{pageTitle "isLoop"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/isloop.jpg" alt="" class="page-hero-image" />
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
    <h1>International School on Live Object-Oriented Programming</h1>

    <p>
      isLoop is a three-day, hands-on summer school on
      <a
        href="https://pharo.org/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Pharo</a>
      and live object-oriented programming.
    </p>
    <p>
      You learn by doing: short lectures, plenty of practice and continuous
      feedback. The focus is on understanding how objects, tools and the live
      environment work together. Whether you’re new to Pharo or already an
      experienced developer, you’ll leave with new skills, better habits and new
      connections in the community.
    </p>
    <p>
      Please refer to the
      <a
        href="https://isloop.pharo.org/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >isLoop website</a>
      for information on the summer school.
    </p>

    <h2 class="page-section-heading">Important dates</h2>
    <p>
      <strong>Registration deadline:</strong>
      15 May
      {{currentEdition.year}}
    </p>
    <p>Places are limited, so register early.</p>
  </article>

  {{outlet}}
</template>
