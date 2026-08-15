// Schedule from ESUG 2025, shown on the ESUG 2025 Archive's Conference
// Program page. Source: https://esug.org/2025-Conference/agenda.html
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs). A handful of sessions
// have a `speaker` but no `talkId` because neither a slide deck nor an
// abstract could be found for them (see app/data/talks-2025.js).

export default [
  {
    id: 'day-1',
    label: 'Tue 1',
    sessions: [
      { time: '9:00 – 9:30', subject: 'Conference reception' },
      {
        time: '9:30 – 10:00',
        subject: 'Welcome to ESUG',
        talkId: '101-duca-welcome',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Pharo 13 and beyond',
        talkId: '102-duca-pharo13-and-beyond',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Selective Pretenuring',
        talkId: '103-jord-selective-pretenuring',
        speaker: 'Sebastian Jordan Montaño',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Spec',
        talkId: '104-dema-spec',
        speaker: 'Christophe Demarey',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Bloc and Toplo Update',
        talkId: '105-diaz-bloc-and-toplo-update',
        speaker: 'Martín Dias, Pablo Tesone',
      },
      { time: '12:30 – 14:30', subject: 'Lunch' },
      {
        time: '14:30 – 15:00',
        subject: 'Seamless OAuth2.0 and OpenID Connect Integration in VAST',
        talkId: '106-bric-seamless-oauth-and-openid',
        speaker: 'Johan Brichau',
      },
      {
        time: '15:00 – 15:30',
        subject: 'MetaCompilation with Druid',
        talkId: '107-palu-druid',
        speaker: 'Nahuel Palumbo',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Behaviour-driven development with Hera',
        talkId: '108-deho-behaviour-driven-dev-with-hera',
        speaker: 'Koen De Hondt',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:00',
        subject:
          'Metrics over Mayhem – Pragmatic Analysis of Legacy VisualWorks Systems',
        talkId: '109-krec-metrics-over-mayhem',
        speaker: 'Stefan Krecher',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Memory Management in Linux and GemStone',
        talkId: '110-mccl-memory-management-gemstone',
        speaker: 'Martin McClure',
      },
      { time: '17:30 – 19:30', subject: 'Awards competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Wed 2',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Instantiations Company Update',
        talkId: '201-wyat-instantiations-company-update',
        speaker: 'Josh Wyatt',
      },
      {
        time: '9:30 – 10:30',
        subject: 'Smalltalk for the Web and Beyond',
        talkId: '202-bour-smalltalk-for-the-web',
        speaker: 'Noury Bouraqadi, Dave Mason, Richard Ronteltap, Erik Stel',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Advancing Modern Web Architectures in Seaside',
        talkId: '203-bric-web-architecture-seaside',
        speaker: 'Johan Brichau',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Working with thousands of images',
        talkId: '204-chis-working-with-thousands-of-images',
        speaker: 'Andrei Chiș',
      },
      {
        time: '12:00 – 12:30',
        subject:
          'GeoView, views to display and interact with geographical objects and cartographic layers',
        talkId: '205-labo-geoview',
        speaker: 'Pierre Laborde, Eric Le Pors, Paul Blottiere',
      },
      { time: '12:30 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Fighting the Branch Predictor',
        talkId: '206-poli-pics',
        speaker: 'Guille Polito',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Tools and Techniques for VM',
        talkId: '207-joha-tools-and-techniques-for-vm',
        speaker: 'Henry Johansen',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Working with many AI assistants in Glamorous Toolkit',
        talkId: '208-hell-many-ai-assistants-gtoolkit',
        speaker: 'Veit Heller',
      },
      {
        time: '15:30 – 16:00',
        subject: 'Rhizome - distributions in soil',
        talkId: '209-hart-rhizome',
        speaker: 'Norbert Hartl',
      },
      { time: '16:00 – 16:30', subject: 'Coffee Break' },
      {
        time: '16:30 – 17:15',
        subject: 'Soil Tutorial',
        talkId: '210-denk-soil-tutorial',
        speaker: 'Marcus Denker, Norbert Hartl',
      },
      {
        time: '17:15 – 17:45',
        subject: 'Why Supporting Pharo is important',
        talkId: '211-duca-supporting-pharo',
        speaker: 'Stéphane Ducasse',
      },
      { time: '17:45 – 18:15', subject: 'Show us your project' },
      {
        time: '18:15 – 18:55',
        subject: 'The Code in the Corridor (Music Performance)',
        talkId: '212-cipr-code-in-the-corridor',
        speaker: 'Domenico Cipriani',
      },
    ],
  },
  {
    id: 'day-3',
    label: 'Thu 3',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'GemTalk Update and Roadmap',
        talkId: '301-gree-gemtalk-roadmap',
        speaker: 'Norm Green, James Foster',
      },
      {
        time: '9:30 – 10:00',
        subject: 'SqueakJS: A Decade of Progress',
        talkId: '302-freu-squeakjs',
        speaker: 'Vanessa Freudenberg',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Microservices: The Good, the Bad, and the Ugly',
        talkId: '303-fost-microservices',
        speaker: 'James Foster',
      },
      { time: '10:30 – 11:00', subject: 'Break' },
      {
        time: '11:00 – 11:30',
        subject: '(Turbo)Phausto: news from the pit lane',
        talkId: '304-cipri-turbo-phausto',
        speaker: 'Domenico Cipriani',
      },
      {
        time: '11:30 – 12:00',
        subject:
          'Enhancing Security in VAST: Towards Static Vulnerability Scanning',
        talkId: '305-mart-enhancing-security-in-vast',
        speaker: 'Mariano Martinez Peck, Josh Wyatt',
      },
      { time: '12:00 – 13:30', subject: 'Lunch' },
      {
        time: '13:30 – 14:00',
        subject: 'Mining software repository with Pharo',
        talkId: '306-hlad-mining-software-repository-with-pharo',
        speaker: 'Nicolas Hlad',
      },
      {
        time: '14:00 – 14:30',
        subject: 'Testing in Spec',
        talkId: '307-dema-testing-in-spec',
        speaker: 'Christophe Demarey',
      },
      { time: '14:30 – 15:00', subject: 'Coffee Break' },
      { time: '15:00 – 16:00', subject: 'Going to the social event' },
      { time: '16:00 – 22:00', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Fri 4',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'What devs are doing with Pharo',
        talkId: '401-duca-what-devs-are-doing-with-pharo',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Canyon - develop mobile apps using CodeParadise',
        talkId: '402-stel-canyon',
        speaker: 'Erik Stel',
      },
      {
        time: '10:00 – 10:30',
        subject: 'Clap - Command line for Pharo',
        talkId: '403-dema-clap',
        speaker: 'Christophe Demarey',
      },
      { time: '10:30 – 11:00', subject: 'Coffee Break' },
      {
        time: '11:00 – 11:30',
        subject: 'Glamorous Toolkit',
        talkId: '404-chis-gtoolkit',
        speaker: 'Andrei Chiș',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Fluid Class Defintions In Pharo',
        talkId: '405-denk-fluid-class-definitions',
        speaker: 'Marcus Denker',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Cavrois: an organic window manager that respects your flow',
        talkId: '406-duca-cavrois',
        speaker: 'Stéphane Ducasse',
      },
      { time: '12:30 – 14:30', subject: 'Lunch' },
      {
        time: '14:30 – 15:00',
        subject: 'ChatPharo',
        talkId: '407-abed-chatpharo',
        speaker: 'Omar Abedelkader',
      },
      {
        time: '15:00 – 15:30',
        subject: 'What people are doing with Pharo',
        talkId: '408-duca-what-people-are-doing-with-pharo',
        speaker: 'Stéphane Ducasse',
      },
    ],
  },
];
