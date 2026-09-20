import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Technology Award"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/award.jpg" alt="" class="page-hero-image" />
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
    <h1>Technology Award Competition</h1>
    <p class="page-notice">Submission is not open yet.</p>

    <p>At ESUG 2027, we organise the 22nd Innovation Technology awards.</p>
    <p>
      Have you developed a cool Smalltalk project you want to share? Developers
      of any Smalltalk-based software can participate.
    </p>

    <p>
      On Tuesday, 6 July 2027, participants will demonstrate their projects in a
      session where the conference attendees vote. A vote consists of providing
      a top 3 of the favourite demonstrated projects.
    </p>
    <p>
      The results of the vote will be announced at the Awards ceremony during
      the social event.
    </p>
    <p>
      The top 3 teams with the most innovative software will receive a
      certificate and financial prizes.
    </p>

    <div class="award-prizes">
      <section class="registration-tier award-prize">
        <img
          src="/images/awards/award-gold.png"
          alt="Gold medal"
          class="award-prize-medal"
        />
        <p class="registration-tier-price">500,00&nbsp;&euro;</p>
      </section>
      <section class="registration-tier award-prize">
        <img
          src="/images/awards/award-silver.png"
          alt="Silver medal"
          class="award-prize-medal"
        />
        <p class="registration-tier-price">300,00&nbsp;&euro;</p>
      </section>
      <section class="registration-tier award-prize">
        <img
          src="/images/awards/award-bronze.png"
          alt="Bronze medal"
          class="award-prize-medal"
        />
        <p class="registration-tier-price">200,00&nbsp;&euro;</p>
      </section>
    </div>

    <section class="registration-tier award-submission">
      <p class="registration-tier-deadline">Submission deadline: 2 July 2027</p>
      <a
        href="https://app.apptivegrid.de/api/r/684145e69cb3a3a01af31d8f/68652ebe2d7a85cbedf53eb1/BDOmRVrRfuAzfyGa0wADzayepgs79IoG80P499maX34GsvRtXt3"
        class="registration-button"
        target="_blank"
        rel="noopener noreferrer"
      >Submit now</a>
    </section>
    <p>
      Before the conference, approved projects will be listed here. After we
      announce the winners at the social event, we will list the winners and all
      entries here.
    </p>
  </article>

  {{outlet}}
</template>
