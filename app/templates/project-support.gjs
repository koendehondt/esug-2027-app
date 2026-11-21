import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Support Your Project"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/project-support.jpg" alt="" class="page-hero-image" />
      <LinkTo @route="promotion" class="page-back" aria-label="Back">
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
    <h1>Support Your Project</h1>

    <p>
      ESUG used to support projects related to software development, teaching, lectures, conference presence and so on.
      This programme has ended.
    </p>

    <h2 class="page-section-heading">Past Supported Projects</h2>
    <ul>
      <li>Morphic 3 – Juan Vuletich</li>
      <li>DrGeo Scripting Syntax Extension – Hilaire Fernandes</li>
    </ul>
  </article>

  {{outlet}}
</template>
