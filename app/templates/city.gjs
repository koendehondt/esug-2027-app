import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "City Information"}}

  <article class="page">
    <div class="page-hero">
      <img src="/images/tiles/city.jpg" alt="" class="page-hero-image" />
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
    <h1>City Information</h1>
    <p>
      Brussels is the capital of Belgium and the de facto capital of the
      European Union, home to the European Commission, the Council of the EU,
      the European Parliament, and NATO headquarters. It's a compact, walkable,
      deeply multilingual city known for its historic Grand Place, comic strip
      art, chocolate, beer, and a lively mix of cultures from around the world.
    </p>

    <h2 class="page-section-heading">Brussels by the numbers</h2>
    <div class="city-stat-grid">
      <div class="city-stat">
        <span class="city-stat-value">~1.26M</span>
        <span class="city-stat-label">Residents in the Brussels-Capital Region</span>
      </div>
      <div class="city-stat">
        <span class="city-stat-value">162&nbsp;km²</span>
        <span class="city-stat-label">Across 19 municipalities</span>
      </div>
      <div class="city-stat">
        <span class="city-stat-value">979</span>
        <span class="city-stat-label">Traditional founding year</span>
      </div>
      <div class="city-stat">
        <span class="city-stat-value">2</span>
        <span class="city-stat-label">Official languages: French &amp; Dutch</span>
      </div>
      <div class="city-stat">
        <span class="city-stat-value">180+</span>
        <span class="city-stat-label">Nationalities living side by side</span>
      </div>
      <div class="city-stat">
        <span class="city-stat-value">1831</span>
        <span class="city-stat-label">Capital of independent Belgium</span>
      </div>
    </div>
    <p class="city-stat-note">
      Brussels-Capital Region population and area figures per
      <a
        href="https://en.wikipedia.org/wiki/Demographics_of_Brussels"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >recent official estimates</a>; treat them as approximate, as the city
      keeps growing.
    </p>

    <h2 class="page-section-heading">A brief history</h2>
    <p>
      Legend has it that Saint Gaugericus built a chapel on a small island in
      the river Senne around 580&nbsp;AD. Brussels' official founding is usually
      dated to 979, when Charles, Duke of Lower Lorraine, fortified that same
      island and installed the relics of Saint Gudula there — the city's patron
      saint alongside Saint Michael. By the 13th and 14th centuries, Brussels
      had grown into a fortified cloth- and textile-trading town governed by
      powerful merchant guilds, whose guildhalls still ring the Grand Place
      today.
    </p>
    <p>
      Under Burgundian and later Habsburg rule, Brussels became a seat of real
      power: Emperor Charles&nbsp;V ruled much of his vast European empire from
      the city in the 16th century. That grandeur was nearly erased in August
      1695, when troops under Louis&nbsp;XIV bombarded Brussels for 36 hours,
      destroying roughly 4,000 buildings, including most of the Grand Place. The
      guilds rebuilt it within four years in an ornate Baroque style — the
      square that earned UNESCO World Heritage status in 1998 is essentially
      their handiwork.
    </p>
    <p>
      Belgium declared independence in 1830, and Brussels became capital of the
      new Kingdom of Belgium on 21 July 1831 — still celebrated every year as
      Belgian National Day. The 19th and early 20th centuries brought rapid
      industrial growth, grand boulevards, and the Art&nbsp;Nouveau townhouses
      of architects like Victor Horta. After the Second World War, Brussels
      became the natural home for European cooperation: NATO moved its
      headquarters there in 1967, and the city now hosts the main institutions
      of the European Union, formally recognised as the EU's capital in 2001.
    </p>

    <h2 class="page-section-heading">Languages</h2>
    <p>
      The Brussels-Capital Region is officially bilingual: street signs, metro
      announcements, and public documents appear in both
      <strong>French</strong>
      and
      <strong>Dutch</strong>. In practice French dominates everyday life (spoken
      fluently by around 88% of residents), while comfort in Dutch is lower
      (roughly 23%). Because Brussels is so international, about half of its
      residents speak a different language again at home — Arabic, Spanish,
      Portuguese, Italian, Turkish, Polish, Romanian, and many others are all
      common. English is widely understood, especially around the EU
      institutions and in the city centre, and is a safe default for conference
      visitors — don't hesitate to open with
      <em>"Do you speak English?"</em>
      if your French or Dutch is rusty. A cheerful
      <em>bonjour</em>
      /
      <em>dag</em>
      to start a conversation is always appreciated, even so.
    </p>

    <h2 class="page-section-heading">Belgian &amp; Brussels culture</h2>
    <p>
      Brussels has a strong claim to being the comic strip capital of the world:
      Tintin, the Smurfs, Lucky Luke, and Spirou were all born here, and more
      than 20 building-sized comic murals form the city's
      <a
        href="https://www.brusselsmuralroute.com/en/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Comic Strip Route</a>. The city was also home to surrealist painter René
      Magritte, and Art&nbsp;Nouveau architecture — sinuous ironwork, stained
      glass, organic facades — decorates whole neighbourhoods, especially
      Ixelles and Saint-Gilles.
    </p>
    <p>
      Food and drink are taken seriously. Belgium has more than 1,500 beers, and
      Brussels is the historic home of
      <strong>lambic</strong>
      and
      <strong>gueuze</strong>, sour beers brewed with wild yeast found nowhere
      else in the world. Belgian chocolate and pralines (invented in Brussels by
      Jean Neuhaus in 1912) are a point of national pride, as are Brussels-style
      waffles (lighter and crispier than their Liège cousins) and, of course,
      <em>frites</em>
      — thick-cut fries, twice-fried in the traditional way, that Belgians will
      happily argue originated here rather than in France. Mussels with fries (<em
      >moules-frites</em>) is the classic Belgian restaurant dish.
    </p>
    <p>
      Brussellers have a famous streak of self-deprecating humour known as
      <em>zwanze</em>, and nothing captures the city's irreverence quite like
      its most famous (tiny) resident, the statue of the
      <strong>Manneken Pis</strong>. Expect a city that takes its food and beer
      seriously, its bureaucracy with a shrug, and itself not too seriously at
      all.
    </p>

    <h2 class="page-section-heading">Well-known landmarks</h2>
    <ul>
      <li><strong>Grand Place / Grote Markt</strong>
        — the UNESCO-listed central square, ringed by gilded guildhalls, the
        Gothic Town Hall, and the Breadhouse (Maison du Roi).</li>
      <li><strong>Manneken Pis</strong>
        — the tiny 17th-century bronze fountain statue, Brussels' beloved and
        most-photographed mascot.</li>
      <li><strong>Atomium</strong>
        — the 102-metre stainless-steel model of an iron crystal built for Expo
        58, with a panoramic viewing sphere.</li>
      <li><strong>Royal Palace of Brussels</strong>
        — the official (ceremonial) palace of the King, open to the public each
        summer.</li>
      <li><strong>Cathedral of St. Michael and St. Gudula</strong>
        — Brussels' Gothic co-cathedral, used for royal weddings and state
        funerals.</li>
      <li><strong>Basilica of the Sacred Heart, Koekelberg</strong>
        — one of the largest Art Deco churches in the world, with a rooftop
        viewpoint.</li>
      <li><strong>Galeries Royales Saint-Hubert</strong>
        — an elegant 1847 glass-roofed shopping arcade, among the oldest in
        Europe.</li>
      <li><strong>Cinquantenaire Park &amp; Arcade</strong>
        — a monumental triumphal arch and park, home to several museums.</li>
      <li>
        <a
          href="https://www.fine-arts-museum.be/en/museums/rene-magritte-museum"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Magritte Museum</a>
        &amp; the Royal Museums of Fine Arts — the world's largest collection of
        the surrealist master's work.</li>
      <li><strong>Mont des Arts</strong>
        — formal gardens with one of the best skyline views over the old town.</li>
      <li><strong>Sablon</strong>
        — the twin squares of Grand and Petit Sablon, with the Gothic Notre-Dame
        du Sablon church, antique dealers, and chocolatiers.</li>
    </ul>

    <h2 class="page-section-heading">Neighbourhoods &amp; interesting places</h2>
    <h3 class="page-subsection-heading">European Quarter</h3>
    <p>
      Around Schuman and the Cinquantenaire, this is where the European
      Parliament, Commission, and Council are based — striking modern
      architecture alongside grand 19th-century parkland, and lively at
      lunchtime on weekdays.
    </p>
    <h3 class="page-subsection-heading">Marolles &amp; Sablon</h3>
    <p>
      The working-class Marolles district hosts a daily flea market on
      Vossenplein / Place du Jeu de Balle, while just up the hill, elegant
      Sablon is the place for antiques, art galleries, and some of the city's
      finest chocolate shops — a striking contrast just a few steps apart.
    </p>
    <h3 class="page-subsection-heading">Saint-Géry &amp; Dansaert</h3>
    <p>
      Once Brussels' original port on the Senne, Saint-Géry and the nearby
      Dansaert district are now the epicentre of the city's nightlife, indie
      fashion, and trendy bars and restaurants.
    </p>
    <h3 class="page-subsection-heading">Ixelles &amp; Saint-Gilles</h3>
    <p>
      South of the centre, these two communes are packed with Art Nouveau
      townhouses (including several by Victor Horta), leafy squares like Place
      Flagey and Place du Châtelain, and a strong café and brunch culture.
    </p>

    <h2 class="page-section-heading">Shopping</h2>
    <ul>
      <li><strong>Rue Neuve</strong>
        — the city's main pedestrian high street, with mainstream and
        international chains.</li>
      <li><strong>Avenue Louise</strong>
        — Brussels' answer to a luxury shopping avenue, with major international
        fashion houses.</li>
      <li><strong>Galeries Royales Saint-Hubert</strong>
        — elegant boutiques, chocolatiers, and cafés under a historic glass
        roof, right off the Grand Place.</li>
      <li><strong>Sablon</strong>
        — antiques, art, and gourmet chocolate shops around the two Sablon
        squares.</li>
      <li><strong>Dansaert</strong>
        — Belgian and Belgian-trained fashion designers, concept stores, and
        independent boutiques.</li>
      <li><strong>Marolles flea market</strong>
        — a bustling daily antiques and bric-a-brac market on Place du Jeu de
        Balle, liveliest at weekends.</li>
    </ul>

    <h2 class="page-section-heading">Restaurants &amp; cafés</h2>
    <p>
      Brussels rewards wandering: the streets around the Grand Place and
      Sainte-Catherine are dense with restaurants, though a few streets (notably
      Rue des Bouchers) lean heavily towards tourist traps — side streets nearby
      tend to be better value.
    </p>
    <ul>
      <li><strong>Classic Belgian &amp; moules-frites</strong>
        — brasseries around Sainte-Catherine and the old fish market serve
        mussels prepared a dozen ways, always with a side of fries.</li>
      <li>
        <a
          href="https://alamortsubite.com/en"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >À la Mort Subite</a>
        — a beloved 1928 lambic café near the Grand Place, virtually unchanged
        in decades.</li>
      <li><strong>Delirium Café</strong>
        — tucked down a small alley, once listed in the Guinness World Records
        for its enormous beer menu.</li>
      <li><strong>Maison Dandoy</strong>
        — a Brussels institution since 1829 for
        <em>speculoos</em>
        biscuits and waffles.</li>
      <li><strong>Frietkot / friture stands</strong>
        — for the definitive Belgian fries experience, order a paper cone with a
        dollop of Belgian mayonnaise (or one of dozens of other sauces).</li>
      <li><strong>Place Flagey &amp; Châtelain (Ixelles)</strong>
        — a lively, less touristy area for brunch, wine bars, and a Wednesday
        farmers' market on Place du Châtelain.</li>
    </ul>

    <div class="page-notice">
      Most of these sights and neighbourhoods are easily reachable by metro,
      tram, or on foot from the city centre. For directions from the airport,
      Brussels-Midi, or the city centre to the conference itself, see the
      <LinkTo @route="travel">Trip Information</LinkTo>
      and
      <LinkTo @route="venue">Venue</LinkTo>
      pages.
    </div>
  </article>

  {{outlet}}
</template>
