import { pageTitle } from 'ember-page-title';
import { concat } from '@ember/helper';
import currentEdition from '../data/current-edition';

<template>
  {{pageTitle (concat "ESUG " currentEdition.year)}}

  {{outlet}}
</template>
