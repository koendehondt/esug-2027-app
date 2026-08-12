import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Call for Presentations"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <img
      src="/images/tiles/call-for-presentations.jpg"
      alt=""
      class="page-hero-image"
    />
    <h1>Call for Presentations</h1>
    <p class="page-notice">
      This section is not open yet. Submission guidelines and important dates
      will be published here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
