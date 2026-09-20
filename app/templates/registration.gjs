import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Registration"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/registration.jpg"
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
    <h1>Conference Registration</h1>
    <p class="page-notice">
      Registration is not open yet. Pricing will be updated here once confirmed.
    </p>

    <div class="registration-tiers">
      <section class="registration-tier">
        <h2 class="registration-tier-title">Early registration</h2>
        <p class="registration-tier-price">650,00&nbsp;&euro;</p>
        <p class="registration-tier-detail">for the full conference</p>
        <p class="registration-tier-price">200,00&nbsp;&euro;</p>
        <p class="registration-tier-detail">per day</p>
        <p class="registration-tier-deadline">Deadline: 1 April 2027</p>
        <a
          href="https://registration.esug.org/ESUG"
          class="registration-button"
          target="_blank"
          rel="noopener noreferrer"
        >Register now</a>
      </section>
      <section class="registration-tier registration-tier-inactive">
        <h2 class="registration-tier-title">Late registration</h2>
        <p class="registration-tier-price">1000,00&nbsp;&euro;</p>
        <p class="registration-tier-detail">for the full conference</p>
        <p class="registration-tier-price">300,00&nbsp;&euro;</p>
        <p class="registration-tier-detail">per day</p>
      </section>
    </div>

    <ul class="registration-extras">
      <li>Extra person to social dinner: 70,00&nbsp;&euro;.</li>
      <li>Payment by bank transfer: free of charge.</li>
      <li>You can also pay without extra fees at
        <a
          href="https://www.helloasso.com/associations/esug/evenements/esug-2027"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >HelloAsso</a>.</li>
      <li>Payment by credit card: +6% fees.</li>
    </ul>

    <p>
      <strong>Note!</strong>
      In case of very late registrations, we cannot guarantee T-shirt
      availability or Social Event entry for extra participants.
    </p>
    <p>
      <strong>Cancellation policy</strong>: If you request a refund during the
      early bird period, we will refund the full fee (without charges). If you
      request a refund after the early bird period ends, we will refund 50%.
    </p>
  </article>

  {{outlet}}
</template>
