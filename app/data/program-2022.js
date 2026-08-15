// Schedule from ESUG 2022, shown on the ESUG 2022 Archive's Conference
// Program page. Source: https://esug.org/2022-Conference/agenda.html
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs). A handful of sessions
// have a `speaker` but no `talkId` because neither a slide deck nor an
// abstract could be found for them (see app/data/talks-2022.js).

export default [
  {
    id: 'day-1',
    label: 'Mon 22',
    sessions: [
      { time: '9:30 – 10:00', subject: 'Welcome' },
      {
        time: '10:00 – 10:45',
        subject: 'PharoJS',
        talkId: '101-bour-pharojs-for-real',
        speaker: 'Noury Bouraqadi, Dave Mason',
      },
      {
        time: '10:45 – 11:30',
        subject: 'eXtreme Programming',
        talkId: '102-blon-extreme-programming',
        speaker: 'Vincent Blondeau, Fabiana Canipa',
      },
      {
        time: '11:30 – 12:00',
        subject: 'VM testing',
        talkId: '103-poli-vm-testing',
        speaker: 'Guille Polito',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:45',
        subject: 'Microdown',
        talkId: '104-duca-microdown',
        speaker: 'Stéphane Ducasse, Kasper Østerbye',
      },
      {
        time: '14:45 – 15:15',
        subject: 'Pharo-IA',
        talkId: '105-jord-pharo-ai',
        speaker: 'Sebastian Jordan Montaño, Oleksandr Zaitsev',
      },
      {
        time: '15:15 – 15:45',
        subject: 'First Class Variables as Annotations',
        talkId: '106-denk-first-class-variables-as-annotations',
        speaker: 'Marcus Denker, Norbert Hartl',
      },
      { time: '15:45 – 16:15', subject: 'Coffee Break' },
      {
        time: '16:15 – 17:00',
        subject: 'Lepiter: Moldable Knowledge platform',
        talkId: '107-chis-lepiter',
        speaker: 'Andrei Chiș',
      },
      { time: '17:00 – 18:00', subject: 'Live Music Show' },
      { time: '18:00 – 20:00', subject: 'Award Competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 23',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Pharo 10',
        talkId: '201-duca-pharo-10',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:15',
        subject: 'Roassal3 updates',
        talkId: '202-mama-roassal3-updates',
        speaker: 'Milton Mamani Torres',
      },
      {
        time: '11:15 – 12:00',
        subject: 'Application Development with Pharo',
        talkId: '203-teso-application-development-with-pharo',
        speaker: 'Pablo Tesone, Guille Polito',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Visual Studio Code as a Smalltalk IDE',
        talkId: '204-fost-vscode-smalltalk-ide',
        speaker: 'James Foster',
      },
      {
        time: '14:30 – 15:15',
        subject: 'Bloc for Pharo: object-oriented UI foundations',
        talkId: '205-dias-bloc-for-pharo',
        speaker: 'Martín Dias, Pablo Tesone',
      },
      {
        time: '15:15 – 15:45',
        subject: 'Pharo Pro',
        talkId: '206-hart-pharo-pro',
        speaker: 'Norbert Hartl, Marcus Denker',
      },
      { time: '15:45 – 16:15', subject: 'Coffee Break' },
      {
        time: '16:15 – 17:00',
        subject: 'Deploying and Scaling Pharo with a Database in practice',
        talkId: '207-hart-deploying-scaling-pharo',
        speaker: 'Norbert Hartl',
      },
      { time: '17:00 – 18:00', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 24',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Gemtalk Update',
        talkId: '301-gree-gemtalk-64-roadmap',
        speaker: 'Norm Green',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Digitize your process with Apptive Grid',
        talkId: '302-hart-apptivegrid',
        speaker: 'Norbert Hartl',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Moose: Modular Analyses',
        talkId: '303-labs-moose-modular-analyses',
        speaker: 'Soufyane Labsari',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Polymath',
        talkId: '304-zait-polymath',
        speaker: 'Oleksandr Zaitsev',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Functional Smalltalk',
        talkId: '305-maso-functional-smalltalk',
        speaker: 'Dave Mason',
      },
      {
        time: '14:30 – 16:00',
        subject: 'Pharo-IA hands-on: object-oriented UI foundations',
        talkId: '306-jord-pharo-ai-hands-on',
        speaker: 'Sebastian Jordan Montaño, Oleksandr Zaitsev',
      },
      { time: '16:00 – 21:00', subject: 'Social Event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 25',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Glamourous Toolkit',
        talkId: '401-chis-glamorous-toolkit',
        speaker: 'Andrei Chiș, Veit Heller',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Live Coding Music',
        talkId: '402-cipr-live-coding-music',
        speaker: 'Domenico Cipriani',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Webside',
        talkId: '403-amar-webside',
        speaker: 'Guille Amaral',
      },
      {
        time: '11:30 – 12:00',
        subject: 'GUI-Testing Smalltalk-AJAX web applications with Selenium 4',
        talkId: '404-harl-selenium-testing',
        speaker: 'Carsten Härle',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:45',
        subject: 'Improving Snapshots on Pharo',
        talkId: '405-teso-improving-snapshots',
        speaker: 'Pablo Tesone, Guille Polito',
      },
      {
        time: '14:45 – 15:30',
        subject: 'Working with Remote Images',
        talkId: '406-gran-working-with-remote-images',
        speaker: 'Alistair Grant',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Counting sheeps',
        talkId: '407-oste-counting-sheeps',
        speaker: 'Kasper Østerbye',
      },
      { time: '16:30 – 17:30', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-5',
    label: 'Fri 26',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 're:mobidyc',
        talkId: '501-oda-remobidyc',
        speaker: 'Tomohiro Oda',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Building an IDE in GT',
        talkId: '502-hell-building-ide-in-gt',
        speaker: 'Veit Heller',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Contributing to Pharo',
        talkId: '503-duca-contributing-to-pharo',
        speaker: 'Stéphane Ducasse',
      },
      { time: '11:30 – 13:30', subject: 'Lunch' },
    ],
  },
];
