import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Hosting a Conference"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/host-a-conference.jpg"
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
    <h1>Hosting a Conference</h1>

    <p>
      If you would like to organise an ESUG conference, please send all the
      requested information below to
      <a
        href="mailto:esug-info@esug.org"
        class="talk-link"
      >esug-info@esug.org</a>.
    </p>

    <h2 class="page-section-heading">Local Organising Committee</h2>
    <p>
      To organise the conference we need at least three responsible people; this
      means people that publicly engage their names. Please provide their names,
      affiliation, emails, and responsibilities. Usually local user groups help
      for the organisation.
    </p>

    <h2 class="page-section-heading">Date and Location</h2>
    <ul>
      <li>Dates: When will you be able to host the conference. (1 week by the
        end of August or the beginning of September).</li>
      <li>The city and country where you plan to organise the event and how
        attractive is it.</li>
      <li>Travel information: How to reach the conference location and hotels by
        car, train, and plane. How far and how connected is the location from
        the main airports.</li>
    </ul>

    <h2 class="page-section-heading">Organisation Information and Prices</h2>
    <p>We also need the following information:</p>
    <ul>
      <li>Conference location: Rooms for talks and workshops big enough (usually
        about 100 people attend the conference), for free if possible</li>
      <li>Accommodation (hotels or so) for conference attendees. People pay for
        themselves. However, we need to have them all if possible in the same
        hotel or at least the same area as close as possible to the conference
        location.</li>
      <li>Accommodation for invited speakers, organisers and student volunteers.
        Note that for student volunteers we need really cheap rooms because ESUG
        pays for them.</li>
      <li>Network facilities: People should be able to access the net during the
        conference, so we can provide hubs and wireless but we need a
        connection.</li>
      <li>Catering: The conference registration covers coffee breaks (one in the
        morning and one in the afternoon) and lunches. Vegetarian meals should
        be available.</li>
      <li>Social events: One afternoon/evening of the conference will be
        dedicated to a social event. Note that you do not need to have a
        touristic event, it should be a social event: people should be able to
        communicate and talk together.</li>
      <li>Badges with various colours for conference attendees, student
        volunteers and organisers.</li>
      <li>Posters with the conference logo. To be put up in the area of the
        conference to help people find the conference location.</li>
      <li>T-shirts for conference participants with the conference logo. If you
        have good prices, this is better because this way we do not have to
        carry them from one country to the other. We can provide a logo if
        necessary.</li>
    </ul>
  </article>

  {{outlet}}
</template>
