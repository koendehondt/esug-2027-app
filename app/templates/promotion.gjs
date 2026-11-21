import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Promotion"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/promotion.jpg" alt="" class="page-hero-image" />
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
    <h1>Promotion</h1>

    <p>
      ESUG has been running many actions over the years to promote Smalltalk in
      both industry and academia.
    </p>

    <h2 class="page-section-heading">Mobility Support</h2>
    <p>
      ESUG offers five mobility grants of 1000,00&nbsp;€ per year, so that
      students can do an internship at a research lab working with Smalltalk.
      <LinkTo @route="mobility" class="talk-link">More about mobility support</LinkTo>
    </p>

    <h2 class="page-section-heading">Support Your Project</h2>
    <p>
      ESUG used to support projects related to software development, teaching,
      lectures and presence at conferences. This programme has ended.
      <LinkTo @route="project-support" class="talk-link">See past supported
        projects</LinkTo>
    </p>

    <h2 class="page-section-heading">Article Promotion</h2>
    <p>
      ESUG pays 100,00&nbsp;€ for each published article about any Smalltalk
      dialect.
      <LinkTo @route="article-promotion" class="talk-link">More about article
        promotion</LinkTo>
    </p>

    <h2 class="page-section-heading">Scientific Publications</h2>
    <p>
      ESUG sponsors research papers at international conferences that present
      work involving an implementation in Smalltalk.
      <LinkTo @route="publications" class="talk-link">More about scientific
        publications</LinkTo>
    </p>

    <h2 class="page-section-heading">Past Actions</h2>
    <p>
      An overview of ESUG's main promotion actions in the past.
      <LinkTo @route="past-actions" class="talk-link">See past actions</LinkTo>
    </p>
  </article>

  {{outlet}}
</template>
