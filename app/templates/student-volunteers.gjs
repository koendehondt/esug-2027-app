import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Call for Student Volunteers"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/student-volunteers.jpg"
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
    <h1>Call for Student Volunteers</h1>
    <p class="page-notice">Applications are not open yet.</p>

    <p>
      ESUG is looking for student volunteers to help run the conference. Any
      newcomer to the community can apply, regardless of age, gender, or
      programming experience.
    </p>

    <h2 class="page-section-heading">What you get</h2>
    <ul>
      <li>
        A reduced conference registration fee of 30,00 € (instead of the regular
        650,00 €)
      </li>
      <li>
        Free accommodation during the isLoop summer school (3-5 July 2027) and
        the conference (6-9 July 2027)
      </li>
      <li>Lunch every day of the week and one dinner</li>
    </ul>

    <h2 class="page-section-heading">What we expect</h2>
    <p>Volunteers help with:</p>
    <ul>
      <li>Welcoming participants at registration</li>
      <li>Staffing the information desk</li>
      <li>Managing coffee breaks</li>
      <li>Collecting slides from speakers</li>
      <li>Handling microphones during discussions</li>
      <li>Helping out wherever needed</li>
    </ul>
    <p>
      Being a volunteer requires discipline and constant attention to the needs
      of the attendees.
    </p>

    <h2 class="page-section-heading">Accommodation</h2>
    <p>
      Volunteers are hosted at
      <LinkTo @route="accommodation" class="talk-link">Aparthotel Adagio Access
        Brussels Delta</LinkTo>, close to the
      <LinkTo @route="venue" class="talk-link">conference venue</LinkTo>. The
      final studio assignment depends on the number of accepted volunteers.
    </p>

    <h2 class="page-section-heading">isLoop summer school</h2>
    <p>
      <strong>Attending the isLoop summer school is mandatory for all
        volunteers.</strong>
      It runs from the Saturday to the Monday before the conference. The weekend
      covers the Pharo language and its ecosystem, object design, and
      contributing to open-source projects. The Monday is reserved for some
      final fun and for preparing the conference.
    </p>

    <h2 class="page-section-heading">How to apply</h2>
    <p>
      Fill in the isLoop student volunteer application form before the deadline.
      Places are limited.
    </p>

    <section class="registration-tier award-submission">
      <p class="registration-tier-deadline">Application deadline: 15 May 2027</p>
      {{! TODO: turn this into a link (<a href=... target="_blank" rel="noopener noreferrer">) once the isLoop 2027 application form is available }}
      <span class="registration-button">Apply as a volunteer</span>
    </section>

    <p>
      Once you are accepted, register for the conference through the ESUG
      registration site and pay the 30,00 € fee.
    </p>
    <p>
      If you are in a difficult financial situation, for example because you
      come from a low-income country, please email
      <a
        href="mailto:volunteers@esug.org"
        class="talk-link"
      >volunteers@esug.org</a>
      to ask for a further reduction or a waiver.
    </p>

    <div class="registration-tiers">
      <section class="registration-tier">
        <h2 class="registration-tier-title">Conference registration</h2>
        <p class="registration-tier-price">30,00&nbsp;&euro;</p>
        <p class="registration-tier-detail">for the full conference</p>
        <a
          href="https://registration.esug.org/ESUG"
          class="registration-button"
          target="_blank"
          rel="noopener noreferrer"
        >Register now</a>
      </section>
    </div>
  </article>

  {{outlet}}
</template>
