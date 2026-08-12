import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Registration"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <img src="/images/tiles/registration.jpg" alt="" class="page-hero-image" />
    <h1>Conference Registration</h1>
    <p class="page-notice">
      Registration is not open yet. Pricing and the registration form will be
      published here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
