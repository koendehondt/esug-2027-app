import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Past Actions"}}

  <article class="page">
    <div class="page-hero">
      <img
        src="/images/tiles/past-actions.jpg"
        alt=""
        class="page-hero-image"
      />
      <LinkTo @route="promotion" class="page-back" aria-label="Back">
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
    <h1>Past Actions</h1>

    <p>
      In a time when we are bombarded with information, you may not have noticed
      that ESUG does a lot to push Smalltalk in Europe and beyond. The following
      sums up the main actions ESUG performed in the past.
    </p>

    <h2 class="page-section-heading">Seaside Hosting</h2>
    <p>
      From 2006, and for several years, you could run Seaside applications on
      SeasideHosting (www.seasidehosting.st, no longer online). ESUG sponsored
      it, and it was made by Netstyle.ch.
    </p>

    <h2 class="page-section-heading">Projects</h2>
    <p>
      ESUG
      <LinkTo @route="project-support" class="talk-link">supported projects</LinkTo>
      related to software development, teaching, conference presence and so on:
    </p>
    <ul>
      <li><a
          href="https://isqueak.org/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Squeak VM</a>
        on iPhone – John McIntosh</li>
      <li>Clean-up of the Squeak VM – John McIntosh</li>
      <li><a
          href="http://www.jvuletich.org/Morphic3/Morphic3-201006.html"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Morphic 3</a>
        – Juan Vuletich</li>
      <li>iPhone development – Esteban Lorenzano</li>
      <li>DrGeo II Scripting Syntax Extension – Hilaire Fernandes</li>
    </ul>

    <h2 class="page-section-heading">SummerTalk</h2>
    <p>
      Each year, ESUG paid students to work on open-source Smalltalk projects
      during the SummerTalk programme:
    </p>
    <ul>
      <li>SqueakOpenDBX (2009)</li>
      <li>SqueakOpenDBX (2008)</li>
      <li>Safara (2008)</li>
      <li>New Compiler for Squeak (2006)</li>
      <li>RDF Framework for Smalltalk (2006)</li>
      <li>Process-based Bug Tracking System (2006)</li>
      <li>iCal support in Smalltalk (2006)</li>
      <li>SqueakBot (2006)</li>
    </ul>

    <h2 class="page-section-heading">DVD</h2>
    <p>
      ESUG collected and managed a
      <LinkTo @route="dvd" class="talk-link">DVD of free Smalltalk resources</LinkTo>.
    </p>

    <h2 class="page-section-heading">Book Writing</h2>
    <ul>
      <li>Dynamic Web Development with Seaside by Ducasse et al. (2009)</li>
      <li><a
          href="https://github.com/hpi-swa-lab/SqueakByExample-english"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Squeak by Example</a>
        by Black et al. (2007)</li>
      <li>A Mentoring Course on Smalltalk by Valloud et al.</li>
      <li>Fundamentals of Smalltalk Programming Technique by Valloud et al.</li>
      <li><a
          href="https://www.canol.info/books/computer_programming_using_gnu_smalltalk/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Computer Programming using GNU Smalltalk</a>
        by C. Gökel</li>
    </ul>

    <h2 class="page-section-heading">Book Spreading</h2>
    <p>
      In 2002, ESUG sent many books for free (Smalltalk Best Practice Patterns,
      Introduction to OOP in VisualWorks, The Design Patterns Smalltalk
      Companion, Smalltalk with Style, ...) to universities in:
    </p>
    <ul>
      <li>Algeria: Chlef, Blida</li>
      <li>Argentina: La Plata, Buenos Aires (4), Córdoba</li>
      <li>Belgium: Brussels</li>
      <li>Brazil: São Paulo</li>
      <li>Chile: Santiago</li>
      <li>China: Wuhan, Hubei</li>
      <li>Czech Republic: Brno, Prague</li>
      <li>France: Caen, Montpellier II, Paris 8, Brest, Douai</li>
      <li>Germany: Darmstadt, Munich, Berlin, Elmshorn</li>
      <li>India: Hyderabad, Uttar Pradesh</li>
      <li>Italy: Cagliari, Benevento</li>
      <li>Romania: Timișoara, Cluj-Napoca, Târgoviște</li>
      <li>Russia: Tver</li>
      <li>Serbia: Novi Sad</li>
      <li>Spain: Vigo, Castellón</li>
      <li>Switzerland: St. Gallen</li>
      <li>United Kingdom: Portsmouth, Plymouth</li>
      <li>United States: Santa Barbara</li>
    </ul>

    <h2 class="page-section-heading">Free Books</h2>
    <p>
      Books were too expensive, so ESUG decided to promote open-source books:
    </p>
    <ul>
      <li>ESUG sponsored the
        <a
          href="https://books.pharo.org"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Pharo open-access books</a>. Check them out: many are great.</li>
      <li>ESUG sponsored
        <a
          href="https://github.com/hpi-swa-lab/SqueakByExample-english"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Squeak by Example</a>.</li>
      <li>Andres Valloud's books
        <em>Hashing in Smalltalk: Theory and Practice</em>
        and
        <em>A Mentoring Course on Smalltalk</em>
        were presented at ESUG 2009.</li>
    </ul>
    <p>
      ESUG also sent free printed copies of Squeak by Example to universities
      and individuals:
    </p>
    <ul>
      <li>van Tuan Le, Quy Nhon University, IFI - MSI Hanoi, Vietnam</li>
      <li>IUT de Caen Library, France</li>
      <li>Gabriela Arévalo, Universidad Nacional de La Plata, Argentina</li>
      <li>Markus Gaelli, Squeak Germany (plus 80 bookmarks for the Practical
        Linux booth in Giessen, Germany)</li>
      <li>Lukas Renggli (plus 100 bookmarks for MODELS 07)</li>
      <li>PySqueak Sprint, Bern, 2007: three copies handed out to non-Squeak
        participants</li>
      <li>Damien Pollet, France</li>
      <li>Pascal Bouvier, HEI, Lille, France</li>
      <li>Christian Denker, Germany</li>
      <li>30 books for the Smalltalk conference in Argentina: Fabian Florotto,
        Colin Putney, Lautaro Fernandez, Fernando Dodino, Nicolas Buttarelli,
        Guillermo Gonzalez, Luis Alberto Garmendia, Fernando Olivero, Esteban
        Maringolo, Marcos Andres Sobral, Mariano Matayoshi, Miguel Angel
        Gutierrez, Mirco Bombieri, Gaston Dall'Oglio, Sergio Polizzi, Gabriel
        Cotelli, Adrian Soma, Diego Geffmer, Claudio Campos, Gabriel Brunstein,
        Ignacio Vivona, Carlos Enrique Rodriguez, Agustina Herrera, German
        Boccoleri, Pablo Revert, Guido Vilariño, Donal Zmick, Mauro Pezzarini,
        Sebastian Blanco, Maria Laura Gronda</li>
    </ul>

    <h2 class="page-section-heading">Miscellaneous</h2>
    <ul>
      <li>Sponsoring of the Russian Smalltalk server</li>
      <li>Booths at open-source conferences such as RMLL and FOSDEM</li>
      <li>Chaos Computer Club participation</li>
      <li>Scanning
        <a
          href="http://stephane.ducasse.free.fr/FreeBooks.html"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >old books</a></li>
      <li>Teaching in Barcelona (Spain)</li>
      <li>Teaching in Turin (Italy)</li>
      <li>Teaching in Bledj (Romania)</li>
      <li>Managing money for the Squeak Foundation from 2004 to 2010</li>
    </ul>

    <h2 class="page-section-heading">Sponsoring Scientific Articles</h2>
    <p>
      ESUG offers money for each
      <LinkTo @route="publications" class="talk-link">international conference
        paper</LinkTo>
      whose concepts involve an implementation in Smalltalk. ESUG did a lot
      more, but recorded at least:
    </p>
    <ul>
      <li>6 international conference papers in 2009</li>
      <li>8 international conference papers in 2008</li>
    </ul>

    <h2 class="page-section-heading">Smalltalk Articles in the Press</h2>
    <p>
      ESUG decided to offer money for each
      <LinkTo @route="article-promotion" class="talk-link">article</LinkTo>
      published about Smalltalk:
    </p>
    <ul>
      <li>6 in 2006</li>
      <li>3 in 2007</li>
      <li>5 in 2008</li>
    </ul>

    <h2 class="page-section-heading">Student Volunteer Programme</h2>
    <p>
      <LinkTo @route="student-volunteers" class="talk-link">Student volunteers</LinkTo>
      help keep the conference running smoothly. In return, they get free
      accommodation, while still having most of the time to enjoy the
      conference.
    </p>
    <ul>
      <li>2022–2025: 15 students per year got free access and hosting</li>
      <li>2010: 24 students</li>
      <li>2009: 18 students</li>
      <li>2008: 17 students</li>
      <li>2007: 14 students</li>
      <li>2006: 15 students</li>
      <li>2005: 12 students</li>
      <li>2004: 15 students, plus a complete classroom of students from northern
        academia who got free access</li>
      <li>2003: 21 students</li>
    </ul>

    <h2 class="page-section-heading">Smalltalks Conference</h2>
    <p>
      Since 2009, ESUG sponsors the
      <a
        href="https://www.fast.org.ar/"
        class="talk-link"
        target="_blank"
        rel="noopener noreferrer"
      >Smalltalks conference</a>
      in Argentina:
    </p>
    <ul>
      <li>15 teachers got travel and hosting to attend the conference</li>
      <li>One invited talk was sponsored</li>
    </ul>

    <h2 class="page-section-heading">Free Books for Academia</h2>
    <p>For this purpose, ESUG proposed two packages:</p>
    <ul>
      <li><strong>Teacher Excellence Package:</strong>
        a relevant selection of Smalltalk books at all levels of expertise, plus
        30 CDs containing all the free or non-commercial Smalltalks (Squeak,
        VisualWorks, GNU Smalltalk, Dolphin, Smalltalk/X, Smalltalk/MT), all the
        freely available books and a ready-to-use lecture (400 slides, 100 pages
        of exercises).</li>
      <li><strong>Teacher Immersion Package:</strong>
        an intensive lecture for any number of students over three or four days.
        It includes the Teacher Excellence Package.</li>
    </ul>

    <h3>Admissibility Conditions</h3>
    <p>
      There was no restriction on location (within Europe). The only criterion
      was the willingness to learn and/or teach Smalltalk. Applicants wrote a
      short description (one page at most) of their situation and their plans to
      promote Smalltalk. The package was given to the library of the applicant's
      university, with the legal obligation not to do any business with it, such
      as reselling the books.
    </p>

    <h3>Smalltalk Books</h3>
    <ul>
      <li>Smalltalk Best Practice Patterns</li>
      <li>Squeak: Object-Oriented Design with Multimedia Applications</li>
      <li>Squeak: Open Personal Computing and Multimedia</li>
      <li>Squeak: A Quick Trip to ObjectLand</li>
      <li>The Design Patterns Smalltalk Companion</li>
      <li>Smalltalk with Style</li>
      <li>On to Smalltalk</li>
      <li>The Art and Science of Smalltalk</li>
      <li>Smalltalk, Objects, and Design</li>
      <li>The Dolphin Smalltalk Companion</li>
      <li>Squeak by Xavier Briffault (French)</li>
    </ul>

    <h3>Universities That Received the Teacher Packages</h3>
    <ul>
      <li><strong>Algeria:</strong>
        Université de Blida (Cherfa Yazid); Université Hassiba Ben Bouali de
        Chlef (Mohamed Benarous)</li>
      <li><strong>Argentina:</strong>
        Universidad Tecnológica Nacional, Buenos Aires (Fernando Dodino);
        <a
          href="https://lifia.info.unlp.edu.ar/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >LIFIA</a>, Universidad Nacional de La Plata (Gustavo Rossi);
        <a
          href="http://www.schonthal.esc.edu.ar"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Colegio Schonthal</a>
        and
        <a
          href="http://roboliga.edu.ar/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Roboliga</a>, Buenos Aires (Gonzalo Zabala); University of Buenos Aires
        (Dan Rozenfarb); Universidad Tecnológica Nacional, Villa María (Ivano
        Bonamici, Mario Rinaldi); Smalltalking, Buenos Aires (Alejandro
        Reimondo)</li>
      <li><strong>Belgium:</strong>
        Vrije Universiteit Brussel, PROG (Johan Brichau, Kris Gybels);
        <a
          href="https://www.ulb.be/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Université Libre de Bruxelles</a>
        (Roel Wuyts)</li>
      <li><strong>Brazil:</strong>
        <a
          href="https://www.icmc.usp.br/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >ICMC – Universidade de São Paulo</a>
        (Rosana Braga)</li>
      <li><strong>Chile:</strong> Universidad de Chile, DCC (Éric Tanter)</li>
      <li><strong>China:</strong>
        <a
          href="https://www.hust.edu.cn/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Huazhong University of Science and Technology</a>, Wuhan (Junfeng Lee);
        <a
          href="http://www.whut.edu.cn/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Wuhan University of Technology</a>
        (Liang Peng)</li>
      <li><strong>Czech Republic:</strong>
        <a
          href="https://www.fit.vut.cz/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Brno University of Technology</a>
        (Vladimir Janousek);
        <a
          href="https://katedry.czu.cz/kii/uvod"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Czech University of Agriculture, Prague</a>
        (Vojtech Merunka);
        <a
          href="https://cs.fel.cvut.cz/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Czech Technical University, Prague</a>
        (Jan Lukes)</li>
      <li><strong>France:</strong>
        IUT de Caen (Serge Stinckwich);
        <a
          href="https://www.umontpellier.fr/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Université de Montpellier II</a>
        (Christophe Dony); Université de Paris 8 (Vincent Lesbros); École des
        Mines de Douai (Noury Bouraqadi);
        <a
          href="https://www.univ-brest.fr/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Université de Bretagne Occidentale</a>
        (Loïc Lagadec)</li>
      <li><strong>Germany:</strong>
        Darmstadt University of Technology (Hans-Jürgen Hoffmann, Thomas Kühne);
        Universität der Bundeswehr München (Lothar Schmitz);
        <a
          href="https://www.nordakademie.de/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >FH Nordakademie</a>
        (Johannes Brauer);
        <a
          href="https://www.udk-berlin.de/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >UdK Berlin</a>
        (Markus Gaelli)</li>
      <li><strong>India:</strong>
        <a
          href="https://jntuh.ac.in/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Jawaharlal Nehru Technological University</a>
        (Chandra Sekharaiah Kanagaluru); Aligarh Muslim University (Priti Bala)</li>
      <li><strong>Italy:</strong>
        Università di Cagliari, DIEE (Michele Marchesi)</li>
      <li><strong>Romania:</strong>
        Politehnica University of Timișoara (Tudor Gîrba);
        <a
          href="https://utcluj.ro/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Universitatea Tehnică din Cluj-Napoca</a>
        (Ilinca Ciupa);
        <a
          href="https://www.valahia.ro/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Valahia University</a>
        (Bizoi Mihai)</li>
      <li><strong>Russia:</strong> Tver State University (Dennis Schetinin)</li>
      <li><strong>Serbia and Montenegro:</strong>
        University of Novi Sad (Zoran Budimac)</li>
      <li><strong>Slovakia:</strong>
        Slovak University of Technology (Viliam Solcany)</li>
      <li><strong>Spain:</strong>
        Universidad de Vigo (María Rodríguez Damián);
        <a
          href="https://www.uji.es/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Universitat Jaume I, Castellón</a>
        (Germán Fabregat)</li>
      <li><strong>Switzerland:</strong>
        <a
          href="https://scg.unibe.ch/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >University of Bern, SCG</a>
        (Stéphane Ducasse);
        <a
          href="https://iwi.unisg.ch/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >Universität St. Gallen</a>
        (Mario Klesse)</li>
      <li><strong>United Kingdom:</strong>
        <a
          href="https://www.port.ac.uk/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >University of Portsmouth</a>
        (Steve Hand);
        <a
          href="https://www.plymouth.ac.uk/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >University of Plymouth</a>
        (Robert Hawley)</li>
      <li><strong>United States:</strong>
        <a
          href="https://www.mat.ucsb.edu/"
          class="talk-link"
          target="_blank"
          rel="noopener noreferrer"
        >University of California, Santa Barbara</a>
        (Stephen Pope)</li>
    </ul>
  </article>

  {{outlet}}
</template>
