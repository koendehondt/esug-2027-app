// Talk abstracts and speaker bios for the ESUG 2026 reference program,
// sourced from the Pillar talk files at
// https://github.com/ESUG/esug.github.io/tree/source/2026-Conference/talks
//
// Keyed by a slug derived from each talk's source filename. Linked from
// app/data/program-2026.js sessions via their optional `talkId` field, and
// looked up by app/routes/talk.js for the talk detail page.
//
// Each paragraph is an array of "runs" -- plain text segments, or link
// segments ({ text, url }) for the handful of inline links in the original
// Pillar markup (e.g. project URLs in speaker bios).

export default {
  b5artfulblocapi: {
    title: 'Bloc5: an Artful Bloc API Designed for Creativity',
    abstractParagraphs: [
      [
        {
          text: 'Bloc5 is a high level API for Bloc, a low-level UI infrastructure & framework for Pharo. Its design inspired by Processing, a graphic library for media art built with the purpose of teaching non-programmers the fundamentals of computer programming in a visual context.',
        },
      ],
      [
        {
          text: 'Bloc5 brings those same principles to Pharo, following the spirit of Artful Design: it prioritizes immediacy, playfulness, and expressive simplicity over technical complexity. Combined with Phausto, a package for sound generation and DSP porhramming, B5 turns Pharo into a friendly yet powerful environment for teaching and designing interactive audio-visual art, and for prototyping unusual and expressive user interfaces.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Domenico Cipriani (a.k.a. Lucretio) has been producing raw minimalist dance music for over adecade. Through various aliases and collaborations (most notably with Blawan and Objekt) he has released more than 100 vinyl records and performed at prominent clubs all over the world. After graduating from the S.A.E. Institute in Barcelona, he earned an M.A. in Linguistics from the University of Padova, specializing in social semiotics. In 2016, he began working with Symbolic Sound’s Kyma system, participating regularly in the Kyma International Sound Symposium, where he explored the integration of Kyma with p5.js and network-distributed sound systems via Open Sound Control. In 2019, he presented an interactive performance based on distributed Open Sound Control at the Sonic Experiments festival at ZKM. He later performed at the Algorave hosted by ICLC24 in Shanghai and at the closing event of ICLC25 in Barcelona. He is currently a researcher in computer music with the Evref team at Inria, where he is the architect of Coyou and Phausto, two libraries for live coding and DSP programming in Pharo.',
        },
      ],
    ],
  },
  bloc: {
    title: "Bloc for Pharo: What's New?",
    abstractParagraphs: [
      [
        {
          text: 'Bloc is a graphical UI library that provides a foundation for building widget and visualization libraries. This library has several years of development. Since 2021, we have been working on a version of Bloc to be included in Pharo, with focus on clean core features and stability.',
        },
      ],
      [
        {
          text: 'We will present the progress made over the last year in the Bloc project, including general improvements and bugfixing. We will also introduce our ongoing work on a new SDL3 host for Bloc, enabled by the new PharoSDL3 bindings, which opens the door to a more modern and portable windowing backend.',
        },
      ],
      [
        {
          text: 'We will demo the library and present the current state and future perspective.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Martín Dias worked as an engineer for many years, and got a Ph.D in 2015. He loves Pharo and the Smalltalk community. His first ESUG was in 2010, but before that assisted to Smalltalks 2009 (Argentina).',
        },
      ],
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open-source projects in the Pharo Community and the Uqbar Foundation ',
        },
        {
          text: 'http://www.uqbar-project.org/',
          url: 'http://www.uqbar-project.org/',
        },
        {
          text: '.',
        },
      ],
    ],
  },
  chatpharo: {
    title: 'ChatPharo: an AI Assistant inside Pharo',
    abstractParagraphs: [
      [
        {
          text: 'This talk presents recent developments around ChatPharo and related efforts to integrate large language models into the Pharo ecosystem. It introduces ChatPharo as a live conversational interface between Pharo developers and LLMs, designed to support interactive discussions directly inside the Pharo environment. The talk also highlights the open and extensible architecture behind ChatPharo, which enables experimentation with multiple LLM backends, and discusses related projects such as Pharo-Copilot and Pharo-Infer that explore AI-assisted programming and code completion in Pharo.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Omar AbedelKader is an AI researcher and software engineer currently pursuing a Ph.D. in Computer Science at the University of Lille. He is the founder and maintainer of the Pharo-LLM organization and leads several projects at the intersection of artificial intelligence and software engineering, including ChatPharo. His work explores conversational systems, AI-assisted programming, and open architectures for experimenting with LLMs in software development.',
        },
      ],
    ],
  },
  compiletimepicgenusinglivetyping: {
    title: 'Compile-time PIC Generation using LiveTyping Information',
    abstractParagraphs: [
      [
        {
          text: 'Dynamic message dispatch is a central feature of Smalltalk and other dynamically typed object-oriented languages. However, this flexibility comes at the cost of runtime method lookup, which can significantly impact performance. Modern Smalltalk virtual machines mitigate this cost using Just-in-Time compilation, Inline Caches, and Polymorphic Inline Caches. These caches are normally built reactively: a send site must first execute before the VM can observe receiver classes and specialize the dispatch. This talk presents an alternative approach that uses type information previously collected by LiveTyping to generate ICs and PICs proactively, before the VM would normally construct them during execution.',
        },
      ],
      [
        {
          text: 'The talk will present how this idea was implemented across the image and the OpenSmalltalk VM. At the image level, the current implementation focuses on message sends whose receivers are instance variables: an analysis identifies those candidate sends and uses LiveTyping information to determine the receiver types observed for the corresponding variables. At the VM level, a new primitive enables the controlled generation and installation of ICs and PICs in JIT-compiled code. Together, these two parts form an image-to-VM workflow that turns previously observed type information into dispatch caches generated ahead of execution.',
        },
      ],
      [
        {
          text: 'The experimental results and trade-offs of the approach will also be discussed. The evaluation compares proactively generated PICs against the default runtime behavior and JIT-only execution across benchmarks with different dispatch and allocation characteristics. The results show that proactive cache generation can reduce execution time in dispatch-dominated scenarios, especially during early execution and in methods with several send sites, while increasing the amount of generated machine code.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Nicolás Matías Sarfati is a Computer Science student at the University of Buenos Aires, currently completing his degree with only the thesis defense remaining. He has almost 15 years of experience in the software industry and currently works as an independent software architect, helping companies diagnose and solve performance issues across their applications and infrastructure.',
        },
      ],
    ],
  },
  complishon: {
    title: 'Complishon: a Better completion engine for Pharo',
    abstractParagraphs: [
      [
        {
          text: 'This talk will start with an overview of the logic behind Complishon the completion engine of Pharo. - context aware - syntactically triggered - semantically driven',
        },
      ],
      [
        {
          text: 'The talk will go over the default heuristics as well as the new package dependency- oriented features. We will also present the latest UX feature of Complishon such as the way it takes into account your recent coding as well as your recent selection. Finally we will show the tolerance introduction that cope with typos.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an expert in object design, object language design, reflective programming, and the maintenance and evolution of large applications (visualization, metrics, meta-modeling). My work on traits has been introduced in AmbientTalk, Slate, Pharo, Perl, PHP and Squeak. They have been ported to JavaScript. It has influenced the Scala and Fortress languages. I'm one of the founders of Pharo (http://www.pharo.org/), a new pure open-source object language inspired by Smalltalk. I head its industry consortium http://consortium.pharo.org. I'm one of the designers of Moose, an analysis platform (http://www.moosetechnology.org/). I was one of the founders of Synectique, a company offering dedicated analysis tools. I'm interested in virtual machines and language implementation.",
        },
      ],
      [
        {
          text: "I have written several books on language-related subjects and other topics such as learning to program and web programming: some are available at http://books.pharo.org. I co-constructed a highly acclaimed Moocs on Pharo and object programming: http://mooc.pharo.org and https://advanced-design-mooc.pharo.org I regularly work with companies such as Arolla, Berger-Levrault, Thales, Framatome, Siemens, CIM, Worldline. I'm interested in understandin",
        },
      ],
    ],
  },
  demystifyinggemstonewithai: {
    title: 'Using AI to Demystify Running GemStone Systems',
    abstractParagraphs: [
      [
        {
          text: 'GemStone has long provided hundreds of runtime statistics for each of its processes. These statistics are valuable for understanding system behavior and diagnosing runtime issues, but interpreting them often requires deep experience with GemStone internals and the operational patterns of a running system.',
        },
      ],
      [
        {
          text: 'This talk presents a tool to make GemStone runtime statistics more approachable using AI-assisted analysis. The goal is to help developers and administrators better understand what is happening inside a running GemStone system, identify potential problems, and turn raw statistics into more useful explanations.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Anna is a computer science student at Walla Walla University and a software development intern at GemTalk Systems, where she works on developer tooling projects related to GemStone. Outside of GemTalk, she creates programming-focused videos on YouTube (Anna Codes), where she shares the process of building software projects, experimenting with developer tools, and learning new technologies.',
        },
      ],
    ],
  },
  'foster-python': {
    title: 'Transpiling Python to Smalltalk',
    abstractParagraphs: [
      [
        {
          text: 'What would it take to host Python in GemStone? This presentation describes a GemTalk initiative to allow GemStone to support Python code by transpiling to Smalltalk or compiling to the internal representation (IR) used to generate bytecodes. We will also show a Visual Studio Code extension used to interact with GemStone.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'James Foster discovered the local university’s computer center as a junior-high student in 1971 and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James is on the engineering team at GemTalk Systems and is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  'gemtalk-roadmap': {
    title: 'GemTalk Update and Roadmap',
    abstractParagraphs: [
      [
        {
          text: 'A brief overview of the GemStone architecture for scalable, multi-user Smalltalk followed by the GemStone/64 product roadmap. Also an update on the recent acquisition of GemTalk by Emergence.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norm Green started his career in 1989 at IBM Canada in Toronto as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build DACS, site-wide data collection system in VisualWorks and GemStone/S Smallalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. These days, Norm lives near Portland, Oregon, USA and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
      [
        {
          text: 'James Foster discovered the local university’s computer center as a junior-high student in 1971 and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James is on the engineering team at GemTalk Systems and is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  glamoroustoolkit: {
    title: 'Glamorous Toolkit',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the Moldable Development environment. In this talk we provide an update of the environment since version 1.1 and show through concrete practical cases how a single environment can be molded to many contexts.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș acts as a tool crafter at feenk (feenk.com) building tools and techniques for improving software development and is a co-author of Glamorous Toolkit (gtoolkit.org) platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
    ],
  },
  heraayearinproduction: {
    title: 'Hera: A Year in Production — Growing a BDD Framework in Pharo',
    abstractParagraphs: [
      [
        {
          text: "At ESUG 2025, Hera was introduced as a BDD framework bringing full Gherkin expressiveness to Pharo. Since then, Hera has evolved significantly — both as a framework and as a tool adopted in real-world industrial settings. This talk presents a year of development on Hera: new features, IDE integration, and a growing ecosystem. It also describes Hera's journey beyond Pharo — ported to VisualWorks and introduced to multiple development teams in a large Smalltalk organisation, where it is now being used to automate end-of-line acceptance testing that was previously performed manually by QA staff.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Koen De Hondt has used Smalltalk since 1988, first as a student, then as an academic researcher, and then in industry. In the nineties and a few years after the turn of the century, he was one of the driving forces behind the Belgian Smalltalk User Group (BSUG). In that time frame, he presented at ESUG conferences several times. In 2003, he left the Smalltalk community for other adventures. In 2023, he returned to the Smalltalk scene and started ',
        },
        {
          text: 'all: objects all: theTime',
          url: 'https://all-objects-all-the-time.st',
        },
        {
          text: '.He has been an active contributor to Pharo ever since. Software development tools are his main interest.',
        },
      ],
    ],
  },
  liveumlsequencediagrams: {
    title: 'Live UML Sequence Diagrams, their building and tests',
    abstractParagraphs: [
      [
        {
          text: 'Sequence diagrams are a powerful tool for understanding how objects interact at runtime. This talk presents MicroSequenceDiagram, a Pharo framework that generates live UML sequence diagrams directly from running code — no manual drawing, no static analysis. By tracing actual execution, the diagrams show what really happens, not what the programmer intended.',
        },
      ],
      [
        {
          text: 'The talk demonstrates how to build interactive diagrams with drill-down navigation between packages and clickable class documentation. As a secondary topic, we present our tests code for the MicroSequenceDiagram classes and methods — all built by our AI-driven test generator.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Kasper Østerbye is a retired associate professor from IT University Copenhagen, where he was involved in building the institution and served in academic leadership. His background spans programming language design and implementation, with experience in Simula, Beta, Smalltalk, and Forth. He has worked with pioneers including Kristen Nygaard and Terry Winograd. He currently works full-time on AI research and Pharo development from his farm in Denmark, with a focus on empirical exploration of AI systems and their integration with live programming environments.',
        },
      ],
    ],
  },
  'martinmcclure-undotheworld': {
    title: 'Undo the World',
    abstractParagraphs: [
      [
        {
          text: "I think we've all had moments when we wish the world had an Undo button. Unfortunately, even Smalltalk isn't powerful enough to erase every regrettable act. But Smalltalk tools do offer Undo, and historically were among the first to do so. Unfortunately, there have long been missed opportunities, and many Smalltalk tools could be improved by making more actions undoable. In this talk I'll explore Undo from both a developer's and a user's point of view, and demonstrate tools built with undoability in mind.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Martin has been using Smalltalk for over forty years, and finds that there is always more to learn. He is a Principal Engineer at GemTalk Systems, where he has been working on the GemStone Smalltalk product line for thirty years. In his spare time, he participates in social dancing, primarily American Contra and English Country, and works on remodeling an old house and church to be a home and dance hall for him and his wife.',
        },
      ],
    ],
  },
  microdownnewgeneration: {
    title: 'Microdown New Generation',
    abstractParagraphs: [
      [
        {
          text: 'This talk with present the new developments around Pillar, Microdown and Foliage In particular the talk will present',
        },
      ],
      [
        {
          text: '- Microdown 2.0 - Pillar 11.0 (https://github.com/Pillar-markup/pillar) - Foliage 2.0 (https://pharo-project.github.io/PharoWeb20/ is generated with Foliage - BookTester to automatically verify your books.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an expert in object design, object language design, reflective programming, and the maintenance and evolution of large applications (visualization, metrics, meta-modeling). My work on traits has been introduced in AmbientTalk, Slate, Pharo, Perl, PHP and Squeak. They have been ported to JavaScript. It has influenced the Scala and Fortress languages. I'm one of the founders of Pharo (http://www.pharo.org/), a new pure open-source object language inspired by Smalltalk. I head its industry consortium http://consortium.pharo.org. I'm one of the designers of Moose, an analysis platform (http://www.moosetechnology.org/). I was one of the founders of Synectique, a company offering dedicated analysis tools. I'm interested in virtual machines and language implementation.",
        },
      ],
      [
        {
          text: "I have written several books on language-related subjects and other topics such as learning to program and web programming: some are available at http://books.pharo.org. I co-constructed a highly acclaimed Moocs on Pharo and object programming: http://mooc.pharo.org and https://advanced-design-mooc.pharo.org I regularly work with companies such as Arolla, Berger-Levrault, Thales, Framatome, Siemens, CIM, Worldline. I'm interested in understandin",
        },
      ],
    ],
  },
  moldablechats: {
    title: 'Moldable LLM Chats in Glamorous Toolkit',
    abstractParagraphs: [
      [
        {
          text: 'IDEs integrate LLM-powered assistant into their toolset. These assistants are often opaque, acting as immutable oracles over the codebase, and provide a fixed set of interactions with the system. In this talk we show how we are building many such assistants, context-dependent and aware of their surroundings, with an open set of capabilities that are extensible and, of course, moldable, directly inside Glamorous Toolkit.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș acts as a tool crafter at feenk (feenk.com) building tools and techniques for improving software development and is a co-author of Glamorous Toolkit (gtoolkit.org) platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
        },
      ],
    ],
  },
  myprecious: {
    title: 'MyPrecious Middleware',
    abstractParagraphs: [
      [
        {
          text: 'Distributed applications involve software running on different machines connected via a network. To ensure proper collaboration, developers must address various concerns introduced by distribution. Many of these concerns are recurring and are typically handled by middleware. While there are multiple Smalltalk-based middleware solutions, each addresses only a specific subset of distributed applications by making particular design choices. In this talk, we introduce MyPrecious, a modular middleware designed to be extensible, enabling it to support a wide range of applications.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi',
          url: 'https://nootrix.com/noury',
        },
        {
          text: ' is a software developer, maker, repair hobbyist, environment/technology/robots lover. Noury works part-time as a university professor at IMT Nord Europe. His remaining work time is dedicated to a startup that leverages ',
        },
        {
          text: 'PharoJS',
          url: 'https://pharojs.org',
        },
        {
          text: ' to build a SAS for teaching PLC programming & factory automation: ',
        },
        {
          text: 'PLC3000',
          url: 'https://plc3000.com',
        },
        {
          text: '.',
        },
      ],
    ],
  },
  objectownership: {
    title: 'An Introducution Ownership in Object Oriented Languages',
    abstractParagraphs: [
      [
        {
          text: 'This presentation will give an introcution to Object Ownership. We will introduce the concept, show examples of ownership both in static and dynamic languages.',
        },
      ],
      [
        {
          text: 'We present which problems ownership can solve and discuss object ownership in Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher (CR, with tenure) at INRIA Lille. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus Denker received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded ZWEIDENKER in 2009. He is a member of ACM, GI and a board-member of ESUG.',
        },
      ],
    ],
  },
  pharo14: {
    title: 'Pharo 14 and beyond',
    abstractParagraphs: [
      [
        {
          text: 'This talk with present the key points about Pharo14 and discuss the roadmap. This includes - Better interruption handling with stack page size setup - Modernizing command line infrastructure - Better refactorings - Compiler modernization with explicit compilation metadata (debug info) - Cleaner debugger infrastructure with debugInformation - Modernizing the source code management with version support - New tools in Spec (Setting browser, New Method Browser...) - Compleshion with Dynamic Information',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an expert in object design, object language design, reflective programming, and the maintenance and evolution of large applications (visualization, metrics, meta-modeling). My work on traits has been introduced in AmbientTalk, Slate, Pharo, Perl, PHP and Squeak. They have been ported to JavaScript. It has influenced the Scala and Fortress languages. I'm one of the founders of Pharo (http://www.pharo.org/), a new pure open-source object language inspired by Smalltalk. I head its industry consortium http://consortium.pharo.org. I'm one of the designers of Moose, an analysis platform (http://www.moosetechnology.org/). I was one of the founders of Synectique, a company offering dedicated analysis tools. I'm interested in virtual machines and language implementation.",
        },
      ],
      [
        {
          text: "I have written several books on language-related subjects and other topics such as learning to program and web programming: some are available at http://books.pharo.org. I co-constructed a highly acclaimed Moocs on Pharo and object programming: http://mooc.pharo.org and https://advanced-design-mooc.pharo.org I regularly work with companies such as Arolla, Berger-Levrault, Thales, Framatome, Siemens, CIM, Worldline. I'm interested in understanding how to solve their challenges. According to Google scholar my h-index is 63 for about 17k citations.",
        },
      ],
    ],
  },
  pharocig: {
    title: 'Pharo CIG, Round Two: Growing a Native Library Ecosystem for Pharo',
    abstractParagraphs: [
      [
        {
          text: 'Pharo has a powerful FFI. But a powerful FFI is not enough if every library binding has to be written by hand.',
        },
      ],
      [
        {
          text: 'This talk revisits Pharo-CIG, a project that started as a tool to generate bindings from C and C++ headers using libclang, and now grows into the Pharo C Interface Garden: a shared space for native bindings in Pharo.',
        },
      ],
      [
        {
          text: 'The first talk was about bridging the gap. This one is about what lies on the other side of the bridge: graphics, fonts, SVG, multimedia, system libraries, C APIs, C++ APIs, and the possibility of making Pharo participate more fully in the existing native software ecosystem.',
        },
      ],
      [
        {
          text: 'We will discuss what works, what remains hard, and why generated bindings are not just a convenience, but a necessary piece of infrastructure for Pharo’s future.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano studied Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object-oriented and low-level technologies, in different software companies, serving in various positions from programmer to senior architect. In 2007 he co-founded Smallworks to offer Pharo-based agile development projects.',
        },
      ],
      [
        {
          text: 'Since 2012 he dedicated full time to developing the Pharo code and community. He works with the INRIA-EVREF team in Lille, France, as core developer for Pharo, being responsible with the coordination of new releases and the implementation and maintenance of several Pharo libraries.',
        },
      ],
    ],
  },
  pharodesktoptour: {
    title: 'Pharo on the Desktop: A Tour of Tools and Feedback Loops',
    abstractParagraphs: [
      [
        {
          text: 'This talk is a tour of desktop applications built with Pharo: tools created to solve concrete, everyday problems, from personal workflows to development tasks. Rather than presenting them as isolated demos, the talk follows the feedback loop behind them: each application exposed missing pieces, rough edges, or performance limits in the Pharo ecosystem.',
        },
      ],
      [
        {
          text: 'By building real tools for daily use, these problems became opportunities to improve the platform itself: UI frameworks, native integrations, tooling, usability, and the developer experience.',
        },
      ],
      [
        {
          text: 'The result is a practical showcase of Pharo on the desktop, but also a reflection on how application-building can become a path to strengthening Pharo as a whole.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano studied Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object-oriented and low-level technologies, in different software companies, serving in various positions from programmer to senior architect. In 2007 he co-founded Smallworks to offer Pharo-based agile development projects.',
        },
      ],
      [
        {
          text: 'Since 2012 he dedicated full time to developing the Pharo code and community. He works with the INRIA-EVREF team in Lille, France, as core developer for Pharo, being responsible with the coordination of new releases and the implementation and maintenance of several Pharo libraries.',
        },
      ],
    ],
  },
  pharojs10thanniversary: {
    title: 'PharoJS 10th Anniversary: Now What?',
    abstractParagraphs: [
      [
        {
          text: 'PharoJS',
          url: 'https://pharojs.org',
        },
        {
          text: ' is an infrastructure (framework + middleware + tools) that links Pharo to JavaScript. It allows running on a JavaScript (JS) applications developed and tested in Pharo Smalltalk. For over a decade now, PharoJS has been developped and used in various contexts. This talk presents the current status of this open-source project and discusses its perspectives.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi',
          url: 'https://nootrix.com/noury',
        },
        {
          text: ' is a software developer, maker, repair hobbyist, environment/technology/robots lover. Noury works part-time as a university professor at IMT Nord Europe. His remaining work time is dedicated to a startup that leverages ',
        },
        {
          text: 'PharoJS',
          url: 'https://pharojs.org',
        },
        {
          text: ' to build a SAS for teaching PLC programming & factory automation: ',
        },
        {
          text: 'PLC3000',
          url: 'https://plc3000.com',
        },
        {
          text: '.',
        },
      ],
      [
        {
          text: 'Dave Mason',
          url: 'https://sarg.torontomu.ca/dmason/',
        },
        {
          text: ' is Professor in, and currently Chair of, the School of Computer Science at Toronto Metropolitan University. He is member of the Software Analysis Research Group. Dave is interested in topics such as environments and tools to support developing code in the highly-productive, Smalltalk language and environment while deploying in other contexts such as in web browsers and nodeJS with ',
        },
        {
          text: 'PharoJS',
          url: 'https://pharojs.org',
        },
        {
          text: ', the Java Virtural Machine (PharoJVM) and others (Universal Export).',
        },
      ],
    ],
  },
  pharollm: {
    title: 'The Future of LLM in Pharo: PharoLLM',
    abstractParagraphs: [
      [
        {
          text: 'This talk presents Pharo-LLM, a broader initiative to build a sovereign AI ecosystem directly inside the Pharo environment. It introduces the main components of the ecosystem, including ChatPharo as the conversational interface, Pharo-Infer as a native local inference engine, and Pharo-LLM Studio as a space for prompt engineering, workflow design, and experimentation. The presentation argues for moving beyond dependence on external APIs and tools such as Ollama or LM Studio, emphasizing local execution, transparency, privacy, and full control. Pharo-LLM is a strategic effort to make AI in Pharo native, inspectable, extensible, and fully owned by the community',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Omar AbedelKader is an AI researcher and software engineer currently pursuing a Ph.D. in Computer Science at the University of Lille. He is the founder and maintainer of the Pharo-LLM organization and leads several projects at the intersection of artificial intelligence and software engineering, including ChatPharo. His work explores conversational systems, AI-assisted programming, and open architectures for experimenting with LLMs in software development.',
        },
      ],
    ],
  },
  pharopulsar: {
    title: 'Pharo Pulsar: Spinning you into a Power User',
    abstractParagraphs: [
      [
        {
          text: 'Programming environments shape the way programmers think, explore, and act. Smalltalk has always carried a powerful idea: the IDE is not merely a place where code is written, but a living interface to the system itself. Pulsar starts from that tradition and asks how far we can take it today.',
        },
      ],
      [
        {
          text: 'Pulsar is an experimental IDE for Pharo, built with Spec. Its goal is to provide programmers with more leverage in their everyday work: better navigation, richer feedback, deeper inspection, and a more fluid relation with the running image. It is not only a new browser, but an attempt to rethink the IDE as a tool that amplifies the programmer’s ability to understand, modify, and evolve software.',
        },
      ],
      [
        {
          text: 'This presentation introduces Pulsar as a work in progress and as a bet on the future of Pharo tooling: an IDE designed for programmers who want to remain close to the system, move quickly through it, and become more powerful in the act of programming itself.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano studied Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object-oriented and low-level technologies, in different software companies, serving in various positions from programmer to senior architect. In 2007 he co-founded Smallworks to offer Pharo-based agile development projects.',
        },
      ],
      [
        {
          text: 'Since 2012 he dedicated full time to developing the Pharo code and community. He works with the INRIA-EVREF team in Lille, France, as core developer for Pharo, being responsible with the coordination of new releases and the implementation and maintenance of several Pharo libraries.',
        },
      ],
    ],
  },
  pharosdl3: {
    title: 'PharoSDL3: New FFI Bindings for SDL3 in Pharo',
    abstractParagraphs: [
      [
        {
          text: 'SDL (Simple DirectMedia Layer) is a cross-platform library widely used in game development and multimedia applications. SDL 3.0 is a major new release that brings, among other things, a modern GPU API for high-performance rendering.',
        },
      ],
      [
        {
          text: "We present PharoSDL3, the first Pharo bindings for SDL 3.4.0. Beyond wrapping the SDL 3 API with Pharo's FFI, the library provides an OSWindow backend that integrates with both Morphic and Bloc, maintaining backwards compatibility with SDL 2. It also exposes the new SDL GPU API, opening the door to modern, hardware-accelerated rendering from Pharo.",
        },
      ],
      [
        {
          text: 'This work is a sign of a living and active community: Pharo keeps up with the latest developments in the ecosystem. We will demo the library, explain key design, and discuss the integration with the rest of the Pharo graphical stack.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Martín Dias worked as an engineer for many years, and got a Ph.D in 2015. He loves Pharo and the Smalltalk community. His first ESUG was in 2010, but before that assisted to Smalltalks 2009 (Argentina).',
        },
      ],
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open-source projects in the Pharo Community and the Uqbar Foundation ',
        },
        {
          text: 'http://www.uqbar-project.org/',
          url: 'http://www.uqbar-project.org/',
        },
        {
          text: '.',
        },
      ],
    ],
  },
  soilindepth: {
    title: 'Soil - architecture & design',
    abstractParagraphs: [
      [
        {
          text: 'Soil is a light-weight object-oriented database for pharo. It turns a pharo image into a database instance that supports state-of-the-art abilities like ACID-transactions, MVCC and more. It aims to be a small and comprehensible database library that can be adjusted to individual use cases.',
        },
      ],
      [
        {
          text: 'This talk will be an in-depth view on the architecure, design and algorithms that drive Soil. A report on the current state and plans for the near future. Aim of this talk is to learn about other ideas. So we try to make room for questions',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norbert Hartl has a long track record of creating and building software projects. Currently he is on a mission to create projects with zero dependencies. He co-founded ApptiveGrid where he is working at the moment. He also co-founded PharoPro.',
        },
      ],
      [
        {
          text: 'Marcus Denker is a permanent researcher (CR1, with tenure) at INRIA Lille. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus Denker received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded ZWEIDENKER in 2009. He is a member of ACM, GI and a board-member of ESUG.',
        },
      ],
    ],
  },
  spectoplo: {
    title: 'Spec-Toplo: More Widgets, More Coverage',
    abstractParagraphs: [
      [
        {
          text: 'Toplo is a widget library built on top of Bloc, inspired by modern UI design systems. Spec is a Pharo library for describing user interfaces in a backend-independent way. Spec-Toplo bridges these two worlds: it provides SpToploBackend and a hierarchy of SpToploAdapter classes that map Spec presenters to their corresponding Toplo widgets, making it possible to build Spec-described UIs that are rendered with Toplo.',
        },
      ],
      [
        {
          text: 'We will present the progress made over the last year across the involved repositories: Toplo, Spec-Toplo, and their integration with the broader Pharo UI stack. This includes new widgets, adapter improvements, and advances in making Toplo a practical choice for everyday Pharo application development.',
        },
      ],
      [
        {
          text: 'We will demo the result and discuss the current state and future perspective.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Martín Dias worked as an engineer for many years, and got a Ph.D in 2015. He loves Pharo and the Smalltalk community. His first ESUG was in 2010, but before that assisted to Smalltalks 2009 (Argentina).',
        },
      ],
      [
        {
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open-source projects in the Pharo Community and the Uqbar Foundation ',
        },
        {
          text: 'http://www.uqbar-project.org/',
          url: 'http://www.uqbar-project.org/',
        },
        {
          text: '.',
        },
      ],
    ],
  },
  tools: {
    title: 'Smooth Flow of Refactorings and Tools',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the new support for refactorings as well as the new tools for Pharo such as the new method browser.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm an expert in object design, object language design, reflective programming, and the maintenance and evolution of large applications (visualization, metrics, meta-modeling). My work on traits has been introduced in AmbientTalk, Slate, Pharo, Perl, PHP and Squeak. They have been ported to JavaScript. It has influenced the Scala and Fortress languages. I'm one of the founders of Pharo (http://www.pharo.org/), a new pure open-source object language inspired by Smalltalk. I head its industry consortium http://consortium.pharo.org. I'm one of the designers of Moose, an analysis platform (http://www.moosetechnology.org/). I was one of the founders of Synectique, a company offering dedicated analysis tools. I'm interested in virtual machines and language implementation.",
        },
      ],
      [
        {
          text: "I have written several books on language-related subjects and other topics such as learning to program and web programming: some are available at http://books.pharo.org. I co-constructed a highly acclaimed Moocs on Pharo and object programming: http://mooc.pharo.org and https://advanced-design-mooc.pharo.org I regularly work with companies such as Arolla, Berger-Levrault, Thales, Framatome, Siemens, CIM, Worldline. I'm interested in understanding how to solve their challenges. According to Google scholar my h-index is 63 for about 17k citations.",
        },
      ],
    ],
  },
  'treesitter-moose': {
    title:
      'Moose:: Simplifying the development of importers based on TreeSitter',
    abstractParagraphs: [
      [
        {
          text: 'Moose is a software analysis platform. In order to analyse a project we need to import it as a Moose model which is not an easy task.',
        },
      ],
      [
        {
          text: 'TreeSitter is a parsing stack developed by Github.',
        },
      ],
      [
        {
          text: 'This presentation will show how we are using this project to simplify the creation of Famix and FAST importer for Moose.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Cyril Ferlicot-Delbecque is a research and development engineer working in the Inria Evref team. He works since 2015 on divers project around Pharo, on Pharo itself and on Moose and its echosystem. He's currently working on software analysis to analyse Python notebooks.",
        },
      ],
    ],
  },
  vastaiassistant: {
    title:
      'The VAST Platform AI Assistant: Integrating LLMs into a Live Smalltalk Environment',
    abstractParagraphs: [
      [
        {
          text: 'Smalltalk environments have long been pioneers in developer productivity. With the VAST Platform AI Assistant, we’re extending that tradition by integrating Large Language Models (LLMs) directly into the VAST platform. This new tool is designed to bring AI capabilities directly into your daily workflow.',
        },
      ],
      [
        {
          text: 'In this session, we’ll share a user experience report and a live demonstration of the assistant’s current capabilities, powered by both frontier cloud models as well as local ones.',
        },
      ],
      [
        {
          text: 'We will demonstrate how the VAST Platform AI Assistant leverages the live nature of Smalltalk to act as a true pair programmer. You’ll see how it goes beyond simple chat by directly interacting with the live VAST image through the LLM’s “tools” capabilities. This allows investigating source code as it responds to your questions.',
        },
      ],
      [
        {
          text: 'Join us to explore how we are shaping the future of AI-assisted development in VAST to better empower software developers. See it in action, try it out, and join the conversation on GitHub: https://github.com/instantiations/VAST-Platform-AI-Assistant.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Kris Gybels recently joined Instantiations to work on the VAST Platform’s AI-based tool support. He previously spent a number of years in academia researching Declarative Meta Programming and its application to Aspect-Oriented Programming, and over a decade co-developing the Yesplan venue management system, during which he made a number of contributions to Pharo, most notably Pharo 12’s improved Mac ‘Retina display’ support, as well as to Seaside and its Parasol web testing framework.',
        },
      ],
      [
        {
          text: 'Johan Brichau is a seasoned software engineer with over 25 years of experience across a wide range of Smalltalk environments. He joined the VAST Platform development team at Instantiations in January 2025. Prior to that, he spent nearly 15 years as co-founder and CTO of Yesplan, a world-leading online venue management platform. Johan holds a PhD in computer science from the Vrije Universiteit Brussel (2005) and has actively contributed to several open source projects, most notably Seaside.',
        },
      ],
    ],
  },
  'sagetea-pharo-runtime-ai': {
    title:
      'From Squeak to Pharo: Modernizing the Eclipse SageTea Runtime for Edge AI and Sovereign Computing',
    abstractParagraphs: [
      [
        {
          text: 'The Eclipse SageTea Runtime project represents the modernization of a long-running Smalltalk-based runtime environment originally developed in Squeak and now actively migrated to Pharo. This talk presents both the technical challenges and architectural opportunities encountered during this transition.',
        },
      ],
      [
        {
          text: 'We discuss the historical architecture of SageTea and the motivations for migrating toward the modern Pharo ecosystem, including improved tooling, maintainability, packaging infrastructure, and deployment capabilities. Particular attention is given to compatibility issues encountered during the porting process, strategies for preserving image portability and legacy behavior, and the modernization of package management using Metacello baselines.',
        },
      ],
      [
        {
          text: 'The presentation also covers the integration of GitLab-based CI/CD pipelines, automated runtime provisioning, and deployment considerations for Pharo 13 in Linux environments. We will demonstrate the Eclipse SageTea Runtime packaging approach, including systemd deployment patterns, containerized runtime configurations, and reproducible runtime provisioning workflows.',
        },
      ],
      [
        {
          text: 'Beyond runtime engineering, we explore the relevance of classical AI systems implemented in Smalltalk and how these systems can complement modern LLM-based architectures through deterministic orchestration, explainability, low-memory execution, and strong runtime introspection. The talk concludes with a discussion of opportunities for Smalltalk systems in edge AI, secure communications infrastructure, and sovereign computing platforms.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'David Long',
        },
      ],
      [
        {
          text: 'David Long is the founder of SageTea Software and XFone Technologies. He has worked on Smalltalk-based enterprise systems, runtime environments, AI tooling, and secure mobile computing platforms for more than two decades. His recent work focuses on edge AI systems, secure communications infrastructure, and the modernization of the SageTea Runtime under the Eclipse Foundation.',
        },
      ],
      [
        {
          text: 'Stéphane Ducasse',
        },
      ],
      [
        {
          text: 'Stéphane Ducasse is a leading contributor to the Pharo ecosystem, co-founder of the Pharo Consortium, and a long-time advocate for open source Smalltalk systems. He has authored numerous books and research papers on software engineering, reflective systems, and programming language design, and recently became a committer on the Eclipse SageTea Runtime project.',
        },
      ],
    ],
  },
};
