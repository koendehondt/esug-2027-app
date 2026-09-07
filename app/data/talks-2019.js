// Talk titles, abstracts, and speaker bios for the ESUG 2019 Archive's
// Conference Program page.
//
// ESUG 2019 predates the archive.esug.org agenda-page/slide-index and
// YouTube-playlist organization used from 2022 onward, so `presentationUrl`
// and `videoId` here were assembled by hand rather than scraped in bulk:
//
// - `presentationUrl`: matched from https://archive.esug.org/ESUG2019/,
//   which does host per-day (and per-room, for Wed 28's two tracks) PDF
//   folders -- just not linked from an agenda.html page. Talks were matched
//   to PDFs by day/room position, spot-checked by fetching a sample of the
//   PDFs and confirming their title slides.
// - `videoId`: matched from the conference's YouTube playlist
//   (youtube.com/playlist?list=PLJ5nSnWzQXi8DPNpy1jCkjE4yE0WUtDP2) by
//   matching each video's title against the talk it corresponds to (titles
//   sometimes differ slightly from the calendar/Pillar-file title -- e.g.
//   "Kutoa: Programming the Web in Smalltalk" for 109-daws, whose PDF is
//   literally named accordingly). Only 52 of the 61 catalogued talks have a
//   video: none of Wed 28's Room B (Track B) talks were recorded/uploaded,
//   and 403-hins-2019-polymath-updates has no video either.
//
// Everything else (title/abstract/bio) is sourced from the Pillar talk
// files at
// https://github.com/ESUG/esug.github.io/tree/source/2019-Conference/talks
// (light copy-edits only: obvious typos fixed). Presenter names come from
// the schedule (app/data/program-2019.js) rather than being duplicated
// here.
//
// Each paragraph is an array of "runs" -- plain text segments, matching
// the shape used by the other talks-YYYY.js files (no inline links were
// carried over from the source Pillar markup for this year).

export default {
  '101-girb-glamorous-toolkit': {
    videoId: 'ZIePUQ_WKqE',
    title: 'Glamorous Toolkit',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the moldable development environment. It is a software analysis platform. It is a data visualization engine. It is a live notebook. It is a flexible search interface. It is a fancy code editor. All in one. In this talk we look at the freshest beta release.',
        },
      ],
    ],
    bioParagraphs: [[{ text: 'Tudor Girba ...' }]],
  },
  '102-berg-genetic-algorithms-in-the-artificial': {
    videoId: 'IvhgbOrVog4',
    title: 'Genetic Algorithms in the Artificial Intelligence Spectrum',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/03-GeneticAlgorithm-ESUG.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Genetic Algorithm (GA) is a simulation of evolution often considered a pillar in the field of artificial intelligence. GA is used to solve optimization problems, withing the domain of robotics, video games, and aerospace. This presentation will presents a Smalltalk implementation of a genetic algorithm and many examples, including zoomorphic creatures and flight mission generation for constellation of satellites.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Associate Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering. His focus is on designing tools and methodologies to improve the overall performance and internal quality of software systems, by employing profiling, visualization, and artificial intelligence techniques. Alexandre authored the book Agile Visualization and co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '103-berg-the-roassal3-visualization-engine': {
    videoId: 'e5rpcmV-igE',
    title: 'The Roassal3 Visualization Engine',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/04-Roassal3.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Roassal2, born 6 years ago, has become a standard in data and software visualizations in Smalltalk. For nearly two years we have developed Roassal3, a new visualization engine. Roassal3 features amazing animations and a rich set of intuitive interactions. This presentation our past and future effort on redesigning and improving a standard in the Smalltalk community.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Associate Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering. His focus is on designing tools and methodologies to improve the overall performance and internal quality of software systems, by employing profiling, visualization, and artificial intelligence techniques. Alexandre authored the book Agile Visualization and co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '104-salg-constructing-3d-scenes-with-woden': {
    videoId: 'zJAjDSg-nvU',
    title: 'Constructing 3D scenes with Woden Engine',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/05-woden-engine.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk is about how we can use Pharo to construct visually impressive scenarios in 3D, which can be used to expose an idea, or just with entertainment purposes. This talks introduces the concepts of utilizing externally made 3D, and the usage of PBR materials that follow the modern lighting model that was created by Disney, and standardized by Epic Games in Unreal Engine 4, and nowadays is the de-facto standard in films and real time graphics. We follow by introducing visual elements completely generated by scripting code in Pharo to the scene where we combine data visualization with art. We finish this presentation by demonstrating the different ways of interaction that can scripted and utilized with a fully constructed 3D scene in Woden Engine.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Ronie is chilean student who is being working in Pharo for the last 6 years. Better known as the guy who works on 3D graphics, and a low-level fanatic who hacks on the OpenSmaltalk VM and in Pharo itself from time to time. Currently, finishing its master and working as a freelance programmer for the Pharo and Squeak communities.',
        },
      ],
    ],
  },
  '105-delp-the-future-of-testing': {
    videoId: 'yg4xXrgHjqo',
    title: 'The Future of Testing in Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/06-future-of-testing.pdf',
    abstractParagraphs: [
      [
        {
          text: "Pharo's testing infrastructure is great and makes test-driven development process easy to set-up. However, some things can still be improved to make the testing experiment even better. This talk presents enhancements made on the test infrastructure over the last 6 month and explores new directions to be taken in the future.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Julien Delplanque is hacking Pharo around many aspects for 5 years now. He started a PhD in RMoD team 2 years ago and, in the meantime, got hit by testing topic. He is one of the co-authors of the first paper describing [Rotten Green Tests](https://hal.inria.fr/hal-02002346v2). Also, Julien maintain and supervise the development of [DrTests](https://github.com/juliendelplanque/DrTests), the next-generation tool to manage tests in Pharo.',
        },
      ],
    ],
  },
  '106-cote-stargate-an-interstellar-journey': {
    videoId: 'ndDtbqpHvjY',
    title: 'Stargate, an interstellar journey to RESTful APIs',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/07-Stargate-an-interstellar-journey-to-RESTful-APIs.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present [Stargate](htts://github.com/ba-st/Stargate), a library supporting the creation of HTTP based RESTful APIs. The library is built on top of Teapot and Zinc, providing a conceptual framework to simplify the creation of RESTful APIs including HATEOAS, content negotiation, API versioning, ETags and pagination. We will revisit the library affordances and a real world experience report using it.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Bachelor in CS, continuous learner and free-thinker. Supporter of libre knowledge, human intelligence augmentation and open source software. Smalltalker since 2004, works at [Mercap Software](https://www.mercapsoftware.com/en/) making financial software in Smalltalk.',
        },
      ],
    ],
  },
  '107-latt-livecoding-the-web-platform': {
    videoId: '9ipuDFeDf90',
    title: 'Livecoding the Web Platform with Caffeine',
    abstractParagraphs: [
      [
        {
          text: "Caffeine augments the Web platform with Smalltalk's livecoding style. Built upon [SqueakJS](https://squeak.js.org), Bert Freudenberg's JavaScript implementation of the [Open Smalltalk](http://opensmalltalk.org) virtual machine, Caffeine provides live Smalltalk interfaces to web browser subsystems, both built-in (such as [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)) and loadable (such as Mozilla's [A-Frame](https://aframe.io) virtual reality framework).",
        },
      ],
      [
        {
          text: "I present several of these interfaces, emphasizing how livecoding improves the development experience in their respective domains. I show you how to get started using Caffeine with that web browser you're carrying. We'll also explore some future directions for Caffeine, touching on Smalltalk use from other languages, and the multi-language landscape of [WebAssembly](https://webassembly.org).",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Craig Latta is a research computer scientist based in Amsterdam. He discovered Smalltalk while studying live composition in the music department at the University of California at Berkeley. He went on to work with Smalltalk at several labs, including IBM's Watson Research Center, Interval Research, and Lam Research. He's been part of the open-source Squeak Smalltalk community for its entire lifetime, and serves on its board. He uses the Caffeine system to partipate in the broader Smalltalk, JavaScript, and Web platform communities, drawing them together through music livecoding in virtual worlds.",
        },
      ],
    ],
  },
  '108-alte-web-applications-using-fomantic-ui': {
    videoId: 'IOm9cAGIWe8',
    title: 'Web Applications Using Fomantic UI',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/09-ObjectGuild-Web-Apps-Fomantic-UI.pdf',
    abstractParagraphs: [
      [
        {
          text: "Numerous frameworks for creating sophisticated Web Application UI's exist, with Bootstrap, perhaps, the most popular. This presentation start with a short comparison of modern, popular UI frameworks. Then it will focus on the use of Fomantic UI (a fork of the Semantic UI project) for two apps Object Guild has delivered to its clients: why Fomantic UI was chosen and how it was integrated into Seaside. The integration of Fomantic UI into Seaside may be released as an open source project in the near future.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jonathan van Alteren has almost twenty years of experience in enterprise software development and was a founding partner in a highly successful enterprise solutions company in the Netherlands. Jonathan is highly skilled in technical and infrastructural aspects of software development.',
        },
      ],
      [
        {
          text: 'Don Howard has over thirty years of experience ranging from programmer to architect and has held positions as team lead and IT project management. Don has led numerous agile teams, and played leadership roles developing enterprise level software.',
        },
      ],
    ],
  },
  '109-daws-polyglot-web-programming-inspired-by': {
    videoId: 'KDs7JpSQir8',
    title: 'Polyglot Web Programming, Inspired by Smalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/10-Programming-the-Web-in-Smalltalk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Smalltalk has a number of features that make it stand out from other popular languages: minimal syntax; simple object model; a unified build, test, execution and debugging environment. These features help make Smalltalk an extremely productive and easy to use programming tool. I this talk I will present a system that attempts to bring these principles to distributed programming, where objects, implemented in a variety of programming languages (including Smalltalk!) can communicate with each other over the web, treating the web as a giant Smalltalk image.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Ewan Dawson is Head of Engineering at Symphonic Software. He is interested in finding ways to build software systems in human-centric ways, minimising the distance between idea conception and implementation in software. He has 15 years of experience building software using a variety of JVM languages and technologies, and is a newcomer to the Smalltalk language and community.',
        },
      ],
    ],
  },
  '110-west-natural-system-development': {
    videoId: 'C7k0JVm6uFE',
    title: 'Natural System Development',
    abstractParagraphs: [
      [
        {
          text: 'For sixty years we have become very skilled at creating "artificial" systems using the techniques and methods of advanced programming and software engineering. The challenge of today and the future is posed by "ultra-large scale complex adaptive (ULSCAS)" or "natural" systems. Software engineering cannot help us with these challenges. This talk will pose five specific challenges that arise from natural systems and show how and why Object Design and Smalltalk implementation offer powerful tools for meeting those challenges.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dave West has been in the profession since its inception and has held positions ranging from programmer to Chief Information Officer. He is also a Professor of Computer Science and Software Development and creator of award-winning programs in software development apprenticeship education.',
        },
      ],
    ],
  },
  '111-uttn-total-refactoring-of-a-25': {
    videoId: 'Lvm4BrWDXEU',
    title: 'Total refactoring of a 25 years old desktop application',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/01Monday/12-RefactoringPdmESUG2019.pdf',
    abstractParagraphs: [
      [
        {
          text: 'PDM is a document management system focused on the special needs of civil engineering having been continuously developed in VisualWorks®since 1994 by the product owner, Schmidt Ingenieurbüro für Bauwesen, supported by several external teams. After a long time of productive use and constant further development, the product had to deal with sincere issues: database performance, maintainability, OS portability, GUI style, modularity, still incomplete features. Instead of trying to improve the existing code base step-by-step, Schmidt now decided to follow a resolute approach: full redesign of the database scheme; restart with an application core for document handling only that meets the requirements of performance and modularity; immediate migration to Pharo 8 to base the new GUI on Spec2/GTK. As Pharo was new to the remaining core team of Schmidt and Pharo 8 is still under development, Schmidt contracted several parties with deep know-how in special areas to support the whole process. This talk will present the most important results of the chosen technical and organizational approach.',
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
  '201-duca-pharo-news': {
    videoId: 'qSKqB2R3yGU',
    title: 'Pharo News',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/01-pharo8-alpha.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk will give an overview of the different elements happening in Pharo. It will also report the state of the consortium. The roadmap for Pharo 8.0 and Pharo 9.0 will be discussed.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an Inria Research Director. I lead RMoD team http://rmod.lille.inria.fr. I'm expert in language design and reengineering. I worked on traits. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala, Groovy and Fortress. I'm expert on software quality, program understanding, program visualisations, reengineering and metamodeling. I'm one of the developer of Moose, an open-source software analysis platform http://www.moosetechnology.org/. I created Synectique a company building dedicated tools for advanced software analyses. I'm one of the leader of Pharo http://www.pharo.org/ a dynamic reflective object-oriented language supporting live programming. I built the industrial Pharo consortium http://consortium.pharo.org. I work regularly with companies (Thales, Wordline, Siemens, Berger-Levrault, Arolla,...) on software evolution problems. I wrote couple hundred articles and several books. According to google my h-index is 55 for more than 12900 citations. I like to help people becoming what they want and building things.",
        },
      ],
    ],
  },
  '202-lore-spec-2-0-native-guis': {
    videoId: 'g6QVrbb-ZUc',
    title: 'Spec 2.0 - Native GUIs for Pharo',
    presentationUrl: 'https://archive.esug.org/ESUG2019/02Tuesday/02-spec2.pdf',
    abstractParagraphs: [
      [
        {
          text: 'New Spec 2.0 bring different GUI backends to Pharo, including the possibilty to develop native applications using a Gtk3 backend. In this talk we will show the new features of Spec 2.0 and how to use together with Pharo 8.0 headless to deploy your applications.',
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
  '203-teso-present-and-future': {
    videoId: 'MGivF9O8vn4',
    title: 'Present and Future of the PharoVM',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/03-present-and-future-of-the-pharo-vm.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Last year the Pharo team set as objective to have a headless event-based embeddable VM for the future. However, evolving the VM and reaching a mature product requires an infrastructure that supports change and makes it painless. One year later, we have make good progress with our infrastructure, which lead us to a first version of a headless embeddable VM.',
        },
      ],
      [
        {
          text: 'In this talk, although the VM seems to be the subject, we want to focus on the scaffolding around it: - A simpler build process using CMake and integrating with existing IDEs, - Making Slang work back in Pharo, taking advantage of our set of tools, - Automated tests to detect regressions in Slang generation and VM execution, - Automated benchmarks to detect performance regressions, - and a CI to govern them all',
        },
      ],
      [
        {
          text: 'These changes were capital to make possible this year: - a headless VM suited for server applications, - an embeddable VM to spread Pharo in other applications, - a reorganization of VM plugins to strip VM footprint,',
        },
      ],
      [
        {
          text: 'Although our short-term future includes an event-based VM, this infrastructure opens a lots of doors in VM development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open source projects like the ones in the Pharo Community [http://pharo.org/] and the Uqbar Foundation [http://www.uqbar-project.org/].',
        },
      ],
    ],
  },
  '204-cost-object-centric-debugging-for-pharo': {
    videoId: 'uDYJIm54yE4',
    title: 'Object-Centric Debugging for Pharo 8',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/04-object-centric-debugging.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Find objects. Debug objects. Fix bugs. With object-centric debugging, we narrow down the scope of debugging operations to one specific object instead of all instances of a class. This is particularly useful when debugging a program where one object among many is the source of a bug, for example, in graphical applications or programs generating lots of events. This presentation shows the object-centric debugging tools that we propose for integration to Pharo 8.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I am an Inria researcher and I work in the RMoD team. Before that, I worked six years in the industry as a software developer. Today, I do research on software engineering. I work especially on debugging for which I'm interested in different topics: reflection and meta-programming, object-centric instrumentation, dynamic software adaptation, dynamic languages and virtual machines.",
        },
      ],
    ],
  },
  '205-maso-pharo-as-universal-development-platform': {
    videoId: '2d2otdj66dw',
    title: 'Pharo as Universal Development Platform',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/05-pharo-as-universal-development-platform.pdf',
    abstractParagraphs: [
      [
        {
          text: "As we all know, Pharo Smalltalk is one of the most productive development environments available. Applications are normally developed for the desktop, but Pharo can also run a headless image for server applications. PharoJS generates code for web browsers and NodeJS (if it's a requirement for deployment). PharoJVM generates code for the JVM (if it's a requirement for deployment).",
        },
      ],
      [
        {
          text: 'One IDE to rule them all, One IDE to find them, One IDE to bring them all and in the productivity bind them. -- with apologies to J.R.R.Tolkien',
        },
      ],
      [
        {
          text: 'This talk will demonstrate the facility with which Pharo Smalltalk can be used as a swiss army knife of development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dave Mason is a Professor at Ryerson University. He is also one of the creators of PharoJS (targeting Smalltalk code to Javascript for the browser or node.js), and actively working on PharoJVM (targeting Smalltalk code to the JVM). He received a PhD from the University of Waterloo in 2002, and has been programming for almost 50 years. He is a member of ACM and is Chair of the Department of Computer Science at Ryerson.',
        },
      ],
    ],
  },
  '206-kriv-porting-of-visualworks-code': {
    videoId: 'XrOdlwtVfMM',
    title: 'Porting of VisualWorks code to Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/06-porting-visual-works-to-pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Porting of a big business application between Smalltalk dialects is an interesting challenge, especially when the original code is still under active development. In this talk, the easy parts, as well as many pitfalls of such process, will be discussed and demonstrated on examples of the aPart and Glorp frameworks. We will show how the Pharo Consortium can provide tremendous support for such a project and what it means for the next Pharo development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Nidea s.r.o. that focuses on software consulting. The former member of the INRIA RMoD team. He actively participates in the Pharo open source community with the primary focus on Pharo modularization, bootstrapping and cleaning and meta-modelling infrastructure.',
        },
      ],
    ],
  },
  '207-blon-test-sucker-how-to-convert': {
    videoId: 'wEJAPRyRcuE',
    title:
      'Test Sucker: How to Convert Real Production Objects to Automated Test Cases?',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/07-TestSucker.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Most of the time, the creation of test cases to replicate failures that happens in the production environment is complex and fails to replicate the exact behavior. At Lifeware, we use a tool called the "Test Sucker", that allows one to "sucks" domain specific objects from the Gemstone production envriroment to a Visualworks envrionement where the bug can be reproduced and all the palette of tools used. Such a test will allow to be part of the more than 90,000 automated tests that Lifeware runs continuously.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Vincent Blondeau: After graduating in from Polytech Lille in 2014 with a Software Engineering and Statistics degree, he received his Ph.D. in Software Engineering at the University of Lille, with a dissertation on the ways to select software tests related to changes that have occurred on the source code. He also spent one year in Lam Research, CA, USA, as an industrial Postdoc to create some tooling to improve the usability of the company software. He joined Lifeware in March 2019 where one of his roles is to support the migration to Pharo of the Lifeware tools. Vincent is also an active open source developer in the Pharo community. More information is available here: https://vincentblondeau.github.io/',
        },
      ],
      [
        {
          text: "Mohamed Ahdach: Mohamed is a father of two daughters and a life insurance practitioner. He was previously a freelance consultant specialized in actuarial and risk management. Mohamed is engineer in applied mathematics and holds a master's degree in actuarial sciences from the Catholic University of Louvain. He speaks French, English, Dutch, and Tachelhit. He joined Lifeware in October 2017.",
        },
      ],
    ],
  },
  '208-papa-diagnosing-bad-tdd-habits': {
    videoId: 'WHCWlQeGmqo',
    title: 'Diagnosing bad TDD habits with Dr. TDD',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/08-Diagnosing%20bad%20TDD%20habits%20with%20Dr.TDD.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Test-Driven Development (TDD) is a technique that helps developing software in an iterative and incremental way with a strong emphasis on immediate feedback. Though simple at first sight, it challenges students since it implies a strong cultural change in software development.',
        },
      ],
      [
        {
          text: "In this talk, I will present Dr. TDD, a real-time advisor that aims to give immediate feedback (in the same spirit as TDD) to students about how well they know and apply this technique together with recommendations to correct deviations from it. I will also show how a live programming environment such as Pharo provides an excellent canvas for developing it, a few implementation details and some interesting findings about what happens when we deviate from the red-green-refactor cycle. Finally, I'll go over some of the common mistakes made while practicing TDD, how severe they are, and how Dr. TDD helps you fixing and preventing them. As a bonus, I'll comment on my experience using Dr. TDD to develop the tool itself.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Nicolas Papagna Maldonado is a developer who believes the computer revolution hasn't happened yet. Loves learning and sharing anything OO & TDD related. He's been TA for OO at FCEN, University of Buenos Aires. Happily grows software at 10Pines. Chat with him on Twitter at @NicolasPapagna.",
        },
      ],
    ],
  },
  '209-nel-transaction-handling-in-unit-testing': {
    videoId: 'zrp81FsujCo',
    title: 'Transaction handling in Unit Testing',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/09-Adding%20transaction%20handling%20to%20Unit%20Tests.pdf',
    abstractParagraphs: [
      [
        {
          text: 'For many years we could not simulate transaction handling (GemStone) in the unit tests of our system. This resulted in subtle bugs slipping into our system which was hard to catch and hard to prevent from occuring again. Then GemStone implemented nested transactions and we found a way to use them to simulate transaction handling in our unit tests. This talk is about the little framework that we built in order to accomplish this.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I am Dirk Nel from South Africa. I work on a client liability system that has been around since the early 1990s. The system was developed in VisualWorks with GemStone as the DB. My talk will give highlights of our journey with regards to how we do development and specifically looking at unit testing and transaction handling within those unit tests.',
        },
      ],
    ],
  },
  '210-denk-slot-composition-in-pharo-8': {
    videoId: 'Pt0Mq23DYT8',
    title: 'Slot Composition in Pharo 8',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/10-SlotComposition.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Pharo models instance variables with objects: they are reified, first class concepts. Slots can be subclassed to implement new kinds of instance variables, changing how they are read or written.',
        },
      ],
      [
        {
          text: 'The current image contains many examples for slots: Weak Slot holds weakly onto objects, InitializedSlot is initialized with a default value, SpecObservableSlot wraps transparently in a ValueHolder.',
        },
      ],
      [
        {
          text: 'The problem with sub-classing is that we have to implement a new subclass for every new kind of slot. For example, if you wanted to an ObservableSlot with a default value, you would need to implement InitializedObservableSlot, a weak observable slot would need a WeakSpecObservableSlot class. This leads to a combinatorial explosion and is not practical.',
        },
      ],
      [
        {
          text: 'This talk presents a first exploration of Slot composition that allows the programmer to define slot behavior that is composable.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher (CR1, with tenure) at INRIA Lille - Nord Europe. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus Denker received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded 2Denker GmbH in 2009. He is a member of ACM, GI and a board-member of ESUG.',
        },
      ],
    ],
  },
  '211-brag-taskit-processing-framework': {
    videoId: 'jDEYNRqhDf4',
    title: 'TaskIt - Processing framework',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/11-taskit.pdf',
    abstractParagraphs: [
      [
        {
          text: 'TaskIt born back in the 2013, during the development of PhaROS. Having as main goal to support many of the main threading architectures, offering a controllable environment for concurrency, and many wellknown features such as Future, Actors, etc. TaskIt has been used in many different projects such as PhaROS, Makros(Component oriented robotic framework), Fog (Ethereum driver), and is acceptance is growing lately including it usage by GTK extentions for pharo.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Coding enthusiast. Software engineer, giving my first steps in research. I am currently working as a research engineer at INRIA, starting soon a PhD on software analysis, and working along side many different technologies such as migration, blockchain and robotics. My main topics of interests are language and runtime analysis and modeling, parallel/concurrent computation and virtual machines.',
        },
      ],
    ],
  },
  '212-mccl-threads-critical-sections-and-termination': {
    videoId: 'rGL6iQ5VxHM',
    title: 'Threads, Critical Sections, and Termination',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/02Tuesday/12-McClure-Threads.pdf',
    abstractParagraphs: [
      [
        {
          text: "Correctness of a multi-threaded program is much more difficult to achieve than correctness of a single-threaded program, but in some situations we can't avoid using more than one thread, and therefore have to deal with the resulting complexity. In this talk, Martin will present some of the threading problems he's seen and solutions to those problems, with a focus on the additional problems that arise when threads are terminated.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin has been interested in Smalltalk since he first heard about it in 1975. After a frustrating ten-year wait he finally got his hands on a running Smalltalk system and hasn't let go since. He is a senior engineer at GemTalk, working on the GemStone Smalltalk product line. In his spare time, he works on Mist, a Smalltalk variant with improved modularity and security and no virtual machine.",
        },
      ],
    ],
  },
  '301-gree-gemstone-update-and-product-roadmap': {
    videoId: 'aR-1pKGgFG0',
    title: 'GemStone Update and Product Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/01-GemStone-Update.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Update regarding GemTalk Systems and the GemStone product roadmap',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norm Green started his career in 1989 at IBM in Toronto, Canada as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build site-wide data collection system in VisualWorks and GemStone/S Smallalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. These days, Norm lives near Portland, Oregon, USA and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
    ],
  },
  '302-fost-running-pharo-in-gemstone': {
    videoId: 'SvHXmOm2mrw',
    title: 'Running Pharo in GemStone',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/02-PharoGS.pdf',
    abstractParagraphs: [
      [
        {
          text: 'While many Smalltalk libraries and frameworks (such as Seaside) are intentionally portable across dialects maintaining fidelity to a portability layer (such as Grease) is somewhat challenging since it is easy to write code that accidentally bypasses the portability layer and not discover it till the port is attempted. Also, a portability layer by definition contains only things that exist in all dialects, so is a subset and cannot include unique features.',
        },
      ],
      [
        {
          text: 'An alternative approach is to emulate another dialect\'s virtual machine. For example, a Pharo8.0 "Minimal Image" has over 1500 classes with over 26,000 methods, yet "only" (!) 533 of the methods are primitives. Since GemStone has a unique ability to host multiple class hierarchies and alternate implementations for the same selector in the same class, we will explore how much of Pharo can be run in GemStone.',
        },
      ],
      [
        {
          text: "If you have a package that run in a Pharo8.0 minimal image, and you want to see it run in GemStone, send me instructions for loading it into Pharo and running tests and I'll include it in my presentation!",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'As a junior-high student in 1971, James discovered the local university’s computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk bigot. James is teaching undergraduate computer science classes and also serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '303-kott-onion-and-swiss-cheese-security': {
    videoId: 'Us1wJBHVj2E',
    title: 'Onion and Swiss Cheese - Security Revisited',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/03-Security-Revisited.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation, Jerry will explore two popular metaphors in Information Security and their applicability to Smalltalk environments. What are the unique challenges we face in image-based applications as compared to other languages? How do we look for potential vulnerabilities in our code? Jerry will also share his experience in using Pharo on Kali Linux, the most advanced penetration testing OS distribution.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jerry has been a Smalltalk developer and advocate for over 25 years. Throughout his career, he has worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing, entertainment, as well as Smalltalk frameworks and development tools. Jerry’s interest in cybersecurity led him to pursue advanced cybersecurity training. He is an Offensive Security Certified Professional, with additional training in Enterprise Incident Response and Advanced Threat Hunting from leading security firms. In his quest for understanding all aspects of security, he developed a deep appreciation for the human side of cybersecurity and learning of the attacker mindset.',
        },
      ],
    ],
  },
  '304-umez-evolving-allstocker': {
    videoId: 'FbLX0bZPgDg',
    title: 'Evolving ALLSTOCKER',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/04-Evolving%20Allstocker.pdf',
    abstractParagraphs: [
      [
        {
          text: 'ALLSTOCKER is an online platform for trading used construction equipment and machinery. It has been developed with a polyglot microservices approach using Pharo Smalltalk as the core of the system. We will present how the marketplace web-app has been evolved incrementally in agile development process. We also pick-up the real-time auction system and explain what has been done to make it highly reactive.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Masashi Umezawa is an agile process consultant at SoftUmeYa, LLC and a tech fellow at SORABITO, Inc. He has been using Smalltalk since 1994. He has organized Smalltalk-users.jp meetups for 10 years. He has developed several OSS Smalltalk libraries and wrote "Jiyuu jizai Squeak Programming" book in Japan.',
        },
      ],
      [
        {
          text: 'Kazunori Ueda is a full stack software developer at SORABITO Inc. He has been using Smalltalk for one year and developed "SmalltalkJenga" to explore how dynamic Smalltalk is.',
        },
      ],
    ],
  },
  '305-mcin-scarlet-smalltalk': {
    title: 'Scarlet SmallTalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/1-scarlet.pdf',
    abstractParagraphs: [
      [
        {
          text: 'LabWare has for 30 years worked in the laboratory information management system space (LIMS). Their system is written in VSE Smalltalk and has accumulated decades of business logic written in Smalltalk.',
        },
      ],
      [
        {
          text: 'Utilizing this treasure trove on mobile was only possible by trying to run Smalltalk on the mobile devices (iOS, Android). Not currently being able to run Smalltalk on mobile devices in an acceptable manner, LabWare decided to use cross translation to JavaScript. Our current cross compiler and runtime system resulting from this effort is called Scarlet SmallTalk.',
        },
      ],
      [
        {
          text: 'Scarlet SmallTalk is a Smalltalk to JavaScript cross-compiler and runtime inspired and partially based on Amber.',
        },
      ],
      [
        {
          text: 'The compiler is a modified version of the current Squeak compiler and generates code that is strongly influenced by Amber.',
        },
      ],
      [
        {
          text: "This talk will present the basic concepts of how Scarlet works and how the resulting JavaScript code is integrated into the LabWare iOS & Android applications. Our goal was to compile 500K lines (1.4 million words) of Smalltalk into JavaScript code that was more readable, more friendly to Apple's JavaScript Core engine, and could be compiled in just a few minutes.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "John McIntosh is the lead iOS and platform architect at LabWare. He has been working with Smalltalk since the mid 90's and was responsible for the maintenance of the early Macintosh Squeak VM, and the creation of the iPhone Squeak VM & current Macintosh VM. He has work on various large Smalltalk projects such as Sprint ION, Sophie, and Kapital @ JP Morgan. For most of this decade he been involved in building various iOS applications, from pure ObjC/Swift to LabWare's Smalltalk/Swift hybrid solution now found in Apple's App Store, and the Google Play Store.",
        },
      ],
      [
        {
          text: "Michael Rueger is Android/Smalltalk/Javascript developer at LabWare and has been working with Smalltalk since the early 80's. He was part of Squeak Central at Disney Imagineering and Co-founder and development lead at Impara. Impara developed Plopp and was a major contributor to Sophie and Squeak. He was one of the initiators of Pharo, but then got pulled into Android before coming back to Smalltalk at LabWare, where he is also responsible for Android development.",
        },
      ],
    ],
  },
  '306-cost-active-research-on-advanced-debugging': {
    videoId: 'JrFh-oFTRTA',
    title: 'Active research on advanced debugging tools',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/05-Active%20research%20on%20advanced%20debugging%20tools.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Hard and evil bugs are no match for advanced debugging tools: - Talk to your debugger and script your debugging sessions with Sindarin - Debug in isolation - Live reverse-debugging - A chest to store your precious objects - PowerAssert Replay: replay your failed assertions In this presentation, we show research prototypes of advanced debugging tools we are working on.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Steven Costiou: I am an Inria researcher and I work in the RMoD team. Before that, I worked six years in the industry as a software developer. Today, I do research on software engineering. I work especially on debugging for which I'm interested in different topics: reflection and meta-programming, object-centric instrumentation, dynamic software adaptation, dynamic languages and virtual machines.",
        },
      ],
      [
        {
          text: 'Thomas Dupriez: I am a PhD student in the RMoD team. I work on debuggers and debugging tools. I am interested in exception mechanisms and execution manipulation.',
        },
      ],
    ],
  },
  '307-infa-pythonbridge': {
    title: 'PythonBridge',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/2-python-bridge.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk is about capitalizing on the large amount of software developed by the Python community. The Pharo community is great, but is not almighty, and does not have the muscle to reinvent nor replicate all the tools and libraries developed in other languages. PythonBridge is all about easily bridging Python libraries from Pharo, allowing Pharoers to capitalize on the vast Python ecosystem from our cozy Pharo image.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alejandro is a chilean researcher and software engineer that has been developing software in Pharo for the last 6 years. He is currently working at ObjectProfile where he has worked in profiling, visualizations, data analysis, machine learning and source code analysis.',
        },
      ],
    ],
  },
  '308-wilk-livetyping-automatic-type-annotation': {
    videoId: 'nFaB07q-7MI',
    title:
      'LiveTyping: Automatic Type Annotation to improve the Programming eXperience',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/06-LiveTypingDemo.pdf',
    abstractParagraphs: [
      [
        {
          text: "LiveTyping automatically annotates variables' types based on the objects assigned to them, and method's return types based on the returned objects. It does it while the system runs due to small changes made to the VM. With the annotated type information the tools can be greatly improved, boosting the programming experience and opening a new way of thinking about the Smalltalk's tools. LiveTyping allows to look for actual senders based on the receiver's type, rename messages based on the actual senders and implementors without making a manual and error prone filtering of them, delete methods based on actual senders, autocomplete code as in statically typed languages and help the programmer to understand the types of objects when reading code, among many other advantages. It does it without loosing any of the dynamic characteristic we all love of Smalltalk and with an unnoticeable performance hit. In this talk I will show the changes made to the VM, how it compares to similar approaches, how the type information is stored in the image and how the tools take advantage of that information showing concrete and useful day to day examples. Finally, I'll share with you what I conceptually learned implementing LiveTyping and why type information should be handle fundamentally different in dynamically typed languages compared to statically typed ones.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Hernan Wilkinson is a passionate programmer. Smalltalk lover. Founder of 10Pines and FAST (Argentine Foundation of Smalltalk). Professor at the University of Buenos Aires. Teaches OO and Agile techniques at the university and the industry. Key Note Speaker of many national and international conferences. Contributes to many Smalltalk open source projects. Promotes horizontal organizations and agile methodologies. You can follow him in Twitter at @hernanwilkinson',
        },
      ],
    ],
  },
  '309-marr-big-data-with-pharo': {
    title: 'Big Data with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/3-BigData.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present Port, a Big Data framework for Pharo, written in Pharo. It allows parallel remote execution of code either in a Map/Reduce fashion, or usig a Spark-like data structure and API. Port can be use to execute your code in parallel on multiple pharo images both locally, or on a cluster.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I am a second year PhD student at the Vrije Unversiteit Brussel, and I also work in collaboration with RMoD. I work on debugging Big Data applications, in particular Map/Reduce or Spark-like applications running on Port, my Big Data framework for Pharo.',
        },
      ],
    ],
  },
  '310-syre-one-rendering-tree': {
    videoId: 'A0QGyQO7_J8',
    title: 'One rendering tree',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is built on top of Bloc graphical stack. Bloc is an extensive infrastructure, but at its core it relies on a core property: one rendering tree. In this talk we look at the magic that this property makes possible, ranging from how we built a new live notebook category and how graphs can be intertwined with any widgets.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Aliaksei Syrel works as a UI magician at feenk gmbh. He is a co-author of the Glamorous Toolkit (gtoolkit.org). Since recently he spends his energy rethinking the graphical stack of Glamorous Toolkit, a space in which he is a core contributor to Bloc and the creator of the Sparta canvas, a project that received the 1st prize at the ESUG 2016 Innovation Awards.',
        },
      ],
    ],
  },
  '311-peck-why-is-vasmalltalk-a-great': {
    title:
      'Why is VASmalltalk a great possibility for doing IoT and edge computing?',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/4-VA-IoT.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Interest in the IoT space continues to expand, specifically in the enterprise space where the requirements of stability, security and performance are far different than that of the hobbyist. The hardware has improved to the point that small IoT devices are not just being limited in scope to the collection of data. These devices now have ample processing power to apply business logic and process the data before being sent out to storage locations like the cloud.',
        },
      ],
      [
        {
          text: 'In this talk I will answer: Why is Smalltalk a good fit for IoT and edge computing? Does it have unique features over other languages? How would IoT benefit from Smalltalk?',
        },
      ],
      [
        {
          text: 'I will show why VASmalltalk in particular is a great choice for IoT and edge computing by showing some specific applicable features: cross development, bootstrapped and reduced images, remote debugging, true headless VM, multiple CPU architecture support (ARM, aarch64) , ARM JIT compiler, transparent GemStone persistency, and different kinds of sensors with different protocols (1-Wire, I2C, etc) etc.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Mariano is a systems engineer specializing in software solutions based on dynamic programming languages currently working at Instantiations Inc. He contributes to the development and maintenance of VA Smalltalk commercial development environment. Responsibilities include crafting or importing frameworks, libraries and tools, as well as improving the existing code base of the product.',
        },
      ],
      [
        {
          text: 'As a Smalltalk expert, he is active in the Smalltalk community and has co-authored numerous open-source project. Mariano’s academic research has been published across various international journals. He has a PhD in Computer Science from RMOD-INRIA and the École Des Mines de Douai in France, where his thesis was on application-level virtual memory for object-oriented systems.',
        },
      ],
    ],
  },
  '312-teso-ui-test-with-spec': {
    videoId: 'a7i96YFNJbk',
    title: 'UI Test with Spec: the Future is here (hace rato)',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/08-Spec%20Tests.pdf',
    abstractParagraphs: [
      [
        {
          text: 'UI Testing is always a challenging task. For example, UI testers should cover UI interactions, application state representation and its corresponding update, windows navigation and UI layouting. One solution to UI testing involves manual execution of tests (basically, opening the UI and clicking, clicking and more clicking). On the other side, UI testing frameworks, like Selenium, allow scripting and emulation of such tests but have a steeper learning curve and require a more complex setup.',
        },
      ],
      [
        {
          text: 'Easy or not, automated tests are crucial to apply any well-known software engineering task (like TDD or refactorings) that helps keeping a good product quality and a healthy mental state. In this talk we present how to (almost) effortlessly apply automated unit testing on Spec Applications. For this, we dive in Spec’s architecture and explain how we do test the different concerns with different kind of tests - layouting, presenter behaviour, backend integration.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open source projects like the ones in the Pharo Community [http://pharo.org/] and the Uqbar Foundation [http://www.uqbar-project.org/].',
        },
      ],
    ],
  },
  '313-gran-molding-declarative-views': {
    videoId: 't7cLKDnd_ng',
    title: 'Molding Declarative Views',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/09-MoldingDeclarativeViews.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit shows how custom views can be described in a few lines of code. This is mostly possible due to the declarative nature of the view definitions. In this talk, we show how we can transform these definitions to be entirely declarative, and how, once we do that, we enable remote inspection.',
        },
      ],
    ],
    bioParagraphs: [
      [{ text: 'Alistair Grant ...' }],
      [{ text: 'Juraj Kubelka ...' }],
      [
        {
          text: 'Andrei Chis (andreichis.com) acts as a tool crafter at feenk (feenk.com) building tools and techniques for improving software development. He is a co-author of the Glamorous Toolkit (gtoolkit.org) and a core contributor to both the Moose analysis platform (moosetechnology.org) and the Pharo programming language (pharo.org). Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
    ],
  },
  '314-gane-releasing-on-every-commit': {
    title: 'Releasing on every commit',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is developed on trunk and gets released on every commit that leaves the build green. For every release, we tag all Git repositories and publish the modified baselines to ensure reproducibility of the release. This works with a deeply nested structure, which in the case of Glamorous Toolkit consists of 53 different projects. In this talk, we detail the Releaser infrastructure and how it can be used for any other Pharo project.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "George has been writing development tools since 2009. Even though he started with Java and Eclipse, he has now graduated to Pharo Smalltalk :). During the past year and a half he's working at Feenk on almost anything from Gtoolkit to setting up ssl certificates for Jenkins servers.",
        },
      ],
    ],
  },
  '315-teso-strategies-for-non-blocking-ffi': {
    videoId: 'L_QFwsNOMAc',
    title: 'Strategies for Non-Blocking FFI',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/10-strategies%20for%20non-blocking%20ffi.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Interacting with external libraries is crucial for business to avoid reinventing the wheel and use good quality existing libraries. In the last years, the use of external libraries in Pharo through FFI has notably augmented because of the ease of use of libraries like Unified-FFI. However, restrictions in the current state of the runtime makes FFI blocking. This is specially annoying and inefficient when FFI calls do take a lot of time, because they freeze the VM execution. This means for example, that an expensive SQL query can lower the throughput of your business application.',
        },
      ],
      [
        {
          text: 'In this talk we present several solutions we have under development in the Pharo consortium to be released before the end of the year. Each of these solutions has a different architecture to allow non-Blocking FFI, and each presents different advantages and disadvantages.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open source projects like the ones in the Pharo Community [http://pharo.org/] and the Uqbar Foundation [http://www.uqbar-project.org/].',
        },
      ],
    ],
  },
  '316-noce-dancing-links-in-smalltalk': {
    title: 'Dancing Links in Smalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/7-Dancing%20Links.pdf',
    abstractParagraphs: [
      [
        {
          text: "This talk aims to show *Dancing Links* (re)-introduced by Donald Knuth and it can be regarded as an educational pearl. In Donald's words:",
        },
      ],
      [
        {
          text: 'Suppose x points to an element of a doubly linked list; let L[x] and R[x] point to the predecessor and successor of that element. Then the operations: L[R[x]] ← L[x], R[L[x]] ← R[x] (1) remove x from the list; every programmer knows this. But comparatively few programmers have realized that the subsequent operations L[R[x]] ← x, R L[x] ← x (2) will put x back into the list again. The element denoted by x has been deleted from its list; why would anybody want to put it back again? An interactive program may need to revert to a former state; oth, another typical application arises in backtrack programs, which enumerate all solutions to a given set of constraints. The beauty of (2) is that operation (1) can be undone by knowing only the value of x. We can apply (1) and (2) repeatedly in complex data structures that involve large numbers of interacting doubly linked lists. This process causes the pointer variables inside the global data structure to execute an exquisitely choreographed dance; hence I like to call (1) and (2) the technique of *dancing links*.',
        },
      ],
      [
        {
          text: 'We would like to show our implementation which uses plain DoubleLink and DoubleLinkedList objects and some applications to exact cover problems such as sudoku and N-Queen.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm a post-doc at the University of Florence, working primarily on combinatorics, formal methods for the analysis of algorithms and NLP, having a deep passion for programming from a long time. I graduated at the same University and my interests concern logic, programming paradigms and algorithms. I publish my code on https://github.com/massimo-nocentini.",
        },
      ],
    ],
  },
  '317-miti-just-in-time-compilation': {
    videoId: 'd-HtY4yjI48',
    title: 'Just in Time compilation in VAST',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/11-VAST_jit.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Languages and frameworks running on virtual machine runtimes are heavily dependent on their performance characteristics. And the overall performance is an important part of any production-ready application. At Instantiations, we continue to push forward with VA Smalltalk VM performance. In this talk I will demonstrate the improvements done to the VM using the powerful LLVM framework. I will give additional insights on how we achieved fast and efficient native translation of Smalltalk code.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Prior to Instantiations, Alexander spent more than 5 years developing software for a steel company where he gained expertise in a wide variety of domains, including the development of real-time systems. After joining Instantiations in November of 2003, Alexander became a key developer for the award-winning WindowBuilder project, including the famous GWT Designer product which was acquired by Google. Following this, Alexander joined Instantiations' Smalltalk department, becoming the team lead engineer for the next-generation of VA Smalltalk's virtual machine and oversees all vm development tasks. Alexander has a B.S. & M.S. in Electric Engineering.",
        },
      ],
    ],
  },
  '318-henr-turning-a-tonel-class-file': {
    title: 'Turning a Tonel Class File into a Shell script',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/8-St_Script.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Now that the Smalltalk community is using git for source code control, there is an opportunity to include Shell scripts as part of the git repository for a Smalltalk project.',
        },
      ],
      [
        {
          text: 'Shell scripts for installation and launching of Smalltalk programs can be very useful, especially for newcomers to Smalltalk. Since many Smalltalk projects are intended for use with multiple Smalltalk implemenations, the Shell scripts should be executable against the set of supported platforms, as well.',
        },
      ],
      [
        {
          text: 'I will present my work on a cross platform scheme for writing, maintaining and executing Smalltalk shell scripts.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dale Henrichs is a Principal Engineer at GemTalk Systems and has been working in Smalltalk since 1985. For the last decade Dale has focused on the development and support of open source projects for both GemTalk Systems and the Smalltalk community. His contributions to the Smalltalk community include Metacello, FileTree, and the GemStone port of Seaside. Recently, Dale has been working on Rowan a replacement for Monticello and Metacello.',
        },
      ],
    ],
  },
  '401-berm-va-smalltalk-product-update': {
    videoId: 'q5AsH-8zA-M',
    title: 'VA Smalltalk Product Update',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/1-VA%20Smalltalk%20Product%20Update_GS_SB.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Instantiations is continuing to invest heavily in VA Smalltalk to better support our loyal and growing customer-base. I’m going to talk about the success story of our 9.1 release last year and focus on all the wonderful features that will be landing this year in VA Smalltalk 9.2.',
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
  '402-peck-improving-vasmalltalk-deployment-availability': {
    videoId: 'phQnG4wX9j0',
    title:
      'Improving VASmalltalk deployment, availability and scalability with Docker',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/2-VA-Docker.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Anyone that has ever done a deployment with Smalltalk knows how easy it can be compared to other languages. But the technology space is always in motion and with a continued increase in DevOps roles, the rest of the world offers top notch technologies for improving deployment, availability, scalability, and other aspects of the whole software engineering process.',
        },
      ],
      [
        {
          text: 'In this talk, I will show how VA Smalltalk integrates smoothly with these technologies to build enterprise-class scalable and performant systems. I will demonstrate how to take an application from the development environment and prepare it for deployment. I will show how to get started with Docker by building Docker images and running them within isolated containers. Finally, I will create an ARM 64 cluster using Raspberry Pi and a Pine64 IoT devices that will be running a cloud of containers: a Docker Swarm.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Mariano is a systems engineer specializing in software solutions based on dynamic programming languages currently working at Instantiations Inc. He contributes to the development and maintenance of VA Smalltalk commercial development environment. Responsibilities include crafting or importing frameworks, libraries and tools, as well as improving the existing code base of the product.',
        },
      ],
      [
        {
          text: 'As a Smalltalk expert, he is active in the Smalltalk community and has co-authored numerous open-source project. Mariano’s academic research has been published across various international journals. He has a PhD in Computer Science from RMOD-INRIA and the École Des Mines de Douai in France, where his thesis was on application-level virtual memory for object-oriented systems.',
        },
      ],
    ],
  },
  '403-hins-2019-polymath-updates': {
    title: '2019 PolyMath updates',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/3-PolyMath1.0.pdf',
    abstractParagraphs: [
      [
        {
          text: 'We will present the last development of PolyMath, an open-source numerical computing library based on Pharo Smalltalk: PCA, t-SNE, etc ... PolyMath include Dataframe, a data science framework build by Olekskandr Zaytsev.',
        },
      ],
    ],
    bioParagraphs: [[{ text: 'We are PolyMath :-)' }]],
  },
  '404-haid-our-moneys': {
    videoId: 'sXkjBc-JbRE',
    title: 'Our Moneys',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/4-OurMoneys.pdf',
    abstractParagraphs: [
      [
        {
          text: 'The budgets of communities and countries are the base of all politics: how much money is collected and how is it spent - our money! Unfortunately, budgets are extensive and complex - difficult to understand. To make things worse: they usually come only in large PDFs.',
        },
      ],
      [
        {
          text: 'The new commercial project "Unsere Gelder" (our moneys) is set out to change this! A data catalog for public budget data is going to hold data in all forms (doc, PDF, CSV, XML...) uploaded by anyone. The data will be made available as tables (CSV, SQL) or graphs (RDF) via a public API. Especially the automatic extraction of data tables from PDF documents will be one focus of the project.',
        },
      ],
      [
        {
          text: 'The budget data will be presented using special visualizations and navigations for better understanding. Comparisons and rankings will reveal information and context not available today.',
        },
      ],
      [
        {
          text: 'The talk will introduce the project and talk about the envisioned design and the business case. For details in German see https://unsere-gelder.de .',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Christian Haider works with his company "Smalltalked Visuals GmbH" on "smallCharts" - chart programs for newspapers. He has been using Smalltalk on a daily basis for more than 20 years for graphics and UI programming (and everything else). Author of the open source PDF library PDFtalk, the Values package and some goodies for VisualWorks. Been attending ESUG since 2002 and has given presentations.',
        },
      ],
    ],
  },
  '405-fron-rpc-in-smalltalk': {
    videoId: 'IsX-3xedHu8',
    title: 'RPC in Smalltalk',
    presentationUrl: 'https://archive.esug.org/ESUG2019/04Thursday/5-RPC.pdf',
    abstractParagraphs: [
      [
        {
          text: 'RPC (Remote Procedure Call) allows applications to communicate between computers. The talk will first expose a list of issues raised when connecting different memory spaces, then will explore some solutions to handle it, by comparing their different merits: sockets, VW I3, web services and more recently gRPC and web sockets.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Annick has been using and teaching RPC for many years, and is author of the book «Applications Réparties en Java», Dunod 2015, 3rd edition.',
        },
      ],
    ],
  },
  '406-girb-regaining-privacy': {
    videoId: 'F1G7-TNOgy8',
    title: 'Regaining privacy',
    abstractParagraphs: [
      [
        {
          text: 'Privacy is a desire, but no longer a reality. This should change. At polypoly.eu we work to solve this problem by placing the user at the center and in control of her/his digital shadow. The technical work is proudly driven through moldable development with Glamorous Toolkit.',
        },
      ],
    ],
    bioParagraphs: [
      [{ text: 'Tudor Girba ...' }],
      [
        {
          text: 'Andrei Chis (andreichis.com) acts as a tool crafter at feenk (feenk.com) building tools and techniques for improving software development. He is a co-author of the Glamorous Toolkit (gtoolkit.org) and a core contributor to both the Moose analysis platform (moosetechnology.org) and the Pharo programming language (pharo.org). Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
    ],
  },
  '407-berm-unified-compression-streams': {
    videoId: 'neTO5M1Y6e0',
    title: 'Unified Compression Streams',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/7-VA%20Smalltalk%20Compression%20Support.pdf',
    abstractParagraphs: [
      [
        {
          text: 'VA Smalltalk has support for a wide variety of compression algorithms out-of-the-box such as Brotli, ZStandard, LZ4, GZip and DEFLATE. All of these are integrated into our Unified Compression Streams framework which provides a robust API and handles the details of implementing high-performance streams. I will be giving an overview of the framework as well as demonstrating how easy it is to enable streaming of new algorithms.',
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
  '408-ferl-spec-2-0-building': {
    videoId: '0M6vP_XYg5E',
    title: 'Spec 2.0 - Building a GUI with Spec 2',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/8-Building_a_GUI_with_Spec_2.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Pharo is pushing a new version of Spec, a framework for describing user interfaces, in Pharo 8. A lot of changes are happening since the previous version. Here is a tutorial to implement an interface in Spec 2 to explore some of the new features of Spec 2.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Cyril is currently a research and development engineer at Inria after obtaining a Master of Business Informatics at the University of Lille. He working on the creation of an IDE for software analysis.',
        },
      ],
      [
        {
          text: 'He likes participation to open sources projects on its free time such has Seaside, Telescope, Material Design Lite...',
        },
      ],
    ],
  },
  '409-amar-probabilistic-modeling-apis': {
    videoId: 'ehQT-TnkUMs',
    title: 'Probabilistic Modeling APIs',
    abstractParagraphs: [
      [
        {
          text: "We've been working on a set of RESTful APIs to support the definition and simulation of probabilistic models. Among others, they include support for probability distribution validation, correlated and uncorrelated sampling, unit conversion, dimensional analysis, unit inference, expressions (via FML, Functional Modeling Language), mathematical representation of expressions, etc. We will visit the main aspects of these APIs while using an example web application built on top of them.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I live in Buenos Aires, Argentina. I have been devoted to Smalltalk for many years. I have used it and enjoyed it throughout my entire professional career. I am currently working at Aucerna, an international company of software development for the oil and gas industry.',
        },
      ],
    ],
  },
  '410-vano-smalltalk-application-playground': {
    videoId: 'VJ83284FOI0',
    title: 'Smalltalk Application Playground',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/10-OHRA%20StAP.pdf',
    abstractParagraphs: [
      [
        {
          text: "StAP (Smalltalk Application Playground) is a newly developed insurance platform for market experiments. The goal of StAP is to try out new products in a fast and flexible but compliant manner in a highly regulated market. It is developed using VA Smalltalk and offers REST API's for front-end applications, a Seaside web application for managing policies and a back-end. We will present the creation of StAP in the historical context of developing Smalltalk applications for decades at OHRA and discuss the choices we made.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Adriaan van Os is a software engineer at OHRA. Adriaan has been developing with various Smalltalk dialects since 1995. Adriaan is also the creator and maintainer of VAStGoodies.com, a code sharing platform for VA Smalltalk.',
        },
      ],
      [
        {
          text: 'Wouter van Zuilen is a product owner at OHRA by day. Loves experimenting with Smalltalk by night.',
        },
      ],
    ],
  },
  '411-mcin-p2p-communication-via-mqtt-endpoints': {
    videoId: 'ffE4trXLqfM',
    title: 'P2P communication via MQTT endpoints',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/11-MQTTWhatIs2.pdf',
    abstractParagraphs: [
      [
        {
          text: 'LabWare has for 30 years worked in the laboratory information management system space (LIMS). Their system is written in VSE Smalltalk and has accumulated decades of business logic written in Smalltalk.',
        },
      ],
      [
        {
          text: 'Two years ago the requirement for a robust communications path between a mobile device and a cloud based VSE server was identified. The solution was to use MQTT which required writing a pure Smalltalk server side MQTT broker, and utilizing platform side MQTT clients.',
        },
      ],
      [
        {
          text: 'MQTT is the communications protocol, but required the additional layering of another protocol to simplify the complexity of the communications pipe.',
        },
      ],
      [
        {
          text: "This talk will present the basic concepts of how LabWare's MQTT/Endpoints provide asynchronous or synchronous point to point communications in an environment where the JavaScript client is single threaded and talks to a VSE server that supports multiple mobile sessions.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "John McIntosh is the lead iOS and platform architect at LabWare. He has been working with Smalltalk since the mid 90's and was responsible for the maintenance of the early Macintosh Squeak VM, and the creation of the iPhone Squeak VM & current Macintosh VM. He has work on various large Smalltalk projects such as Sprint ION, Sophie, and Kapital @ JP Morgan. For most of this decade he been involved in building various iOS applications, from pure ObjC/Swift to LabWare's Smalltalk/Swift hybrid solution now found in Apple's App Store, and the Google Play Store.",
        },
      ],
    ],
  },
  '412-oda-viennatalk-a-formal-method-environment': {
    videoId: 'oycl9yUVZd8',
    title: 'ViennaTalk : A formal method environment on Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/04Thursday/12-ViennaTalk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, ViennaTalk, a development environment for VDM-SL will be introduced with demos. VDM is a lightweight formal technique originated back in 70s, and VDM-SL is one of its specification languages. One interesting feature of VDM-SL is that it has executable subset and thus a specification written in VDM-SL can be unit-tested and also used as a prototype code.',
        },
      ],
      [
        {
          text: "ViennaTalk is a development environment for VDM-SL built on top of Pharo. The design goal of ViennaTalk is to support exploratory stage of the specification phase by incorporating Pharo's programming styles such as TDD and quick prototyping including UIs and lightweight web APIs. It provides Web IDE (VDMPad available at https://vdmpad.viennatalk.org/), VDM Browser with automatic unit testing, Smalltalk code generators, UI prototyper and web API prototyper.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Tomohiro Oda is a programmer and researcher at Software Research Associates, Inc. Formal methods engineer since 1992. Smalltalk lover since 1994. A former game programmer in 20th century.',
        },
      ],
    ],
  },
  '501-duca-how-to-improve-yourself-while': {
    videoId: '-1x08ND2hkg',
    title: 'How to improve yourself while having fun improving Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/1-2019-ESUG-LearningByDoing.pdf',
    abstractParagraphs: [
      [
        {
          text: 'There is no magic. You rarely get born as a super coder and great system designer. No! You may be a bit talented but you have to learn. The point is how to learn what is not written in books or taught. The solution is simple: gets exposed!',
        },
      ],
      [
        {
          text: 'In this talk I will show that - contributing to Pharo is easy - you can be proud about participating - you can learn ***a lot*** doing it',
        },
      ],
      [
        {
          text: 'And I will show that it is addictive and that you can get an impact building a better system.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an Inria Research Director. I lead RMoD team http://rmod.lille.inria.fr. I'm expert in language design and reengineering. I worked on traits. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala, Groovy and Fortress. I'm expert on software quality, program understanding, program visualisations, reengineering and metamodeling. I'm one of the developer of Moose, an open-source software analysis platform http://www.moosetechnology.org/. I created Synectique a company building dedicated tools for advanced software analyses. I'm one of the leader of Pharo http://www.pharo.org/ a dynamic reflective object-oriented language supporting live programming. I built the industrial Pharo consortium http://consortium.pharo.org. I work regularly with companies (Thales, Wordline, Siemens, Berger-Levrault, Arolla,...) on software evolution problems. I wrote couple hundred articles and several books. According to google my h-index is 55 for more than 12900 citations. I like to help people becoming what they want and building things.",
        },
      ],
    ],
  },
  '502-weih-objectivesmalltalk': {
    videoId: 'vrD3TrVuiV0',
    title: 'ObjectiveSmalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/2-ESUG19_ObjectiveSmalltalk.pdf',
    abstractParagraphs: [
      [
        {
          text: "Objective-Smalltalk is a reworking of Smalltalk from first principles, taking into account both the vastly changed computing landscape and what we have learned in the almost 40 years since Smalltalk's release.",
        },
      ],
      [{ text: 'http://objective.st' }],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcel is a researcher, author, long time Objective-C developer and early Squeak contributor who created the first Cocoa VM.',
        },
      ],
    ],
  },
  '503-niep-polyglot-notebooks-with-squeak-smalltalk': {
    videoId: 'FAk3Ec8hmzk',
    title: 'Polyglot Notebooks With Squeak/Smalltalk on the GraalVM',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/3-ESUG19_GraalSqueak_and_Polyglot_Notebooks.pdf',
    abstractParagraphs: [
      [
        {
          text: 'We present our Squeak/Smalltalk-based polyglot notebook system for the GraalVM. Our platform enables data analysts to use multiple programming languages, allowing them to use mature software libraries and frameworks without being constrained by a particular language.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Fabio Niephaus is with the Software Architecture Group at the Hasso Plattner Institute, University of Potsdam, Germany. He has strong interests in dynamic programming languages, virtual execution environments, and software development tools. He focuses on advancing the polyglot programming experience.',
        },
      ],
    ],
  },
  '504-west-design-matters': {
    videoId: '-If3xPjqF2E',
    title: 'Design Matters',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/4-desigMatters.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Effective application development using Smalltalk depends on two factors: language semantics and object design. This talk will briefly look at language semantics and then focus on design issues: beginning with a discussion of how "responsibility-driven design" leads to a more robust set of objects and appropriate distribution of work across those objects. The final portion of the talk will discuss how to make a bridge between behavioral description (e.g. CRC cards) and coding guidelines for objects and methods with the use of "Object Cubes."',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dave West has been in the profession since its inception (1968) and has held positions ranging from programmer to Chief Information Officer. He is also a Professor of Computer Science and Software Development and creator of award-winning programs in software development apprenticeship education.',
        },
      ],
    ],
  },
  '505-poli-software-architecture-stories': {
    videoId: 'HMtH-F0o04Q',
    title: 'Software Architecture Stories',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/5-story%20architectures.pdf',
    abstractParagraphs: [
      [
        {
          text: 'When asked about software architecture we tend to describe structures such as layers, services, micro-services, components, distribution. However, structure is not the only link between these architectures. Some people describe also software architectures as decisions, sometimes complex decisions or hard to change decisions.',
        },
      ],
      [
        {
          text: 'Understanding the reasoning behind architecture decisions is key to evaluate and adapt architectures to new situations. This talk tells several stories about existing software architectures, how they are, how they came to be and what did we learn in the process. Because stories have morals, and architectures have them too.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guille Polito is research engineer at the CRIStAL laboratory in the University of Lille, working in tight relation with the RMoD team. He formerly worked on industry on service-oriented and mobile applications before doing a PhD on computer science. Guille's main research interests are modularity and development tools. Guille participates in the Pharo community since 2010 and is now board member. His most noticeable contributions to the community are the Pharo Bootstrap process and Iceberg.",
        },
      ],
    ],
  },
  '506-roma-improving-code-completion-in-pharo': {
    videoId: 'M6SxEC77HHE',
    title: 'Improving Code Completion in Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/6-Improving%20Code%20Completion%20Myroslava%20Marcus.pdf',
    abstractParagraphs: [
      [
        {
          text: "The goal of this project has been to both refactor the code of the existing completion in Pharo, and come up with a tool that would improve the actual performance. In this presentation we will talk about the different approaches behind the two completions, the importance of using AST in our project, as well as demonstrate the results we've managed to achieve.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Myroslava is a 3rd year Computer Science student at the Ukrainian Catholic University in Lviv, Ukraine. She is currently participating in Google Summer of Code for Pharo Consortium with this project. She has been active in the Pharo community since 2017. Interested in code quality and open source development.',
        },
      ],
    ],
  },
  '507-duca-rotten-green-tests': {
    videoId: '2qjnkTk4_KM',
    title: 'Rotten Green Tests',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/05Friday/7-2019-RottenGreenTests-ICSE-2.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Unit tests are a tenant of agile programming methodologies, and are widely used to improve code quality and prevent code regression. A passing (green) test is usually taken as a robust sign that the code under test is valid. However, some green tests contain assertions that are never executed. We call such tests Rotten Green Tests.',
        },
      ],
      [
        {
          text: 'Rotten Green Tests represent a case worse than a broken test: they report that the code under test is valid, but in fact do not test that validity. We describe an approach to identify rotten green tests by combining simple static and dynamic call-site analyses. Our approach takes into account test helper methods, inherited helpers, and trait compositions, and has been implemented in a tool called DrTest. DrTest reports no false negatives, yet it still reports some false positives due to conditional use or multiple test contexts. Using DrTest we conducted an empirical evaluation of 19,905 real test cases in mature projects of the Pharo ecosystem. The results of the evaluation shows that the tool is effective; it detected 294 tests as rotten– passing tests that contain assertions but that are not executed. Some rotten tests have been “sleeping” in Pharo for at least 5 years.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an Inria Research Director. I lead RMoD team http://rmod.lille.inria.fr. I'm expert in language design and reengineering. I worked on traits. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala, Groovy and Fortress. I'm expert on software quality, program understanding, program visualisations, reengineering and metamodeling. I'm one of the developer of Moose, an open-source software analysis platform http://www.moosetechnology.org/. I created Synectique a company building dedicated tools for advanced software analyses. I'm one of the leader of Pharo http://www.pharo.org/ a dynamic reflective object-oriented language supporting live programming. I built the industrial Pharo consortium http://consortium.pharo.org. I work regularly with companies (Thales, Wordline, Siemens, Berger-Levrault, Arolla,...) on software evolution problems. I wrote couple hundred articles and several books. According to google my h-index is 55 for more than 12900 citations. I like to help people becoming what they want and building things.",
        },
      ],
    ],
  },
  '319-oliv-pharo-iot-present-and-future': {
    title: 'Pharo IoT - Present and Future',
    presentationUrl:
      'https://archive.esug.org/ESUG2019/03Wednesday/room-B/5-Pharo%20IoT.pdf',
  },
};
