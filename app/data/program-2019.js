// Schedule from ESUG 2019, shown on the ESUG 2019 Archive's Conference
// Program page. Source: the conference's public Google Calendar (Main Track
// .ics feed) -- ESUG 2019 predates the agenda-page format used from 2022
// onward, so there is no https://esug.org/2019-Conference/agenda.html to
// scrape. Session titles are the calendar's own (sometimes abbreviated)
// labels; see app/data/talks-2019.js for each talk's full title/abstract.
//
// Wed 28 (day-3) ran two parallel tracks (Room A / Room B) for most of the
// day -- unlike every other archived year, which is single-track. Both
// sessions are listed at their shared time slot, annotated '(Track A)' /
// '(Track B)', since the shared ProgramSchedule component only renders one
// flat list per day.
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs). 'Pharo IoT: Present
// and Future' (Wed 28, Track B) had no linked talk file in the calendar --
// its `talkId`/`speaker` and app/data/talks-2019.js entry were filled in
// later from its slide deck's title slide
// (https://archive.esug.org/ESUG2019/03Wednesday/room-B/5-Pharo%20IoT.pdf),
// which is also why it sits outside the day's normal numbering (319,
// added after 301-318 were already assigned).

export default [
  {
    id: 'day-1',
    label: 'Mon 26',
    sessions: [
      { time: '9:00 – 9:30', subject: 'Welcome' },
      {
        time: '9:30 – 10:00',
        subject: 'Glamorous Toolkit',
        talkId: '101-girb-glamorous-toolkit',
        speaker: 'Tudor Girba',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Genetic Algorithms in the Artificial Intelligence Spectrum',
        talkId: '102-berg-genetic-algorithms-in-the-artificial',
        speaker: 'Alexandre Bergel',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'The Roassal3 Visualization Engine',
        talkId: '103-berg-the-roassal3-visualization-engine',
        speaker: 'Alexandre Bergel',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Constructing 3D scenes with Woden Engine',
        talkId: '104-salg-constructing-3d-scenes-with-woden',
        speaker: 'Ronie Salgado',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Future of Testing',
        talkId: '105-delp-the-future-of-testing',
        speaker: 'Julien Delplanque',
      },
      { time: '12:30 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Stargate, an interstellar journey to RESTful APIs',
        talkId: '106-cote-stargate-an-interstellar-journey',
        speaker: 'Gabriel Omar Cotelli',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Livecoding the Web Platform with Caffeine',
        talkId: '107-latt-livecoding-the-web-platform',
        speaker: 'Craig Latta',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Web Apps Using Fomantic UI',
        talkId: '108-alte-web-applications-using-fomantic-ui',
        speaker: 'Jonathan van Alteren, Don Howard',
      },
      {
        time: '15:30 – 16:00',
        subject: 'SmalltalkWeb',
        talkId: '109-daws-polyglot-web-programming-inspired-by',
        speaker: 'Ewan Dawson',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject: 'Natural System Development',
        talkId: '110-west-natural-system-development',
        speaker: 'David West',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Total refactoring of a 25 years old desktop application',
        talkId: '111-uttn-total-refactoring-of-a-25',
        speaker: 'Richard Uttner',
      },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 27',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Pharo News And Roadmap',
        talkId: '201-duca-pharo-news',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Spec 2.0 - Native GUIs for Pharo',
        talkId: '202-lore-spec-2-0-native-guis',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Present and Future of the PharoVM',
        talkId: '203-teso-present-and-future',
        speaker: 'Pablo Tesone',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Object-Centric Debugging',
        talkId: '204-cost-object-centric-debugging-for-pharo',
        speaker: 'Steven Costiou',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Pharo as Universal Development Platform',
        talkId: '205-maso-pharo-as-universal-development-platform',
        speaker: 'Dave Mason',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Porting VisualWorks Code to Pharo',
        talkId: '206-kriv-porting-of-visualworks-code',
        speaker: 'Pavel Krivanek',
      },
      { time: '12:30 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject:
          'Test Sucker: How to Convert Real Production Objects to Automated Test Cases?',
        talkId: '207-blon-test-sucker-how-to-convert',
        speaker: 'Vincent Blondeau, Mohamed Ahdach',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Diagnosing bad TDD habits with Dr. TDD',
        talkId: '208-papa-diagnosing-bad-tdd-habits',
        speaker: 'Nicolás Papagna Maldonado',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Transaction handling in Unit Testing',
        talkId: '209-nel-transaction-handling-in-unit-testing',
        speaker: 'Dirk Nel',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Slot composition',
        talkId: '210-denk-slot-composition-in-pharo-8',
        speaker: 'Marcus Denker',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject: 'TaskIt - Processing framework',
        talkId: '211-brag-taskit-processing-framework',
        speaker: 'Santiago Bragagnolo',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Threads, Critical Sections, and Termination',
        talkId: '212-mccl-threads-critical-sections-and-termination',
        speaker: 'Martin McClure',
      },
      { time: '17:30 – 18:00', subject: 'Show us your project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 28',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Gemstone Update and Product Roadmap',
        talkId: '301-gree-gemstone-update-and-product-roadmap',
        speaker: 'Norm Green',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Running Pharo in GS',
        talkId: '302-fost-running-pharo-in-gemstone',
        speaker: 'James Foster',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Onion and Swiss Cheese - Security Revisited',
        talkId: '303-kott-onion-and-swiss-cheese-security',
        speaker: 'Jerry Kott',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Evolving AllStocker (Track A)',
        talkId: '304-umez-evolving-allstocker',
        speaker: 'Masashi Umezawa, Kazunori Ueda',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Scarlet Smalltalk (Track B)',
        talkId: '305-mcin-scarlet-smalltalk',
        speaker: 'John McIntosh, Michael Rueger',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Active research on advanced debugging tools (Track A)',
        talkId: '306-cost-active-research-on-advanced-debugging',
        speaker: 'Steven Costiou, Thomas Dupriez',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Python Bridge (Track B)',
        talkId: '307-infa-pythonbridge',
        speaker: 'Alejandro Infante',
      },
      {
        time: '12:00 – 12:30',
        subject:
          'LiveTyping: Automatic Type Annotation to improve the Programming eXperience (Track A)',
        talkId: '308-wilk-livetyping-automatic-type-annotation',
        speaker: 'Hernan Wilkinson',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Big Data (Track B)',
        talkId: '309-marr-big-data-with-pharo',
        speaker: 'Matteo Marra',
      },
      { time: '12:30 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'One Rendering Tree (Track A)',
        talkId: '310-syre-one-rendering-tree',
        speaker: 'Aliaksei Syrel',
      },
      {
        time: '14:00 – 14:30',
        subject:
          'Why is VASmalltalk a great possibility for doing IoT and edge computing? (Track B)',
        talkId: '311-peck-why-is-vasmalltalk-a-great',
        speaker: 'Mariano Martinez Peck',
      },
      {
        time: '14:30 – 15:00',
        subject: 'UI Test with Spec: the Future is here (Track A)',
        talkId: '312-teso-ui-test-with-spec',
        speaker: 'Pablo Tesone',
      },
      {
        time: '14:30 – 14:45',
        subject: 'Pharo IoT: Present and Future (Track B)',
        talkId: '319-oliv-pharo-iot-present-and-future',
        speaker: 'Allex Oliveira, Marcus Denker, Norbert Hartl',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Molding declarative views (Track A)',
        talkId: '313-gran-molding-declarative-views',
        speaker: 'Alistair Grant, Juraj Kubelka, Andrei Chis',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Releasing on every commit (Track B)',
        talkId: '314-gane-releasing-on-every-commit',
        speaker: 'George Ganea',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Strategies for Non-Blocking FFI (Track A)',
        talkId: '315-teso-strategies-for-non-blocking-ffi',
        speaker: 'Pablo Tesone',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Dancing Links (Track B)',
        talkId: '316-noce-dancing-links-in-smalltalk',
        speaker: 'Massimo Nocentini',
      },
      {
        time: '16:00 – 16:30',
        subject: 'JIT Compilation for VAST (Track A)',
        talkId: '317-miti-just-in-time-compilation',
        speaker: 'Alexander Mitin',
      },
      {
        time: '16:00 – 16:30',
        subject: 'Turning a Tonel Class File into a Shell script (Track B)',
        talkId: '318-henr-turning-a-tonel-class-file',
        speaker: 'Dale Henrichs',
      },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 29',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'VA Smalltalk Product Update',
        talkId: '401-berm-va-smalltalk-product-update',
        speaker: 'Seth Berman',
      },
      {
        time: '9:30 – 10:00',
        subject:
          'Improving VASmalltalk deployment, availability and scalability with Docker',
        talkId: '402-peck-improving-vasmalltalk-deployment-availability',
        speaker: 'Mariano Martinez Peck',
      },
      {
        time: '10:00 – 10:30',
        subject: 'PolyMath: A powerful Math library',
        talkId: '403-hins-2019-polymath-updates',
        speaker:
          'Konrad Hinsen, Serge Stinckwich, Hemal Varambhia, Oleksandr Zaytsev',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Our Moneys',
        talkId: '404-haid-our-moneys',
        speaker: 'Christian Haider',
      },
      {
        time: '11:30 – 12:00',
        subject: 'RPC in Smalltalk',
        talkId: '405-fron-rpc-in-smalltalk',
        speaker: 'Annick Fron',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Regaining Privacy',
        talkId: '406-girb-regaining-privacy',
        speaker: 'Tudor Girba, Andrei Chis',
      },
      { time: '12:30 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Compression Streams',
        talkId: '407-berm-unified-compression-streams',
        speaker: 'Seth Berman',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Spec 2.0 - Building a GUI with Spec 2',
        talkId: '408-ferl-spec-2-0-building',
        speaker: 'Cyril Ferlicot-Delbecque',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Probabilistics Modeling APIs',
        talkId: '409-amar-probabilistic-modeling-apis',
        speaker: 'Guillermo Amaral',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Smalltalk Application Playground',
        talkId: '410-vano-smalltalk-application-playground',
        speaker: 'Adriaan van Os, Wouter van Zuilen',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject: 'MQTT',
        talkId: '411-mcin-p2p-communication-via-mqtt-endpoints',
        speaker: 'John McIntosh',
      },
      {
        time: '17:00 – 17:30',
        subject: 'ViennaTalk : A formal method environment on Pharo',
        talkId: '412-oda-viennatalk-a-formal-method-environment',
        speaker: 'Tomohiro Oda',
      },
      { time: '17:30 – 18:00', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 30',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Learning by doing',
        talkId: '501-duca-how-to-improve-yourself-while',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '9:30 – 10:00',
        subject: 'ObjectiveSmalltalk',
        talkId: '502-weih-objectivesmalltalk',
        speaker: 'Marcel Weiher',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Polyglot Notebooks With Squeak/Smalltalk on the GraalVM',
        talkId: '503-niep-polyglot-notebooks-with-squeak-smalltalk',
        speaker: 'Fabio Niephaus',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Design Matters',
        talkId: '504-west-design-matters',
        speaker: 'David West',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Software Architecture Stories',
        talkId: '505-poli-software-architecture-stories',
        speaker: 'Guille Polito',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Ecompletion',
        talkId: '506-roma-improving-code-completion-in-pharo',
        speaker: 'Myroslava Romaniuk, Marcus Denker',
      },
      {
        time: '12:30 – 13:00',
        subject: 'Rotten Green Tests',
        talkId: '507-duca-rotten-green-tests',
        speaker: 'Stéphane Ducasse',
      },
      { time: '13:00 – 14:30', subject: 'Lunch' },
    ],
  },
];
