// Schedule from ESUG 2016, shown on the ESUG 2016 Archive's Conference
// Program page. Source: the conference's public Google Calendar (Main
// Track .ics feed, calendar id 8tt9grjos12ool4hqrpifjle9s@group.calendar.google.com
// -- the same calendar Koen linked directly). ESUG 2016 predates the
// agenda-page format used from 2022 onward, so there is no
// https://esug.org/2016-Conference/agenda.html to scrape either. Most
// calendar entries carry the talk's full title/abstract/bio directly in
// the DESCRIPTION field, so that is the primary source for
// app/data/talks-2016.js too (see its header comment).
//
// Excluded from the main program, matching how IWST (the co-located
// International Workshop on Smalltalk Technologies) and Registration are
// excluded from every other archived year: Registration (Sun 21 and Mon
// 22), IWST itself (Tue 23, Wed 24, Thu 25), and Camp Smalltalk (Sun 21
// August, the day before the conference proper).
//
// Sessions without a `speaker` are breaks/social slots, rendered
// differently in the UI (see app/components/program-schedule.gjs). Two
// talks -- 'Pharo Update' (Wed 24) and 'Pillar: one language for all
// supports' (Fri 26) -- keep their `talkId` but no `speaker`: the calendar
// carries no DESCRIPTION naming a presenter for either, the ESUG 2016
// slide archive's own Info.txt files don't name one either, and no other
// source (the SlideShare deck's own slides, the YouTube upload) confirms
// one, so none is guessed. 'Pharo Update' is a general Pharo-consortium
// community update rather than a single-speaker talk (its deck's closing
// slide reads "Pharo Pro | Talk to us :) | Esteban and me are here to talk
// to you", implying a co-presenter alongside Esteban Lorenzano, but that
// co-presenter isn't named anywhere).
//
// Unlike ESUG 2017-2019, ESUG 2016 *does* have a real slide archive at
// https://archive.esug.org/ESUG2016/ (day folders with a further
// time-slot subfolder per session), each with an Info.txt/Infos.txt
// naming the SlideShare deck, PDF, and YouTube link -- see
// talks-2016.js's header comment for how those were used.
//
// 'Welcome' (Mon 22) has its own talk page (`101-duca-welcome`) even
// though its calendar entry carries no DESCRIPTION -- Koen identified its
// YouTube video (https://youtu.be/4GxBJeAAYh0) and speaker (Stéphane
// Ducasse) directly, and its slide-archive folder has a matching PDF.
export default [
  {
    id: 'day-1',
    label: 'Mon 22',
    sessions: [
      {
        time: '10:00 – 10:30',
        subject: 'Welcome',
        talkId: '101-duca-welcome',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 11:45',
        subject: 'Cincom Smalltalk Roadmap 2016',
        talkId: '102-thom-cincom-smalltalk-roadmap-2016',
        speaker: 'Arden Thomas',
      },
      {
        time: '11:45 – 12:30',
        subject: 'The Glamorous Toolkit: Towards a novel live IDE',
        talkId: '103-girb-the-glamorous-toolkit-towards-a-novel-live-ide',
        speaker: 'Tudor Gîrba',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
      {
        time: '14:00 – 14:30',
        subject: 'A tour on Spur for non-VM experts',
        talkId: '104-poli-a-tour-on-spur-for-non-vm-experts',
        speaker: 'Guillermo Polito',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Hidden Gems in Cincom Smalltalk',
        talkId: '105-thom-hidden-gems-in-cincom-smalltalk',
        speaker: 'Arden Thomas',
      },
      {
        time: '15:00 – 15:30',
        subject: 'PharoJS',
        talkId: '106-bour-pharojs',
        speaker: 'Noury Bouraqadi, Dave Mason',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Intro to GemStone/S',
        talkId: '107-fost-intro-to-gemstone-s',
        speaker: 'James Foster',
      },
      { time: '16:00 – 16:30', subject: 'Coffee break' },
      { time: '16:30 – 19:00', subject: 'Innovation award presentations' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 23',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'VA Smalltalk Product Update and Roadmap',
        talkId: '201-okee-va-smalltalk-product-update-and-roadmap',
        speaker: "John O'Keefe",
      },
      {
        time: '9:45 – 10:30',
        subject:
          'New Native Windows UI possibilities in Next Generation Cincom Smalltalk ObjectStudio',
        talkId: '202-hilt-new-native-windows-ui-possibilities',
        speaker: 'Andreas Hiltner',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 11:30',
        subject: 'Iceberg: bringing next generation source versioning to Pharo',
        talkId: '203-pass-iceberg-bringing-next-generation-source-versioning',
        speaker: 'Nicolás Passerini',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Stories About Renraku — the new Quality Model of Pharo',
        talkId: '204-tymc-stories-about-renraku-the-new-quality-model-of-pharo',
        speaker: 'Yuriy Tymchuk',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Security with VA Smalltalk',
        talkId: '205-berm-security-with-va-smalltalk',
        speaker: 'Seth Berman',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
      {
        time: '14:00 – 14:30',
        subject: 'Parallelism with OpenCL in Bee Smalltalk',
        talkId: '206-ferr-parallelism-with-opencl-in-bee-smalltalk',
        speaker: 'Carlos Ferro',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Woden 2: Developing a modern 3D graphics engine in Smalltalk',
        talkId: '207-salg-woden-2-developing-a-modern-3d-graphics-engine',
        speaker: 'Ronie Salgado',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Bloc: a graphical user interface for the future',
        talkId: '208-cava-bloc-a-graphical-user-interface-for-the-future',
        speaker: 'Glenn Cavarlé, Aliaksei Syrel',
      },
      { time: '15:30 – 16:00', subject: 'Coffee break' },
      {
        time: '16:00 – 16:30',
        subject: 'Talking about bugs with bugs',
        talkId: '209-dals-talking-about-bugs-with-bugs',
        speaker: 'Tommaso Dal Sasso',
      },
      {
        time: '16:30 – 17:00',
        subject:
          'Continuous Integration and Deployment for Smalltalk Projects - A Tutorial using GitHub, Travis CI, and Squeak',
        talkId: '210-niep-continuous-integration-and-deployment-for-smalltalk',
        speaker: 'Fabio Niephaus',
      },
      { time: '17:00 – 18:30', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 24',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'GemStone/64 product update and road map',
        talkId: '301-gree-gemstone-64-product-update-and-road-map',
        speaker: 'Norm Green',
      },
      {
        time: '9:45 – 10:30',
        subject: 'Pharo Update',
        talkId: '302-pharo-update',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 11:30',
        subject: 'Getting more out of VisualWorks',
        talkId: '303-larc-getting-more-out-of-visualworks',
        speaker: 'Guillaume Larcheveque',
      },
      {
        time: '11:30 – 12:00',
        subject: 'The Roassal Visualization Engine',
        talkId: '304-berg-the-roassal-visualization-engine',
        speaker: 'Alexandre Bergel',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Cincom Smalltalk Protocols - new features and tools',
        talkId: '305-kott-cincom-smalltalk-protocols-new-features-and-tools',
        speaker: 'Jerry Kott',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
      {
        time: '14:00 – 14:45',
        subject: 'Tugrik: A new persistence option for Pharo',
        talkId: '306-henr-tugrik-a-new-persistence-option-for-pharo',
        speaker: 'Dale Henrichs',
      },
      {
        time: '14:45 – 15:30',
        subject:
          'Voyage Reloaded - New features and backends in the document-database',
        talkId: '307-lore-voyage-reloaded',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '15:30 – 16:00',
        subject:
          'Development and Features of the new Cincom Smalltalk ObjectStudio Launcher',
        talkId: '308-hilt-development-and-features-of-the-new-cincom-launcher',
        speaker: 'Andreas Hiltner',
      },
      { time: '16:00 – 16:30', subject: 'Coffee break' },
      { time: '19:00 – 23:00', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 25',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Let It Bee',
        talkId: '401-amar-let-it-bee',
        speaker: 'Guillermo Amaral',
      },
      {
        time: '9:30 – 9:45',
        subject: 'Out of the VM into the VI',
        talkId: '402-cani-out-of-the-vm-into-the-vi',
        speaker: 'Leandro Caniglia',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Mission Pharo Kernel',
        talkId: '403-poli-mission-pharo-kernel',
        speaker: 'Guillermo Polito',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 11:30',
        subject: 'The road to remote debugger',
        talkId: '404-kudr-the-road-to-remote-debugger',
        speaker: 'Denis Kudriashov',
      },
      {
        time: '11:30 – 12:00',
        subject: 'The Cog VM evolution',
        talkId: '405-bera-the-cog-vm-evolution',
        speaker: 'Clément Béra',
      },
      {
        time: '12:00 – 12:30',
        subject:
          'Hacking RSqueak/VM: A fast binary-compatible Squeak VM with PyPy',
        talkId: '406-felg-hacking-rsqueak-vm',
        speaker: 'Tim Felgentreff',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
      {
        time: '14:00 – 14:30',
        subject: 'Controlling Machines with Smalltalk on Raspberry PI',
        talkId: '407-heeg-controlling-machines-with-smalltalk-on-raspberry-pi',
        speaker: 'Georg Heeg, Karsten Kusche',
      },
      {
        time: '14:30 – 15:00',
        subject: 'DynaCASE modeling platform',
        talkId: '408-uhna-dynacase-modeling-platform',
        speaker: 'Peter Uhnák',
      },
      {
        time: '15:00 – 15:15',
        subject: 'A Weak Pharo Story',
        talkId: '409-poli-a-weak-pharo-story',
        speaker: 'Guillermo Polito',
      },
      { time: '15:30 – 16:00', subject: 'Coffee break' },
      {
        time: '16:00 – 16:30',
        subject: 'More XP-rience',
        talkId: '410-ross-more-xp-rience',
        speaker: 'Niall Ross',
      },
      {
        time: '16:30 – 17:00',
        subject: 'seamless – Object Oriented CMS System',
        talkId: '411-heeg-seamless-object-oriented-cms-system',
        speaker: 'Georg Heeg, Karsten Kusche',
      },
      { time: '17:00 – 18:30', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 26',
    sessions: [
      {
        time: '9:00 – 9:15',
        subject: 'Pillar: one language for all supports',
        talkId: '501-pillar-one-language-for-all-supports',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Why is worse better? or: The Power of Feedback Loops',
        talkId: '502-denk-why-is-worse-better-the-power-of-feedback-loops',
        speaker: 'Marcus Denker',
      },
      {
        time: '10:00 – 10:15',
        subject:
          'Rapid Application Development with AppeX and Google Chrome Developer Tools',
        talkId: '503-kott-rapid-application-development-with-appex',
        speaker: 'Jerry Kott',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 11:45',
        subject:
          'Replicated Service Objects -- A Strategy for Distributed Applications',
        talkId: '504-mccl-replicated-service-objects',
        speaker: 'Martin McClure',
      },
      {
        time: '11:45 – 12:30',
        subject: 'UnifiedFFI - A common language for the outside world',
        talkId: '505-lore-unifiedffi-a-common-language-for-the-outside-world',
        speaker: 'Esteban Lorenzano',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
    ],
  },
];
