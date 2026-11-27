import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { archiveYears } from '../data/archive';

// Every ESUG conference before the ones in app/data/archive/index.js that
// is not archived there yet. Conferences from 2005 onward (and 2003) have a
// logo; the others are shown as a year tile. A conference with an archive in
// this app links to it.
const OLDER_YEARS = [
  { year: 2014, city: 'Cambridge', country: 'England', logo: true },
  { year: 2013, city: 'Annecy', country: 'France', logo: true },
  { year: 2012, city: 'Ghent', country: 'Belgium', logo: true },
  { year: 2011, city: 'Edinburgh', country: 'UK', logo: true },
  { year: 2010, city: 'Barcelona', country: 'Spain', logo: true },
  { year: 2009, city: 'Brest', country: 'France', logo: true },
  { year: 2008, city: 'Amsterdam', country: 'The Netherlands', logo: true },
  { year: 2007, city: 'Lugano', country: 'Switzerland', logo: true },
  { year: 2006, city: 'Prague', country: 'Czech Republic', logo: true },
  { year: 2005, city: 'Brussels', country: 'Belgium', logo: true },
  { year: 2004, city: 'Köthen', country: 'Germany' },
  { year: 2003, city: 'Bled', country: 'Slovenia', logo: true },
  { year: 2002, city: 'Douai', country: 'France' },
  { year: 2001, city: 'Essen', country: 'Germany' },
  { year: 2000, city: 'Southampton', country: 'UK' },
  { year: 1999, city: 'Ghent', country: 'Belgium' },
  { year: 1998, city: 'Brescia', country: 'Italy' },
  { year: 1997, city: 'Sophia Antipolis', country: 'France' },
  { year: 1996, city: 'Lausanne', country: 'Switzerland' },
  { year: 1995, city: 'Utrecht', country: 'The Netherlands' },
  { year: 1994, city: 'Cork', country: 'Ireland' },
  { year: 1993, city: 'Brest', country: 'France' },
];

const conferenceTiles = [
  ...archiveYears.map((entry) => ({ ...entry, archived: true })),
  ...OLDER_YEARS.filter(({ year }) => !archiveYears.some((entry) => entry.year === year)).map(({ logo, ...entry }) => ({
    ...entry,
    logoImage: logo ? `/images/conference-logos/esug-${entry.year}.png` : undefined,
    archived: false,
  })),
].sort((a, b) => b.year - a.year);

const YearTileContent = <template>
  <span class="conference-tile-frame">
    <span class="conference-year-tile-year">{{@entry.year}}</span>
    <span class="conference-year-tile-location">{{@entry.city}}</span>
    <span class="conference-year-tile-location">{{@entry.country}}</span>
  </span>
</template>;

const LogoTileContent = <template>
  <span class="conference-tile-frame">
    <img
      src={{@entry.logoImage}}
      alt="ESUG {{@entry.year}}, {{@entry.city}}, {{@entry.country}}"
      class="conference-logo-image"
    />
  </span>
</template>;

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
      {{#each conferenceTiles as |entry|}}
        {{#if entry.logoImage}}
          {{#if entry.archived}}
            <LinkTo @route="archive" @model={{entry.year}} class="conference-logo-tile">
              <LogoTileContent @entry={{entry}} />
            </LinkTo>
          {{else}}
            <div class="conference-logo-tile"><LogoTileContent @entry={{entry}} /></div>
          {{/if}}
        {{else if entry.archived}}
          <LinkTo @route="archive" @model={{entry.year}} class="conference-year-tile">
            <YearTileContent @entry={{entry}} />
          </LinkTo>
        {{else}}
          <div class="conference-year-tile"><YearTileContent @entry={{entry}} /></div>
        {{/if}}
      {{/each}}
    </div>
  </article>
</template>
