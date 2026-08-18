// Talk titles, abstracts, speaker bios, and slide links for the ESUG 2022
// Archive's Conference Program page.
//
// Abstracts and bios are sourced from the Pillar talk files at
// https://github.com/ESUG/esug.github.io/tree/source/2022-Conference/talks
// (light copy-edits only: obvious typos fixed). Presenter names come from
// the schedule (app/data/program-2022.js) rather than being duplicated
// here.
//
// Presentation slide links point at the files hosted in the ESUG 2022 slide
// archive: https://archive.esug.org/ESUG2022 (01Monday-05Friday folders). A
// few talks were given without slides, and a few have neither slides nor an
// abstract available -- those are omitted below (only a title is shown on
// their talk page).
//
// Each paragraph is an array of "runs" -- plain text segments, or link
// segments ({ text, url }) for inline links in the original Pillar markup.

const TESONE_BIO = [
  [
    {
      text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools.',
    },
  ],
];

const POLITO_BIO = [
  [
    {
      text: "Guille Polito is research engineer at the CRIStAL laboratory in the University of Lille, working in tight relation with the RMoD team. He formerly worked in industry on service-oriented and mobile applications before doing a PhD on computer science. Guille's main research interests are modularity and development tools. Guille participates in the Pharo community since 2010 and is now a board member. His most noticeable contributions to the community are the Pharo Bootstrap process and Iceberg.",
    },
  ],
];

const HARTL_DENKER_BIO = [
  [
    {
      text: 'Norbert Hartl is the CTO and Founder of ApptiveGrid GmbH and a member of the Pharo Board.',
    },
  ],
  [
    {
      text: 'Marcus Denker is a Researcher at Inria Lille and a member of the Pharo Board.',
    },
  ],
];

const JORDAN_ZAITSEV_BIO = [
  [
    {
      text: 'Sebastian Jordan Montaño is a research engineer for the RMoD team at INRIA Lille.',
    },
  ],
  [
    {
      text: 'Oleksandr Zaitsev is a CIFRE PhD student between the RMoD team at Inria Lille - Nord Europe and the Arolla software company.',
    },
  ],
];

export default {
  '101-bour-pharojs-for-real': {
    videoId: 'rQu3GNEs5ZI',
    title: 'PharoJS for Real!',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/01Monday/02-PharoJS_for_Real_-_ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: "PharoJS dates back to 2015. True to Pharo's philosophy, it was started to build real world software. Actually, the initial motivation behind PharoJS was building mobile applications based on Web technologies using Cordova (formerly PhoneGap). This means that for production, Pharo code is transpiled to Javascript to benefit from JS's portability and speed. But, for development, we wanted to benefit from Pharo's unique set of features and IDE.",
        },
      ],
      [
        {
          text: "To do so, PharoJS provides a framework and a toolset that supports integrating Pharo code with third-party JS libraries. It also enables testing and debugging applications running on a JS interpreter. We'll discuss these features, and how they were successfully used to produce real world software.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi is a software developer, maker, repair hobbyist, environment/technology/robots lover. Currently, Noury works part-time as a university professor at IMT Nord Europe, in the Autonomous and ResilienT Systems group. His remaining work time is dedicated to a startup that uses PharoJS to build a SAS for teaching PLC programming & factory automation: PLC3000.',
        },
      ],
      [
        {
          text: 'Dave Mason is Professor in, and currently Chair of, the School of Computer Science at Ryerson University. He is a member of the Software Analysis Research Group. Dave is interested in topics such as environments and tools to support developing code in the highly-productive Smalltalk language and environment while deploying in other contexts such as in web browsers and nodeJS (PharoJS), the Java Virtual Machine (PharoJVM) and others (Universal Export).',
        },
      ],
    ],
  },
  '102-blon-extreme-programming': {
    videoId: 'zg-Q51J5hGY',
    title:
      'eXtreme Programming: How a strong test suite can strengthen the relationship with the customer?',
    abstractParagraphs: [
      [
        {
          text: 'Lifeware, founded in 1998 in Switzerland, provides a web based solution for the management of life insurance products across more than 15 customers. Since its start, Lifeware adopted the eXtreme Programming mindset: any new feature is specified, designed, coded, tested in a very short cycle. Testing is strongly automated -- the full suite runs more than 100,000 tests.',
        },
      ],
      [
        {
          text: 'On the other hand, customers are mostly used to a waterfall approach, making working with Lifeware not easy for them. We designed some processes and tools to strengthen this interaction. This talk will present some of them.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Vincent Blondeau graduated from Polytech Lille in 2014 with a Software Engineering and Statistics degree, then received his Ph.D. in Software Engineering at the University of Lille, with a dissertation on ways to select software tests related to changes in the source code. He also spent one year at Lam Research, CA, USA, as an industrial postdoc creating tooling to improve the usability of the company software. He joined Lifeware in March 2019, where one of his roles is supporting the migration of the Lifeware tools to Pharo. Vincent is also an active open source developer in the Pharo community.',
        },
      ],
      [
        {
          text: 'Fabiana Canipa has a diverse background, with a bachelor in Electromechanical Engineering obtained in Bolivia, followed by a Master degree focused on Machine Learning in Switzerland. Her master thesis on models for river flow forecasting based on machine learning was awarded best thesis of her cohort for its focus on sustainability. She has worked as a research assistant and been a fellow in international programs including YSI (Norway), ELAP (Canada) and RETECA (Switzerland). She joined Lifeware in October 2021 as a software engineer and thus began her Smalltalk journey.',
        },
      ],
    ],
  },
  '103-poli-vm-testing': {
    videoId: 'BNH35R9VORs',
    title: 'VM testing',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/01Monday/04-PharoVM-News-Guille.pdf',
  },
  '104-duca-microdown': {
    videoId: 'xPX3qeamMSY',
    title: 'Microdown: All documentation everywhere',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/01Monday/05-ESUG-Microdown-43.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation we will show Microdown, an extended, extensible, partly backward-compatible markdown. We will show how it is used to support project documentation on github and inside Pharo, to support books as documentation, and its tool support.',
          url: 'http://github.com/pillar-markup/microdown',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Kasper and Stef are involved in Microdown design and implementation.',
        },
      ],
    ],
  },
  '105-jord-pharo-ai': {
    videoId: 'R5jJBUMLxq8',
    title: 'Presenting pharo-ai',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/01Monday/06-pharo-ai-Sebastian-Jordan.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we will present the first version of pharo-ai: a Pharo library for doing Machine Learning, Graph Algorithms and other artificial intelligence related topics. We will explain the modular architecture of the library and show the algorithms that we have implemented. We will also show the wiki and the learning resources that are available, and give an insight into how to start working with the library.',
        },
      ],
    ],
    bioParagraphs: JORDAN_ZAITSEV_BIO,
  },
  '106-denk-first-class-variables-as-annotations': {
    videoId: 'embn4kX0O3k',
    title: 'First Class Variables as Annotations',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/01Monday/07-VariablesAsASTAnnotations.pdf',
  },
  '107-chis-lepiter': {
    videoId: 'X5SL3SA5UwQ',
    title: 'Lepiter: moldable knowledge platform',
    abstractParagraphs: [
      [
        {
          text: 'Lepiter is a programmable knowledge management platform. It is presently shipped with Glamorous Toolkit and can be deeply embedded in the development workflow. This lends itself to a variety of use cases like personal note taking, documenting systems, exploring data or expressing computation in multi-language notebooks. In this talk we show live demos of using this technology in real life projects.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș acts as a tool crafter at feenk building tools and techniques for improving software development and is a co-author of the Glamorous Toolkit platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
    ],
  },
  '201-duca-pharo-10': {
    videoId: 'o3f3De_R_4o',
    title: 'Improvements in Pharo 10',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/01-2022-ESUG-Pharo10.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation we will present the key features of Pharo 10. Pharo 10 saw the enhancement of Spec2, removal of Spec1, rewriting of most tools in Spec2, a massive amount of class removal (GT tools, Glamour, Spec1), a new fluid class syntax, ephemeron fixes and many more bugfixes and enhancements.',
        },
      ],
      [
        {
          text: 'In addition we will sketch the possible roadmap for Pharo 11 and the current development effort for this future version of Pharo. During this talk you will discover the new features of Pharo 10 and the vision for Pharo 11. Also, we are presenting the Pharo Consortium, the benefits of participating, and the relationship with the community.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stéphane Ducasse is the head of the Pharo consortium.',
        },
      ],
    ],
  },
  '202-mama-roassal3-updates': {
    videoId: 'awPyBLWTTvk',
    title: 'Roassal3 updates: Current status and next steps',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/02-Roassal3.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Roassal has become the standard platform to visualize data in Pharo. Roassal contains numerous tunable and interactive visualizations. This presentation highlights the latest progress of Roassal and outlines its performance with users, new layouts and scalability process.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Milton Mamani is a software engineer from Cochabamba, Bolivia. Milton has worked with Alexandre Bergel on the creation and maintenance of Roassal3, creating interactive and scalable visualizations. Milton currently works for Inria on the Rmod team.',
        },
      ],
    ],
  },
  '203-teso-application-development-with-pharo': {
    videoId: 'FdZUAWH__vk',
    title: 'Application Development with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/03-2022-Building%20Applications%20with%20Pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we present the benefits of using Pharo for the development of applications of different kinds and usages, ranging from modern desktop applications, IoT applications, deployments in containers, REST servers, and web applications. We also show our flexibility to connect to other systems, databases and existing libraries.',
        },
      ],
    ],
    bioParagraphs: [TESONE_BIO[0], POLITO_BIO[0]],
  },
  '204-fost-vscode-smalltalk-ide': {
    videoId: '2li2XdHpH20',
    title: 'Visual Studio Code as a Smalltalk IDE',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/04-VSC-AsSmalltalk-IDE-Foster.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Most Smalltalk IDEs have followed the layout and usage patterns dating to the dawn of (Smalltalk) time -- and have proven very productive. Unfortunately, these IDEs create a barrier for the "unwashed masses" who are used to editing text files in a separate IDE such as Visual Studio Code.',
        },
      ],
      [
        {
          text: 'In this presentation we will look at what it takes to use VS Code as a Smalltalk IDE. Along the way we will also demonstrate the use of GemStone as a server for a Single Page (web) Application using the Flutter framework (and Dart language), and peek at side projects that translate Python and Dart to GemStone Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'As a junior-high student in 1971, James discovered the local university’s computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James teaches undergraduate computer science classes and also serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '205-dias-bloc-for-pharo': {
    videoId: 'HvJTDYuXkMU',
    title: 'Bloc for Pharo: object-oriented UI foundations',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/06-Bloc4Pharo-ESUGSlides-v3.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Bloc is a graphical UI library that provides foundations for building widget and visualization libraries. This library has several years of development. Since 2021, we started to work on a version of Bloc to be included in Pharo. This version requires clean core features, and stability.',
        },
      ],
      [
        {
          text: 'We created Alexandrie, a new low-level canvas that uses Cairo with a focus on performance. It achieves its goal by calling the Cairo API as recommended by industry. Alexandrie requires few dependencies and uses Cairo, which is stable and widely used (e.g. Gnome, GTK+4).',
        },
      ],
      [
        {
          text: 'We will demo the library, and present its current state and future perspective.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Martín Dias worked as an engineer for many years, and got a Ph.D in 2015. He loves Pharo and the Smalltalk community. His first ESUG was in 2010, but before that he attended Smalltalks 2009 (Argentina).',
        },
      ],
      TESONE_BIO[0],
    ],
  },
  '206-hart-pharo-pro': {
    videoId: 'D90EBq6S2q8',
    title: 'Pharo Consortium, PharoPro: Professional Support for Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/07-SuportingPharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'How can you, as a commercial entity, get support for your Pharo projects? How can you support (and influence) the future development of Pharo?',
        },
      ],
      [
        {
          text: 'This talk will present the Pharo Consortium, Pharo Association, and Pharo Pro. We show how you can support the future development of Pharo for your organization, as well as how to get support for your commercial Pharo projects.',
        },
      ],
    ],
    bioParagraphs: HARTL_DENKER_BIO,
  },
  '207-hart-deploying-scaling-pharo': {
    videoId: 'MLtaHeFgbNo',
    title: 'Deploying and Scaling Pharo with a Database in Practice',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/02Tuesday/08-hartl-deployment.pdf',
    abstractParagraphs: [
      [
        {
          text: 'How do you deploy Pharo with a database in practice? This talk shows how ApptiveGrid is deployed with a focus on scaling a database server application over multiple servers.',
        },
      ],
      [
        {
          text: 'We show how ApptiveGrid uses Docker, and how deployment is scripted with Ansible to allow us to run multiple deployed versions for Continuous Integration.',
        },
      ],
      [
        {
          text: 'The second part focuses on how ApptiveGrid leverages the simplicity of an all-Pharo solution for persistence that scales over multiple servers.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norbert Hartl is the CTO and Founder of ApptiveGrid GmbH.',
        },
      ],
    ],
  },
  '301-gree-gemtalk-64-roadmap': {
    videoId: '8s4-KSNFVUU',
    title: 'GemTalk Update and GemStone/64 Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/03Wednesday/01-norm_green_esug_2022.pdf',
    abstractParagraphs: [
      [
        {
          text: 'An update on GemTalk Systems and the GemStone/64 product.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norm Green started his career in 1989 at IBM in Toronto, Canada as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build a site-wide data collection system in VisualWorks and GemStone/S Smalltalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. These days, Norm lives near Portland, Oregon, USA and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
    ],
  },
  '302-hart-apptivegrid': {
    videoId: 'VVkJsIIqMKM',
    title: 'Digitise your processes with ApptiveGrid',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/03Wednesday/02-hartl-apptivegrid.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Digitise your processes today. With ApptiveGrid you create customised solutions in the cloud. This presentation will present the application and its architecture.',
          url: 'https://www.apptivegrid.de',
        },
      ],
    ],
    bioParagraphs: HARTL_DENKER_BIO,
  },
  '303-labs-moose-modular-analyses': {
    title: 'Moose: a modular software analysis environment',
    abstractParagraphs: [
      [
        {
          text: 'Moose is a Pharo based platform for software and data analysis. It allows the representation of software systems (static data, i.e. the code) in a model. Moose provides a set of tools to query, visualise and manipulate this model. Moose is modular and is often used to craft specific tools that help developers understand software systems, make proper decisions, identify anomalies, refactor, and more. In this talk we will present Moose, its philosophy, its evolution and some of its tools.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Soufyane Labsari is an engineer, working for the RMoD team at INRIA Lille.',
        },
      ],
    ],
  },
  '304-zait-polymath': {
    videoId: 'WlCkTR9X8ck',
    title: 'Presenting PolyMath',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/03Wednesday/03-PolyMath.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we will present PolyMath and show what has changed in the last two years, as well as the roadmap for the future.',
        },
      ],
    ],
    bioParagraphs: JORDAN_ZAITSEV_BIO,
  },
  '305-maso-functional-smalltalk': {
    videoId: 'K_B0meetl8c',
    title: 'Functional Smalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/03Wednesday/04-dmason.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Smalltalk is the quintessential OO language, and is sometimes also described as a functional language -- blocks are, after all, closures, and were introduced in Smalltalk shortly after being popularized in Scheme.',
        },
      ],
      [
        {
          text: 'However, ANSI Smalltalk lacks several useful syntactic features that are common in more conventional functional languages. Pharo-Functional has numerous syntactic extensions that support much more idiomatic functional programming. In this talk, we will introduce these features and attempt to demonstrate their utility.',
          url: 'https://github.com/dvmason/Pharo-Functional',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dr. Dave Mason has been teaching and researching programming languages at Ryerson University in Toronto for over 40 years.',
        },
      ],
      [
        {
          text: 'Conor Hoekstra serves on the ISO C++ committee, has become a fan of functional, array, and combinator programming over the last few years, and recently received his MSc. from Ryerson University.',
        },
      ],
    ],
  },
  '306-jord-pharo-ai-hands-on': {
    videoId: 'DNyUQF4Kf0M',
    title: 'pharo-ai Workshop',
    abstractParagraphs: [
      [
        {
          text: 'In this workshop we will use pharo-ai algorithms in real-life problems. One of the things we will do is use the k-means algorithm to perform image segmentation. We will provide all the code already in a package ready to use and we will explain the code. We will also show how to apply pharo-ai to solve your own problems.',
        },
      ],
    ],
    bioParagraphs: JORDAN_ZAITSEV_BIO,
  },
  '401-chis-glamorous-toolkit': {
    videoId: 'tsDhL7xY-XY',
    title: 'Glamorous Toolkit in 2022',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the moldable development environment. In this talk we show live what is new in the glamorous world and how the idea of moldability affects and unifies otherwise seemingly distinct activities like programming, data science or knowledge management.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș acts as a tool crafter at feenk building tools and techniques for improving software development and is a co-author of the Glamorous Toolkit platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
      [
        {
          text: 'Veit tries to be a jack of all trades, but a master of none. As his day job he works as a DX Crafter at feenk, helping to build Glamorous Toolkit, a project he is truly excited about.',
        },
      ],
    ],
  },
  '402-cipr-live-coding-music': {
    videoId: 'S2Dff90aYDI',
    title: 'Live Coding',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/04Thursday/01-liveCoding_presentation_ESUG22.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Live Coding is an increasingly popular creative practice for audio-visual creation, in which the process of writing source code is made visible by projecting the computer screen in the audience space, with ways of visualising the code. I have designed the LiveCoding Package for Pharo with the aim of allowing musicians and live coders to write their composition in Smalltalk, exploiting its simplicity and ease of learning.',
        },
      ],
      [
        {
          text: 'The package does not (at the moment) produce any sound by itself, but it is an OpenSoundControl (OSC) and MIDI server that can control other client software or programming languages capable of real-time audio synthesis (i.e. ChucK, PureData, MaxMSP) or MIDI devices through a connection to a MIDI interface. The LiveCoding package for Pharo has been developed with youngsters and novice programmers in mind, but it can of course be fruitfully used and expanded by skilful music programmers.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Domenico Cipriani a.k.a. Lucretio has been releasing raw minimalist dance music for more than a decade and, with his label Restoration, has played an active role in the vinyl resurgence of the late 2000s. After his graduation from the S.A.E. Institute of Barcelona, he further developed his research on social semiotics with an M.A. in Linguistics at the University of Padova, focusing on an evolutionary approach to explaining language change. He discovered Smalltalk with Symbolic Sound Kyma in 2016. In 2019, he presented an interactive performance based on network-distributed Open Sound Control at the Sonic Experiments festival at ZKM. He has been live coding with Kyma and Pharo since April 2020.',
        },
      ],
    ],
  },
  '403-amar-webside': {
    videoId: 'Q4gmWTTFoww',
    title: 'Webside',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/04Thursday/02-Webside.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Webside is both the specification of an API to interact with a Smalltalk system (back-end), and a web IDE (front-end) built on top of such API.',
        },
      ],
      [
        {
          text: 'Having started as a personal React/JavaScript training exercise, and being a passionate Smalltalker who has worked across many different domains (some involving web APIs), I decided to expose Smalltalk itself through a web API and see how far I could go by implementing the classical Smalltalk IDE tools using React.',
        },
      ],
      [
        {
          text: 'In this presentation I will show Webside in action on at least two Smalltalk dialects, and share some ideas, insights and mainly questions gathered along this project.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guille has been devoted to Smalltalk for more than 20 years, using and enjoying it throughout his entire academic and professional career. He currently works for Quorum Software, a solution provider for the oil & gas industry.',
        },
      ],
    ],
  },
  '404-harl-selenium-testing': {
    videoId: 'hJfUjM4Vfjg',
    title: 'GUI-Testing Smalltalk-AJAX web applications with Selenium 4',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/04Thursday/03-selenium-testing.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Using AJAX in web applications becomes more and more popular, however GUI-testing these applications is quite difficult using standard web testing tools. The inherent problem of missing page loads, generated ids, rich AJAX client controls, and generated HTML code often leads to complicated test code, synchronization problems and slow test execution.',
        },
      ],
      [
        {
          text: "The presentation shows how these problems were solved by building a test framework based on the Selenium web test tool. The test code can be easily read and written by humans and doesn't need the usual artefacts necessary in other tools, like explicit waits for page elements, artificial delays or testing for modal dialog boxes. Even so, the test execution time is nearly optimal and therefore usually much faster than in many other web test tools.",
        },
      ],
      [
        {
          text: 'The base framework for Selenium is a revived and enhanced port of Beach Parasol to VisualWorks.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Carsten Härle is the head and founder of straightec, a consulting company with a focus on Agile development processes, Test-Driven Development, OO architecture and Smalltalk development. He has used many Smalltalk dialects including PocketSmalltalk, VisualWorks and Dolphin Smalltalk since 1986, and is the main developer of the educational Smalltalk-based product "beno".',
        },
      ],
    ],
  },
  '405-teso-improving-snapshots': {
    videoId: 'BkEhdejMAyc',
    title: 'Improving Snapshots on Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/04Thursday/04-ImproveMemoryManagement.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Snapshotting a Pharo image efficiently is challenging. Current implementations discard all optimizations done by the VM: compiled machine code, native stack representation, young generation identification. This requires a new warm-up phase every time the image is saved. This problem is aggravated when using large images. We present how introducing a semi-permanent generation of objects improves the current state, and what emerging projects arise.',
        },
      ],
    ],
    bioParagraphs: [TESONE_BIO[0], POLITO_BIO[0]],
  },
  '406-gran-working-with-remote-images': {
    videoId: 'pgfcTPKw5H4',
    title: 'Working with Remote Images',
    abstractParagraphs: [
      [
        {
          text: 'While GT & Pharo support multiple processes within the image (green threads), this is still managed within a single operating system thread, limiting the performance of the system on multi-core machines, which are the norm.',
        },
      ],
      [
        {
          text: 'This talk will discuss how we hand off tasks to worker images, tested with up to 800 workers, to allow tests, code analysis and other reflective operations to be performed in parallel, all while keeping the code in sync.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alistair Grant is a developer experience crafter at feenk building tools and techniques for making software systems explainable. Alistair is also a contributor to Pharo, and has previously managed software development in diverse areas including scientific systems, enterprise security and real-time control systems.',
        },
      ],
    ],
  },
  '407-oste-counting-sheeps': {
    videoId: 'Xg3964BS_28',
    title: 'Counting sheeps',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/04Thursday/05-ovina_sounting-sheeps.pdf',
    abstractParagraphs: [
      [
        {
          text: 'My wife and I run a hobby farm with around 30 ewes and a yearly production of 60 lambs. We mostly sell lamb meat to friends and colleagues, as well as en gros through a dealer. We started in 2005, and have since rounded more than 700 births over the years. I have built a sheep administration system -- Ovina -- in Pharo, which helps us select which lambs to breed and which ewes to retire, register locations, weights, medication and births, and compute statistics such as average litter size, growth rates, and survival rates.',
        },
      ],
      [
        {
          text: 'In this talk I would like to present a few selected aspects of the Ovina system, in particular its approach to statistics (a simple way to add new statistics and have them appear in the UI automatically), registrations (making it simple to add new kinds of registrations and use them in statistics), and consistency (making sure a change in one field is reflected across the UI and in the statistics of other animals).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Kasper Østerbye is an independent sheep farmer and former computer science professor from Denmark. Kasper has been active in Pharo, and in particular in the Microdown project.',
        },
      ],
    ],
  },
  '501-oda-remobidyc': {
    videoId: 'oaCkwdgrcjA',
    title: 're:mobidyc',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/05Friday/01-esug-remobidyc-oda.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Multi-agent simulation (MAS) is one of the research fields of computer science pioneered by LOGO and Smalltalk variants. re:mobidyc, built on top of Pharo, is a MAS language/environment dedicated to the study of biology. Despite the host language Smalltalk, re:mobidyc rather aims at less dynamic features: declarative definitions, synchronized updates on memory, reproducibility including pseudo random generators, static typing with measuring units, and loops. The objectives, design principles, and current implementation of re:mobidyc will be introduced with demos.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Tomohiro Oda is a researcher and programmer at Software Research Associates, Inc., Japan.',
        },
      ],
    ],
  },
  '502-hell-building-ide-in-gt': {
    videoId: 'G-0Vic9fQU0',
    title: 'Building an IDE in GT',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is self-described as a "multi-language notebook". But what is the process of adding a new language actually like, and what does it entail?',
        },
      ],
      [
        {
          text: 'In this talk, we will explore the process of adding the capability of working with a statically compiled language -- Carp, a borrow-checked, type-inferred language with Lisp-like macros -- to GT, and see whether by combining two very different worlds we can learn something new about both of them.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Veit is one of the core maintainers of Carp. As his day job he works as a DX Crafter at feenk, helping to build Glamorous Toolkit. For as long as he has been involved with both worlds he has dreamed of combining the two just to see what happens.',
        },
      ],
    ],
  },
  '503-duca-contributing-to-pharo': {
    videoId: 'AtjEgK3lBPE',
    title: 'Contributing to Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2022/05Friday/02-2022-ESUG-ContributeToPharo-Ducasse.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Have you ever dreamed of getting an impact and improving our lovely open-source system? In this talk we will show how easy it is to contribute to Pharo. We will fix issues live, showing each of the steps.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stéphane Ducasse is one of the main contributors to Pharo.',
        },
      ],
    ],
  },
};
