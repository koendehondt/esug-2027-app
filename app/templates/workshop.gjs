import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "IWST"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <h1>International Workshop on Smalltalk Technologies</h1>
    <p class="page-notice">
      Details about IWST 2027, co-located with ESUG, will be published here once
      confirmed.
    </p>
  </article>

  {{outlet}}
</template>
