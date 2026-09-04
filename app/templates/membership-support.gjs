import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Membership and Support"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/membership-support.jpg"
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
    <h1>Membership and Support</h1>

    <p>
      By becoming a member of the European Smalltalk User Group, you support
      ESUG's actions to promote the use of Smalltalk in both industry and
      academia. As a member, you get:
    </p>
    <ul>
      <li>Access to the ESUG mailing list (only members can send emails to the
        list)</li>
      <li>Access to the mobility program</li>
      <li>Access to the book sponsoring</li>
      <li>Access to the scientific publication sponsoring</li>
      <li>Access to the SummerTalk program</li>
      <li>Access to the free books and other resources</li>
      <li>The right to vote in board elections</li>
    </ul>

    <h2 class="page-section-heading">How to Become a Member?</h2>
    <p>To become a member of ESUG you can:</p>
    <ul>
      <li>Subscribe online to the
        <a
          href="https://lists.esug.org/postorius/lists/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >ESUG mailing list</a></li>
      <li>Attend the ESUG yearly conference</li>
    </ul>

    <h2 class="page-section-heading">How to Support ESUG?</h2>
    <ul>
      <li>Attend the conference!</li>
      <li>Donate to
        <a
          href="https://www.helloasso.com/associations/esug"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >ESUG @ HelloAsso.com</a>!</li>
    </ul>
  </article>

  {{outlet}}
</template>
