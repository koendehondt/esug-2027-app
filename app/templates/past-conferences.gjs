import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { archiveYears } from '../data/archive';

// Conferences from 2005 onward have a logo. Those with an archive in this
// app (app/data/archive/index.js) link to it; the others are plain images
// until their archive is added (see DECISIONS.md). 2004 and older are the
// year tiles further down.
const OLDER_LOGO_YEARS = [
  { year: 2014, city: 'Cambridge', country: 'England' },
  { year: 2013, city: 'Annecy', country: 'France' },
  { year: 2012, city: 'Gent', country: 'Belgium' },
  { year: 2011, city: 'Edinburgh', country: 'UK' },
  { year: 2010, city: 'Barcelona', country: 'Spain' },
  { year: 2009, city: 'Brest', country: 'France' },
  { year: 2008, city: 'Amsterdam', country: 'The Netherlands' },
  { year: 2007, city: 'Lugano', country: 'Switzerland' },
  { year: 2006, city: 'Prague', country: 'Czech Republic' },
  { year: 2005, city: 'Brussels', country: 'Belgium' },
];

const logoTiles = [
  ...archiveYears.map((entry) => ({ ...entry, archived: true })),
  ...OLDER_LOGO_YEARS.filter(({ year }) => !archiveYears.some((entry) => entry.year === year)).map((entry) => ({
    ...entry,
    logoImage: `/images/conference-logos/esug-${entry.year}.png`,
    archived: false,
  })),
].sort((a, b) => b.year - a.year);

<template>
  {{pageTitle "Past Conferences"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/past-conferences.jpg" alt="" class="page-hero-image" />
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
    <h1>Past Conferences</h1>

    <p>
      Since 1993, the International Smalltalk Conference is organised by ESUG every year, with tutorials, workshops and
      demonstrations on various subjects.
    </p>

    <p>
      The slides of the presentations at past ESUG conferences are available in the
      <a href="https://archive.esug.org" class="talk-link" target="_blank" rel="noopener noreferrer">ESUG Archive</a>.
      Conferences that have an archive in this app are linked below.
    </p>

    <div class="conference-logo-grid">
      {{#each logoTiles as |entry|}}
        {{#if entry.archived}}
          <LinkTo @route="archive" @model={{entry.year}} class="conference-logo-tile">
            <span class="conference-tile-frame">
              <img
                src={{entry.logoImage}}
                alt="ESUG {{entry.year}}, {{entry.city}}, {{entry.country}}"
                class="conference-logo-image"
              />
            </span>
          </LinkTo>
        {{else}}
          <div class="conference-logo-tile">
            <span class="conference-tile-frame">
              <img
                src={{entry.logoImage}}
                alt="ESUG {{entry.year}}, {{entry.city}}, {{entry.country}}"
                class="conference-logo-image"
              />
            </span>
          </div>
        {{/if}}
      {{/each}}
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">2004</span>
          <span class="conference-year-tile-location">Koethen</span>
          <span class="conference-year-tile-location">Germany</span>
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2003.png"
            alt="ESUG 2003, Bled, Slovenia"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">2002</span>
          <span class="conference-year-tile-location">Douai</span>
          <span class="conference-year-tile-location">France</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">2001</span>
          <span class="conference-year-tile-location">Essen</span>
          <span class="conference-year-tile-location">Germany</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">2000</span>
          <span class="conference-year-tile-location">Southampton</span>
          <span class="conference-year-tile-location">UK</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1999</span>
          <span class="conference-year-tile-location">Gent</span>
          <span class="conference-year-tile-location">Belgium</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1998</span>
          <span class="conference-year-tile-location">Brescia</span>
          <span class="conference-year-tile-location">Italy</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1997</span>
          <span class="conference-year-tile-location">Sophia-Antipolis</span>
          <span class="conference-year-tile-location">France</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1996</span>
          <span class="conference-year-tile-location">Lausanne</span>
          <span class="conference-year-tile-location">Switzerland</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1995</span>
          <span class="conference-year-tile-location">Utrecht</span>
          <span class="conference-year-tile-location">The Netherlands</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1994</span>
          <span class="conference-year-tile-location">Cork</span>
          <span class="conference-year-tile-location">Ireland</span>
        </span>
      </div>
      <div class="conference-year-tile">
        <span class="conference-tile-frame">
          <span class="conference-year-tile-year">1993</span>
          <span class="conference-year-tile-location">Brest</span>
          <span class="conference-year-tile-location">France</span>
        </span>
      </div>
    </div>
  </article>
</template>
