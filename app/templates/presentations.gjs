import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import PresentationSearch from '../components/presentation-search';

<template>
  {{pageTitle "Presentation Archive"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/presentations.jpg" alt="" class="page-hero-image" />
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
    <h1>Presentation Archive</h1>
    <p>
      Search every ESUG presentation from 1993 to today by title, speaker, or year. The years 2001 to 2003 are not in
      the archive yet. More conferences will be added here as they happen.
    </p>

    <PresentationSearch @presentations={{@model}} />
  </article>

  {{outlet}}
</template>
