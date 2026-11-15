import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { appVersion } from 'esug-2027-app/data/app-version';
import { Capacitor } from '@capacitor/core';

// The native apps link to the hosted copy, which opens in the system browser
// (like the app's other external links) rather than replacing the app's own
// WebView. The web build links to its own copy, served from public/.
const privacyPolicyUrl = Capacitor.isNativePlatform()
  ? 'https://d1rvuwcoi81v4t.cloudfront.net/privacy-policy.html'
  : '/privacy-policy.html';

<template>
  {{pageTitle "About the ESUG App"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/about-this-app.jpg"
        alt=""
        class="page-hero-image"
      />
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
    </div>
    <h1>About the ESUG App</h1>

    <p>
      The ESUG App puts everything about the European Smalltalk User Group
      conference in your pocket: the upcoming conference, ESUG itself, and the
      archives of past editions.
    </p>

    <h2 class="page-section-heading">Availability</h2>
    <p>
      The app is available for iOS and Android devices. Currently, it is
      available for testing on both.
    </p>

    <h2 class="page-section-heading">How was this app built?</h2>
    <p>
      This app was built entirely through "vibe coding" with Claude, an AI
      assistant from Anthropic. The app is a community project, so please be
      patient with rough edges.
    </p>

    <h2 class="page-section-heading">Where do the images come from?</h2>
    <p>
      Most images on the home page tiles and at the top of the pages were
      generated with ChatGPT. The other images come from these sources:
    </p>
    <ul>
      <li>Venue: photo of the VUB campus by Big Apple, from
        <a
          href="https://commons.wikimedia.org/wiki/File:VUB_campus_Etterbeek.JPG"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Wikimedia Commons</a>, licensed under
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >CC BY-SA 3.0</a>, resized.</li>
      <li>City Information: photo of the Atomium by o palsson, from
        <a
          href="https://commons.wikimedia.org/wiki/File:Atomium_Belgium_1.jpg"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Wikimedia Commons</a>, licensed under
        <a
          href="https://creativecommons.org/licenses/by/2.0/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >CC BY 2.0</a>, resized.</li>
      <li>Trip Information: photo of Eurostar trains at Brussels-South by
        Oxyman, from
        <a
          href="https://commons.wikimedia.org/wiki/File:Eurostar_at_Brussels_Midi-Zuid.jpg"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Wikimedia Commons</a>, licensed under
        <a
          href="https://creativecommons.org/licenses/by-sa/3.0/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >CC BY-SA 3.0</a>, resized.</li>
      <li>Accommodation: map based on Google Maps satellite imagery
        (©&nbsp;Google), annotated with the walking route to the venue.</li>
      <li>Conference logos: the organising committees of the respective
        conferences.</li>
      <li>Award medals: the Innovation Technology Awards pages on esug.org.</li>
      <li>Sponsor logos: the respective sponsors.</li>
    </ul>

    <h2 class="page-section-heading">Where does the data come from?</h2>
    <p>
      The data comes from the ESUG archives: the conference pages on esug.org,
      the presentation archive, and the recordings from past conferences. It was
      collected and processed largely by AI, so mistakes are possible.
    </p>

    <h2 class="page-section-heading">Spotted a mistake, found a bug, or have an
      idea?</h2>
    <p>
      If you notice an error in the data, run into a bug, or want to propose an
      improvement, please
      <a href="mailto:koen@all-objects-all-the-time.st" class="talk-link">send
        an email</a>.
    </p>

    <h2 class="page-section-heading">Privacy</h2>
    <p>
      The app does not collect any personal information. Read the
      <a
        href={{privacyPolicyUrl}}
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >privacy policy</a>
      for details.
    </p>

    <h2 class="page-section-heading">Version</h2>
    <p>{{appVersion}}</p>
  </article>
</template>
