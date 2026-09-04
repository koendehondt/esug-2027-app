import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Trip Information"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/travel.jpg" alt="" class="page-hero-image" />
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
    <h1>Trip Information</h1>
    <p>
      Brussels is well connected internationally:
    </p>
    <ul>
      <li>By air, via Brussels Airport (BRU) or Brussels South Charleroi Airport
        (CRL)</li>
      <li>By train, via Eurostar into Brussels-Midi / Brussels-Zuid station</li>
      <li>By road, via Belgium's motorway network</li>
    </ul>

    <h2 class="page-section-heading">By air</h2>
    <p>
      <strong>Brussels Airport (BRU)</strong>, in Zaventem, is the main gateway
      and sits about 12&nbsp;km northeast of the city centre.
      <strong>Brussels South Charleroi Airport (CRL)</strong>
      is a lower-cost alternative roughly 50&nbsp;km south of Brussels, mainly
      served by budget carriers.
    </p>

    <h3 class="page-subsection-heading">Reaching the centre of Brussels</h3>
    <p>
      <strong>By train</strong>
      — From Brussels Airport, direct trains run from the station beneath the
      terminal to Brussels-North, Brussels-Central and Brussels-South/Midi.
      There are up to 4-6 trains per hour, and the journey to Brussels-Central
      takes about 17-18 minutes. A one-way ticket costs around €11, which
      includes the mandatory airport supplement; buy it via the
      <a
        href="https://www.belgiantrain.be/en"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >SNCB/NMBS website or app</a>, at a station kiosk, or at baggage reclaim.
      From Charleroi Airport, the
      <a
        href="https://www.flibco.com/en/shuttle/bus-brussels-charleroi-airport"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Flibco</a>
      shuttle bus runs directly to Brussels-Midi/Zuid, taking roughly 55-75
      minutes depending on traffic.
    </p>
    <p>
      <strong>By taxi</strong>
      — Official metered taxis (such as Taxis Verts) wait at ranks just outside
      arrivals at Brussels Airport. The ride to the centre takes about 20-30
      minutes and typically costs around €35-50; pre-booked private transfers
      cost more. Taxis are also available at Charleroi Airport, though given the
      distance most travellers take the Flibco shuttle instead.
    </p>
    <p>
      <strong>By other means</strong>
      — The
      <a
        href="https://www.stib-mivb.be/travel/other-mobility-solutions/airport-line"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >STIB/MIVB Airport Line</a>
      (bus 12 on weekdays, bus 21 evenings and weekends) links Brussels Airport
      to the Schuman and Trône/Troon metro stations. De Lijn bus 471 also runs
      from the airport to Brussels-North station, more slowly but at a lower
      cost. Car rental desks are available at both airports for those who prefer
      to drive in.
    </p>

    <h2 class="page-section-heading">By train</h2>
    <p>
      International high-speed trains arrive at
      <strong>Brussels-Midi/Zuid</strong>
      station, which connects onward to the rest of the city via SNCB domestic
      trains, the metro and trams.
    </p>
    <p>
      <a
        href="https://www.eurostar.com"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Eurostar</a>
      (which now also operates the former Thalys routes) runs direct trains from
      London St Pancras (about 2 hours, with border checks completed before
      boarding), Paris Gare du Nord (about 1h20), and Amsterdam Centraal (about
      1h50-2h). Cologne is served by both Eurostar and Deutsche Bahn ICE trains
      (about 1h45-2h).
    </p>

    <h2 class="page-section-heading">By road</h2>
    <p>
      Brussels is encircled by the ring road (R0), which connects to the E40
      (from Cologne/Aachen or Ghent/Ostend), E19 (from Antwerp/the Netherlands
      or Mons/Paris), E411 (from Luxembourg/Namur) and E429 (from Tournai/Lille)
      motorways. Belgian motorways are toll-free for passenger cars, but from 1
      May 2027 a digital road vignette is expected to become mandatory for all
      cars and vans, for both Belgian and foreign drivers; this should be
      checked closer to the conference dates. The ring road and approach
      motorways can be congested on weekdays between roughly 7:30-9:30 and
      16:00-19:00, so travelling outside those windows is recommended.
    </p>

    <p>
      Journey times, frequencies and prices above are indicative and should be
      reconfirmed closer to the conference. For directions from Brussels-Midi,
      the airports, or the city centre to the
      <LinkTo @route="venue">VUB campus itself</LinkTo>, see the Venue page.
    </p>
  </article>

  {{outlet}}
</template>
