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
      ESUG offers five mobility grants of 600&nbsp;€ per year, so that students
      can do an internship at a research lab working with Smalltalk.
      <a
        href="https://esug.org/mobility.html"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >More about mobility support</a>
    </p>

    <h2 class="page-section-heading">Support Your Project</h2>
    <p>
      ESUG funds projects such as software development, teaching, lectures and
      presence at conferences.
      <a
        href="https://esug.org/project.html"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >More about project support</a>
    </p>

    <h2 class="page-section-heading">Article Promotion</h2>
    <p>
      ESUG pays 100&nbsp;€ for each published article about any Smalltalk
      dialect.
      <a
        href="https://esug.org/article.html"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >More about article promotion</a>
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
      <a
        href="https://esug.org/past_actions.html"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >See past actions</a>
    </p>
  </article>

  {{outlet}}
</template>
