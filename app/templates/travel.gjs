import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Trip Information"}}

  <article class="page">
    <LinkTo @route="index" class="page-back">&larr; Back to home</LinkTo>
    <h1>Trip Information</h1>
    <p>
      Brussels is well connected internationally:
    </p>
    <ul>
      <li>By air, via Brussels Airport (BRU) or Brussels South Charleroi Airport
        (CRL)</li>
      <li>By train, via Eurostar or Thalys/high-speed rail into Brussels-Midi /
        Brussels-Zuid station</li>
      <li>By road, via Belgium's motorway network</li>
    </ul>
    <p>
      Detailed directions from the airport/station to the Vrije Universiteit
      Brussel campus will be added here.
    </p>
  </article>

  {{outlet}}
</template>
