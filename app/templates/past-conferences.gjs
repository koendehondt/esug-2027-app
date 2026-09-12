import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Past Conferences"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/past-conferences.jpg"
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
    <h1>Past Conferences</h1>

    <p>
      Since 1993, the International Smalltalk Conference is organised by ESUG
      every year, with tutorials, workshops and demonstrations on various
      subjects.
    </p>

    <p>
      Conferences from 2015 onward that have an archive in this app are linked
      below.
    </p>

    <div class="conference-logo-grid">
      <LinkTo @route="esug2026" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2026.png"
            alt="ESUG 2026, Plovdiv, Bulgaria"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2025" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2025.png"
            alt="ESUG 2025, Gdansk, Poland"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2024" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2024.png"
            alt="ESUG 2024, Lille, France"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2023" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2023.png"
            alt="ESUG 2023, Lyon, France"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2022" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2022.png"
            alt="ESUG 2022, Novi Sad, Serbia"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2019" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2019.png"
            alt="ESUG 2019, Cologne, Germany"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2018" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2018.png"
            alt="ESUG 2018, Cagliari, Italy"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2017" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2017.png"
            alt="ESUG 2017, Maribor, Slovenia"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2016" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2016.png"
            alt="ESUG 2016, Prague, Czech Republic"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <LinkTo @route="esug2015" class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2015.png"
            alt="ESUG 2015, Brescia, Italy"
            class="conference-logo-image"
          />
        </span>
      </LinkTo>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2014.png"
            alt="ESUG 2014, Cambridge, England"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2013.png"
            alt="ESUG 2013, Annecy, France"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2012.png"
            alt="ESUG 2012, Gent, Belgium"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2011.png"
            alt="ESUG 2011, Edinburgh, UK"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2010.png"
            alt="ESUG 2010, Barcelona, Spain"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2009.png"
            alt="ESUG 2009, Brest, France"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2008.png"
            alt="ESUG 2008, Amsterdam, The Netherlands"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2007.png"
            alt="ESUG 2007, Lugano, Switzerland"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2006.png"
            alt="ESUG 2006, Prague, Czech Republic"
            class="conference-logo-image"
          />
        </span>
      </div>
      <div class="conference-logo-tile">
        <span class="conference-tile-frame">
          <img
            src="/images/conference-logos/esug-2005.png"
            alt="ESUG 2005, Brussels, Belgium"
            class="conference-logo-image"
          />
        </span>
      </div>
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
