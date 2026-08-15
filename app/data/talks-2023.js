// Talk titles, abstracts, speaker bios, and slide links for the ESUG 2023
// Archive's Conference Program page.
//
// Abstracts and bios are sourced from the Pillar talk files at
// https://github.com/ESUG/esug.github.io/tree/source/2023-Conference/talks
// (light copy-edits only: obvious typos fixed). Presenter names come from
// the schedule (app/data/program-2023.js) rather than being duplicated
// here.
//
// Presentation slide links point at the files hosted in the ESUG 2023 slide
// archive: https://archive.esug.org/ESUG2023 (day1-day5 folders). A few
// talks were given without slides, and a few have neither slides nor an
// abstract available -- those are omitted below (only a title is shown on
// their talk page).
//
// Each paragraph is an array of "runs" -- plain text segments, or link
// segments ({ text, url }) for inline links in the original Pillar markup.

const POLITO_BIO = [
  [
    {
      text: "Guille Polito is chargé de recherche at INRIA and the CRIStAL laboratory in the University of Lille, within the Evref team. He formerly worked in industry on service-oriented and mobile applications before doing a PhD on computer science. Guille's main research interests are compilers, modularity, tooling and automated testing. Guille participates in the Pharo community since 2010 and is now a board member. His most noticeable contributions to the community are the Pharo Bootstrap process and Iceberg.",
    },
  ],
];

const TESONE_BIO = [
  [
    {
      text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools.',
    },
  ],
];

const ZAITSEV_BIO = [
  [
    {
      text: 'Oleksandr Zaitsev is a computer science researcher at Cirad. He was the original author of DataFrame and pharo-ai libraries, contributor to PolyMath and other Pharo libraries. Today, Oleksandr is doing research on machine learning & human-machine interaction and building tools for agent-based modelling, and is in charge of the Cormas platform for multi-agent modelling. In 2022, Oleksandr defended his PhD in the RMoD team; his thesis was about data mining-based tools to support the evolution of software libraries.',
      url: 'https://www.cirad.fr/',
    },
  ],
];

const DUCASSE_BIO = [
  [
    {
      text: 'Stéphane Ducasse is one of the creators of Pharo. He leads Pharo development with a special attention to make sure that while Pharo delivers exciting new features, it can be used by companies to deliver business value.',
    },
  ],
];

export default {
  '101-bour-pharojs': {
    title: 'Hijack the JavaScript Ecosystem using PharoJS',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/02%20-%20Hijack%20JS%20Ecosystem%20with%20PharoJS.pdf',
    abstractParagraphs: [
      [
        {
          text: 'PharoJS is an open source (MIT License) infrastructure (framework + middleware + tools) that allows developing and testing in Pharo applications that ultimately run on a JavaScript (JS) interpreter.',
          url: 'https://pharojs.org',
        },
      ],
      [
        {
          text: 'This talk is a tutorial to get new PharoJS users started. We provide a step-by-step guide starting from the development in Pharo, to the deployment on JS interpreter. We show how to integrate a third party JS library and reuse JS classes.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi is a software developer, maker, repair hobbyist, environment/technology/robots lover. Noury works part-time as a university professor at IMT Nord Europe, in the Autonomous and ResilienT Systems group. His remaining work time is dedicated to a startup that uses PharoJS to build a SAS for teaching PLC programming & factory automation: PLC3000.',
        },
      ],
      [
        {
          text: 'Dave Mason is Professor in, and currently Chair of, the School of Computer Science at Toronto Metropolitan University. He is a member of the Software Analysis Research Group. Dave is interested in topics such as environments and tools to support developing code in the highly-productive Smalltalk language and environment while deploying in other contexts such as in web browsers and nodeJS (PharoJS), the Java Virtual Machine (PharoJVM) and others (Universal Export).',
        },
      ],
    ],
  },
  '102-cost-pharo-debugger-roadmap': {
    title: 'The Pharo Debugger and Debugging Tools: Advances and Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/03%20-%20The%20Pharo%20Debugger%20and%20Debugging%20Tools.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In the past three years, the Pharo debugger has evolved and improved a lot. We have worked towards improving its features and stability, as well as building a solid infrastructure to conduct scientific and technological research on top of it. In return, we transfer our most stable and promising tools back into the debugger, therefore, we hope, improving user experience.',
        },
      ],
      [
        {
          text: 'In this talk, we describe the debugger infrastructure and the new tools we recently integrated. We also present examples of research prototypes that we are currently working on. Finally, we propose a roadmap for the next years.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Steven is an Inria researcher and works in the EVREF team. He builds and studies debugging tools to help developers understand their programs and fix bugs. In this context, his research interests span reflection and meta-programming, object-centric instrumentation, dynamic software adaptation and dynamic languages.',
        },
      ],
    ],
  },
  '103-cipr-music-with-pharo': {
    title: 'Music With Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/04%20-%20Domenico%20Cipriani%20-%20Music%20With%20Pharo.pdf',
  },
  '104-poli-phuzzing': {
    title: 'Phuzzing: a Pharo toolkit for automatic fuzz testing',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/05%20-%20Phuzzing.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the first steps on an (ongoing) fuzz testing toolkit for Pharo.',
        },
      ],
      [
        {
          text: 'Fuzz testing is a testing technique that automatically generates inputs for programs, with the objective of challenging their implementations and finding bugs. There are, however, different ways to apply fuzz testing, ranging from completely random generation, to profile-guided generation.',
        },
      ],
      [
        {
          text: 'In this presentation we will showcase the library by using real cases, and generating real test scenarios for them. Who knows? Maybe we find a bug.',
        },
      ],
    ],
    bioParagraphs: POLITO_BIO,
  },
  '105-jord-memory-profiler': {
    title: 'Illimani: a Memory Profiler',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/06%20-%20Memory%20Profiler.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Illimani is a memory profiler for Pharo. It gives information about the objects lifetime, the memory usage of an application. It has a rich model that allows the user to query the profiler to extract information about the allocation context, such as the allocator class, method or the reified stack. In this talk Sebastian will present Illimani.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Sebastian Jordan Montaño is a software engineer that works in the RMoD team. He worked for one year on pharo-ai and he is working with Pharo since three years in different projects. Now he is finishing his master in which he works on profilers. He will later start his PhD in the RMoD team.',
        },
      ],
    ],
  },
  '106-fost-webgs': {
    title: 'WebGS: Building a Backend for Modern Web Applications',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/07%20-%20WebGS.pdf',
    abstractParagraphs: [
      [
        {
          text: 'A modern web application is typically implemented as a Single Page Application (SPA) in JavaScript (or something that translates to JavaScript), using a framework such as Angular, Flutter, React, or Vue. These applications often use AJAX (with Json rather than XML) to make calls to a server that supports REST or a similar API over HTTP.',
        },
      ],
      [
        {
          text: 'In this tutorial we walk through the steps to install GemStone/S 64 Bit on your machine and use WebGS to serve data. We will look at a variety of use cases, including Web Sockets, for the front-end and the backend.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'As a junior-high student in 1971, James discovered the local university’s computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James teaches undergraduate computer science classes and serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '107-bitt-agile-dials': {
    title: 'Agile Dials, a tool for project management',
    abstractParagraphs: [
      [
        {
          text: 'Fast Drizzle Inc. is a graphics company specializing in software generated designs. Its Central Dials framework, constructed on Pharo Bloc, generates digitally rendered dashboards featuring sets of digital dials. Central Dials technology is borrowed by Agile Dials, a specific effort using dial technology to shed project management light on development affairs.',
        },
      ],
      [
        {
          text: 'The presentation will focus on the Agile Dials product rather than its construction, and will examine each of the Agile dials before moving on to interpreting dashboards. Finally, dashboards will be compared to get a sense for patterns amongst teams of developers.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Gregory Anthony Bittar has been running full stack development since 1995 for JP Morgan Investment Bank, JP Morgan Private Bank, among others. More recently, Gregory has applied himself to private enterprise.',
        },
      ],
    ],
  },
  '108-nier-teaching-moldable-development': {
    title: 'Teaching Moldable Development',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/09%20-%20Teaching%20Moldable%20Development.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Moldable Development is a way of developing software in which you build many, small custom tools to solve problems. This implies new tools and new associated skills. As with any new way of thinking, teaching can be challenging. In this session we draw lessons from our experience of teaching Moldable Development in practice, including how it changes the teaching experience itself.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Oscar is Professor emeritus of Computer Science at the University of Bern, where he ran the Software Composition Group from 1994-2021. Since then he has been working at feenk.com, producing teaching material on Moldable Development, and onboarding developers to work with the Glamorous Toolkit. Oscar is co-author of over 400 publications, including the open-source books Object-Oriented Reengineering Patterns and Pharo by Example.',
        },
      ],
    ],
  },
  '109-berg-agile-ai': {
    title: 'Agile Artificial Intelligence',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/10%20-%20Agile%20AI.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Agile Artificial Intelligence in Pharo -- Implementing Neural Networks, Genetic Algorithms, and Neuroevolution is a book published in 2020 by Apress/Springer. This talk gives a highlight of the book and briefly summarizes how neural networks, genetic algorithm, and neuroevolution are presented.',
          url: 'https://link.springer.com/book/10.1007/978-1-4842-5384-7',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Computer Scientist at RelationalAI, Switzerland. Until 2022, he was Associate Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering. His interest includes designing tools and methodologies to improve the overall performance and internal quality of software systems and databases by employing profiling, visualization, and artificial intelligence techniques. Alexandre has authored over 170 articles, published in international and peer-reviewed scientific forums, including the most competitive conferences and journals in the field of software engineering, and has authored 4 books: Agile Visualization with Pharo, Agile Artificial Intelligence in Pharo, Agile Visualization, and co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '110-zait-polymath-dataframe-pharo-ai': {
    title: 'DataFrame, PolyMath, Pharo-AI: State of data science in Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day1/11%20-%20Science%20and%20data%20manipulation%20in%20Pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Over the past few years, support for machine learning, data science, and numerical computing in Pharo has improved. Three projects are the leaders of this improvement: PolyMath, a mathematical library implementing various algorithms and data structures for algebra, matrix-vector operations, numerical analysis, differential equations, and more (similar to NumPy and SciPy in Python or SciRuby in Ruby); DataFrame, a tabular data structure for data analysis; and Pharo-AI, a collection of artificial intelligence algorithms, including machine learning and graph algorithms.',
        },
      ],
      [
        {
          text: 'This presentation aims to explain the latest improvements over those three projects and their relation to each other.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Cyril Ferlicot-Delbecque is a research and development engineer working in the Inria Rmod team. He works since 2015 on diverse projects around Pharo and on Pharo itself. He is currently working on pharo-ai, DataFrame and Polymath.',
        },
      ],
      [
        {
          text: 'Sebastian Jordan Montaño is a software engineer that works in the RMoD team. He worked for one year on pharo-ai and he is working with Pharo since three years in different projects. Now he is finishing his master in which he works on profilers. He will later start his PhD in the RMoD team.',
        },
      ],
      ZAITSEV_BIO[0],
    ],
  },
  '201-duca-pharo-11': {
    title: 'Pharo 11',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/01%20-%20Pharo%2011.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the Pharo 11 release. Pharo 11 got released in May 2023. It includes many improvements. I will also develop the vision around Pharo architecture in terms of new UI.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '202-labo-native-desktop-modern-application': {
    title:
      'Native desktop modern application demo at Thales, using the last UI capacities in Pharo and our open-source tools',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/02%20-%20Native%20Desktop%20Modern%20Applications.pdf',
    abstractParagraphs: [
      [
        {
          text: 'We present a demonstration of a fully graphical application written in Pharo and presented at the Paris Air Show 2023 for working with Thales customers. Through this application, we will present some user-interface open-source design tools for building modern native desktop applications for Windows, Linux, and MacOS. Our application uses the Bloc 2D library, the Toplo widget library with a custom look & feel, and the Molecule component-based architecture framework, among others. The opportunity for us to tell you a few words about our "WYSIWYG" open-source editor Pyramid: it allows for the possibility to build Bloc/Toplo applications easily. We have added a way to instantiate Bloc elements from external design tools such as FIGMA with a Pyramid plugin, and we present a little demo of the result.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pierre Laborde is Senior User Experience designer and engineer at Thales Defence Mission System France in the city of Brest.',
        },
      ],
      [
        {
          text: 'Eric Le Pors is User Experience Lead at Thales Defence Mission System France in the city of Brest.',
        },
      ],
    ],
  },
  '203-teso-applications-in-pharo': {
    title: 'Building Applications for Desktop',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/03%20-%20Desktop%20Applications%20in%20Pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Pharo is a great environment to develop desktop applications. The Pharo Ecosystem is rich in frameworks and libraries to implement nice looking (and behaving) applications. In this talk, we are going to present how to take those applications and generate a package that we can distribute to our users. We need to handle the build of them, the packaging and the integration with the operating system.',
        },
      ],
    ],
    bioParagraphs: TESONE_BIO,
  },
  '204-uttn-pdm-command-line-reinvented': {
    title: 'PDM command line reinvented',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/04%20-%20PDM%20Command%20Line%20Reinvented.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Based on Pharo 11 with GTK and Roassal3, PDM is a graphical desktop application for document management which will go productive in 2024. Recently it has been redesigned to represent every use case of the application as a named command with named parameters on typed values. This talk shows how the application can now be driven either by auto-completed typing, speech recognition or serialized commands passed in from other modules.',
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
  '205-bric-seaside-hotwired': {
    title: 'Seaside Hotwired',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/05%20-%20Seaside%20Hotwired.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Seaside Hotwired is the integration of the Hotwire front-end framework of our Ruby-on-Rails colleagues into Seaside. Hotwire provides an alternative approach to implement a dynamic front-end using the Seaside back-end framework without resorting to other Javascript front-end frameworks.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Johan Brichau is CTO of Yesplan, an online venue management application. He has more than 20 years of experience with various Smalltalk environments, of which he spent the past 14 years happily building Yesplan with Pharo, Seaside, GemStone and various front-end frameworks such as ReactJs. In the past 10 years, Johan has been part of the core team maintaining Seaside.',
          url: 'https://www.yesplan.be',
        },
      ],
    ],
  },
  '206-mart-vast-webview2': {
    title: 'Building Hybrid Applications with VAST and WebView2',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/06%20-%20Building%20Hybrid%20Applications%20with%20VAST%20and%20WebView2.pdf',
    abstractParagraphs: [
      [
        {
          text: 'It’s no longer a binary choice between native and web applications. Get the best of both worlds with VAST’s latest integration with Microsoft Edge’s WebView2 framework. We’ll show you how to embed web content into VAST native applications and build hybrid systems with a number of interesting examples to guide you.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Mariano Martinez Peck is a senior systems engineer specializing in dynamic programming language software. In 2018, he joined Instantiations to further develop the VAST Platform through the addition of new frameworks, libraries and tools, as well as improving the existing code base of VAST. He is active in the Smalltalk development community, and has used his expertise to co-author numerous open source projects. Mariano has a PhD in Computer Science, and his academic research has been published across various international journals.',
        },
      ],
    ],
  },
  '207-zait-cormas': {
    title: 'Agent-based Modelling in Pharo using Cormas',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/07%20-%20Agent-based%20modeling%20in%20Pharo%20using%20Cormas.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Cormas is an agent-based modelling platform developed in the late 90s by the Green research unit of Cirad to support the management of natural resources and understand the interactions between natural and social dynamics. This platform is well-suited for a participatory simulation approach that empowers local stakeholders by including them in all modelling and knowledge-sharing steps.',
        },
      ],
      [
        {
          text: 'In my talk, I will present the Cormas platform, discuss its unique features and their importance for the participatory simulation approach. I will also teach you to build simple models in Cormas and demonstrate several real-world applications of Cormas for managing natural resources in Africa and South America.',
        },
      ],
    ],
    bioParagraphs: ZAITSEV_BIO,
  },
  '208-poli-code-instrumentation': {
    title: 'Code instrumentation and the pitfalls of abstraction',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day2/08%20-%20Code%20Instrumentation%20and%20the%20Pitfalls%20of%20Abstraction.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, we are going to understand the endeavours of building a robust instrumentation library.',
        },
      ],
      [
        {
          text: 'Let them be bytecode instrumentation, method wrappers, or interception of message passing, all instrumentation libraries have traditionally suffered from meta-circularities. However, the folklore tells that meta-circularities arise when instrumenting code that is special, low-level or core. We will see that contrary to that common belief, meta-circularities arise even in the simplest instrumentations. Our most precious abstraction -- every computation is carried out by messages -- is at the core of such difficulty, and the hooks provided by the language implementation leave all responsibility to the developer.',
        },
      ],
      [
        {
          text: 'We will show the design of an instrumentation support library that is tightly integrated with the language and helps instrumentation library developers build robust implementations. Finally, we will show how this library can help us build tools such as code coverage and profilers.',
        },
      ],
    ],
    bioParagraphs: [POLITO_BIO[0], TESONE_BIO[0]],
  },
  '209-papa-reflexive-code-coverage': {
    title: 'Building a reflexive code-coverage tool',
    abstractParagraphs: [
      [
        {
          text: "In this talk, I'll walk you through a journey to build a code-coverage tool that can analyze itself.",
        },
      ],
      [
        {
          text: "We'll do a quick recap on the types of code-coverage levels that can be implemented and review the current state of the tools available. Then I'll show you how to build a code-coverage tool, requiring no support from the VM, from scratch. After that we'll see how easy it is to build a code-coverage tool that can give you more information than most of the tools out there.",
        },
      ],
      [
        {
          text: "Finally, I'll show how to make this tool reflexive to allow it to analyze itself. The talk will present the tool not as a finished product, but as a platform to run your own code-coverage experiments, inviting you to expand or even improve what we know about coverage so far.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Nicolas Papagna Maldonado is a developer who believes the computer revolution hasn't happened yet. He loves learning and sharing anything OO & TDD related. He's been TA for OO at FCEN, University of Buenos Aires, and happily grows software at 10Pines.",
        },
      ],
    ],
  },
  '210-chis-glamorous-toolkit-v1': {
    title: 'Glamorous Toolkit v1.0',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the Moldable Development environment. And it has reached v1.0. In this talk we provide an overview of the environment and show through concrete cases how a single environment can be molded to many contexts.',
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
          text: 'Tudor Gîrba is a software environmentalist and CEO of feenk.com, where he works with an amazing team to make the inside of systems explainable. Much of the work is embodied in Glamorous Toolkit, a novel environment that enables Moldable Development.',
        },
      ],
    ],
  },
  '301-gree-gemtalk-update': {
    title: 'GemTalk Update and Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day3/01%20-%20Gemtalk%20Update.pdf',
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
          text: 'Norm Green started his career in 1989 at IBM Canada in Toronto as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build DACS, a site-wide data collection system in VisualWorks and GemStone/S Smalltalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. These days, Norm lives near Portland, Oregon, USA and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
    ],
  },
  '302-hart-soil': {
    title: 'Soil - a fresh look on OO databases',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day3/02_1%20-%20Soil%2C%20a%20Fresh%20Look%20on%20Object%20Oriented%20Databases.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Soil is a new and light-weight object-oriented database for Pharo. It turns a Pharo image into a database instance that supports state-of-the-art abilities like ACID-transactions, MVCC and more. It aims to be a small and comprehensible database library that can be adjusted to individual use cases.',
        },
      ],
      [
        {
          text: 'In this talk we will give an introduction to Soil, its usage and how it can be extended. We will also show how Pharo might use Soil to manage its own data.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norbert Hartl has a long history with databases and their shortcomings, which made him kind-of an expert. He co-founded ApptiveGrid, where he is working at the moment. He also co-founded PharoPro.',
        },
      ],
      [
        {
          text: 'Marcus Denker is a permanent researcher at INRIA Lille. He is an active participant in the Pharo open source community for many years. Marcus received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded ZWEIDENKER in 2009.',
        },
      ],
    ],
  },
  '303-denk-opal-compiler-and-blocks': {
    title: 'Fun with Blocks in Pharo11 and Pharo12',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day3/03%20-%20Constant%20Blocks.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present the current state of blocks in Pharo.',
        },
      ],
      [
        {
          text: 'After a short overview of blocks in general, we will discuss how constant blocks are optimized in Pharo11, the current state of Clean Blocks, and explore how First Class Variables support the debugger infrastructure to read variables from the context of a clean block.',
        },
      ],
      [
        {
          text: 'We discuss what is still needed to enable clean blocks by default.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher (CR1, with tenure) at INRIA Lille. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded ZWEIDENKER in 2009. He is a member of ACM, GI and a board member of ESUG.',
        },
      ],
    ],
  },
  '304-luna-grafoscopio': {
    title: 'Grafoscopio: Civic tech and how we change the tools that change us',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day3/04%20-%20Grafoscopio%2C%20Civic%20Tech%20and%20How%20We%20Change%20the%20Tools%20That%20Change%20Us/esug-2023.svg',
    abstractParagraphs: [
      [
        {
          text: 'We will see how the Grafoscopio metatool and community have been inquiring, since 2015, about the reciprocal modification between grassroots communities and digital tools from several projects that fall under the umbrella of civic tech, including: performative writing and (re)publishing, agile data storytelling and visualization, data feminism, civic hacktivism, reproducible research, making "Big Data" approachable, and hypertextual resilient community and interpersonal memory and presences, among other topics.',
        },
      ],
      [
        {
          text: 'After presenting the prototypes and the project history we will have a glimpse of its future, with the recent developments in Glamorous Toolkit and Pharo based systems.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Offray is a hacktivist, researcher and academician. He is the creator of the Grafoscopio tool and a bootstrapper/facilitator of its community.',
        },
      ],
    ],
  },
  '305-fuhr-workshop-concept-inventories': {
    title: 'Workshop on Concept Inventories in OOP',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day3/05%20-%20WorkshopOnConceptInventoriesAndPharoMisconceptions.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Concept inventories started in the domain of Newtonian physics. The Force Concept Inventory is a multiple-choice test designed to measure students’ understanding of kinematics, and has proven to be a powerful tool for improving the teaching and learning of mechanics. The goal of identifying a concept inventory in object-oriented (OO) and agile development is to improve the learning and teaching of concepts in agile development in the domain of software engineering and software development.',
        },
      ],
      [
        {
          text: 'An important step in identifying a concept inventory is identifying misconceptions, which are essentially common misunderstandings. Work in identifying misconceptions in programming languages has been done, but in computer science, more work needs to be done: the domain presents challenges, because -- unlike physics -- computing methodologies, languages, tools, and technologies can evolve relatively quickly.',
        },
      ],
      [
        {
          text: 'During this workshop participants will learn about concept inventories, and gather some concepts based on their teaching experience on tests and OOD.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '306-zait-cormas-hands-on': {
    title: 'Hands-on Multiagent Modelling in Pharo: A Cormas Workshop',
    abstractParagraphs: [
      [
        {
          text: 'In addition to my talk on Cormas, in this hands-on workshop, I will teach you how to build multi-agent models in Pharo. We will run different simulations together, explore their parameters, generate and analyse the simulation data.',
        },
      ],
      [
        {
          text: 'Models explored include bushmeat hunting, shepherds and shrubs, sheep movements, the mice-olifants river system, locusts, hide and share, flu virus, evacuation, driftwood self-regulation, dengue fever spreading, and butterfly coloration evolution.',
        },
      ],
    ],
    bioParagraphs: ZAITSEV_BIO,
  },
  '401-schu-instantiations-update': {
    title: 'Instantiations Company Update & VAST 2024 Preview',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/01%20-%20Instantiations%20Company%20Update.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Instantiations is committed to continuing investment in the VAST Platform and ongoing involvement with the Smalltalk community. Get an update on our progress, and see where we’re headed in the near future. Plus, get an overview of the features coming to VAST Platform 2024!',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Greg Schultz is Marketing & Creative Director at Instantiations. He has a background in branding, marketing, and web development with experience in various industries like publishing, manufacturing, and healthcare. Greg started with Instantiations in 2019 to reinvigorate the company’s marketing and to help propel Instantiations towards new opportunities.',
        },
      ],
    ],
  },
  '402-hart-visual-queries': {
    title: 'Visual user-driven database queries',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/02%20-%20Visual%20User-Driven%20Database%20Queries.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Visual database queries is a show case about how ApptiveGrid enables users on the web to define custom database queries and how they are executed. Instead of having micro-DSLs for a lot of individual actions we use a small DSL as ubiquitous execution layer from web frontend to database record on disk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norbert Hartl is co-founder of ApptiveGrid, a nocode/lowcode platform for collaboration and process automation, where he works on less common ways to enable users to do custom and powerful things.',
        },
      ],
    ],
  },
  '403-gran-gemstone-glamorous-toolkit': {
    title: 'Working with GemStone from Glamorous Toolkit',
    abstractParagraphs: [
      [
        {
          text: 'This talk will provide an update on the integration between GT (Glamorous Toolkit) and GemStone, demonstrating proxy objects, inspection, debugging and lepiter integration.',
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
  '404-poli-questions-about-git': {
    title: 'Your questions about Git',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/04%20-%20Your%20Questions%20About%20Git.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Git is a powerful tool. Grasping its basic functionality is relatively easy. Now understanding the different workflows that can be built on top of it is more challenging. In this presentation Guillermo and Pablo will reply to the questions you have about possible workflows.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guillermo and Pablo are both experts in Git. With Esteban Lorenzano, they developed and maintain Iceberg.',
        },
      ],
    ],
  },
  '405-kriv-documentation': {
    title: 'Documentation as a first-class citizen',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/05%20-%20Documentation.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Maintaining up-to-date documentation is a critical, yet often overlooked component of software systems. In this presentation, we will discuss our methodology for generating documentation during the development process or when exploring unfamiliar codebases. We will also introduce the tools we have designed for this purpose, developed in collaboration with the INRIA RMoD team. Finally, we will examine the potential implications of our approach on the Pharo metamodel.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Nidea s.r.o. that focuses on software consulting. He is a former member of the INRIA RMoD team, and actively participates in the Pharo open-source community with a primary focus on Pharo modularization, bootstrapping and cleaning and meta-modelling infrastructure.',
        },
      ],
    ],
  },
  '406-dias-news-from-bloc': {
    title: 'News from Bloc',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/06%20-%20News%20from%20Bloc.pdf',
  },
  '407-dhon-do-you-know-your-browser': {
    title: 'Do you know your browser?',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/07%20-%20Do%20You%20Know%20Your%20Browser.pdf',
    abstractParagraphs: [
      [
        {
          text: 'You use the Pharo system browser every day. Therefore you know it inside-out. But do you, really? In this session you will learn things that some Smalltalkers do not know about their browser.',
        },
      ],
      [
        {
          text: 'The presentation will start with the results of a survey on the Pharo system browser, and then it will highlight some lesser known aspects of the browser. The objective of the presentation is to let you take away at least one aspect of the browser that you did not know before.',
          url: 'https://forms.gle/cBYs7DRwZvAVAyQb9',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Koen De Hondt has used Smalltalk since 1988, first as a student, then as an academic researcher, and then in industry. In the nineties and the early noughties, he was one of the driving forces behind the Belgian Smalltalk User Group (BSUG), and presented at ESUG conferences several times. In 2003 he left the Smalltalk community for other adventures. This year, after 20 years, he returned to Smalltalk. Software development tools are still his main interest.',
        },
      ],
    ],
  },
  '408-stal-vaser-control': {
    title: 'VASERControl - Building advanced building automation software',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day4/08%20-%20VASER%20Control.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Providing an environment for building automation specialists, VASERControl focuses on the challenges of interfacing various low level protocols like Modbus, KNX, http, etc. The talk will focus on interfacing these systems and making them compatible with each other on an easy level.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Felix is an informatics student at the university of Passau, Germany. He has been in contact with VASERControl all his life, and since 2021, his contact with Smalltalk has become a lot deeper. In 2014 he presented a project, which used the VaserControl light controls to build a more natural lighting dimming solution for aquariums and terrariums, at the ESUG in Cambridge.',
        },
      ],
      [
        {
          text: 'Thomas has been working with Smalltalk since 1989 starting with ENFIN (now ObjectStudio) and developing with VisualAge Smalltalk since 1994. After co-developing the VASER frameworks for business applications, the VASERControl system development started in 2006. Projects using the VASERControl system have won various awards.',
        },
      ],
    ],
  },
  '501-mama-roassal3-updates': {
    title: 'Roassal3 new features',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day5/01%20-%20Roassal%203%20Updates.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Roassal3 is a powerful open-source visualization engine for Pharo. It provides a flexible and easy-to-use framework for creating interactive and dynamic visualizations. Recent updates and new features include RTree mouse control, which allows for faster and smoother rendering of large and complex visualizations; improved styling options for customizing the appearance of visual elements such as fonts, colors, and shapes; and a new layout studio to edit and create new layouts.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Milton Mamani is a software engineer from Cochabamba, Bolivia, who lived in Santiago, Chile working with ObjectProfile Spa. He currently works for Inria on the Rmod team since 2022 until the end of 2023, working on the creation and maintenance of Roassal3.',
        },
      ],
    ],
  },
  '502-hell-gt4atproto': {
    title: 'gt4atproto: A programmable environment for social media',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day5/02%20-%20gt4atproto%2C%20A%20Programmable%20Environment%20for%20Social%20Media.pdf',
    abstractParagraphs: [
      [
        {
          text: 'gt4atproto is a dedicated environment for AT Protocol, an open protocol for social media. gt4atproto is implemented in Glamorous Toolkit. In this talk we show how a single environment can serve a range of needs, from what can be considered end-user needs to deeply technical needs. Some examples: creating posts and threads from inside the knowledge management system; working programmatically with a server through AT Protocol; code generation from lexicons to Smalltalk code; and dedicated editing of lexicon JSON files.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Veit is a developer experience crafter at feenk building tools and techniques for making software systems explainable. He self-identifies as a bit of a Luddite and a non-user of social media, although the dissection and reassembly of the algorithms and data behind a social network fascinate him more than he would like to admit.',
        },
      ],
    ],
  },
  '503-mora-bio-smalltalk': {
    title: 'BioSmalltalk',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day5/03%20-%20Bio%20Smalltalk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation, I showcase a series of bioinformatics workflows that have been developed using BioSmalltalk, a collection of libraries and tools tailored to the needs of bioinformatics research and analysis, implemented in Pharo. We explore the applications of BioSmalltalk in various domains, including population genetics, structural variation analysis, genotype imputation, transcriptome profiling, traceability analysis, and bioinformatics software classification.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Hernán Morales Durand is a software developer who has used Smalltalk technologies since 1998, in academic research and industry contexts. He worked with multiple Smalltalk implementations, including VA Smalltalk, VisualWorks, Dolphin, Squeak, and Pharo. He was the original author of BioSmalltalk, and worked in recent years on building tools for agent-based modelling at Cirad, contributing to PolyMath, pharo-ai and other Pharo libraries. He actively participates in the Pharo open-source community.',
        },
      ],
      [
        {
          text: 'Today, Hernán is working on compiler development and enhancements for the Pharo virtual machine with the RMoD team at Lille, France.',
        },
      ],
    ],
  },
  '504-sare-new-refactoring-architecture': {
    title: 'New architecture of the refactoring engine',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day5/04%20-%20New%20Refactoring%20Architecture%2C%20Reconciling%20Refactorings%20and%20Transformations.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, a new architecture of the refactoring engine will be presented. The talk will include improvements to the refactoring code, including the introduction of a driver object responsible for UI interaction, composing refactorings out of transformations, and handling errors and warnings in the new architecture.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Balša Šarenac is a PhD student at the Faculty of Technical Sciences, University of Novi Sad. His research topic is based on composable refactorings, and he is primarily focused on the Pharo language and its refactoring engine.',
        },
      ],
    ],
  },
  '505-duca-advanced-oo-design-mooc': {
    title: 'Advanced Design Mooc',
    presentationUrl:
      'https://archive.esug.org/ESUG2023/day5/05%20-%20Advanced%20Object-Oriented%20Design%2C%20A%20New%20MOOC.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Over the past couple of years, a new lecture series on Advanced Object-Oriented Design has been developed. Whether you are a beginner or an expert in object-oriented programming and design, you will not develop the same way after following this unique lecture.',
        },
      ],
      [
        {
          text: 'This mooc immerses you in advanced object-oriented design, built on more than 60 years of expert teaching of object-oriented design. It invites you on a journey around 10 modules (with over 60 videos) covering topics including test-driven design, essential object-oriented concepts, foundational elements, advanced idioms such as double dispatch, advanced principles, selected design patterns, type perspectives, and language idioms, illustrated on concrete case studies taken from Pharo.',
        },
      ],
      [
        {
          text: 'This lecture series uses Pharo as a pedagogical vehicle, but all the concepts you will learn are applicable to other object-oriented languages. The learners will be proposed several design exercises ranging from little interpreters to games and quizzes.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stéphane is one of the authors of the Pharo Mooc. He is author of several books on Pharo and more.',
        },
      ],
    ],
  },
};
