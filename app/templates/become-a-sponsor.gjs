import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Become a Sponsor"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/become-a-sponsor.jpg"
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
    <h1>Become a Sponsor</h1>

    <p>
      The European Smalltalk User Group (ESUG) is active in the promotion and
      support of Smalltalk, the most productive OO language and environment
      available. The ESUG conference is a yearly event, attended by many leading
      OO developers from Europe and the US.
    </p>
    <p>
      The conference regularly attracts around 100 participants from many
      sectors &mdash; finance, commerce and academia. People say that they enjoy
      meeting fellow professionals and sharing experiences in an informal
      atmosphere.
    </p>
    <p>
      ESUG also promotes Smalltalk at universities around the world.
      Demonstrations have already been given at many universities in
      Switzerland, France and Belgium. Universities starting to teach Smalltalk
      are supported with the distribution of free Smalltalk software and books.
      Tutoring is also offered to speed up the introduction of the Smalltalk
      curriculum.
    </p>
    <p>
      By sponsoring ESUG, your company will be associated with the leading OO
      community &mdash; one that consistently attracts world-class players and
      offers exposure to many potential clients.
    </p>

    <h2 class="page-section-heading">Sponsorship Tiers</h2>
    <p>There are different types of sponsor packages:</p>
    <div class="sponsorship-tier-bands">
      <div class="sponsorship-tier sponsorship-tier-silver">
        <div class="sponsorship-tier-header">
          <h3 class="sponsorship-tier-name">Silver ESUG Sponsor</h3>
          <span class="sponsorship-tier-price">&euro;600<span
              class="sponsorship-tier-price-period"
            >/year</span></span>
        </div>
        <ul class="sponsorship-tier-benefits">
          <li>Your company/association logo displayed during the ESUG conference</li>
          <li>Recognised as a sponsor on
            <a
              href="https://esug.org/"
              class="talk-link"
              target="_blank"
              rel="noopener noreferrer"
            >our ESUG website</a></li>
          <li>Entitled to mention that you are an ESUG sponsor, and to use the
            ESUG logo in that context</li>
        </ul>
      </div>
      <div class="sponsorship-tier sponsorship-tier-gold">
        <div class="sponsorship-tier-header">
          <h3 class="sponsorship-tier-name">Golden ESUG Sponsor</h3>
          <span class="sponsorship-tier-price">&euro;1300<span
              class="sponsorship-tier-price-period"
            >/year</span></span>
        </div>
        <ul class="sponsorship-tier-benefits">
          <li>All Silver benefits</li>
          <li>Your logo featured in ESUG correspondence and distributions</li>
          <li>10% fee reduction on ESUG events for up to 5 people from your
            organisation</li>
        </ul>
      </div>
      <div class="sponsorship-tier sponsorship-tier-platinum">
        <div class="sponsorship-tier-header">
          <h3 class="sponsorship-tier-name">Platinum ESUG Sponsor</h3>
          <span class="sponsorship-tier-price">&euro;3000<span
              class="sponsorship-tier-price-period"
            >/year</span></span>
        </div>
        <ul class="sponsorship-tier-benefits">
          <li>All Golden benefits</li>
          <li>20% fee reduction on ESUG events for up to 10 people from your
            organisation</li>
        </ul>
      </div>
    </div>

    <p>
      By sending people to the conference, you can also sponsor ESUG in an
      indirect way.
    </p>
    <p>
      We hope to welcome you soon as a sponsor of ESUG! For any questions,
      please send an email to the ESUG board
      <a href="mailto:board@esug.org" class="talk-link">board@esug.org</a>.
      Payment can be done either by bank transfer or by credit card.
    </p>
  </article>

  {{outlet}}
</template>
