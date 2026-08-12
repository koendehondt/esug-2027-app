import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Technology Award"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <img src="/images/tiles/award.jpg" alt="" class="page-hero-image" />
    <h1>Technology Award Competition</h1>
    <p class="page-notice">
      Rules and submission dates for the Technology Award Competition will be
      published here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
