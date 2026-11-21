import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import articleYears from 'esug-2027-app/data/articles';

<template>
  {{pageTitle "Article Promotion"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/article-promotion.jpg" alt="" class="page-hero-image" />
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
    <h1>Article Promotion</h1>

    <p>
      ESUG supports authors of articles about Smalltalk (any dialect) published in developer magazines and other
      mainstream forums:
    </p>
    <ul>
      <li>The applicant must be a member of ESUG or of the Pharo Association.</li>
      <li>ESUG gives 100,00&nbsp;€ for an article with a national or international audience.</li>
      <li>For a smaller audience, the amount is discussed per article.</li>
      <li>Research papers are not eligible for this programme; see
        <LinkTo @route="publications" class="talk-link">Scientific Publications</LinkTo>
        instead.</li>
    </ul>

    <h2 class="page-section-heading">Conditions</h2>
    <ul>
      <li>The offer is limited to articles published after August 2005.</li>
      <li>For the moment there is no limit per person, but this may change.</li>
      <li>ESUG wants to publish the article on its website after its publication period. If your article is accepted by
        a magazine, please check that ESUG can publish it later, and contact the ESUG board to get your bonus.</li>
    </ul>
    <p>
      Some information about recently sponsored articles has been lost, but the programme is still active. Do not
      hesitate to apply.
    </p>

    <h2 class="page-section-heading">How to Apply</h2>
    <p>
      Send the PDF of the article and the details of where it was published to the ESUG board at
      <a href="mailto:board@esug.org" class="talk-link">board@esug.org</a>.
    </p>

    {{#each articleYears as |group|}}
      <section class="publication-year">
        <h2 class="page-section-heading">Sponsored Articles for
          {{group.year}}</h2>
        <div class="publication-list">
          {{#each group.articles as |article|}}
            <div class="publication-card">
              <p class="publication-authors">{{article.authors}}</p>
              <p class="publication-title">{{article.title}}</p>
              <p class="publication-venue">{{article.venue}}</p>
            </div>
          {{/each}}
        </div>
      </section>
    {{/each}}
  </article>

  {{outlet}}
</template>
