// Schedule from ESUG 2017, shown on the ESUG 2017 Archive's Conference
// Program page. Source: the conference's public Google Calendar (Main
// Track .ics feed, calendar id
// 1b6gsg4lfp8nkuicn3clljjtn8@group.calendar.google.com) -- the same
// calendar embedded by https://esug.org/2017-Conference/monday.html (and
// tuesday/wednesday/thursday/friday.html), which carry no other content of
// their own. ESUG 2017 predates the agenda-page format used from 2022
// onward, so there is no https://esug.org/2017-Conference/agenda.html to
// scrape either. Most calendar entries carry the talk's full
// title/abstract/bio directly in the DESCRIPTION field, so that is the
// primary source for app/data/talks-2017.js too (see its header comment).
//
// Excluded from the main program, matching how IWST (the co-located
// International Workshop on Smalltalk Technologies) and Registration are
// excluded from every other archived year: Registration (Mon 4), IWST
// itself (Tue 5, Thu 7), and Camp Smalltalk (Sun 3 September, the day
// before the conference proper -- not one of the 4-8 September conference
// days).
//
// Sessions without a `speaker` are breaks/social slots, rendered
// differently in the UI (see app/components/program-schedule.gjs). Five
// real talks -- 'Moose reloaded' (Tue 5), 'Cargo' (Thu 7), 'Bloc new
// hands-on' (Thu 7), 'Dimensional Analysis' (Fri 8) and 'Understanding the
// Pharo Dev Process' (Fri 8) -- have a confirmed video (see
// talks-2017.js) but no confirmed speaker in the calendar entry, the
// ESUG 2017 YouTube playlist, or a web search, so they keep their
// `talkId`/video but no `speaker`, rather than guessing. 'GemStone/64
// company and business update' (Wed 6) shares its calendar DESCRIPTION
// with the following 'GemStone/64 update and roadmap' session (one
// entry names both Dan Ware's business update and Norm Green's product
// roadmap); Dan Ware is listed as its speaker without a `talkId`, and the
// shared abstract/bios and the one matching video live on the roadmap
// talk.
//
// The ESUG 2017 YouTube playlist
// (youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv, 34
// videos) also has two talks -- 'Iceberg' and 'PharoJS' -- that don't
// appear in the calendar at all (the official day pages only embed the
// same calendar, so there's no independent schedule to cross-check
// against). With no source confirming which day/time they were given,
// they are omitted here rather than guessing a slot.
//
// No slide archive exists for ESUG 2017 (https://archive.esug.org/ESUG2017/
// only has the venue map, unlike every later year), so no talk has a
// `presentationUrl`.

export default [
  {
    id: 'day-1',
    label: 'Mon 4',
    sessions: [
      { time: '9:00 – 9:15', subject: 'Welcome' },
      {
        time: '9:15 – 10:00',
        subject: 'Approachable software',
        talkId: '101-girb-approachable-software',
        speaker: 'Tudor Gîrba',
      },
      { time: '10:00 – 10:30', subject: 'Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Running Pharo on the GemStone VM',
        talkId: '102-fost-running-pharo-on-the-gemstone-vm',
        speaker: 'James Foster',
      },
      {
        time: '11:00 – 11:15',
        subject: 'gt4gemstone',
        talkId: '103-chis-gt4gemstone',
        speaker: 'Andrei Chis',
      },
      {
        time: '11:30 – 11:45',
        subject: 'Pharo Quality Engine: The Last Strokes',
        talkId: '104-tymc-pharo-quality-engine-the-last-strokes',
        speaker: 'Yuriy Tymchuk',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:45',
        subject: 'Supporting Feedback Loops',
        talkId: '105-denk-supporting-feedback-loops',
        speaker: 'Marcus Denker',
      },
      {
        time: '14:45 – 15:30',
        subject: 'What is new with Pharo 6',
        talkId: '106-denk-what-is-new-with-pharo-6',
        speaker: 'Marcus Denker',
      },
      { time: '15:30 – 16:00', subject: 'Break' },
      {
        time: '16:00 – 16:30',
        subject:
          'Do Visualizations help during development? Using Moose while coding.',
        talkId: '107-wink-do-visualizations-help-during-development',
        speaker: 'Rainer Winkler',
      },
      { time: '16:30 – 17:15', subject: 'Pharo consortium V20' },
      { time: '17:15 – 19:45', subject: 'Innovation awards' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 5',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'Cincom Smalltalk Roadmap 2017',
        talkId: '201-thom-cincom-smalltalk-roadmap-2017',
        speaker: 'Arden Thomas',
      },
      { time: '9:45 – 10:15', subject: 'Break' },
      {
        time: '10:30 – 11:00',
        subject: 'When Smalltalk images get large',
        talkId: '202-henr-when-smalltalk-images-get-large',
        speaker: 'Dale Henrichs',
      },
      {
        time: '11:00 – 11:30',
        subject: 'PDF for Gemstone',
        talkId: '203-hadr-pdf-for-gemstone',
        speaker: 'Christian Haider',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Seaside based custom ERP system',
        talkId: '204-neme-seaside-based-custom-erp-system',
        speaker: 'Bob Nemec',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:45',
        subject: 'HTTP/2 in the Cincom Smalltalk™ SiouX Server',
        talkId: '205-kott-http-2-in-the-cincom-smalltalk-sioux-server',
        speaker: 'Jerry Kott',
      },
      {
        time: '14:45 – 15:30',
        subject:
          'AppeX and JavaScript Support Enhancements in Cincom Smalltalk™',
        talkId: '206-dege-appex-and-javascript-support-enhancements',
        speaker: 'Vladimir Degen',
      },
      { time: '15:30 – 16:00', subject: 'Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Moose reloaded',
        talkId: '207-moose-reloaded',
      },
      {
        time: '16:30 – 16:45',
        subject: 'Calypso a new modular code browser for Pharo',
        talkId: '208-kudr-calypso-a-new-modular-code-browser-for-pharo',
        speaker: 'Denis Kudriashov',
      },
      {
        time: '17:00 – 17:15',
        subject: 'Calypso underhood',
        talkId: '209-kudr-calypso-underhood',
        speaker: 'Denis Kudriashov',
      },
      { time: '17:30 – 18:45', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 6',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'GemStone/64 company and business update',
        speaker: 'Dan Ware',
      },
      {
        time: '9:30 – 10:15',
        subject: 'GemStone/64 update and roadmap',
        talkId: '301-gree-gemstone-64-update-and-roadmap',
        speaker: 'Norm Green',
      },
      { time: '10:15 – 10:45', subject: 'Break' },
      {
        time: '10:45 – 11:15',
        subject: 'VA Smalltalk Product Update and Roadmap',
        talkId: '302-okee-va-smalltalk-product-update-and-roadmap',
        speaker: "John O'Keefe",
      },
      {
        time: '11:15 – 12:00',
        subject: 'A Taste of Pharo 70',
        talkId: '303-duca-a-taste-of-pharo-70',
        speaker: 'Stéphane Ducasse',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Security Enhancements in Cincom® VisualWorks® 8.3',
        talkId: '304-kott-security-enhancements-in-cincom-visualworks-8-3',
        speaker: 'Jerry Kott',
      },
      {
        time: '14:30 – 14:45',
        subject: 'PharoThings: a live programming IoT-platform.',
        talkId: '305-kudr-pharothings-a-live-programming-iot-platform',
        speaker: 'Denis Kudriashov',
      },
      {
        time: '15:00 – 15:30',
        subject: 'The moldable editor',
        talkId: '306-syre-the-moldable-editor',
        speaker: 'Aliaksei Syrel',
      },
      { time: '15:30 – 16:00', subject: 'Break' },
      {
        time: '16:00 – 16:45',
        subject: 'Ephemerons: The Strong Path to Finalization',
        talkId: '307-mccl-ephemerons-the-strong-path-to-finalization',
        speaker: 'Martin McClure',
      },
      { time: '18:30 – 23:00', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 7',
    sessions: [
      {
        time: '9:00 – 9:45',
        subject: 'Pharo Optimizing JIT Internals',
        talkId: '401-bera-pharo-optimizing-jit-internals',
        speaker: 'Clément Béra',
      },
      { time: '9:45 – 10:15', subject: 'Break' },
      {
        time: '10:15 – 10:45',
        subject: 'ReStore for Dolphin – Improved Query Block Analyser',
        talkId: '402-aspi-restore-for-dolphin-improved-query-block-analyser',
        speaker: 'John Aspinall',
      },
      {
        time: '10:45 – 11:15',
        subject: 'Playing with Snakes',
        talkId: '403-kott-playing-with-snakes',
        speaker: 'Alena Kottova',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Cargo',
        talkId: '404-cargo',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 15:30',
        subject: 'Bloc new hands-on',
        talkId: '405-bloc-new-hands-on',
      },
      { time: '15:30 – 16:00', subject: 'Break' },
      { time: '17:30 – 18:45', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 8',
    sessions: [
      {
        time: '9:15 – 9:45',
        subject: 'Dimensional Analysis',
        talkId: '501-dimensional-analysis',
      },
      { time: '9:45 – 10:15', subject: 'Break' },
      {
        time: '10:15 – 10:30',
        subject: 'Enhancing ENVY/Developer for Modern Programming Environments',
        talkId: '502-berm-enhancing-envy-developer-for-modern-programming',
        speaker: 'Seth Berman',
      },
      {
        time: '11:00 – 11:15',
        subject: 'Understanding the Pharo Dev Process',
        talkId: '503-understanding-the-pharo-dev-process',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Metamodeling of custom Pharo images',
        talkId: '504-kriv-metamodeling-of-custom-pharo-images',
        speaker: 'Pavel Krivanek',
      },
    ],
  },
];
