import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Call for Presentations"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/call-for-presentations.jpg"
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
    <h1>Call for Presentations</h1>

    <p>
      The ESUG organisation announces the 32nd ESUG conference, to be held at
      the Vrije Universiteit Brussel (VUB) in Brussels, Belgium, from 6 to 9
      July 2027.
    </p>

    <h2 class="page-section-heading">Presentation format</h2>
    <p>
      Speakers may submit either 30-minute presentations or 45-60 minute
      hands-on tutorials.
    </p>

    <h2 class="page-section-heading">Topics</h2>
    <p>The conference welcomes submissions covering:</p>
    <ul>
      <li>Microservices, containers, cloud computing, and big data</li>
      <li>XP practices, development tools, and experience reports</li>
      <li>Model-driven and web development, team management</li>
      <li>Meta-modeling, security, new libraries and frameworks</li>
      <li>Educational content, embedded systems, robotics</li>
      <li>SOA, web services, cross-language programming integration</li>
      <li>Teaching insights and business showcases</li>
    </ul>

    <h2 class="page-section-heading">Submission guidelines</h2>
    <p>
      <strong>Deadline:</strong>
      1 May 2027. Places are limited, so do not wait until the last minute to
      apply.
    </p>
    <p>
      <strong>How to submit:</strong>
      submit a pull request to the
      <a
        href="https://github.com/ESUG/esug.github.io/tree/source/2027-Conference/talks"
        class="talk-link"
      >ESUG GitHub repository</a>.
    </p>
    <p>
      <strong>Alternatively,</strong>
      email your submission to
      <a
        href="mailto:omar.abedelkader@inria.fr"
        class="talk-link"
      >omar.abedelkader@inria.fr</a>
      and
      <a
        href="mailto:stephane.ducasse@inria.fr"
        class="talk-link"
      >stephane.ducasse@inria.fr</a>
      with "[ESUG2027]" in the subject line.
    </p>
    <p>Please use the following template for your submission because the email
      will be processed automatically.</p>
    {{! prettier-ignore }}
    <pre><code>Title:
Name:
Email:
Abstract:
Bio:</code></pre>
    <p>
      Any presentation not respecting this form will be discarded automatically.
    </p>
  </article>

  {{outlet}}
</template>
