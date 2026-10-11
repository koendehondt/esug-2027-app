import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

// Shown when a page's data fails to load (e.g. an archived conference's
// data, fetched on demand by app/services/archive.js). Ember renders this
// in place of the page whose model hook failed.
<template>
  {{pageTitle "Something went wrong"}}

  <article class="page">
    <h1>Something went wrong</h1>
    <p class="page-notice">
      This page could not be loaded. Please check your internet connection and
      try again.
    </p>
    <p><LinkTo @route="index">Back to the home page</LinkTo></p>
  </article>
</template>
