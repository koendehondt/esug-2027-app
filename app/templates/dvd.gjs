import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Smalltalk DVD"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/dvd.jpg" alt="" class="page-hero-image" />
      <LinkTo @route="past-actions" class="page-back" aria-label="Back">
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
    <h1>Smalltalk DVD</h1>

    <p>
      In August 2008, ESUG assembled a DVD-ROM with Smalltalk systems, books and
      tutorials: over 4&nbsp;GB of Smalltalk!
    </p>

    <h2 class="page-section-heading">Smalltalk Systems</h2>
    <p>
      The DVD contains the following Smalltalk systems, as trial, full or
      non-commercial versions:
    </p>
    <ul>
      <li>VisualWorks NC</li>
      <li>VisualAge Smalltalk</li>
      <li>Dolphin Smalltalk</li>
      <li>Smalltalk/X</li>
      <li>GNU Smalltalk</li>
      <li>F-Script</li>
      <li>Squeak 3.9 and 3.10, Pharo, Croquet and Sophie</li>
      <li>Scratch and BotsInc</li>
      <li>Demos of Plopp3D and Buccaneer</li>
      <li>Ambrai Smalltalk</li>
      <li>GemStone</li>
      <li>Strongtalk (with VM source code)</li>
      <li>Self</li>
    </ul>

    <h2 class="page-section-heading">Books and More</h2>
    <p>
      The DVD also includes free out-of-print books, tutorials, lectures,
      columns and articles about Smalltalk, and more.
    </p>
  </article>

  {{outlet}}
</template>
