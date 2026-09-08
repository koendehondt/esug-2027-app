// Talk titles, abstracts, and speaker bios for the ESUG 2018 Archive's
// Conference Program page.
//
// ESUG 2018 predates the archive.esug.org agenda-page/slide-index and
// YouTube-playlist organization used from 2022 onward, so this data was
// assembled by hand rather than scraped in bulk:
//
// - title/abstractParagraphs/bioParagraphs: sourced directly from the
//   conference's public Google Calendar (Main Track .ics feed, provided
//   directly by Koen as schedule.ics), whose DESCRIPTION field carries each
//   talk's speaker(s), abstract, and bio inline (unlike ESUG 2019's
//   calendar, which only links out to GitHub Pillar files). Light copy-edits
//   only (obvious typos fixed, HTML stripped, labels like ""Abstract:""
//   removed), matching the convention used for other years. 'GemStone
//   Roadmap' and 'Pharo IoT' had no DESCRIPTION at all -- their title and
//   speakers were instead read off their slide decks' title slides.
// - `presentationUrl`: matched from https://archive.esug.org/ESUG2018/
//   (day folders 01-Monday..05-Friday, numbered in schedule order), which
//   hosts per-talk folders with the deck (PDF) and an info.txt. Not every
//   talk has a PDF -- a few were demos ("DemoOnly.txt") or never received
//   their slides ("MISSING" in the folder name).
// - `videoId`: matched from the conference's YouTube playlist
//   (youtube.com/playlist?list=PLJ5nSnWzQXi9RhA8zyKw_qelUpVVlumV9, 25
//   videos) by title (titles sometimes differ slightly from the calendar
//   title, e.g. "PharoThings: Playing with Sensors on Raspberry PI" for the
//   Pharo IoT talk). Only 24 of the 49 catalogued talks have a video; the
//   25th playlist entry is the Welcome session, which has no talkId.
//
// Presenter names come from the schedule (app/data/program-2018.js) rather
// than being duplicated here.
//
// Each paragraph is an array of "runs" -- plain text segments, matching
// the shape used by the other talks-YYYY.js files.

export default {
  '101-poli-do-you-really-understand-git': {
    title: 'Do you really understand git?',
    videoId: 'gFb9BaBZ8ko',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/01-Do%20you%20really%20understand%20git/2018-Git-ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this session we will revise some git basics that are needed to become a git expert.',
        },
      ],
      [
        {
          text: '- Git as a graph: what are commits, branches and tags and how do they relate? - Branching and merging. Conflict!? What does git tell me there? - Remotes and upstream, are they the same? - Github pull requests and branching.',
        },
      ],
      [
        {
          text: "Come with your questions. We will try to find the answers in git's documentation.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guille Polito is research engineer at the CRIStAL laboratory in the university of Lille, working in tight relation with the RMoD team. Guille's main research interests are techniques to develop modular systems and new development tools. Guille participates in the Pharo community since 2010. His most noticeable contributions in the past months are in the Pharo bootstrap process, Pharo stream management, Iceberg and OSSubprocess.",
        },
      ],
    ],
  },
  '102-pala-pharo-in-corner-cases-of-the-enterprise': {
    title: 'Pharo in Corner Cases of the Enterprise',
    videoId: 'kTae90QQXvY',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/02-Pharo%20in%20Corner%20Cases%20of%20the%20Enterprise/PharoInCornerCases-180910.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Based on my experiences from using Pharo over the last three years in three different industrial projects, I propose to discuss the following: - What are the areas were Pharo can be used successfully in an enterprise context? - What are ways of introducing Pharo to non-mainstream-technology-averse organizations? - What in Pharo is attractive for the independents and small companies who provide IT services pertaining to a lifecycle of enterprise systems? - What in Pharo could be improved to increase this attractiveness?',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "My first contact with Smalltalk was around '87 - I took a Smalltalk course at school, using Digitalk/V. I worked with Smalltalk full time between 1990 and 2002 or so, in Australia and in the US, mostly in enterprise-level applications and systems. After several years of working with big companies and big systems in the US as Technical/Solution/Application/Lead/etc Architect, I went independent and consequently had the opportunity to use Smalltalk (Pharo specifically) on three different projects over the last 3+ years.",
        },
      ],
    ],
  },
  '103-denk-open-source-an-infinite-game': {
    title: 'Open-source, an Infinite Game',
    videoId: 'EukB9n2owwY',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/03-Open-source%2C%20an%20Infinite%20game/2018-InfiniteGames.pdf',
  },
  '104-girb-reshaping-the-development-experience': {
    title: 'Reshaping the Development Experience',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/04-Reshaping%20the%20development%20experience/reshaping-dx.pdf',
    abstractParagraphs: [
      [
        {
          text: 'The Glamorous Toolkit aims to reshape the development experience. The first generation defined the notion of moldable development. In this talk we provide an overview of how the second generation of the toolkit pushes the envelope further.',
        },
      ],
    ],
  },
  '105-thom-cincom-roadmap': {
    title: 'Cincom Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/05-Cincom%20roadmap/05-CincomESUG_2018%20.pdf',
    bioParagraphs: [
      [
        {
          text: "Arden Thomas started using Smalltalk in 1986, when he was researching and exploring better ways to do software development. He found it! Smalltalk and object-oriented were such a profoundly improved approach to software development, that he made a full commitment to using Smalltalk. Arden used Smalltalk in his post-graduate work thesis and projects. Arden has worked with Smalltalk for IBM, Parcplace Systems, ParcPlace-Digitalk, ObjectShare, and a hedge fund in a number of capacities including developer, trainer, architect, consultant, and sales SE. Arden is currently the Cincom Smalltalk product manager managing Cincom's ObjectStudio and VisualWorks products.",
        },
      ],
    ],
  },
  '106-uttn-the-apart-framework-separation-of-use-cases-and': {
    title:
      'The aPart Framework: Separation of Use Cases and GUI in Business Applications',
    videoId: 'GHMrvS4gmG8',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/06-The%20aPart%20Framework%20%20Separation%20of%20Use%20Cases%20and%20GUI%20in%20Business/06-APartFrameworkESUG2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Based on the need of totally refactoring an existing business application written in VisualWorks, the light-weight framework aPart introduces several layers for separation like parts and clients. Thus it provides usage patterns and framework classes to significantly reduce redundancy in the glue of typical application code (e.g. dealing with prompts, headless testing, recording of interface activities to replay in tests, nesting parts to provide reusable components, expressing aspects of business logic, safe initialize and shutdown cycles etc.). The talk will present the most interesting results already achieved by now and finally will give a preview of the upcoming open source edition for other Smalltalk platforms.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Starting as a freelancer in 1980, Richard has been involved in numerous software projects where he worked together closely with more than 600 developers overall. His experience covers business applications as well as tool development in Smalltalk, which he started working with in 1992 and where his focus is still on.',
        },
      ],
    ],
  },
  '108-stin-ml-in-pharo-tensorflow-with-pharo': {
    title: 'ML in Pharo: TensorFlow with Pharo',
    videoId: '9Fk_FC7G0wk',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/08-ML%20in%20Pharo%20TensorFlow%20with%20Pharo/08-TF-ESUG2018-SergeStinckwich.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, we will present our work in order to use the TensorFlow numerical computing library from Pharo. We will illustrate our talk with a hands-on session where the user will build his own neural network.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Serge was introduced to Smalltalk during his master in the nineties and since then is a Smalltalk zealot. Serge is a computer scientist from Sorbonne University and IRD (Institut de Recherche pour le Développement). He is working on live domain-specific tools and languages for the simulation of complex systems. He is currently living in Yaoundé, Cameroon.',
        },
      ],
    ],
  },
  '109-berg-tutorial-ai-for-dummies': {
    title: 'Tutorial: AI for Dummies',
    abstractParagraphs: [
      [
        {
          text: 'This tutorial is an introduction to three common techniques in the field of artificial intelligence. First, we will detail neural networks and see a number of applications of them. Second, we will review what are genetic algorithms and how they are useful in optimization and searching. Third, we will combine neural networks and genetic algorithm to define an unsupervised form of learning, which we call neuroevolution. We will see numerous example of data classification and artificial player in games. The time of this tutorial is 2 hours.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Assistant Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering. His effort is about designing tools and methodologies to improve the overall performance and internal quality of software systems, by employing profiling, visualization, and artificial intelligence techniques. Alexandre Bergel has authored over 100 articles, published in international and peer reviewed scientific forums, including the most competitive conferences and journals in the field of software engineering. Alexandre has participated to over 107 program committees of international events. Alexandre has also a strong interest in applying his research results to industry. Several of his research prototypes have been turned into products and adopted by major companies in the semi-conductor industry and certification of critical software systems. Alexandre authored the book Agile Visualization and co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '110-kriv-moose-meta-modelling': {
    title: 'Moose Meta-Modelling',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/09-Moose%20Meta-Model/moose-Esug2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, I will present and demonstrate the new infrastructure that Moose provides for building of custom meta-models of programming languages. I will describe the reasons why we replaced the FAMIX meta-model and show how we use the new Pharo features as stateful traits, slots and Ring meta-model to implement it.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Inria Nord Europe in the RMoD team (http://rmod.lille.inria.fr). He actively participates in the Pharo open source community with the primary focus on Pharo modularization, bootstrapping and cleaning. Currently, he works on the new meta-modelling infrastructure of the Moose platform.',
        },
      ],
    ],
  },
  '111-chis-example-driven-development': {
    title: 'Example-driven Development',
    videoId: 'xYBwhQm4VPo',
    abstractParagraphs: [
      [
        {
          text: 'Examples are somewhat like tests that return objects. This apparent small change can have deep implications on development. In this session we provide a hands-on experience of developing driven by examples, and outline the implications.',
        },
      ],
    ],
  },
  '112-cani-syntactic-excursions': {
    title: 'Syntactic Excursions',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will discuss different extensions to the Smalltalk syntax for a number of reasons and applications.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Palantir Solutions - Director of Development. Fast - President and founding member.',
        },
      ],
    ],
  },
  '113-bler-teaching-ict-trends-in-pharo': {
    title: 'Teaching ICT Trends in Pharo',
    videoId: 'ZNPbhvEgqTk',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/01-Monday/12-Teaching%20ICT%20trends%20in%20Pharo/ESUG18-CB.pdf',
    abstractParagraphs: [
      [
        {
          text: "This presentation is an experience report on using Pharo to teach Information and Communication Technology Trends to engineering students. More than 75% of the students (Semester 8) use Pharo to develop simple servers interacting with self made and simple IoT (usage of Raspberry and micro controller ESP32). It's also used on other subjects like «deep learning», Mashable application based on API or webscrapping techniques.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an assistant professor in a French engineering school since 2010. Mechanical engineer, I fell in love with Smalltalk during my PhD and I'm now responsible of a general lecture on ICT trends. My main research field is about universal information system (for people, objects, cyber-physical systems…). Keywords: IoT, CPS, digital twin, Information system, ...",
        },
      ],
    ],
  },
  '201-bour-pharojs-pharo-based-tdd-for-javascript': {
    title: 'PharoJS: Pharo-Based TDD for Javascript Applications',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/01-PharoJS%20Pharo-Based%20TDD%20for%20Javascript%20Applications/01-2018-09-11-EsugPharoJs-NouryBouraqadi.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk is an update on PharoJS (http://pharojs.org). It covers the current status of the PharoJS development process, as well as its tools. Through an example, we will describe how to use PharoJS, and how it supports TDD, starting with a Pharo code, and ultimately compiling it to Javascript that runs on a JS interpreter (Web browser, NodeJS...). The talk will also give a glimpse of some recent applications developed using PharoJS, and draw a roadmap for the future of PharoJS.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi is a full professor in Software Engineering and Robotics at IMT Lille Douai (France). His research aims at easing development of complex software using dynamic languages, in the context of distributed systems. He specifically focuses on mobile autonomous robots and multi-robot systems.',
        },
      ],
      [
        {
          text: 'Dave Mason is a full professor at Ryerson University (Canada). He is interested in "Programming for the rest of us" -- a programming language/environment to make programming, particularly of dynamic or large datasets, accessible to the non-programmers of the world -- as well as an up-front optimizing Java compiler called OptiJava, issues relating to software reliability engineering (particularly Probabilistic Program Execution using Smalltalk), and programming languages, particularly pure object-oriented languages like Smalltalk, Self and Ruby and mostly-functional languages like Scheme and Clojure.',
        },
      ],
    ],
  },
  '202-lore-pharo-consortium-a-roadmap-to-solid-evolution': {
    title: 'Pharo Consortium: A Roadmap to Solid Evolution',
    videoId: '6vax47zC47Y',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/02-Pharo%20Consortium%20-%20A%20roadmap%20to%20solid%20evolution./02-ESUG2018-Pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: "The Pharo Consortium takes action to guarantee the growth of Pharo as a community organisation as well as supports its development into ever-changing requirements of today's computing needs. In this talk I will present the current status of Pharo Consortium, its consolidation as Pharo governance structure and the actions taken to make Pharo a more robust environment. I will also review the Pharo 7 development and direction for Pharo 8 and beyond.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano studied Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object-oriented and low-level technologies, in different software companies, serving in various positions from programmer to senior architect. In 2007 he co-founded Smallworks to offer Pharo-based agile development projects. Since 2012 he dedicated full time to developing the Pharo code and community. He works with the INRIA-RMoD team in Lille, France, as core developer for Pharo, being responsible with the coordination of new releases, the implementation and maintenance of Pharo libraries and the maintenance of the Pharo flavour of the Cog Virtual Machine, FFI integration and plugins in all major platforms (OSX, Linux and Windows).',
        },
      ],
    ],
  },
  '203-wage-something-for-the-cloud': {
    title: 'Something for the Cloud',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/03-Something%20for%20the%20Cloud/03-ESUG2018-SomethingForTheCloud.pdf',
    abstractParagraphs: [
      [
        {
          text: "Goal of the research project 'Cloud-basierte Collaboration Software auf dem Weg zur Information 4.0 Welt von morgen' funded by the EU and Efre NRW is to find solutions to enable smooth collaboration between project participants using an office automation software which stores its data in a hybrid cloud. The software is implemented in VisualWorks and uses Postgres as its back-end. The following solutions were developed in the project: aPart as a development framework (see presentation by Richard Uttner), a generic GlorpPart framework to ease the development of UIs for domain objects stored in a database, the DeltaLibrary for secure file storage using highspeed retrieval and distribution in networks, a dynamic translation mechanism for displaying e.g. names of domain objects, and an infrastructure to allow zooming of UIs to adapt for visually impaired users. And of course we use an automatic build and test framework to keep our development process agile.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Working for Georg Heeg since 1990, I worked with all VisualWorks versions ever released. First used it to solve support calls with customers, then I taught Smalltalk using VisualWorks, and finally I started consulting customers and implementing frameworks.',
        },
      ],
    ],
  },
  '204-kott-smalltalk-security-landscape': {
    title: 'Smalltalk Security Landscape',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/04-Smalltalk%20Security%20Landscape/04-esug2018-smalltalk-security-landscape-jerry-kott.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, Jerry will present an overview of various Smalltalk dialects, platforms and frameworks in the context of cybersecurity threat landscape. He will focus on the OWASP Top Ten most critical web application vulnerabilities and how they apply to Smalltalk-written web applications. He will show practical examples of testing Smalltalk applications for security vulnerabilities.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Jerry has been a Smalltalk developer and advocate for over 25 years. Throughout his career, he has worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. He spent ten years as an engineer at Cincom Systems where he was responsible for protocols and web application development components of the Cincom Smalltalk Foundation. Jerry's interest in cybersecurity led him to pursue advanced cybersecurity training. He is an Offensive Security Certified Professional, with additional training in Enterprise Incident Response from Mandiant, a leading cybersecurity consulting firm. In his quest for understanding all aspects of security, he developed a deep appreciation for the human side of cybersecurity and learning of the attacker mindset. After leaving Cincom, Jerry has focused his energy on applying cybersecurity's best practices in the Smalltalk space, doing research in vulnerability assessment and penetration testing.",
        },
      ],
    ],
  },
  '205-chan-docker-and-pharo-at-zweidenker': {
    title: 'Docker and Pharo at ZWEIDENKER',
    videoId: 'Ncdrk5Bd9fY',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/05-Docker%20and%20Pharo%20at%20ZWEIDENKER/Docker@Zweidenker.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Over the last year, we have setup a new infrastructure to host the applications developed by ZWEIDENKER. With now over 100 Pharo images running, the new setup has proven its flexibility and scalability. In this talk we will present the general setup with Pharo, Docker Swarm and the supporting software stack. We discuss specifically three topics: 1) how we solve the problem of deploying a project for all three phases: development, testing and production. 2) Integration of CI with automatic deployment (after each commit in case of development). 3) the flexibility of running the whole stack locally on the development machine if needed (e.g. for debugging).',
        },
      ],
    ],
  },
  '206-wink-abap-for-moose': {
    title: 'Abap for Moose',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/06-Abap%20for%20Moose/06-Presentation%20ESUG%202018%20Test%20Seams%20Moose2Model.pdf',
    abstractParagraphs: [
      [
        {
          text: 'The software company SAP has an own computer language for developing business applications, ABAP. This language is continuously improved and intents like Smalltalk to reduce the effort to develop applications. I will show the new ABAP statements TEST-SEAM and TEST-INJECTION which can significantly reduce the effort to create Unit Tests for code with external dependencies. I know currently of no other languages that have such a statement. I will speak about my experiences and discuss a possible implementation in Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Rainer Winkler is developer for SAP applications specialized in SAP tools for reporting. He is interested in software maintenance and in getting legacy code under control. He works primarily with ABAP and enjoyed learning Pharo recently to utilize Roassal and Moose.',
        },
      ],
    ],
  },
  '207-henr-rowan-a-new-project-package-manager': {
    title: 'Rowan: A New Project/Package Manager',
    videoId: 'iqOHGeZ5fWQ',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/07-Rowan%20A%20new%20project%20package%20manager/07-Rowan_ESUG_2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Rowan is a new take on project/package management for Smalltalk. Last year GemTalk Systems decided to incorporate a git-based source code management system into our base product. With Monticello nearly 15 years old, Metacello almost 10 years old, and FileTree over 5 years old the plan was to build a project/package management system for GemStone/S from the ground up. Martin McClure began by designing a file per class disk format as an alternative to FileTree, which eventually became the basis for Tonel. This year we are building the project loader and in-image project management. Features include: atomic project loading; first class projects and packages; definition-based from top to bottom with project, package, class and method definitions; a complete "tools" API for working with definitions as well as loaded entities (projects, packages, classes and methods). Metacello functionality (conditional package loading and project dependencies) is being handled by disk-based (Rowan) configuration objects. Jadite is the development GUI for Rowan. The initial version of Jadite is an adaptation of Jade, a Dolphin-based development environment for GemStone/S that has been maintained by James Foster for many years. We are currently working on expanding the functionality of Jadeite to incorporate Rowan projects and configurations. We also plan on starting work on a Pharo-based Rowan client later this year.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dale Henrichs is a Principal Engineer at GemTalk Systems and has been working in Smalltalk since 1985. For the last decade Dale has focused on the development and support of open source projects for both GemTalk Systems and the Smalltalk community. His contributions to the Smalltalk community include Metacello, FileTree, and the GemStone port of Seaside. Recently Dale completed work on a major rewrite of the GemStone/S indexing system.',
        },
      ],
    ],
  },
  '208-blon-cruiser-a-pharo-packaging-tool': {
    title: 'Cruiser: A Pharo Packaging Tool',
    videoId: 'BJRgJwx5_8s',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/08-Cruiser%20-%20A%20Pharo%20packaging%20tool/08-Cruiser-VincentBlondeau-ESUGPresentation.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Desktop Pharo applications are nowadays difficult to configure and to package for production. To lower this burden, we created Cruiser, a tool to package Pharo applications. The idea is to quickly convert an application from a development environment to a production one. A production environment means: (1) No writing on the disk, (2) No access to the source code (by the shortcuts, debugger,...), (3) No error display on the interface, (4) Nothing else except the user application.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Vincent Blondeau is a postdoc working for Lam Research Corporation in tight relation with the RMoD research team where he just finished his PhD named: "Test Selection Practices in a Large IT Company". His primary work revolves around dealing with improvement of the development processes using VisualWorks. He is also active in the Pharo community.',
        },
      ],
    ],
  },
  '209-poli-iceberg-2018-bringing-pharo-to-git-or-git-to': {
    title: 'Iceberg 2018: Bringing Pharo to Git, or Git to Pharo?',
    videoId: '-ujX0Jt7-64',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/02-Tuesday/09-Iceberg%20201%20-%20bringing%20Pharo%20to%20git,%20or%20git%20to%20Pharo/2018-Iceberg-ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: "In 2016, Iceberg was born so people could host their Pharo projects on git repositories. Since 2017, Pharo is hosted in git and bootstrapped from sources on each new commit. Iceberg is then not only important for private projects but also crucial in Pharo's contribution process. Today, more than two years since the project started, we have learnt some lessons: not everybody understands git, and Pharo projects are not simple git projects. This talk gives an overview of the challenges we had to overcome, such as dual working copies, in-memory merge strategies, external resources and performance issues arising from big Pharo projects (e.g., Pharo itself).",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guille Polito is research engineer at the CRIStAL laboratory in the university of Lille, working in tight relation with the RMoD team. Guille's main research interests are techniques to develop modular systems and new development tools. Guille participates in the Pharo community since 2010. His most noticeable contributions in the past months are in the Pharo bootstrap process, Pharo stream management, Iceberg and OSSubprocess.",
        },
      ],
    ],
  },
  '301-gree-gemstone-roadmap': {
    title: 'GemStone Roadmap',
    videoId: 'RkkHyuoytaA',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/01-Gemstone%20Roadmap/norm_esug_2018.pdf',
  },
  '302-berm-va-smalltalk-product-update': {
    title: 'VA Smalltalk Product Update',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/02-VA%20Smalltalk%20Product%20Update/02-VA%20Smalltalk%20Update-ESUG2018.pdf',
    abstractParagraphs: [
      [
        {
          text: "VA Smalltalk is continuing to push aggressively into the future with new virtual machine platforms and numerous features. I'm going to talk about the success story of our VA Smalltalk 64-bit launch last September, cover all the new capability in the current release, and discuss what's coming up next for the VA Smalltalk product.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Seth is the President/CEO of Instantiations, as well as a member of the technical staff. During his time as a developer with Instantiations he has been primarily involved with developing the VA Smalltalk code editor, code completion and live type inference capability, cryptography support, compression support, 64-bit virtual machine and Smalltalk's FFI library enhancements. Before joining Instantiations in May of 2011, Seth spent 10 years developing software for the U.S. government. During this time he worked in a variety of domains to include stochastic simulation, operations research, grid computing and link analysis. He has a B.S. in Computer Science and an M.S. in Software Engineering.",
        },
      ],
    ],
  },
  '303-ferl-seaside-add-ons': {
    title: 'Seaside Add-ons',
    videoId: 'MMTbU3OF970',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/03-Seaside%20Addons/Seaside%20Addons.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Seaside is a heretic web framework with an unique design that have the advantage of been more productive than most web framework. One of its current downside is the fact that it has only few known libraries built on top of it to be even more productive. To correct this problem, some developers try to build reusable libraries to covers some common needs. This presentation will cover some of those recent projects: Material Design Lite, Telescope-Cytoscape, ChartJs for Seaside, Prism code displayer for seaside, Heimdall.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Cyril is currently a research and development engineer at Synectique, a company specialized in software analysis, after obtaining a Master of Business Informatics at the University of Lille. He is building tools to reduce maintenance cost of applications. He likes participating in open source projects in his free time such as Pharo, Moose, Telescope, Material Design Lite...',
        },
      ],
    ],
  },
  '304-cote-willow-the-interaction-tour': {
    title: 'Willow, the Interaction Tour',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/04-Willow,%20the%20interaction%20tour/04-Willow_%20The%20interaction%20tour.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk presents Willow, a Web Interaction Library that provides all the components and tools to create an interactive AJAX-based web application, without leaving the comfort of your Smalltalk environment. After years of refinement and with a growing ecosystem of related projects, Willow is currently used by software development companies, personal commercial products and university research projects. We will focus on presenting the user interaction affordances, while also showcasing its features and the most relevant reifications for web commands and components.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Bachelor in CS, Smalltalker since 2004, autodidact, free-thinker. Supporter of libre knowledge, human intelligence augmentation and open source software. Works at Mercap Software developing financial software and contributes to several open source projects.',
        },
      ],
    ],
  },
  '305-fost-a-browser-based-ide-for-cloud-hosted-gemstone': {
    title: 'A Browser-based IDE for Cloud-hosted GemStone',
    videoId: 'k8OwP0FC7Uo',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/05-A%20Browser-based%20IDE%20for%20Cloud-hosted%20GemStone/05-Foster%202018-09%20ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: "While Smalltalk has been an innovator in many ways, hosted development tools has not been a notable area of leadership. Smalltalk's ecosystem tends to have a more challenging install process (particularly for GemStone) and this may limit its ability to attract attention. Tools like Cloud9 and Jupyter make it very easy to experiment with C++ or Python using just a web browser. In this presentation we look at an approach to using GemStone in the cloud with only a web browser.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "As a junior-high student in 1971, James discovered the local university's computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk bigot. James is teaching undergraduate computer science classes and also serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.",
        },
      ],
    ],
  },
  '306-labo-smalltalk-usage-for-ui-prototyping-in-thales': {
    title: 'Smalltalk Usage for UI Prototyping in Thales Industrial Context',
    videoId: 'Oq1RSDn2P5Y',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/06-Smalltalk%20usage%20for%20UI%20prototyping%20in%20Thales%20industrial%20context/06-Prototyping%20UI%20with%20smalltalk%20in%20THALES%20-%20ESUG%202018%20Presentation.pdf',
    abstractParagraphs: [
      [
        {
          text: 'We will present SMOCK, a Thales framework, based on the Smalltalk programming language and dedicated to the construction of User Interface prototypes. The SMOCK prototyping environment proposes tools and editors allowing to build quickly innovative user interfaces (with multi-touch, 3D, VR, eye-tracker, etc.). SMOCK environment is able to import graphical design assets (binary or vectorial) and is able to combine them in visual designs. The good properties of the Smalltalk programming language also allow to propose sessions with live designs and/or modifications in front of the customers.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pierre is User Interface design manager, user experience designer and software engineer in Thales Defense Mission System since 2009. Eric is User Interface solutions architect, software expert in prototyping languages and works for Thales Defense Mission Systems since 2001.',
        },
      ],
    ],
  },
  '307-brag-tools-for-smart-contract-analysis': {
    title: 'Tools for Smart Contract Analysis',
    videoId: '-_4yy5d0yiQ',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/03-Wednesday/07-Tools%20for%20Smart%20Contract%20Analysis/07-Smart%20Contracts.pdf',
    abstractParagraphs: [
      [
        {
          text: 'During the last two years we have being working hard on the new hype: Blockchain. In this talk we will guide you through this new world alongside with the most remarkable contributions we have done so far on the domain, passing by the contract inspector, the ukulele query language, the metric analysis and more.',
        },
      ],
    ],
  },
  '401-pala-guerilla-it-with-pharo': {
    title: 'Guerilla IT with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/01-Guerilla%20IT%20with%20Pharo/PharoGuerrilla-180913.pdf',
    abstractParagraphs: [
      [
        {
          text: "'Guerilla' is used here as a label for a situation with very limited resources, very short delivery timeframes, imprecise requirements in flux, in a context of a huge project with its own set of challenges. The presentation is a reflection about the choices that contributed to the project's success. One of the central factors was, arguably, something counter-intuitive: an insistence of maintaining traceability (among requirements and implementations artifacts) and constructing the solution in a way that supported it through design and implementation, using e.g. embedded DSL, some of the OO patterns, and suitable naming conventions. In the industry, traceability, in general, is not popular - despite occasional declarations to the contrary. Historically and as far as I can tell, the term is not even a part of the Smalltalk culture - hence the potential interest for showing that guerilla IT can be waged in an orderly way.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "My first contact with Smalltalk was around '87 - I took a Smalltalk course at school, using Digitalk/V. I worked with Smalltalk full time between 1990 and 2002 or so, in Australia and in the US, mostly in enterprise-level applications and systems. After several years of working with big companies and big systems in the US as Technical/Solution/Application/Lead/etc Architect, I went independent and consequently had the opportunity to use Smalltalk (Pharo specifically) on three different projects over the last 3+ years. The experiences that led to the presentation arose, first, from a technical audit of a large project, and then, from assuming responsibility for implementing some of the recommendations in that audit.",
        },
      ],
    ],
  },
  '402-berg-roassal-current-status-and-future-plan': {
    title: 'Roassal: Current Status and Future Plan',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/02-Roassal%20-%20Current%20Status%20and%20Future%20Plan/02-2018-RoassalESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Roassal has become the standard platform to visualize data in Pharo and VisualWorks. Roassal contains numerous tunable and interactive visualizations. This presentation highlights the latest progress of Roassal and outline the integration plan with Bloc. More information about Roassal: http://AgileVisualization.com',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Assistant Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering. His effort is about designing tools and methodologies to improve the overall performance and internal quality of software systems, by employing profiling, visualization, and artificial intelligence techniques. Alexandre authored the book Agile Visualization and co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '403-bran-enjoying-parsing': {
    title: 'Enjoying Parsing',
    videoId: 'DN5nWRM9xUs',
    abstractParagraphs: [
      [
        {
          text: 'Parsers are perceived to be difficult to develop. To dispel this myth we show how the development environment can make building and handling parsers enjoyable. The talk shows examples of SmaCC development.',
        },
      ],
    ],
  },
  '404-schw-how-smalltalk-helps-hrworks-to-overshadow-the': {
    title: 'How Smalltalk Helps HRworks to Overshadow the Competitors',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/04-How%20Smalltalk%20helps%20HRworks%20to%20overshadow%20the%20competitors/How%20Smalltalk%20helps%20HRworks%20to%20overshadow%20the%20competitors%20(ESUG%2718)%20(1).pdf',
    abstractParagraphs: [
      [
        {
          text: 'HRworks is developing one of the leading SaaS HR solutions in Germany. Over 1,300 customers with over 150,000 users rely on our Smalltalk based all-in-one HR software day by day. Customers and users are rising continuously. The software is delivered by Continuous Delivery, improvement proposals can be sent with a single button click inside the software easily. The responsible module owner receives the proposal and will discuss the case with the developers, the consultants and other relevant departments which might have an important opinion on the proposal such as HR or sales. If the proposals are considered necessary they will be ranked and implemented by the responsible developer on a testing server where our software is continuously packaged every 30 minutes. In this way we can enable our software tests without the version being already finished. HRworks launches a new version approximately every four weeks, where the improvements and implemented customer-requested features will be delivered to the users.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "After finishing my masters' degree in General Management successfully, I decided to join HRworks for several reasons. The company is located in Freiburg, which is my beautiful and beloved hometown. The growth of HRworks promises challenging and exciting fields of work across all departments. In addition to that, the possibility of flexible working hours enables me to engage in my various hobbies, such as tennis, gaming and photography. As HR specialist, I act in a unique function at HRworks. Due to the close contact with the development department, I learn a lot about Smalltalk and I'm deeply impressed about its unique features and possibilities that make it the one and only programming language to help us being in great demand and highly successful. Equipped with this knowledge, I'm jointly responsible for expanding the development team and ensuring the company's long-term success.",
        },
      ],
    ],
  },
  '405-lece-smacc-parser-generation-and-more': {
    title: 'SmaCC, Parser Generation and More',
    videoId: 'VKQha-DMwh4',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/05-SmaCC,%20parser%20generation%20and%20more/05-SmaCC_Rewriting_esug2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'The Smalltalk Compiler Compiler is a parser generator written in Smalltalk and generating Smalltalk code. From the grammar of a language, it will generate the parser, but also give access to a lot of useful features as well. We will discuss automatic generation of AST classes, visitors and the rewriting engine of SmaCC to perform pattern matching and code transformations. Upcoming features, such as refactorings and code critics of grammars, are on the menu too!',
        },
      ],
    ],
  },
  '406-amar-toward-a-simulation-server': {
    title: 'Toward a Simulation Server',
    abstractParagraphs: [
      [
        {
          text: 'About a year ago, we started to promote PetroVR as a full simulation server. Throughout the process, we analyzed different approaches, and developed different layers of what had become our web application framework in Bee Smalltalk. We want to share a bit of this process, the current state, and the future work.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I live in Buenos Aires, Argentina. I have been devoted to Smalltalk for many years. I have used it and enjoyed it throughout my entire professional career. I am currently working at Palantir Solutions, an international company of software development for the oil and gas industry.',
        },
      ],
    ],
  },
  '407-poll-clap': {
    title: 'Clap',
    videoId: '_MqjSUIxBoI',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/07-Clap/07-Clap-Esug2018.pdf',
  },
  '408-miti-application-development-with-va-smalltalk': {
    title: 'Application Development with VA Smalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/08-Application%20Development%20with%20VA%20Smalltalk/Application%20Devlepment%20with%20VA.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Alexander Mitin, joined by Seth Berman, from Instantiations will demonstrate real world application development using VA Smalltalk. This demonstration will touch on topics such as UI Builders, an advanced code editor, configuration management with ENVY, code coverage and metrics, performance and memory profiling, remote debugging, cross-development packaging, image reduction capability and more.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Prior to Instantiations, Alexander spent more than 5 years developing software for a steel company where he gained expertise in a wide variety of domains, including the development of real-time systems. After joining Instantiations in November of 2003, Alexander became a key developer for the award-winning WindowBuilder project, including the famous GWT Designer product which was acquired by Google. Following this, Alexander joined Instantiations' Smalltalk department, becoming the team lead engineer for the next-generation of VA Smalltalk's virtual machine and oversees all VM development tasks. Alexander has a B.S. and M.S. in Electrical Engineering.",
        },
      ],
    ],
  },
  '409-noce-relational-programming-in-smalltalk': {
    title: 'Relational Programming in Smalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/09-Relational%20Programming%20in%20Smalltalk/09-MassimoNocentini-Relational-Programming-in-Smalltalk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we present a Smalltalk implementation of the microKanren relational programming language, originally written in the Scheme dialect of Lisp. microKanren aims to provide a minimalistic and idiomatic framework for logic programming, lying on explicit control of substitutions that makes true a relation; moreover, together with a complete search strategy it gains the same expressive power of Prolog. Our work was to implement the formal specification in Smalltalk, using native block objects to represent streams of substitutions and to write a variant of the search strategy in order to have a fair enumeration of such substitutions. In particular, we would like to show how to bootstrap your own logic programming framework on top of these concepts. Starting from the idea of "goals" to represent relations to be solved by finding values for logic variables, we\'ll study streams combinators, reified variables and "syntactic" sugar for goals composition. Using higher-order messages we show how a goal can be implemented as a method that consumes a substitution and produces a stream of substitutions; moreover, relying on Smalltalk\'s powerful message dispatching mechanism, it is possible to extend the framework to handle user-defined datatypes (examples concerning s-expressions, binary arithmetic, combinatorics and difference lists will be given). We stressed our implementation against the reference book on the topic; moreover, a Smullyan logic puzzle based on inference rules is fully implemented.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm a PhD student at the University of Florence, working primarily on combinatorics, formal methods for the analysis of algorithms, having a deep passion for programming for a long time. I graduated at the same University and my interests concern logic, programming paradigms and algorithms. I publish my code on https://github.com/massimo-nocentini.",
        },
      ],
    ],
  },
  '410-kriv-self-prototypes-in-pharo': {
    title: 'Self Prototypes in Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/10-Self%20prototypes%20in%20Pharo/self-ESUG2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, I will present the features, advantages and disadvantages of the object model based on prototypes used in the Self programming language. I will describe how to use prototypes in Pharo and show some details of the implementation.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Inria Nord Europe in the RMoD team (http://rmod.lille.inria.fr). He actively participates in the Pharo open source community with the primary focus on Pharo modularization, bootstrapping and cleaning. Currently, he works on the new meta-modelling infrastructure of the Moose platform.',
        },
      ],
    ],
  },
  '411-bomm-cormas-a-participatory-and-interdisciplinary': {
    title: 'CORMAS, a Participatory and Interdisciplinary Modeling Platform',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/11-CORMAS,%20a%20participatory%20and%20interdisc%e2%80%8biplinary%20modeling%20platform/CORMAS,%20a%20participatory%20and%20interdisciplinary%20Agent%20Based%20Simulation%20Platform%20-%20CodiMD.pdf',
    abstractParagraphs: [
      [
        {
          text: 'CORMAS (for COmmon-pool Resources and Multi-Agent Systems) is an Agent-Based Modeling (ABM) platform running on Pharo, dedicated to natural and common-pool resources management. As an open-source software, it is used by an international community of researchers willing to understand the relationships between human societies and their environment. From recent years, the development of CORMAS has taken an innovative direction more oriented towards participatory modeling, i.e. the collective design of models as an appropriate medium for fostering interdisciplinary and interactive simulation involving several stakeholders who interact with a simulation by acting directly on it. As our intention is to involve more deeply various types of stakeholders (from farmers to scientists and from technicians to decision makers) into the modeling process, it is necessary to have an easily adaptable tool to act on the simulation and to modify the conceptual model on the fly. CORMAS benefits from all the functionalities offered by Smalltalk, which opens a space of potentialities much richer than the other ABM platforms. Its minimalist syntax enables fast language learning even for non-computer users. As an immersive OO system, that enables concept reification, introspection and intercession, Smalltalk promotes rapid and efficient model prototyping. The power of its debugger allows a novice modeler to check finely the functioning of his model, but also to code directly during the execution of a simulation. Thus, participatory design of models and interactive simulations enable to collectively explore medium and long-term scenarios to better understand how a desired situation may be reached on the field.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pierre Bommel is a modeler scientist at CIRAD. He contributes to promoting the Companion Modeling approach. Through the development of CORMAS, he has been focusing on the development and the use of Multi-Agent Systems for the simulation of renewable resource management issues. Since 2010, he is based in Costa Rica, at the University. He develops models related to environmental management, such as breeding adaptation of drought in Uruguay or breeding and deforestation in the Amazon. Nowadays, he is especially interested in collective design of ABM and interactive simulation for assisting role-playing games.',
        },
      ],
      [
        {
          text: 'Etienne Delay is a researcher in social geography and spatial modeling. To tackle the scientific challenges proposed by landscape dynamics and cooperation processes, he has developed a research methodology based on field work and companion modeling combined with the formalization of the observed processes and agent-based models. This approach offers the possibility to understand spatial, social, cultural and/or economic conditions that take place in territories, and to provide prospective scenarios. His technical expertise grew and evolved through investment in several workgroups: MAPS Team (Modeling Applied to Space Phenomena), OpenMole, OSGeo-international, and various initiatives around modeling, exploration and sensibility analysis of spatial patterns behaviors, and more generally in Free Software communities.',
        },
      ],
    ],
  },
  '412-teso-stateful-traits-in-pharo': {
    title: 'Stateful Traits in Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/12-Stateful%20traits%20in%20Pharo/2018-StatefulTraits-ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk presents the new implementation of Stateful Traits included in Pharo 7. We will include a brief description of the new implementation, and changes and the improvements compared with the old implementation. Also, we will introduce how to use the included stateful support and the integration with complex slots.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pablo Tesone is a PhD student at IMT Lille Douai, France. He is studying Dynamic Software Update Solutions applied to Live programming environments, distributed systems and robotic applications. He is interested in improving the tools and the daily development process. He is an enthusiast of object oriented programming and their tools. He collaborates with different open source projects like the ones in the Pharo Community (http://pharo.org/) and the Uqbar Foundation (http://www.uqbar-project.org/).',
        },
      ],
    ],
  },
  '413-dema-cross-platform-development-with-pharo-the': {
    title: 'Cross-platform Development with Pharo: The PharoLauncher Case',
    videoId: 'DklOYCzI23U',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/13-Cross-platform%20development%20with%20Pharo%20-%20The%20PharoLauncher%20case/13-2018-ESUG-Cross-Platform-dev-PharoLauncher-ChristopheDemarey.pdf',
    abstractParagraphs: [
      [
        {
          text: 'A lot of people are now building web applications with Pharo. In this talk, I will show that it is possible to develop native applications for Pharo targeting the main used operating systems. I will take the case of the Pharo Launcher development to give an insight of how to manage the complexity of cross-platform development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Christophe Demarey is research engineer at the Inria, working in tight relation with the RMoD team. Christophe also initiated Inria's continuous integration and is now leading its evolution. Christophe participates in the Pharo community since 2012. His most noticeable contributions in the past months are in the Pharo Launcher, building the next Pharo package manager, and in the bootstrap process.",
        },
      ],
    ],
  },
  '414-vran-using-system-level-tools-to-debug-smalltalk': {
    title: 'Using System-level Tools to Debug Smalltalk Systems',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/14-Using%20system-level%20tools%20to%20debug%20Smalltalk%20systems/debugger.pdf',
    abstractParagraphs: [
      [
        {
          text: "Smalltalk environments are traditionally praised for their debugging features based on runtime reflection. However, some kinds of problems are difficult - if not impossible - to debug using traditional Smalltalk in-process tools such as debuggers or inspectors. To name some: crashes in external libraries called via faulty runtime of FFI, heap corruption, race conditions. In this talk I'll demonstrate that using system-level tools such as GDB to debug Smalltalk may be as easy as using traditional Smalltalk in-process debugger. Maybe even easier...",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Jan Vrany is a Smalltalk enthusiast since his university studies. Since the very beginning he's using Smalltalk/X for all his development and research. Computer-wise, his primary interests are programming languages, virtual machines and multi-language programming environments. He obtained his PhD in 2010 from the Czech Technical University in Prague. Now he works as engineer and researcher at Palantir Solutions and CTU FIT.",
        },
      ],
    ],
  },
  '415-mira-vm-development-in-pharo': {
    title: 'VM Development in Pharo',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we show the progress made in the development process of the VM, and how the VM can be developed from within Pharo.',
        },
      ],
    ],
  },
  '416-mccl-hashed-collections-you-can-and-sometimes-should': {
    title: 'Hashed Collections: You Can (and Sometimes Should) Build Your Own',
    videoId: '94if04OsKoc',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/04-Thursday/16-Hashed%20Collections%20-%20You%20Can%20(and%20sometimes%20should)%20Build%20Your%20Own/16-HashedCollections.pdf',
    abstractParagraphs: [
      [
        {
          text: "Hashed collections -- Sets, Dictionaries, and the like. We all use them, but sometimes the built-in ones don't quite fit our needs. We'll start by reviewing the concepts behind hashed collections. Martin and Andres will also swap stories of oddball collections they have implemented, discuss why you might want your own collection classes, and show how to create ones that perform well.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin has been interested in Smalltalk since he first heard about it in 1975. After a frustrating ten-year wait he finally got his hands on a running Smalltalk system and hasn't let go since. He is a senior engineer at GemTalk, working on the GemStone Smalltalk product line. In his spare time, he works on Mist, a Smalltalk variant with improved modularity and security and no virtual machine.",
        },
      ],
      [
        {
          text: 'Andres started working on Smalltalk in 1996, and has been developing virtual machines since 2007. He is the author of three books on Smalltalk, and currently works at LabWare.',
        },
      ],
    ],
  },
  '501-denk-pharo-iot-using-pharo-to-play-with-gpios-and': {
    title:
      'Pharo IoT: Using Pharo to Play with GPIOs and Sensors on IoT Devices Remotely',
    videoId: 'KzuyvhVThV0',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/05-Friday/01-Pharo%20IoT/ESUG2018-PhraroIoT.pdf',
  },
  '502-poli-hands-on-contributing-to-pharo': {
    title: 'Hands on: Contributing to Pharo',
    videoId: 'ICZ9FopeAc4',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/05-Friday/02-Hands%20on%20-%20Contributing%20to%20Pharo/2018-ContributingToPharo-ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: "Since 2017, Pharo's contribution process has radically changed through the migration of the sources to Git, the bootstrap process and Iceberg. Contributors used to Monticello and slices had to shift their state of mind and learn new technologies and paradigms. Through this hands-on, every one participating will go through this process: prepare your image for contribution, make a change in Pharo, publish a pull request, follow the validation of the process in the Jenkins continuous integration process.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guille Polito is research engineer at the CRIStAL laboratory in the university of Lille, working in tight relation with the RMoD team. Guille's main research interests are techniques to develop modular systems and new development tools. Guille participates in the Pharo community since 2010. His most noticeable contributions in the past months are in the Pharo bootstrap process, Pharo stream management, Iceberg and OSSubprocess.",
        },
      ],
    ],
  },
  '503-stin-polymath': {
    title: 'PolyMath',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/05-Friday/03-PolyMath/PolyMath-ESUG2018.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, we will present the last development of PolyMath, an open-source numerical computing library based on Pharo Smalltalk. Several examples will illustrate how to do matrix computations, use ordinary differential equation solver or manipulate arbitrary floating-point arithmetics. PolyMath includes Dataframe, a data science framework built by Oleksandr Zaytsev.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Serge was introduced to Smalltalk during his master in the nineties and since then is a Smalltalk zealot. Serge is a computer scientist from Sorbonne University and IRD (Institut de Recherche pour le Développement). He is working on live domain-specific tools and languages for the simulation of complex systems. He is currently living in Yaoundé, Cameroon.',
        },
      ],
    ],
  },
  '504-kube-manipulating-live-documents-with-documenter': {
    title: 'Manipulating Live Documents with Documenter',
    abstractParagraphs: [
      [
        {
          text: 'Documenter is the Glamorous Toolkit tool for creating and consuming live documents directly in the development environment. This session shows concrete examples of how it can support multiple scenarios: code documentation, tutorials, and interactive data notebook.',
        },
      ],
    ],
  },
  '505-feld-practical-api-development-using-gemstone-s': {
    title: 'Practical API Development Using Gemstone/S',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/05-Friday/05-Practical%20API%20development%20using%20Gemstone%20S/esug2018-api-development-gemstone.pdf',
    abstractParagraphs: [
      [
        {
          text: "With this talk I want to show an API oriented programming model, where Gemstone/S works as a database and center of the whole system. We've used this approach in three projects/products with different languages on the client side: Java, C#, Python and Sencha ExtJS UI (Javascript).",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Smalltalker starting on Atari ST somewhere in the 1980s, VisualSmalltalk under OS/2, VisualWorks under Windows, VisualAge under Windows, Linux and Solaris - now Gemstone/S.',
        },
      ],
    ],
  },
  '506-aspi-restore-for-dolphin-improved-query-block': {
    title: 'ReStore for Dolphin: Improved Query Block Analyser',
    presentationUrl:
      'https://archive.esug.org/ESUG2018/05-Friday/06-ReStore%20for%20Dolphin%20%e2%80%93%20Improved%20Query%20Block%20Analyser/restore%20block%20analyzer%20-%20esug%202018.pdf',
    abstractParagraphs: [
      [
        {
          text: "ReStore is an object-relational database interface for Dolphin Smalltalk. A key design philosophy behind ReStore is the use of familiar Smalltalk expressions in preference to relational database terminology. This is particularly evident in the querying subsystem which uses standard Collection expressions, for example: Employee storedInstances select: [:each | each office city = 'London']. Translation of the select block to a SQL query uses the familiar technique of evaluating the block with an analysis object, tracking each message send via doesNotUnderstand:. A shortcoming of this approach is the inability to handle commonly-used optimised/inlined expressions such as isNil, and: etc. This forces the use of less common or non-standard equivalents, compromising the design philosophy and leading to errors where code uses the more familiar expressions. This presentation describes improvements to ReStore's query block analyser, using the reflective capabilities of Smalltalk to track optimised expressions via examination and manipulation of the execution stack.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I have been working with Smalltalk since 1992, initially in academia and subsequently in a variety of employed and self-employed positions. From 2000 to 2005 I ran my own company creating bespoke systems for SMEs using Dolphin Smalltalk; this was the original impetus behind the creation of ReStore. Following ten years at JPMorgan working with VisualWorks and GemStone, in 2015 I relocated with my family to rural France and resumed working with Dolphin and ReStore.',
        },
      ],
    ],
  },
};
