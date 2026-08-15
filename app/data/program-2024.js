// Schedule from ESUG 2024, shown on the ESUG 2024 Archive's Conference
// Program page. Source: https://esug.org/2024-Conference/agenda.html
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs). A handful of sessions
// have a `speaker` but no `talkId` because neither a slide deck nor an
// abstract could be found for them (see app/data/talks-2024.js).

export default [
  {
    id: 'day-1',
    label: 'Mon 8',
    sessions: [
      {
        time: '9:00 – 9:15',
        subject: 'Welcome',
        talkId: '101-stef-welcome',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '9:15 – 9:30',
        subject: 'Strengthening our community',
        talkId: '102-raki-strengthening-community',
        speaker: 'G. Rakic',
      },
      { time: '9:30 – 10:00', subject: 'Coffee Break' },
      {
        time: '10:00 – 10:30',
        subject: 'Mutalk, Who watches the tests?',
        talkId: '103-poli-mutalk',
        speaker: 'Guille Polito',
      },
      {
        time: '10:30 – 11:00',
        subject:
          'Virtual Reality in Pharo using WODEN Engine: Challenges and Demo',
        talkId: '104-salg-vr-in-woden',
        speaker: 'Ronie Salgado',
      },
      {
        time: '11:00 – 11:30',
        subject:
          'How to get more people onboard with Pharo? Applying LLM as support for the onboarding of new developers',
        talkId: '105-zara-llm-onboarding',
        speaker: 'Pascal Zaragoza, Marius Pingaud',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Phausto: the sound within Pharo',
        talkId: '106-cipr-phausto',
        speaker: 'Domenico Cipriani',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Gemtalk roadmap',
        talkId: '107-gree-gemtalk-roadmap',
        speaker: 'Norm Green, James Foster',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Debug Points',
        talkId: '108-cost-debug-points',
        speaker: 'Steven Costiou',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Moldable Debugging',
        talkId: '109-chis-moldable-debugging',
        speaker: 'Andrei Chiș',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Toplo',
        talkId: '110-tpso-toplo',
        speaker: 'Pablo Tesone',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Building a GTK app with Spec',
        talkId: '111-lore-spec-gtk',
        speaker: 'Esteban Lorenzano, Christophe Demarey',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Webside',
        talkId: '112-amar-webside',
        speaker: 'Guille Amaral',
      },
      { time: '17:30 – 20:50', subject: 'Award Competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Tue 9',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Pharo 12',
        talkId: '201-duca-pharo12',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Unicode String Implementations - An Overview',
        talkId: '202-joha-unicode-overview',
        speaker: 'Henry Johansen',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Building Full-Stack Unicode Applications with VAST',
        talkId: '203-mari-unicode-vast',
        speaker: 'Esteban Maringolo',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Cormas and Companion modelling and serious games',
        talkId: '204-zait-cormas-games',
        speaker: 'Oleksandr Zaitsev, Pierre Bommel',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Glamorous Toolkit',
        talkId: '205-chis-glamorous-toolkit',
        speaker: 'Andrei Chiș',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Manage your Pharo images from command line',
        talkId: '206-dema-pharo-launcher-cli',
        speaker: 'Christophe Demarey',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Asynchronous Programming with Async and Await',
        talkId: '207-fost-async-await',
        speaker: 'James Foster',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Notebooks',
        talkId: '208-noce-notebooks',
        speaker: 'Massimo Nocentini',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Pyramid: a User Interface Editor for Bloc',
        talkId: '209-lego-pyramid',
        speaker: 'Yann Le Goff',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Runtime type collection and its usage in code transpiling',
        talkId: '210-kriv-runtime-type-collecting',
        speaker: 'Pavel Krivanek',
      },
      { time: '17:30 – 18:30', subject: 'Show us your projects' },
    ],
  },
  {
    id: 'day-3',
    label: 'Wed 10',
    sessions: [
      {
        time: '9:15 – 10:00',
        subject: 'Instantiations Company Update',
        talkId: '301-berm-instantiations-update',
        speaker: 'Seth Berman',
      },
      { time: '10:00 – 10:30', subject: 'Break' },
      {
        time: '10:30 – 11:00',
        subject: 'How easy is to write a JIT compiler?',
        talkId: '302-poli-jit-compiler',
        speaker: 'Guille Polito',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Bridging the Gap: Streamlining Pharo FFI Bindings',
        talkId: '303-lore-pharo-cig',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Code Paradise',
        talkId: '304-stel-code-paradise',
        speaker: 'Erik Stel',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Beagle Smalltalk',
        talkId: '305-buck-beagle-smalltalk',
        speaker: 'David Buck',
      },
      {
        time: '14:30 – 15:00',
        subject: 'gt4gemstone',
        talkId: '306-chis-gt4gemstone',
        speaker: 'Andrei Chiș',
      },
      {
        time: '15:00 – 15:30',
        subject: 'The Pharo Debugger and Debugging Tools: Advances and Roadmap',
        talkId: '307-cost-pharo-debugger',
        speaker: 'Steven Costiou',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'A tale about scale',
        talkId: '308-hart-tale-about-scale',
        speaker: 'Norbert Hartl',
      },
      {
        time: '16:30 – 17:00',
        subject: 'WebST: Web Components with PharoJS',
        talkId: '309-bour-webst',
        speaker: 'Noury Bouraqadi',
      },
      {
        time: '17:00 – 17:30',
        subject: 'Job Opportunities/Internships',
        speaker: 'Oleksandr Zaitsev',
      },
      {
        time: '17:30 – 18:30',
        subject: 'Live Music Concert of DJ Lucretio',
        speaker: 'DJ Lucretio',
      },
      { time: '18:30 – 19:00', subject: 'Going to social event' },
      { time: '19:00 – 24:00', subject: 'Social Event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Thu 11',
    sessions: [
      {
        time: '9:30 – 10:00',
        subject: 'Community building',
        talkId: '401-krie-community-building',
        speaker: 'P. Krief',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Object-Centric Debugging',
        talkId: '402-bour-object-centric-debugging',
        speaker: 'Valentin Bourcier, Steven Costiou',
      },
      {
        time: '11:00 – 11:30',
        subject: 'gt4python: Moldable Development for Python',
        talkId: '403-vanc-gt4python',
        speaker: 'Sven Van Caekenberghe',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Community discussion',
        speaker: 'G. Rakic, Stéphane Ducasse',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Getting more from your Pharo IDE',
        talkId: '404-ferl-pharo-ide',
        speaker: 'Cyril Ferlicot-Delbecque',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Behind the scenes: The Making of VAST',
        talkId: '405-mart-making-of-vast',
        speaker: 'Mariano Martinez Peck',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Detecting and preventing Pharo vulnerabilities',
        talkId: '406-saya-vulnerability',
        speaker: 'Imen Sayar, Steven Costiou',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'gt4llm: A programmable environment for large language models',
        talkId: '407-hell-gt4llm',
        speaker: 'Veit Heller',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Data Storytelling with Pharo',
        talkId: '408-luna-data-storytelling',
        speaker: 'Offray Luna',
      },
      { time: '17:00 – 18:00', subject: 'Show us your projects' },
    ],
  },
];
