// Reference schedule from ESUG 2026, used on the Conference Program page as
// a preview of what an ESUG conference program looks like while the actual
// 2027 program is still being put together. Source:
// https://esug.org/2026-Conference/agenda.html
//
// Day labels use the actual ESUG 2027 dates (Tue 6 - Fri 9 July 2027) even
// though the session content itself is from the 2026 conference, so the
// pills line up with this year's calendar.
//
// Sessions without a `speaker` are breaks/social slots, rendered differently
// in the UI (see app/components/program-schedule.gjs).

export default [
  {
    id: 'day-1',
    label: 'Tue 6',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Welcome to ESUG',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Pharo 14 and beyond',
        talkId: 'pharo14',
        speaker: 'Stéphane Ducasse',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Pharo Pulsar: Spinning you into a Power User',
        talkId: 'pharopulsar',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Live UML Sequence Diagrams, their building and tests',
        talkId: 'liveumlsequencediagrams',
        speaker: 'Kasper Østerbye',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Bloc5: an Artful Bloc API Designed for Creativity',
        talkId: 'b5artfulblocapi',
        speaker: 'Domenico Cipriani',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'The Pharo Module System',
        speaker: 'Guillermo Polito',
      },
      {
        time: '14:30 – 15:00',
        subject: 'Compile-time PIC Generation using LiveTyping Information',
        talkId: 'compiletimepicgenusinglivetyping',
        speaker: 'Nicolás Matías Sarfati',
      },
      {
        time: '15:00 – 15:30',
        subject: 'The Future of LLM in Pharo: PharoLLM',
        talkId: 'pharollm',
        speaker: 'Omar AbedelKader',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Soil – architecture',
        talkId: 'soilindepth',
        speaker: 'Norbert Hartl, Marcus Denker',
      },
      {
        time: '16:30 – 17:00',
        subject: 'Smooth Flow of Refactorings and Tools',
        talkId: 'tools',
        speaker: 'Cyril Ferlicot, Alexis Cnockaert, Stéphane Ducasse',
      },
      { time: '17:00 – 19:00', subject: 'Awards competition' },
    ],
  },
  {
    id: 'day-2',
    label: 'Wed 7',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'GemTalk Update and Roadmap',
        talkId: 'gemtalk-roadmap',
        speaker: 'Norm Green, James Foster',
      },
      {
        time: '9:30 – 10:00',
        subject: 'Transpiling Python to Smalltalk',
        talkId: 'foster-python',
        speaker: 'James Foster',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Complishon: a Better Completion Engine for Pharo',
        talkId: 'complishon',
        speaker: 'Stéphane Ducasse, Omar Abedelkader, Mehdi Elkokei',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Moldable LLM Chats in Glamorous Toolkit',
        talkId: 'moldablechats',
        speaker: 'Andrei Chis',
      },
      {
        time: '11:30 – 12:00',
        subject: 'PharoJS 10th Anniversary: Now What?',
        talkId: 'pharojs10thanniversary',
        speaker: 'Noury Bouraqadi',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'Glamorous Toolkit',
        talkId: 'glamoroustoolkit',
        speaker: 'Andrei Chis',
      },
      {
        time: '14:30 – 15:00',
        subject: 'PharoSDL3: New FFI Bindings for SDL3 in Pharo',
        talkId: 'pharosdl3',
        speaker: 'Martin Dias, Pablo Tesone',
      },
      {
        time: '15:00 – 15:30',
        subject: "Bloc for Pharo: What's New?",
        talkId: 'bloc',
        speaker: 'Martin Dias, Pablo Tesone',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Tool Architecture',
        talkId: 'pharodesktoptour',
        speaker: 'Esteban Lorenzano',
      },
      { time: '16:30 – 18:30', subject: 'Show Us Your Project' },
    ],
  },
  {
    id: 'day-3',
    label: 'Thu 8',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Using AI to Demystify Running GemStone Systems',
        talkId: 'demystifyinggemstonewithai',
        speaker: 'Anna Stefaniv Oickle',
      },
      {
        time: '9:30 – 10:00',
        subject:
          'The VAST Platform AI Assistant: Integrating LLMs into a Live Smalltalk Environment',
        talkId: 'vastaiassistant',
        speaker: 'Johan Brichau, Kris Gybels',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject: 'Modularity by Construction',
        speaker: 'Guillermo Polito',
      },
      {
        time: '11:00 – 11:30',
        subject:
          'Pharo CIG, Round Two: Growing a Native Library Ecosystem for Pharo',
        talkId: 'pharocig',
        speaker: 'Esteban Lorenzano',
      },
      {
        time: '11:30 – 12:00',
        subject: 'MyPrecious Middleware',
        talkId: 'myprecious',
        speaker: 'Noury Bouraqadi',
      },
      { time: '12:00 – 14:00', subject: 'Lunch' },
      {
        time: '14:00 – 14:30',
        subject: 'ChatPharo: an AI Assistant Inside Pharo',
        talkId: 'chatpharo',
        speaker: 'Omar AbedelKader',
      },
      {
        time: '14:30 – 15:00',
        subject:
          'From Squeak to Pharo: Modernizing the Eclipse SageTea Runtime for Edge AI and Sovereign Computing',
        talkId: 'sagetea-pharo-runtime-ai',
        speaker: 'David Long, Stéphane Ducasse',
      },
      {
        time: '15:00 – 15:30',
        subject: 'Spec-Toplo: More Widgets, More Coverage',
        talkId: 'spectoplo',
        speaker: 'Martin Dias, Pablo Tesone',
      },
      { time: '15:30 – 16:00', subject: 'Coffee Break' },
      {
        time: '16:00 – 16:30',
        subject: 'Music Performance',
        speaker: 'DJ Lucretio',
      },
      { time: '16:30 – 23:30', subject: 'Social event' },
    ],
  },
  {
    id: 'day-4',
    label: 'Fri 9',
    sessions: [
      {
        time: '9:00 – 9:30',
        subject: 'Undo the World',
        talkId: 'martinmcclure-undotheworld',
        speaker: 'Martin McClure',
      },
      {
        time: '9:30 – 10:00',
        subject: 'An Introduction to Ownership in Object-Oriented Languages',
        talkId: 'objectownership',
        speaker: 'Marcus Denker',
      },
      { time: '10:00 – 10:30', subject: 'Coffee Break' },
      {
        time: '10:30 – 11:00',
        subject:
          'Hera: A Year in Production — Growing a BDD Framework in Pharo',
        talkId: 'heraayearinproduction',
        speaker: 'Koen De Hondt',
      },
      {
        time: '11:00 – 11:30',
        subject: 'Moose and Tree Sitter',
        talkId: 'treesitter-moose',
        speaker: 'Cyril Ferlicot',
      },
      {
        time: '11:30 – 12:00',
        subject: 'Microdown News',
        talkId: 'microdownnewgeneration',
        speaker: 'Stéphane Ducasse',
      },
      {
        time: '12:00 – 12:30',
        subject: 'Exploring the Future',
        speaker: 'Stéphane Ducasse',
      },
    ],
  },
];
