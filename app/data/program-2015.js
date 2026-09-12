// Schedule from ESUG 2015, shown on the ESUG 2015 Archive's Conference
// Program page. Source: the conference's public Google Calendar (Main
// Track .ics feed, calendar id
// qajq51tk7t22h6u87dp01b6ncc@group.calendar.google.com, linked directly by
// Koen) -- ESUG 2015 predates the agenda-page format used from 2022
// onward, same as ESUG 2016-2019. Most calendar entries carry the talk's
// full title/abstract/bio directly in the DESCRIPTION field, so that is
// the primary source for app/data/talks-2015.js too (see its header
// comment).
//
// Excluded from the main program, matching how every other archived year
// excludes its equivalents: Registration (Mon 13), IWST (Tue 14 and Wed
// 15), and Camp Roassal/CampSmalltalk (Sun 12 July, the day before the
// conference proper).
//
// The calendar's own DTSTART/DTEND times don't match the archive's slide
// folder names (e.g. the archive names a "1030-1100 Gemstone" folder for
// a session the calendar schedules 11:00-12:00) -- the calendar times were
// used throughout since they are internally consistent (no two sessions
// overlap) once converted from UTC to Europe/Paris (UTC+2 in July), while
// the archive's own folder-name times aren't. The archive was still used
// as one of two sources for `presentationUrl`/`videoId` (see
// talks-2015.js), just matched to a session by title rather than by its
// folder's day/time.
//
// Sessions without a `speaker` are breaks/social slots, rendered
// differently in the UI (see app/components/program-schedule.gjs). Talk
// ids only need to be unique within a year's own program.js/talks.js
// pair -- `app/routes/talk.js` merges every year's talks into one flat
// object keyed by id, so an id reused across two years silently
// overwrites one with the other. 'Welcome' is Stéphane Ducasse for
// several archived years, so the plain '101-duca-welcome' scheme used by
// program-2016.js/program-2025.js would collide here -- this year's
// Welcome is disambiguated as `101-duca-welcome-2015`.
// Thu 16 July ran two parallel tracks for its afternoon session (a
// 90-minute PetitParser tutorial in Track A opposite three back-to-back
// half-hour talks in Track B, then two more half-hour talks in parallel
// at 16:00) -- since the shared `ProgramSchedule` component has no
// track-column support, parallel sessions are listed sequentially with
// '(Track A)' / '(Track B)' appended to the subject.
//
// One calendar entry (Thu 16, 9:15am) is titled 'Garage RDBMS' but its
// DESCRIPTION carries the title/abstract of a different talk ('The Pharo
// Evolution' / DBXTalk relational persistence) under Esteban Lorenzano's
// name -- reproduced here as-is (the calendar's own inconsistency, not
// fixed) since the SUMMARY is what was actually printed on the schedule.
export default [
  {
    id: 'day-1',
    label: 'Mon 13',
    sessions: [
      {
        time: '10:00 – 10:30',
        subject: 'Welcome',
        talkId: '101-duca-welcome-2015',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:30 – 11:00', subject: 'Coffee break' },
      {
        time: '11:00 – 12:00',
        subject: 'GemStone/64 Update',
        talkId: '102-gree-gemstone-64-update',
        speaker: 'Norm Green',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Live Robot Programming',
        talkId: '103-fabr-live-robot-programming',
        speaker: 'Johan Fabry',
      },
      { time: '12:30 – 14:00', subject: 'Lunch break' },
      {
        time: '14:00 – 14:45',
        subject: 'Rethinking Data Visualization and Charting with Roassal',
        talkId: '104-berg-rethinking-data-visualization-and-charting',
        speaker: 'Alexandre Bergel',
      },
      {
        time: '14:45 – 15:30',
        subject: 'Concurrency in Smalltalk -- Beyond Threads',
        talkId: '105-mccl-concurrency-in-smalltalk-beyond-threads',
        speaker: 'Martin McClure',
      },
      { time: '15:30 – 16:00', subject: 'Coffee break' },
      { time: '16:00 – 18:30', subject: 'Innovation award presentations' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 14',
    sessions: [
      {
        time: '9:00 – 10:00',
        subject: 'Pharo',
        talkId: '201-duca-pharo',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:00 – 10:30', subject: 'Coffee break' },
      {
        time: '10:30 – 11:00',
        subject: 'Windows Systems Tools in Smalltalk',
        talkId: '202-hilt-windows-systems-tools-in-smalltalk',
        speaker: 'Andreas Hiltner',
      },
      {
        time: '11:00 – 11:30',
        subject: '(1/2) Reflectivity: Behavioral Reflection in Pharo',
        talkId: '203-denk-reflectivity-behavioral-reflection-in-pharo',
        speaker: 'Marcus Denker',
      },
      {
        time: '11:30 – 12:00',
        subject: '(2/2) First class Variables in Pharo',
        talkId: '204-denk-first-class-variables-in-pharo',
        speaker: 'Marcus Denker',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Homological Smalltalk Algebra',
        talkId: '205-cani-homological-smalltalk-algebra',
        speaker: 'Leandro Caniglia',
      },
      {
        time: '14:00 – 14:45',
        subject: 'Hardware-Assisted Liveness on Reconfigurable Silicon',
        talkId: '206-shin-hardware-assisted-liveness-on-reconfigurable',
        speaker: 'Boris Shingarov',
      },
      {
        time: '14:45 – 15:00',
        subject: 'Cincom Smalltalk on a Tablet',
        talkId: '207-hilt-cincom-smalltalk-on-a-tablet',
        speaker: 'Andreas Hiltner',
      },
      {
        time: '15:00 – 15:15',
        subject: 'Querier – simple relational database access',
        talkId: '208-bald-querier-simple-relational-database-access',
        speaker: 'Michal Balda',
      },
      {
        time: '15:15 – 15:45',
        subject:
          'Compliance of SOAP/XML standards does not release from extensive testing',
        talkId: '209-guhl-compliance-of-soap-xml-standards',
        speaker: 'Holger Guhl',
      },
      { time: '15:45 – 16:15', subject: 'Coffee break' },
      {
        time: '16:15 – 16:45',
        subject: 'The Pharo Evolution',
        talkId: '210-lore-the-pharo-evolution',
        speaker: 'Esteban Lorenzano',
      },
      { time: '16:45 – 18:00', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 15',
    sessions: [
      {
        time: '9:00 – 10:00',
        subject: 'Cincom Smalltalk Roadmap 2015',
        talkId: '301-thom-cincom-smalltalk-roadmap-2015',
        speaker: 'Arden Thomas',
      },
      { time: '10:00 – 10:30', subject: 'Coffee break' },
      {
        time: '10:30 – 11:00',
        subject: 'Cincom Smalltalk Security Update',
        talkId: '302-kott-cincom-smalltalk-security-update',
        speaker: 'Jerry Kott',
      },
      {
        time: '11:00 – 11:30',
        subject: 'SQL Queries on Smalltalk Objects',
        talkId: '303-fost-sql-queries-on-smalltalk-objects',
        speaker: 'James Foster',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Event Touch / Gestures',
        talkId: '304-oudd-event-touch-gestures',
        speaker: 'Merwan Ouddane',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Smalltalk-driven GUI Testing',
        talkId: '305-hilt-smalltalk-driven-gui-testing',
        speaker: 'Andreas Hiltner',
      },
      {
        time: '14:00 – 14:30',
        subject: '(1/2) The Glamorous Toolkit for Pharo',
        talkId: '306-chis-the-glamorous-toolkit-for-pharo',
        speaker: 'Andrei Chiș',
      },
      {
        time: '14:30 – 15:45',
        subject: '(2/2) [TUTORIAL] The Glamorous Toolkit for Pharo - hands-on',
        talkId: '307-chis-the-glamorous-toolkit-for-pharo-hands-on',
        speaker: 'Andrei Chiș',
      },
      { time: '15:45 – 16:15', subject: 'Coffee break' },
      { time: '16:15 – 21:00', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 16',
    sessions: [
      {
        time: '9:00 – 10:00',
        subject: 'VA Smalltalk Product Update and Roadmap',
        talkId: '401-okee-va-smalltalk-product-update-and-roadmap',
        speaker: "John O'Keefe",
      },
      { time: '10:00 – 10:30', subject: 'Coffee break' },
      {
        time: '10:30 – 11:15',
        subject:
          'Dino2 - the Amazing Evolution of the VA Smalltalk Virtual Machine',
        talkId: '402-okee-dino2-the-amazing-evolution-of-the-va-smalltalk-vm',
        speaker: "John O'Keefe",
      },
      {
        time: '11:15 – 11:45',
        subject: 'Garage RDBMS',
        talkId: '403-lore-garage-rdbms',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '11:45 – 12:30',
        subject:
          '(1/2) From Legacy Database to Domain Layer Using a New Cincom VisualWorks Tool',
        talkId: '404-ross-from-legacy-database-to-domain-layer',
        speaker: 'Niall Ross',
      },
      {
        time: '14:00 – 15:30',
        subject: '[TUTORIAL] PetitParser (Track A)',
        talkId: '405-kurs-petitparser',
        speaker: 'Jan Kurs',
      },
      {
        time: '14:00 – 14:30',
        subject:
          '(2/2) Single Page Web Application Development with SiouX and AppeX (Track B)',
        talkId: '406-kott-single-page-web-application-development',
        speaker: 'Jerry Kott',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Bringing the Concept of Quality into Pharo. (Track B)',
        talkId: '407-tymc-bringing-the-concept-of-quality-into-pharo',
        speaker: 'Yuriy Tymchuk',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Towards Well Planned Code Cities (Track B)',
        talkId: '408-tymc-towards-well-planned-code-cities',
        speaker: 'Natalia Tymchuk',
      },
      {
        time: '16:00 – 16:30',
        subject:
          'FuzzyWorld: a frame for high performance Neuro Fuzzy Expert Systems generation (Track A)',
        talkId: '409-schi-fuzzyworld',
        speaker: 'Lorenzo Schiavina',
      },
      {
        time: '16:00 – 16:30',
        subject: 'Pillar: One Format to Rule them All (Track B)',
        talkId: '410-ferl-pillar-one-format-to-rule-them-all',
        speaker: 'Cyril Ferlicot',
      },
      { time: '16:30 – 17:30', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 17',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Software and Business Modeling Platform DynaCASE',
        talkId: '501-uhna-software-and-business-modeling-platform-dynacase',
        speaker: 'Peter Uhnák',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Write everything only once. Smalltalk in government',
        talkId: '502-noe-write-everything-only-once-smalltalk-in-government',
        speaker: 'Clement Noe',
      },
      { time: '10:00 – 10:30', subject: 'Coffee break' },
      {
        time: '10:30 – 11:15',
        subject: 'Smalltalk/X: Test Automation',
        talkId: '503-gitt-smalltalk-x-test-automation',
        speaker: 'Claus Gittinger',
      },
      {
        time: '11:15 – 12:00',
        subject: 'SciSmalltalk: Doing Science with Agility',
        talkId: '504-stin-scismalltalk-doing-science-with-agility',
        speaker: 'Serge Stinckwich',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Bloc: a Modern Core for Highly Dynamic Graphics',
        talkId: '505-duca-bloc-a-modern-core-for-highly-dynamic-graphics',
        speaker: 'Stéphane Ducasse',
      },
    ],
  },
];
