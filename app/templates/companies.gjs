import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';
import { currentCompanies, oldCompanies, NEW_COMPANY_FORM_URL } from 'esug-2027-app/data/companies';

<template>
  {{pageTitle "Companies"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/companies.jpg" alt="" class="page-hero-image" />
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
    <h1>Companies</h1>

    <p>This is a list of companies worldwide that use Smalltalk.</p>
    <p>To add your company to this list, use this button:</p>
    {{! The form opens in the browser (Safari/Chrome in the native apps, a new
      tab on the web) rather than inside the app, so the app itself collects no
      data -- see PROJECT-SUMMARY.md, "Companies form opens in the browser". }}
    <a href={{NEW_COMPANY_FORM_URL}} class="registration-button" target="_blank" rel="noopener noreferrer">New Company</a>

    <h2 class="page-section-heading">Registered Companies</h2>
    <div class="publication-list">
      {{#each currentCompanies as |company|}}
        <div class="publication-card">
          <p class="publication-title">{{company.name}}</p>
          <p class="publication-url">
            <a href={{company.url}} class="talk-link" target="_blank" rel="noopener noreferrer">{{company.url}}</a>
          </p>
        </div>
      {{/each}}
    </div>

    <h2 class="page-section-heading">Old Entries</h2>
    <p>
      If your company is listed below, please submit it again via the button above.
    </p>
    <div class="company-groups">
      {{#each oldCompanies as |group|}}
        <h3>{{group.country}}</h3>
        <ul>
          {{#each group.companies as |company|}}
            <li>
              {{#if company.url}}
                <a href={{company.url}} class="talk-link" target="_blank" rel="noopener noreferrer">{{company.name}}</a>
              {{else}}
                {{company.name}}
              {{/if}}
              {{#if company.note}}
                <span class="company-note">– {{company.note}}</span>
              {{/if}}
            </li>
          {{/each}}
        </ul>
      {{/each}}
    </div>
  </article>

  {{outlet}}
</template>
