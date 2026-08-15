// Schedule from ESUG 2023, shown on the ESUG 2023 Archive's Conference
// Program page. Source: https://esug.org/2023-Conference/agenda.html
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs). A handful of sessions
// have a `speaker` but no `talkId` because neither a slide deck nor an
// abstract could be found for them (see app/data/talks-2023.js).

export default [
  {
    id: 'day-1',
    label: 'Mon 28',
    sessions: [
      { time: '9:30 – 10:00', subject: 'Welcome' },
      {
        time: '10:00 – 10:30',
        subject: "PharoJS'23",
        talkId: '101-bour-pharojs',
        speaker: 'Noury Bouraqadi, Dave Mason',
      },
      {
        time: '10:30 – 11:00',
        subject: 'The Pharo Debugger and Debugging Tools: Advances and Roadmap',
        talkId: '102-cost-pharo-debugger-roadmap',
        speaker: 'Steven Costiou',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Music With Pharo',
        talkId: '103-cipr-music-with-pharo',
        speaker: 'Domenico Cipriani',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Phuzzing: a Pharo toolkit for automatic fuzz testing',
        talkId: '104-poli-phuzzing',
        speaker: 'Guille Polito',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Memory Profiler',
        talkId: '105-jord-memory-profiler',
        speaker: 'Sebastian Jordan Montaño',
      },
      {
        time: '14:30 – 15:00',
        subject: 'WebGS: Building a Backend for Modern Web Applications',
        talkId: '106-fost-webgs',
        speaker: 'James Foster',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Agile Dials, a tool for project management',
        talkId: '107-bitt-agile-dials',
        speaker: 'Gregory Bittar',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Teaching Moldable Development',
        talkId: '108-nier-teaching-moldable-development',
        speaker: 'Oscar Nierstrasz',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Agile Artificial Intelligence',
        talkId: '109-berg-agile-ai',
        speaker: 'Alexandre Bergel',
      },
      {
        time: '17:00 – 17:30',
        subject: 'PolyMath, Pharo-AI, and DataFrame',
        talkId: '110-zait-polymath-dataframe-pharo-ai',
        speaker:
          'Oleksandr Zaitsev, Sebastian Jordan Montaño, Cyril Ferlicot-Delbecque',
      },
      { time: '17:30 – 19:30', subject: 'Award Competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 29',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Pharo News: 11 and more',
        talkId: '201-duca-pharo-11',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Native desktop modern applications',
        talkId: '202-labo-native-desktop-modern-application',
        speaker: 'Pierre Laborde, Eric Le Pors',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Application in Pharo',
        talkId: '203-teso-applications-in-pharo',
        speaker: 'Pablo Tesone',
      },
      {
        time: '11:30 – 12:00',
        subject: 'PDM command line reinvented',
        talkId: '204-uttn-pdm-command-line-reinvented',
        speaker: 'Richard Uttner',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Seaside Hotwired',
        talkId: '205-bric-seaside-hotwired',
        speaker: 'Johan Brichau',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Building Hybrid Applications with VAST and WebView2',
        talkId: '206-mart-vast-webview2',
        speaker: 'Mariano Martinez Peck',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Agent-based Modelling in Pharo using Cormas',
        talkId: '207-zait-cormas',
        speaker: 'Oleksandr Zaitsev',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Code instrumentation and the pitfalls of abstraction',
        talkId: '208-poli-code-instrumentation',
        speaker: 'Guille Polito, Pablo Tesone',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Building a reflexive code-coverage tool',
        talkId: '209-papa-reflexive-code-coverage',
        speaker: 'Nicolas Papagna Maldonado',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Glamourous Toolkit V1.0',
        talkId: '210-chis-glamorous-toolkit-v1',
        speaker: 'Andrei Chiș, Tudor Gîrba',
      },
      { time: '17:30 – 18:30', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 30',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Gemtalk Update',
        talkId: '301-gree-gemtalk-update',
        speaker: 'Norm Green',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Soil - a fresh look on OO databases',
        talkId: '302-hart-soil',
        speaker: 'Norbert Hartl, Marcus Denker',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Opal compiler and Blocks',
        talkId: '303-denk-opal-compiler-and-blocks',
        speaker: 'Marcus Denker',
      },
      {
        time: '11:30 – 12:00',
        subject:
          'Grafoscopio: Civic tech and how we change the tools that change us',
        talkId: '304-luna-grafoscopio',
        speaker: 'Offray Luna',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 16:00',
        subject: 'Workshop on Concept Inventories',
        talkId: '305-fuhr-workshop-concept-inventories',
        speaker: 'Charles Fuhrman, Stéphane Ducasse',
      },
      {
        time: '16:00 – 17:30',
        subject: 'Cormas hands-on: object-oriented UI foundations',
        talkId: '306-zait-cormas-hands-on',
        speaker: 'Oleksandr Zaitsev',
      },
      { time: '17:30 – 22:30', subject: 'Social Event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 31',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Instantiations Company Update',
        talkId: '401-schu-instantiations-update',
        speaker: 'Greg Schultz',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Visual user-driven database queries',
        talkId: '402-hart-visual-queries',
        speaker: 'Norbert Hartl',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Working with GemStone from Glamorous Toolkit',
        talkId: '403-gran-gemstone-glamorous-toolkit',
        speaker: 'Alistair Grant',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Your questions about Git',
        talkId: '404-poli-questions-about-git',
        speaker: 'Guille Polito, Pablo Tesone',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Google Summer of Code with Pharo',
        speaker: 'Oleksandr Zaitsev, G. Rakic',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Documentation',
        talkId: '405-kriv-documentation',
        speaker: 'Pavel Krivanek',
      },
      { time: '15:00 – 15:30', subject: 'Coffee Break' },
      {
        time: '15:30 – 16:00',
        subject: 'News from Bloc',
        talkId: '406-dias-news-from-bloc',
        speaker: 'Martín Dias, Pablo Tesone',
      },
      {
        time: '16:00 – 16:30',
        subject: 'Do you know your browser?',
        talkId: '407-dhon-do-you-know-your-browser',
        speaker: 'Koen De Hondt',
      },
      {
        time: '16:30 – 17:00',
        subject: 'VASER Control',
        talkId: '408-stal-vaser-control',
        speaker: 'Thomas Stalzer, Felix Stalzer',
      },
      { time: '17:00 – 18:00', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 1',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Roassal3 Updates',
        talkId: '501-mama-roassal3-updates',
        speaker: 'Milton Mamani Torres',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'gt4atproto: A programmable environment for social media',
        talkId: '502-hell-gt4atproto',
        speaker: 'Veit Heller',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Bio Smalltalk',
        talkId: '503-mora-bio-smalltalk',
        speaker: 'Hernán Morales',
      },
      {
        time: '11:30 – 12:00',
        subject: 'New refactoring architecture',
        talkId: '504-sare-new-refactoring-architecture',
        speaker: 'Balša Šarenac, Stéphane Ducasse',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Advanced Object-Oriented Design: a new Mooc',
        talkId: '505-duca-advanced-oo-design-mooc',
        speaker: 'Stéphane Ducasse, Luc Fabresse',
      },
      { time: '12:30 – 14:30', subject: 'Lunch' },
    ],
  },
];
