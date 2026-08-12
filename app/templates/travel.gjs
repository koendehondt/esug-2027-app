import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Trip Information"}}

  <article class="page">
    <LinkTo @route="index" class="page-back" aria-label="Home">
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
    <img src="/images/tiles/travel.jpg" alt="" class="page-hero-image" />
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
