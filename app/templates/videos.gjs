import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

// Content from https://esug.org/videos.html. Each video has a title, an
// optional speaker, an optional url (the video itself, linked from the title)
// and a list of extra links (slides, downloads); a video with neither a url
// nor links is shown as no longer available online.
const sections = [
  {
    heading: 'ESUG Conferences',
    videos: [
      {
        title: 'ESUG 2026',
        url: 'https://www.youtube.com/playlist?list=PLXP7AQaDI7EY',
        links: [
          {
            label: 'Show Us Your Project',
            url: 'https://www.youtube.com/playlist?list=PLJIFCMt6GQlw',
          },
        ],
      },
      {
        title: 'ESUG 2025',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi94CahnvTIO0F69oOdGJ3Xb',
        links: [],
      },
      {
        title: 'ESUG 2024',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi-uyYOZIVgXg1up_bclQc7e',
        links: [
          {
            label: 'Show Us Your Project',
            url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi89jwnBCmGPh9xG6shuvuwb',
          },
        ],
      },
      {
        title: 'ESUG 2023',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi8-w5MAt_Rf-OjNDtBME7nK',
        links: [],
      },
      {
        title: 'ESUG 2022',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi_7LGwiSa-8VwYXELwFQLBt',
        links: [
          {
            label: 'Show Us Your Project',
            url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi-QLQViXAR41B0KdsSb4-nq',
          },
        ],
      },
      {
        title: 'ESUG 2019',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi8DPNpy1jCkjE4yE0WUtDP2',
        links: [],
      },
      {
        title: 'ESUG 2018',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi9RhA8zyKw_qelUpVVlumV9',
        links: [],
      },
      {
        title: 'ESUG 2017',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv',
        links: [],
      },
      {
        title: 'ESUG 2016',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi8pkvGyi1ZniLcAu_J8OFRs',
        links: [
          {
            label: 'IWST',
            url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi-hDyGVkyohvKqAgGxQyloy',
          },
        ],
      },
      {
        title: 'ESUG 2015',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi9rnk77bTf-juPt5I6-ered',
        links: [],
      },
      {
        title: 'ESUG 2014',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi_6yyRLsMMBqG8YlwfhvB0X',
        links: [
          {
            label: 'IWST',
            url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi-xeYIVRM2kxPbdCtccmNcj',
          },
        ],
      },
      {
        title: 'ESUG 2013',
        url: 'https://www.youtube.com/playlist?list=PLJ5nSnWzQXi_K_cQxWOLadk3TQTsS4Rys',
        links: [],
      },
      {
        title: 'ESUG 2011',
        url: 'https://www.youtube.com/playlist?list=PL813665D04A2E4C0A',
        links: [
          {
            label: 'IWST',
            url: 'https://www.youtube.com/playlist?list=PLBFA36B5236B77AD7',
          },
        ],
      },
      {
        title: 'ESUG 2010',
        url: 'https://www.youtube.com/playlist?list=PL431285A978F581BB',
        links: [],
      },
      {
        title: 'ESUG 2009',
        url: 'https://www.youtube.com/playlist?list=PL74E35D8EC7E756AE',
        links: [],
      },
      {
        title: 'ESUG 2008',
        url: 'https://www.youtube.com/playlist?list=PL4A297B9019B3884D',
        links: [],
      },
    ],
  },
  {
    heading: 'Historical Videos',
    videos: [
      {
        title: 'Self: The Video',
        url: 'https://www.youtube.com/watch?v=Ox5P7QyL774',
        links: [],
      },
      {
        title: 'Video showing Smalltalk-80',
        url: 'https://www.youtube.com/watch?v=JLPiMl8XUKU',
        links: [],
      },
      {
        title: 'ACM SIGGRAPH 1983, Issue 8: Smalltalk',
        url: 'https://www.youtube.com/watch?v=s6HJEnGRt88',
        links: [],
      },
    ],
  },
  {
    heading: 'Squeak and Smalltalk',
    videos: [
      {
        title: 'Squeak in Extremadura',
        links: [],
      },
      {
        title: 'Beyond VI, talk at euroko03',
        speaker: 'Marcus Denker',
        links: [],
      },
      {
        title: 'Bytecode-to-bytecode adaptive optimization for Smalltalk',
        speaker: 'Eliot Miranda',
        url: 'https://www.youtube.com/watch?v=kni9kS46zn8',
        links: [],
      },
      {
        title: 'Deep into Smalltalk',
        url: 'https://www.youtube.com/playlist?list=PL843D1D545F9F52B6',
        links: [],
      },
    ],
  },
  {
    heading: 'Seaside',
    videos: [
      {
        title: 'Talk at Studencki Festiwal Informatyczny, Cracow',
        speaker: 'Lukas Renggli',
        url: 'https://www.youtube.com/watch?v=M54qmZZKKPA',
        links: [
          {
            label: 'Slides',
            url: 'http://www.lukas-renggli.ch/smalltalk/seaside/heretic.pdf',
          },
        ],
      },
      {
        title: 'Comet',
        speaker: 'Lukas Renggli',
        links: [
          {
            label: 'Download video',
            url: 'http://www.lukas-renggli.ch/smalltalk/seaside/videos/comet.mov',
          },
        ],
      },
      {
        title: 'Web apps: why bother?',
        speaker: 'Avi Bryant',
        links: [],
      },
      {
        title: 'Quick demo',
        speaker: 'Stéphane Ducasse',
        links: [
          {
            label: 'Download video',
            url: 'http://stephane.ducasse.free.fr/Web/Demoes/seaside4.mov',
          },
        ],
      },
      {
        title: 'Talk at 22C3',
        speaker: 'Marcus Denker',
        url: 'https://www.youtube.com/watch?v=--n50WQ2_JA',
        links: [
          {
            label: 'Demo image',
            url: 'https://archive.marcusdenker.de/talks/05Berlin22C3/22c3.zip',
          },
          {
            label: 'Slides',
            url: 'https://archive.marcusdenker.de/talks/05Berlin22C3/22c3.pdf',
          },
        ],
      },
    ],
  },
  {
    heading: 'Alan Kay',
    videos: [
      {
        title: "The Computer Revolution Hasn't Happened Yet, keynote at OOPSLA 1997",
        url: 'https://www.youtube.com/watch?v=aYT2se94eU0',
        links: [],
      },
      {
        title: 'Graphical User Interfaces',
        links: [],
      },
      {
        title: 'Doing with Images Makes Symbols',
        url: 'https://www.youtube.com/watch?v=p2LZLYcu_JY',
        links: [],
      },
      {
        title: 'Education in the Digital Age',
        url: 'https://www.youtube.com/watch?v=GAuIEN-JQ-Y',
        links: [],
      },
      {
        title: 'What is Squeak?',
        links: [],
      },
      {
        title: 'Squeak and Croquet demo, Etech03',
        speaker: 'with David A. Smith',
        url: 'https://www.youtube.com/watch?v=cXGLOiZUZ2U',
        links: [],
      },
      {
        title: 'Croquet: A Collaboration Architecture',
        speaker: 'with David A. Smith',
        links: [],
      },
      {
        title: 'Understanding powerful ideas, and how computers can help',
        url: 'https://www.youtube.com/watch?v=2pu8O5E6pxQ',
        links: [],
      },
    ],
  },
  {
    heading: 'Dan Ingalls',
    videos: [
      {
        title: 'Seven (give or take) Smalltalk implementations',
        url: 'https://www.youtube.com/watch?v=pACoq7r6KVI',
        links: [],
      },
      {
        title: 'Object-Oriented Programming',
        url: 'https://www.youtube.com/watch?v=P2mh92d-T3Y',
        links: [],
      },
    ],
  },
];

const unavailable = (video) => !video.url && video.links.length === 0;

<template>
  {{pageTitle "Videos"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/videos.jpg" alt="" class="page-hero-image" />
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
    <h1>Videos</h1>

    <p>
      ESUG publishes its conference videos on its
      <a
        href="https://www.youtube.com/user/esugboard"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >YouTube channel</a>. Videos of recent conferences can also be watched in this app, on the talk pages of each
      conference archive. Below are older recordings and other Smalltalk videos.
    </p>

    {{#each sections as |section|}}
      <h2 class="page-section-heading">{{section.heading}}</h2>
      <ul>
        {{#each section.videos as |video|}}
          <li>
            {{#if video.url}}<a
                href={{video.url}}
                class="talk-link"
                target="_blank"
                rel="noopener noreferrer"
              >{{video.title}}</a>{{else}}{{video.title}}{{/if}}{{#if video.speaker}}
              ({{video.speaker}}){{/if}}{{#if video.links.length}}:
              {{#each video.links as |link index|}}{{#if index}},
                {{/if}}<a
                  href={{link.url}}
                  class="talk-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >{{link.label}}</a>{{/each}}
            {{else if (unavailable video)}}
              (no longer available online)
            {{/if}}
          </li>
        {{/each}}
      </ul>
    {{/each}}

    <h2 class="page-section-heading">More Videos</h2>
    <p>
      More Smalltalk videos are listed at
      <a
        href="https://www.merlintec.com/smalltalk.org.br/movies/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >smalltalk.org.br</a>.
    </p>
  </article>

  {{outlet}}
</template>
