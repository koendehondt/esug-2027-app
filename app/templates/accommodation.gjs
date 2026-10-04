import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Accommodation"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/accommodation.jpg"
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
    <h1>Accommodation</h1>
    <p class="page-notice">
      More recommended hotels will be added here once confirmed.
    </p>

    <section class="hotel">
      <h2 class="page-section-heading">Aparthotel Adagio Access Brussels Delta</h2>
      <p class="hotel-address">Boulevard du Triomphe 207, 1160 Brussels</p>
      <p>
        The hotel is located close to the VUB campus and to the Delta metro
        station. The conference is easy to reach on foot. See the map below or
        open
        <a
          href="https://www.google.com/maps/place/Aparthotel+Adagio+Access+Brussels+Delta/@50.8202163,4.3949034,1187m/data=!3m1!1e3!4m9!3m8!1s0x47c3c5c55acc8fb7:0xe9ff8b9527dc385d!5m2!4m1!1i2!8m2!3d50.8161253!4d4.3984339!16s%2Fg%2F11jgchr5p7?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Google Maps</a>.
      </p>
      <figure class="hotel-map">
        <img
          src="/images/maps/adagio-delta.jpg"
          alt="Satellite map showing the walking route from Aparthotel Adagio Access Brussels Delta to VUB building D, and the nearby Delta metro station"
          loading="lazy"
        />
        <figcaption>Imagery © Google</figcaption>
      </figure>
      <p>
        The hotel has studios for up to 2 persons and up to 4 persons. See the
        <a
          href="https://www.adagio-city.com/gb/hotel-B5M6-aparthotel-adagio-access-brussels-delta/index.shtml"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >hotel website</a>
        for details.
      </p>
      <p>
        <strong>Prices are per studio per night</strong>, 12% VAT included.
      </p>
      <div class="hotel-rates-wrapper">
        <table class="hotel-rates">
          <thead>
            <tr>
              <th scope="col">Stay</th>
              <th scope="col">Studio for 2</th>
              <th scope="col">Studio for 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1–2 nights</th>
              <td>138,41 €</td>
              <td>172,22 €</td>
            </tr>
            <tr>
              <th scope="row">3–7 nights</th>
              <td>113,05 €</td>
              <td>142,64 €</td>
            </tr>
            <tr>
              <th scope="row">8–90 nights</th>
              <td>100,37 €</td>
              <td>127,85 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 class="page-subsection-heading">Important</h3>
      <ul class="hotel-notes">
        <li class="hotel-note">
          These are specifically negotiated rates. They cannot be combined with
          other discounts, such as the Accor ALL member discount.
        </li>
        <li class="hotel-note">
          The prices do not include the tourist tax of 5,60 € per studio per
          night.
        </li>
        <li class="hotel-note">
          The prices do not include breakfast. The hotel provides a breakfast
          buffet at 18,00 € per person per day.
        </li>
      </ul>
      <div class="hotel-booking">
        <p>
          Use reservation code
          <strong class="hotel-booking-code">ESUG2027</strong>
          when booking via
          <a
            href="mailto:HB5M6@adagio-city.com?subject=Reservation%20ESUG2027"
            class="talk-link"
          >HB5M6@adagio-city.com</a>.
        </p>
      </div>
    </section>
  </article>

  {{outlet}}
</template>
