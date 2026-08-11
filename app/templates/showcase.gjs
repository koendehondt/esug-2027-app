import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Show Us Your Project"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <h1>Show Us Your Project</h1>
    <p class="page-notice">
      Details on how to present your Smalltalk project to the community will be
      published here once confirmed.
    </p>
  </article>

  {{outlet}}
</template>
