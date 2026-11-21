import { pageTitle } from 'ember-page-title';
import HomeTile from 'esug-2027-app/components/home-tile';

<template>
  {{pageTitle @model.title}}

  <header class="chapter-header">
    <h1 class="chapter-title">{{@model.title}}</h1>
  </header>

  <section class="tile-grid" aria-label={{@model.title}}>
    {{#each @model.tiles as |tile|}}
      <HomeTile @tile={{tile}} />
    {{/each}}
  </section>
</template>
