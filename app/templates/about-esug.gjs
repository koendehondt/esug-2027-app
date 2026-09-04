import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "About ESUG"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/about-esug.jpg" alt="" class="page-hero-image" />
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
    <h1>About ESUG</h1>

    <h2 class="page-section-heading">Board</h2>
    <p>The ESUG Board as elected in 2010:</p>
    <ul>
      <li>President:
        <a
          href="http://stephaneducasse.github.io"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Stéphane Ducasse</a></li>
      <li>Treasurer: Pablo Tesone</li>
      <li>
        <a
          href="http://car.mines-douai.fr/luc"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Luc Fabresse</a>
        (EMD)</li>
      <li>
        <a
          href="http://www.marcusdenker.de/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Marcus Denker</a>
        (Inria)</li>
      <li>
        <a
          href="http://www.lisyc.univ-brest.fr/pages_perso/plantec"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Alain Plantec</a>
        (UBO)</li>
      <li>Gordana Rakic (University of Novi Sad)</li>
    </ul>

    <h2 class="page-section-heading">Contact ESUG</h2>
    <p>
      You can reach the ESUG board at
      <a href="mailto:board@esug.org" class="talk-link">board@esug.org</a>,
      which broadcasts to all board members.
    </p>

    <h2 class="page-section-heading">Legal Information</h2>
    <p>
      ESUG is a French-law association, and hence it is not subject to VAT. It
      does not have a SIRET number but is registered under the number
      W751167780.
    </p>

    <h2 class="page-section-heading">Our Goals</h2>
    <p>
      ESUG is a non-profit association that gathers all European users of all
      dialects of Smalltalk. It was registered in 1991 under French status
      &ldquo;Association de Loi 1901&rdquo;.
    </p>
    <p>Its goals are to:</p>
    <ul>
      <li>promote use of the Smalltalk programming language</li>
      <li>promote communication between Smalltalk users through meetings, a
        periodic newsletter, software exchange, electronic mail, etc., and by
        organising events such as the ESUG yearly conference</li>
      <li>help and link local Smalltalk user groups</li>
      <li>help the creation of local Smalltalk user groups</li>
      <li>identify Smalltalk users and their needs, and represent them in
        discussions with vendors</li>
    </ul>
    <p>
      ESUG users usually meet at the yearly ESUG conference and at conferences
      on object-orientation such as ECOOP and SPLASH.
    </p>

    <h2 class="page-section-heading">Mailing List</h2>
    <p>
      For mailings to members and everybody who subscribed directly to the
      mailing list, you can send an email to
      <a
        href="mailto:esug-list@lists.esug.org"
        class="talk-link"
      >esug-list@lists.esug.org</a>. To join the mailing list, go to
      <a
        href="https://lists.esug.org/postorius/lists/esug-list.lists.esug.org/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >https://lists.esug.org/postorius/lists/esug-list.lists.esug.org/</a>. The
      mailing list currently connects more than 500 Smalltalkers from all over
      Europe and beyond!
    </p>

    <h2 class="page-section-heading">ESUG on Social Media</h2>
    <ul>
      <li>Mastodon:
        <a
          href="https://mastodon.social/@esugsmalltalk"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >@esugsmalltalk@mastodon.social</a></li>
      <li>Bluesky:
        <a
          href="https://bsky.app/profile/esugsmalltalk.bsky.social"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >esugsmalltalk.bsky.social</a></li>
      <li>Page on
        <a
          href="https://www.facebook.com/profile.php?id=61565428452512"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Facebook</a></li>
      <li>Page on
        <a
          href="https://www.linkedin.com/company/104963294"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >LinkedIn</a></li>
    </ul>
  </article>

  {{outlet}}
</template>
