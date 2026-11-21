import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

// Content from https://esug.org/press.html. An article's optional url links
// its title to the article itself: the 2005 PDFs are in the ESUG Archive
// (archive.esug.org/Articles/), the SAP Professional Journal article is on
// masteringsap.com, and "Smalltalk for Everyone Else" is a Wayback Machine
// copy (onlamp.com now redirects to oreilly.com's home page). No online copy was found for the other articles (as of
// November 2026: OBJEKTspektrum's online archive is gone, and the 2006
// French magazine articles turned up nowhere).
const years = [
  {
    year: 2008,
    articles: [
      {
        authors: 'Heinz Roggenkemper, Ralf Ehret, Andreas Tönne',
        title:
          'Capture accurate solution requirements the first time with exploratory modeling (xM): How to nearly eliminate post-go-live application design failures',
        publication: 'SAP Professional Journal, Volume 10, Issue 1, January–February 2008',
        url: 'https://masteringsap.com/-/media/SAP%20Experts/Downloads/2008/January/SPJ-V10-I1-JanFeb08-P079-Roggenkemper_Ehret_Toenne.pdf',
      },
      {
        authors: 'Thorsten Seitz',
        title: '"Smalltalk at the Seaside": Shootout der dynamischen Sprachen auf der OOP 2008',
        publication: 'OBJEKTspektrum 03/2008, May–June 2008',
      },
    ],
  },
  {
    year: 2007,
    articles: [
      {
        authors: 'Helge K. Nowak',
        title: "Let's talk about Smalltalk",
        publication: 'Entwicklermagazin 3.2007, April 2007',
      },
      {
        authors: 'Andreas Tönne',
        title: 'Exploratives Modellieren für "SAP NetWeaver"',
        publication: 'OBJEKTspektrum 03/2007, May–June 2007',
      },
    ],
  },
  {
    year: 2006,
    articles: [
      {
        authors: 'Serge Stinckwich, Stéphane Ducasse',
        title: 'Les structures de contrôle en Smalltalk',
        publication: 'Linux Pratique 33, January–February 2006',
      },
      {
        authors: 'Hilaire Fernandes, Stéphane Ducasse',
        title: 'Smalltalk : Le pouvoir et la simplicité du tout objet',
        publication: 'Linux Magazine 82, April 2006',
      },
      {
        authors: 'Hilaire Fernandes, Stéphane Ducasse',
        title: 'La syntaxe Smalltalk par la pratique',
        publication: 'Linux Magazine 83, May 2006',
      },
      {
        authors: 'Serge Stinckwich, Hilaire Fernandes',
        title: 'Nos premières classes en Smalltalk',
        publication: 'Linux Magazine 84, June 2006',
      },
      {
        authors: 'Hilaire Fernandes, Serge Stinckwich',
        title: 'Environnement de développement Smalltalk',
        publication: 'Linux Magazine 85, July–August 2006',
      },
      {
        authors: 'Stéphane Ducasse, Serge Stinckwich',
        title: "Seaside : développement d'applications Web avec Smalltalk",
        publication: 'Linux Magazine 85, September 2006',
      },
      {
        authors: 'Keith Fieldhouse',
        title: 'Smalltalk for Everyone Else',
        publication: 'ONLamp.com, 21 September 2006',
        note: 'An introduction to Smalltalk for non-Smalltalkers.',
        url: 'https://web.archive.org/web/20071222143745/http://www.onlamp.com/pub/a/onlamp/2006/09/21/learning_smalltalk.html',
      },
    ],
  },
  {
    year: 2005,
    articles: [
      {
        authors: 'Hilaire Fernandes, Stéphane Ducasse',
        title: 'Squeak : Un Smalltalk libre multimédia',
        publication: 'Linux Pratique 28, March–April 2005',
        url: 'https://archive.esug.org/Articles/ColumnsSqueakInFrench/article1-TourDeSqueak.pdf',
      },
      {
        authors: 'Hilaire Fernandes, Stéphane Ducasse',
        title: 'Mon premier programme',
        publication: 'Linux Pratique 31, September–October 2005',
        url: 'https://archive.esug.org/Articles/ColumnsSqueakInFrench/article2-MonPremierProgramme.pdf',
      },
      {
        authors: 'Frank Müller',
        title: 'Mehr als ein Spiel',
        publication: 'iX, October 2005',
        note: 'About Croquet.',
        url: 'https://archive.esug.org/Articles/German/croquet.pdf',
      },
      {
        authors: 'Serge Stinckwich, Stéphane Ducasse',
        title: 'Squeak : La syntaxe de Smalltalk',
        publication: 'Linux Pratique 32, November–December 2005',
        url: 'https://archive.esug.org/Articles/ColumnsSqueakInFrench/article%203%20-%20LaSyntaxeDeSmalltalk.pdf',
      },
      {
        authors: 'Frank Müller',
        title: 'Partytime',
        publication: 'iX, November 2005',
        note: 'About 25 years of Smalltalk.',
        url: 'https://archive.esug.org/Articles/German/ix-2005-11.pdf',
      },
    ],
  },
];

<template>
  {{pageTitle "Press"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/press.jpg" alt="" class="page-hero-image" />
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
    <h1>Press</h1>

    <p>
      Articles about Smalltalk, published in various magazines. See also the articles supported by ESUG's
      <LinkTo @route="article-promotion" class="talk-link">article promotion</LinkTo>.
    </p>

    {{#each years as |entry|}}
      <h2 class="page-section-heading">{{entry.year}}</h2>
      <ul>
        {{#each entry.articles as |article|}}
          <li>
            {{article.authors}},
            {{#if article.url}}<a href={{article.url}} class="talk-link" target="_blank" rel="noopener noreferrer"><em
                >{{article.title}}</em></a>{{else}}<em>{{article.title}}</em>{{/if}},
            {{article.publication}}.
            {{#if article.note}}{{article.note}}{{/if}}
          </li>
        {{/each}}
      </ul>
    {{/each}}
  </article>

  {{outlet}}
</template>
