import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { appVersion } from 'esug-2027-app/data/app-version';

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
      The app will be available for iOS and Android devices. Currently, it is
      available for testing on iOS devices only.
    </p>

    <h2 class="page-section-heading">How was this app built?</h2>
    <p>
      This app was built entirely through "vibe coding" with Claude, an AI
      assistant from Anthropic. The images were generated with ChatGPT. The app
      is a community project and has not been through a traditional development
      process, so please be patient with rough edges.
    </p>

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

    <h2 class="page-section-heading">Version</h2>
    <p>{{appVersion}}</p>
  </article>
</template>
