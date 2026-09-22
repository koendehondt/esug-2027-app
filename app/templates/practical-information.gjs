import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Practical Information"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/practical-information.jpg"
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
    <h1>Practical Information</h1>
    <p class="page-notice">
      This information is not complete yet. Details will be added here as they
      are confirmed. Maps will be added.
    </p>

    <h2 class="page-section-heading">Rooms and reception desk</h2>
    <p>
      The auditoriums are located on floor 0 of buildings D and E, an
      underground floor. The reception desk is in the hallway of both buildings,
      on the same floor.
    </p>
    <p>
      Enter building D from the esplanade and take the stairs to the lower
      floor. On the left side in the hallway, you will find the reception desk.
    </p>
    <p>
      On your first day of the conference, please go to the reception desk to
      collect your badge.
    </p>
    <p>
      The auditorium for
      <strong>ESUG 2027</strong>
      is
      <strong>D.0.07</strong>, on the right side of the hallway.
    </p>
    <p>
      The auditorium for
      <strong>isLoop 2027</strong>
      and
      <strong>IWST 2027</strong>
      is
      <strong>E.0.05</strong>. Follow the signs at the end of the hallway.
    </p>

    <h2 class="page-section-heading">Toilets</h2>
    <p>
      The toilets are located behind the stairs. Walk past the stairs on floor 0
      to find them.
    </p>

    <h2 class="page-section-heading">Breakfast</h2>
    <p>
      If you don't have breakfast at your hotel, you can eat in the cafeteria at
      the VUB restaurant.
    </p>

    <h2 class="page-section-heading">Coffee breaks</h2>
    <p>
      Coffee breaks are served in the hallway. Coffee and other drinks are
      available throughout the day.
    </p>

    <h2 class="page-section-heading">Lunches</h2>
    <p>
      During
      <strong>ESUG 2027</strong>, lunches are served in the VUB restaurant. When
      exiting building D at the esplanade, you will see the restaurant on your
      right, on the opposite side of the esplanade.
    </p>
    <p>Together with your badge, you will receive 4 lunch vouchers.</p>

    <div class="lunch-menu">
      <section class="lunch-menu-day">
        <h3 class="lunch-menu-day-title">Tuesday, 6 July</h3>
        <p class="lunch-menu-day-placeholder">Menu to be announced.</p>
      </section>
      <section class="lunch-menu-day">
        <h3 class="lunch-menu-day-title">Wednesday, 7 July</h3>
        <p class="lunch-menu-day-placeholder">Menu to be announced.</p>
      </section>
      <section class="lunch-menu-day">
        <h3 class="lunch-menu-day-title">Thursday, 8 July</h3>
        <p class="lunch-menu-day-placeholder">Menu to be announced.</p>
      </section>
      <section class="lunch-menu-day">
        <h3 class="lunch-menu-day-title">Friday, 9 July</h3>
        <p class="lunch-menu-day-placeholder">Menu to be announced.</p>
      </section>
    </div>

    <h2 class="page-section-heading">Wifi</h2>
    <p>Details about wifi will be added here.</p>

    <h2 class="page-section-heading">Green campus</h2>
    <p>
      The VUB campus is green. You can walk around and explore the paths between
      the buildings.
    </p>
    <p>Several areas have benches where you can enjoy the summer outdoors.</p>

    <h2 class="page-section-heading">Cafés on campus</h2>
    <p>
      <strong>Bar Buna</strong>
      is a cozy coffee and snack bar on the esplanade between buildings D and E
      where you can go for a cup of coffee with breakfast, a quick bite, and
      homemade pastries. Open Monday to Friday, 7:30 to late afternoon.
    </p>
    <p>
      <strong>'t Complex</strong>
      offers breakfasts, lunches, and more. Open Monday to Friday, 11:00 to
      23:30.
    </p>
    <p>
      <strong>Bar Pilar</strong>
      is an atmospheric campus pub with a terrace serving drinks, light snacks,
      and lunch. Open Monday to Friday, 11:00 to 23:00.
    </p>

    <h2 class="page-section-heading">Swimming pool</h2>
    <p>
      The VUB swimming pool is open to the public. Find all details on the
      <a
        href="https://www.vub.be/en/services-vub-campuses-in-etterbeek-and-jette/sports-vub/vub-sports-activities-fitness-sports-and-games/vub-pool"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >website of the swimming pool</a>.
    </p>
  </article>

  {{outlet}}
</template>
