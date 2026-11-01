import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import publicationYears from 'esug-2027-app/data/publications';

<template>
  {{pageTitle "Scientific Publications"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/publications.jpg"
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
    <h1>Scientific Publications</h1>

    <p>
      ESUG offers 150,00&nbsp;€ for papers at international conferences that
      present work involving an implementation in Smalltalk. Sponsorship is
      normally limited to three papers per research group. Note that this
      programme does not apply to conferences that ESUG already sponsors or
      organises, such as IWST.
    </p>

    <h2 class="page-section-heading">Rules</h2>
    <ul>
      <li>The applicant must be a member of ESUG or of the Pharo Association.</li>
      <li>After notification of acceptance, one of the authors sends the ESUG
        board the paper, a CV and a brief explanation of how Smalltalk was used.</li>
      <li>If the ESUG board decides to support the paper, the author sends ESUG
        a PDF of the camera-ready version after the camera-ready deadline. Its
        acknowledgements section must mention ESUG and include a link to
        <a
          href="https://esug.org"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >esug.org</a>.</li>
      <li>When presenting the paper at the conference, the author must mention
        ESUG's support (e.g. by showing the ESUG logo).</li>
      <li>After the presentation, the author sends ESUG a PDF of the slides with
        a visible reference to ESUG (e.g. the ESUG logo). ESUG will publish the
        slides on its website.</li>
      <li>The author can then request payment by emailing the ESUG board.</li>
      <li>ESUG supports at most three papers per institution per year.</li>
    </ul>

    {{#each publicationYears as |group|}}
      <section class="publication-year">
        <h2 class="page-section-heading">Sponsored Papers for
          {{group.year}}</h2>
        <div class="publication-list">
          {{#each group.papers as |paper|}}
            <div class="publication-card">
              <p class="publication-authors">{{paper.authors}}</p>
              <p class="publication-title">{{paper.title}}</p>
              <p class="publication-venue">{{paper.venue}}</p>
              {{#if paper.url}}
                <p class="publication-url">
                  <a
                    href={{paper.url}}
                    class="talk-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >{{paper.url}}</a>
                </p>
              {{/if}}
            </div>
          {{/each}}
        </div>
      </section>
    {{/each}}
  </article>

  {{outlet}}
</template>
