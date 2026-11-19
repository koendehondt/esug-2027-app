import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Mobility Support"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/mobility.jpg" alt="" class="page-hero-image" />
      <LinkTo @route="promotion" class="page-back" aria-label="Back">
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
    <h1>Mobility Support</h1>

    <p>
      ESUG wants to support the mobility of students who want to be in contact
      with research labs working with Smalltalk. ESUG offers five grants of
      1000,00&nbsp;€ per year to students who want to do an internship in a lab
      working with Smalltalk.
    </p>

    <h2 class="page-section-heading">Conditions</h2>
    <p>Before taking a decision, ESUG needs the following information:</p>
    <ul>
      <li>The CV of the applicant, who must be a member of ESUG or of the Pharo
        Association</li>
      <li>A description of the hosting lab or team</li>
      <li>A short description of the context and of the work to be done by the
        student</li>
      <li>A short CV of the person who will supervise the student in the hosting
        lab</li>
    </ul>

    <h2 class="page-section-heading">After the Internship</h2>
    <p>
      At the end of the internship, ESUG wants an electronic document describing
      its results. This can be a simple report or a paper presented at a
      conference.
    </p>
  </article>

  {{outlet}}
</template>
