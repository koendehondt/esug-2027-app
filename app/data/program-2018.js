// Schedule from ESUG 2018, shown on the ESUG 2018 Archive's Conference
// Program page. Source: the conference's public Google Calendar (Main Track
// .ics feed, provided directly by Koen as schedule.ics) -- ESUG 2018
// predates the agenda-page format used from 2022 onward, so there is no
// https://esug.org/2018-Conference/agenda.html to scrape. Unlike ESUG 2019's
// calendar, most ESUG 2018 calendar entries carry the talk's full
// title/abstract/bio directly in the DESCRIPTION field, so that is the
// primary source for app/data/talks-2018.js too (see its header comment).
//
// Thu 13 (day-4) ran two parallel tracks for its late-morning block
// (11:00-13:00) -- unlike every other day, which is single-track. Both
// sessions are listed at their shared time slot, annotated '(Track A)' /
// '(Track B)', since the shared ProgramSchedule component only renders one
// flat list per day. Track assignment follows the numbering used by the
// official slide archive (https://archive.esug.org/ESUG2018/04-Thursday/),
// which is otherwise unlabelled by room.
//
// Mon 10 (day-1) had a similar parallel block from 16:45-18:45: a
// hands-on "Tutorial: AI for Dummies" (Track A) ran alongside three
// regular talk slots plus Teaching ICT Trends in Pharo (all Track B). The
// tutorial has no matching slide deck in the official archive
// (https://archive.esug.org/ESUG2018/01-Monday/) and wasn't in the
// YouTube playlist either, so it carries no `presentationUrl`/`videoId`.
//
// The calendar also included a couple of side-track sessions not part of
// the main numbered program -- excluded here, matching how IWST (the
// co-located International Workshop on Smalltalk Technologies) is
// excluded from every other archived year: Registration, and IWST itself
// (Tue 11, Thu 13, Fri 14).
//
// Sessions without a `speaker` are breaks/social slots, rendered
// differently in the UI (see app/components/program-schedule.gjs). 'Brick'
// (Mon 10) was a real talk but its calendar entry and the archive's
// info.txt both omit a speaker name, and no external source could confirm
// one, so it is listed without a `speaker`/`talkId` rather than guessing.

export default [
  {
    id: 'day-1',
    label: 'Mon 10',
    sessions: [
      { time: '8:45 – 9:15', subject: 'Welcome' },
      {
        time: '9:00 – 9:45',
        subject: 'Do you really understand git?',
        talkId: '101-poli-do-you-really-understand-git',
        speaker: 'Guillermo Polito',
      },
      {
        time: '9:45 – 10:30',
        subject: 'Pharo in Corner Cases of the Enterprise',
        talkId: '102-pala-pharo-in-corner-cases-of-the-enterprise',
        speaker: 'Piotr Palacz',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Open-source, an Infinite Game',
        talkId: '103-denk-open-source-an-infinite-game',
        speaker: 'Marcus Denker',
      },
      {
        time: '11:30 – 12:15',
        subject: 'Reshaping the Development Experience',
        talkId: '104-girb-reshaping-the-development-experience',
        speaker: 'Tudor Girba',
      },
      {
        time: '12:15 – 13:00',
        subject: 'Cincom Roadmap',
        talkId: '105-thom-cincom-roadmap',
        speaker: 'Arden Thomas',
      },
      { time: '13:00 – 14:15', subject: 'Lunch' },
      {
        time: '14:15 – 14:45',
        subject:
          'The aPart Framework: Separation of Use Cases and GUI in Business Applications',
        talkId: '106-uttn-the-apart-framework-separation-of-use-cases-and',
        speaker: 'Richard Uttner',
      },
      { time: '14:45 – 15:30', subject: 'Brick' },
      {
        time: '15:30 – 16:15',
        subject: 'ML in Pharo: TensorFlow with Pharo',
        talkId: '108-stin-ml-in-pharo-tensorflow-with-pharo',
        speaker: 'Serge Stinckwich',
      },
      { time: '16:15 – 16:45', subject: 'Coffee Break' },
      {
        time: '16:45 – 18:45',
        subject: 'Tutorial: AI for Dummies (Track A)',
        talkId: '109-berg-tutorial-ai-for-dummies',
        speaker: 'Alexandre Bergel',
      },
      {
        time: '16:45 – 17:15',
        subject: 'Moose Meta-Modelling (Track B)',
        talkId: '110-kriv-moose-meta-modelling',
        speaker: 'Pavel Krivanek',
      },
      {
        time: '17:15 – 17:45',
        subject: 'Example-driven Development (Track B)',
        talkId: '111-chis-example-driven-development',
        speaker: 'Andrei Chis',
      },
      {
        time: '17:45 – 18:15',
        subject: 'Syntactic Excursions (Track B)',
        talkId: '112-cani-syntactic-excursions',
        speaker: 'Leandro Caniglia',
      },
      {
        time: '18:15 – 18:30',
        subject: 'Teaching ICT Trends in Pharo (Track B)',
        talkId: '113-bler-teaching-ict-trends-in-pharo',
        speaker: 'Cédrik Béler',
      },
      { time: '18:45 – 20:45', subject: 'Innovation Awards' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 11',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'PharoJS: Pharo-Based TDD for Javascript Applications',
        talkId: '201-bour-pharojs-pharo-based-tdd-for-javascript',
        speaker: 'Noury Bouraqadi, Dave Mason',
      },
      {
        time: '9:45 – 10:30',
        subject: 'Pharo Consortium: A Roadmap to Solid Evolution',
        talkId: '202-lore-pharo-consortium-a-roadmap-to-solid-evolution',
        speaker: 'Esteban Lorenzano',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:45',
        subject: 'Something for the Cloud',
        talkId: '203-wage-something-for-the-cloud',
        speaker: 'Roland Wagener',
      },
      {
        time: '11:45 – 12:30',
        subject: 'Smalltalk Security Landscape',
        talkId: '204-kott-smalltalk-security-landscape',
        speaker: 'Jerry Kott',
      },
      {
        time: '12:30 – 13:00',
        subject: 'Docker and Pharo at ZWEIDENKER',
        talkId: '205-chan-docker-and-pharo-at-zweidenker',
        speaker: 'Pierre Chanson, Norbert Hartl',
      },
      { time: '13:00 – 14:30', subject: 'Lunch' },
      {
        time: '14:30 – 14:45',
        subject: 'Abap for Moose',
        talkId: '206-wink-abap-for-moose',
        speaker: 'Rainer Winkler',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Rowan: A New Project/Package Manager',
        talkId: '207-henr-rowan-a-new-project-package-manager',
        speaker: 'Dale Henrichs',
      },
      {
        time: '15:30 – 15:45',
        subject: 'Cruiser: A Pharo Packaging Tool',
        talkId: '208-blon-cruiser-a-pharo-packaging-tool',
        speaker: 'Vincent Blondeau',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject: 'Iceberg 2018: Bringing Pharo to Git, or Git to Pharo?',
        talkId: '209-poli-iceberg-2018-bringing-pharo-to-git-or-git-to',
        speaker: 'Guillermo Polito',
      },
      { time: '17:00 – 18:30', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 12',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'GemStone Roadmap',
        talkId: '301-gree-gemstone-roadmap',
        speaker: 'Norm Green',
      },
      {
        time: '9:45 – 10:30',
        subject: 'VA Smalltalk Product Update',
        talkId: '302-berm-va-smalltalk-product-update',
        speaker: 'Seth Berman',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Seaside Add-ons',
        talkId: '303-ferl-seaside-add-ons',
        speaker: 'Cyril Ferlicot-Delbecque',
      },
      {
        time: '11:30 – 12:15',
        subject: 'Willow, the Interaction Tour',
        talkId: '304-cote-willow-the-interaction-tour',
        speaker: 'Gabriel Omar Cotelli',
      },
      {
        time: '12:15 – 13:00',
        subject: 'A Browser-based IDE for Cloud-hosted GemStone',
        talkId: '305-fost-a-browser-based-ide-for-cloud-hosted-gemstone',
        speaker: 'James Foster',
      },
      { time: '13:00 – 14:30', subject: 'Lunch' },
      {
        time: '14:30 – 14:45',
        subject:
          'Smalltalk Usage for UI Prototyping in Thales Industrial Context',
        talkId: '306-labo-smalltalk-usage-for-ui-prototyping-in-thales',
        speaker: 'Pierre Laborde, Eric Lepors',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Tools for Smart Contract Analysis',
        talkId: '307-brag-tools-for-smart-contract-analysis',
        speaker: 'Santiago Bragagnolo',
      },
      { time: '19:00 – 22:30', subject: 'Social Event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 13',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Guerilla IT with Pharo',
        talkId: '401-pala-guerilla-it-with-pharo',
        speaker: 'Piotr Palacz',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Roassal: Current Status and Future Plan',
        talkId: '402-berg-roassal-current-status-and-future-plan',
        speaker: 'Alexandre Bergel',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Enjoying Parsing (Track A)',
        talkId: '403-bran-enjoying-parsing',
        speaker: 'John Brant',
      },
      {
        time: '11:00 – 11:30',
        subject:
          'How Smalltalk Helps HRworks to Overshadow the Competitors (Track B)',
        talkId: '404-schw-how-smalltalk-helps-hrworks-to-overshadow-the',
        speaker: 'Robin Schwegler',
      },
      {
        time: '11:30 – 12:00',
        subject: 'SmaCC, Parser Generation and More (Track A)',
        talkId: '405-lece-smacc-parser-generation-and-more',
        speaker: 'Jason Lecerf',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Toward a Simulation Server (Track B)',
        talkId: '406-amar-toward-a-simulation-server',
        speaker: 'Guillermo Amaral',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Clap (Track A)',
        talkId: '407-poll-clap',
        speaker: 'Damien Pollet',
      },
      {
        time: '12:00 – 12:15',
        subject: 'Application Development with VA Smalltalk (Track B)',
        talkId: '408-miti-application-development-with-va-smalltalk',
        speaker: 'Alexander Mitin',
      },
      {
        time: '12:30 – 13:00',
        subject: 'Relational Programming in Smalltalk (Track A)',
        talkId: '409-noce-relational-programming-in-smalltalk',
        speaker: 'Massimo Nocentini',
      },
      {
        time: '12:30 – 13:00',
        subject: 'Self Prototypes in Pharo (Track B)',
        talkId: '410-kriv-self-prototypes-in-pharo',
        speaker: 'Pavel Krivanek',
      },
      { time: '13:00 – 14:30', subject: 'Lunch' },
      {
        time: '14:30 – 15:00',
        subject:
          'CORMAS, a Participatory and Interdisciplinary Modeling Platform',
        talkId: '411-bomm-cormas-a-participatory-and-interdisciplinary',
        speaker: 'Pierre Bommel, Etienne Delay',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Stateful Traits in Pharo',
        talkId: '412-teso-stateful-traits-in-pharo',
        speaker: 'Pablo Tesone',
      },
      {
        time: '15:30 – 16:00',
        subject:
          'Cross-platform Development with Pharo: The PharoLauncher Case',
        talkId: '413-dema-cross-platform-development-with-pharo-the',
        speaker: 'Christophe Demarey',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject: 'Using System-level Tools to Debug Smalltalk Systems',
        talkId: '414-vran-using-system-level-tools-to-debug-smalltalk',
        speaker: 'Jan Vrany',
      },
      {
        time: '17:00 – 17:45',
        subject: 'VM Development in Pharo',
        talkId: '415-mira-vm-development-in-pharo',
        speaker: 'Eliot Miranda',
      },
      {
        time: '17:45 – 18:30',
        subject:
          'Hashed Collections: You Can (and Sometimes Should) Build Your Own',
        talkId: '416-mccl-hashed-collections-you-can-and-sometimes-should',
        speaker: 'Martin McClure, Andres Valloud',
      },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 14',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject:
          'Pharo IoT: Using Pharo to Play with GPIOs and Sensors on IoT Devices Remotely',
        talkId: '501-denk-pharo-iot-using-pharo-to-play-with-gpios-and',
        speaker: 'Marcus Denker, Allex Oliveira',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Hands on: Contributing to Pharo',
        talkId: '502-poli-hands-on-contributing-to-pharo',
        speaker: 'Guillermo Polito',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'PolyMath',
        talkId: '503-stin-polymath',
        speaker: 'Serge Stinckwich, Oleksandr Zaytsev',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Manipulating Live Documents with Documenter',
        talkId: '504-kube-manipulating-live-documents-with-documenter',
        speaker: 'Juraj Kubelka',
      },
      {
        time: '12:00 – 12:15',
        subject: 'Practical API Development Using Gemstone/S',
        talkId: '505-feld-practical-api-development-using-gemstone-s',
        speaker: 'Marten Feldtmann',
      },
      {
        time: '12:30 – 12:45',
        subject: 'ReStore for Dolphin: Improved Query Block Analyser',
        talkId: '506-aspi-restore-for-dolphin-improved-query-block',
        speaker: 'John Aspinall',
      },
      { time: '13:00 – 14:30', subject: 'Lunch' },
    ],
  },
];
