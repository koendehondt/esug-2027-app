import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Venue"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/venue.jpg" alt="" class="page-hero-image" />
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
    <h1>Conference Venue</h1>
    <p>
      ESUG 2027 will be hosted at the
      <strong>Vrije Universiteit Brussel (VUB)</strong>, Pleinlaan 2, 1050
      Brussels, Belgium.
    </p>
    <h2 class="page-section-heading">Rooms</h2>
    <p>
      The auditoriums are located on floor 0 of buildings D and E, an
      underground floor. The reception desk is in the hallway of both buildings,
      on the same floor.
    </p>
    <ul class="venue-room-list">
      <li>
        <strong>isLoop 2027</strong>, 3-5 July 2027
        <span class="venue-room-detail">Auditorium
          <strong>E.0.05</strong>
          (100 places)</span>
      </li>
      <li>
        <strong>ESUG 2027</strong>, 6-9 July 2027
        <span class="venue-room-detail">Auditorium
          <strong>D.0.07</strong>
          (140 places)</span>
      </li>
      <li>
        <strong>IWST 2027</strong>, 6 &amp; 8 July 2027
        <span class="venue-room-detail">Auditorium
          <strong>E.0.05</strong>
          (100 places)</span>
      </li>
    </ul>
    <h2 class="page-section-heading">Campus Map</h2>
    <p>
      General information about the VUB main campus is available on the
      <a
        href="https://www.vub.be/en/about-vub/faculties-institutes-and-campuses/our-campuses/vub-main-campus-brussels/campus-map"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >VUB website</a>.
    </p>
    <p>
      <a
        href="https://www.vub.be/sites/default/files/2025-10/ENGLISH_Campus_plan_Main_Campus_Etterbeek_A3_01-10-2025.pdf"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Download the campus map (PDF)</a>, which also includes accessibility
      information for trains, trams, buses, and metro stations.
    </p>
    <p>
      You can also find your way around campus with
      <a
        href="https://use.mazemap.com/#v=1&config=vub&zlevel=2&center=4.395244,50.821980&zoom=17.2&campusid=2114"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >MazeMap</a>.
    </p>
    <h2 class="page-section-heading">Reaching the VUB campus</h2>
    <p>
      You can use
      <a
        href="https://www.google.com/maps/search/vub+etterbeek/@50.821511,4.394628,91m"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Google Maps</a>
      to find the best route to the VUB campus.
    </p>
    <h3 class="page-subsection-heading">By metro</h3>
    <p>Details will be added here soon.</p>
    <h3 class="page-subsection-heading">By tram</h3>
    <p>Details will be added here soon.</p>
    <h3 class="page-subsection-heading">By bus</h3>
    <p>Details will be added here soon.</p>
    <h3 class="page-subsection-heading">By train</h3>
    <p>Details will be added here soon.</p>
    <h3 class="page-subsection-heading">By car</h3>
    <p>Details will be added here soon.</p>
  </article>

  {{outlet}}
</template>
