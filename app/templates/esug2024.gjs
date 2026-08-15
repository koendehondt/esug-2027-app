import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import HomeTile from '../components/home-tile';

const exploreTiles = [
  {
    id: 'program',
    title: 'Conference Program',
    summary: 'Full ESUG 2024 schedule, abstracts, and presentations.',
    date: '',
    active: true,
    routeName: 'esug2024-program',
    image: '/images/tiles/esug2024-program.jpg',
  },
  {
    id: 'photos',
    title: 'Photos',
    summary: 'Conference photos from Lille.',
    date: '',
    active: false,
  },
];

<template>
  {{pageTitle "ESUG 2024 Archive"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/esug2024.jpg" alt="" class="page-hero-image" />
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
    <h1>ESUG 2024 Archive</h1>
    <p>
      Looking back on a great conference in Lille. Over time, this page will
      grow into a collection of the ESUG 2024 conference program with links to
      abstracts and presentations, photos, and more.
    </p>
    <p class="page-notice">
      This archive is just getting started &mdash; check back as more content is
      added.
    </p>

    <h2 class="page-section-heading">Explore</h2>
    <div class="page-tile-grid">
      {{#each exploreTiles as |tile|}}
        <HomeTile @tile={{tile}} />
      {{/each}}
    </div>
  </article>

  {{outlet}}
</template>
