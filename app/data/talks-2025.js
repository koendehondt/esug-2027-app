// Talk titles, abstracts, speaker bios, and slide links for the ESUG 2025
// Archive's Conference Program page.
//
// Abstracts and bios are sourced from the Pillar talk files at
// https://github.com/ESUG/esug.github.io/tree/source/2025-Conference/talks
// (light copy-edits only: obvious typos fixed, logistics notes to the
// organizers dropped). Presenter names come from the schedule
// (app/data/program-2025.js) rather than being duplicated here.
//
// Presentation slide links point at the PDFs hosted in the ESUG 2025 slide
// archive: https://archive.esug.org/ESUG2025 (day1-day4 folders). A few
// talks have neither an abstract nor slides available, and are omitted
// below (only a title is shown on their talk page).
//
// Each paragraph is an array of "runs" -- plain text segments, or link
// segments ({ text, url }) for inline links in the original Pillar markup.

const DUCASSE_BIO = [
  [
    {
      text: "I'm an expert in object design, object language design, reflective programming, and the maintenance and evolution of large applications (visualization, metrics, meta-modeling). My work on traits has been introduced in AmbientTalk, Slate, Pharo, Perl, PHP and Squeak. They have been ported to JavaScript. It has influenced the Scala and Fortress languages. I'm one of the founders of Pharo, a new pure open-source object language inspired by Smalltalk. I head its industry consortium. I'm one of the designers of Moose, an analysis platform. I was one of the founders of Synectique, a company offering dedicated analysis tools. I'm interested in virtual machines and language implementation.",
    },
  ],
  [
    {
      text: "I have written several books on language-related subjects and other topics such as learning to program and web programming. I co-constructed a highly acclaimed MOOC on Pharo and object programming. I regularly work with companies such as Arolla, Berger-Levrault, Thales, Framatome, Siemens, CIM, Worldline. I'm interested in understanding how to solve their challenges. According to Google Scholar my h-index is 63 for about 17k citations.",
    },
  ],
];

const CHIS_BIO = [
  [
    {
      text: 'Andrei Chiș acts as a tool crafter at feenk building tools and techniques for improving software development and is a co-author of the Glamorous Toolkit platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
    },
  ],
];

const HARTL_BIO = [
  [
    {
      text: 'Norbert Hartl has a long track record of creating and building software projects. Currently he is on a mission to create projects with zero dependencies. He co-founded ApptiveGrid where he is working at the moment. He also co-founded PharoPro.',
    },
  ],
];

const DENKER_BIO = [
  [
    {
      text: 'Marcus Denker is a permanent researcher (CR1, with tenure) at INRIA Lille. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus Denker received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He co-founded ZWEIDENKER in 2009. He is a member of ACM, GI and a board-member of ESUG.',
    },
  ],
];

const FOSTER_BIO = [
  [
    {
      text: 'James Foster discovered the local university’s computer center as a junior-high student in 1971 and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James teaches undergraduate computer science classes and serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
    },
  ],
];

const BRICHAU_BIO = [
  [
    {
      text: 'Johan Brichau is a seasoned software engineer with over 25 years of experience across a wide range of Smalltalk environments. He joined the VAST Platform development team at Instantiations in January 2025. Prior to that, he spent nearly 15 years as co-founder and CTO of Yesplan, a world-leading online venue management platform. Johan holds a PhD in computer science from the Vrije Universiteit Brussel (2005) and has actively contributed to several open source projects, most notably Seaside.',
    },
  ],
];

export default {
  '101-duca-welcome': {
    title: 'Welcome to ESUG',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/101-duca-welcome.pdf',
  },
  '102-duca-pharo13-and-beyond': {
    title: 'Pharo 13 and beyond',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/102-duca-pharo13-and-beyond.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present the key points about Pharo 13 and discuss the roadmap.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '103-jord-selective-pretenuring': {
    title: 'Selective Pretenuring',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/103-jord-selective-pretenuring.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Following our 2023 presentation, we will present new work on object lifetime tracking and memory profiling. We attach ephemerons to objects to estimate their lifetimes while using sampling techniques to avoid memory bloat. After profiling, we build an allocation graph to identify allocation sites based on different algorithms. We then apply classification algorithms to detect whether these sites allocate old objects and to determine if they are statistically significant. Using this information, we generate code to pretenure allocations, but only for sites associated with old objects. For each allocation site and its complete sender chain, we rewrite the code by replacing selectors with unique names. This ensures that only allocations from paths associated with old objects are pretenured, leaving other allocations untouched.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Sebastian Jordan Montaño is a Ph.D. student working on memory profiling and developing safe code instrumentation techniques. He earned his Bachelor's degree in Computer Science from Universidad Católica in Bolivia and a Master's in Software Engineering from Université de Lille in France. He has also contributed to projects in machine learning and scientific computing. When he is not programming, Sebastian enjoys lifting heavy weights and watching fast cars.",
        },
      ],
    ],
  },
  '104-dema-spec': {
    title: 'Spec',
    presentationUrl: 'https://archive.esug.org/ESUG2025/day1/104-dema-spec.pdf',
  },
  '105-diaz-bloc-and-toplo-update': {
    title: 'Bloc and Toplo Update',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/105-diaz-bloc-and-toplo-update.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Bloc is a graphical UI library that provides a foundation for building widget and visualization libraries. This library has several years of development. Since 2021, we started to work on a version of Bloc to be included in Pharo. This version requires clean core features, and stability.',
        },
      ],
      [
        {
          text: 'We will demo Bloc and Toplo, a widget library built on top of it. We will also update on the news since last year, and the future perspective.',
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
          text: 'Pablo Tesone is engineer for the Pharo Consortium, with 10 years of experience in industrial projects. He has lately done a PhD on Dynamic Software Update applied to Live programming environments, distributed systems and robotic applications. He is interested in improving development tools and the daily development process. He is an enthusiast of the object oriented programming and their tools. He collaborates with different open source projects like the ones in the Pharo Community and the Uqbar Foundation ',
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
  '106-bric-seamless-oauth-and-openid': {
    title: 'Seamless OAuth2.0 and OpenID Connect Integration in VAST',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/106-bric-seamless-oauth-and-openid.pdf',
    abstractParagraphs: [
      [
        {
          text: "OAuth2.0 and OpenID Connect (OIDC) are essential protocols for secure user authorization and authentication in modern applications. This session will provide an overview of these frameworks and showcase VAST's upcoming OAuth2.0 & OIDC client, which enables developers to effortlessly integrate single sign-on (SSO) with providers like Google and Microsoft. Learn how to streamline workflows and securely access OAuth2.0-protected APIs across web, desktop, and server applications in VAST.",
        },
      ],
    ],
    bioParagraphs: BRICHAU_BIO,
  },
  '107-palu-druid': {
    title: 'MetaCompilation with Druid',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/107-palu-druid.pdf',
  },
  '108-deho-behaviour-driven-dev-with-hera': {
    title: 'Behaviour-driven development with Hera',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/108-deho-behaviour-driven-dev-with-hera.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Hera is a Behaviour Driven Development framework for Pharo. It allows for better communication of acceptance criteria between technical and non-technical people. The Hera Feature Browser allows writing Gherkin-style Given-When-Then scenarios. It translates them to classes and methods. In the presentation, a very short introduction to Gherkin will be given, and then the technical details of Hera will be highlighted. Several example scenarios will be given to show how the Hera Feature Browser can be used to describe behaviour in Gherkin-style scripts and to run them with the Hera Runner.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Koen De Hondt has used Smalltalk since 1988, first as a student, then as an academic researcher, and then in industry. In the nineties and a few years after the turn of the century, he was one of the driving forces behind the Belgian Smalltalk User Group (BSUG). In that time frame, he presented at ESUG conferences several times. In 2003, he left the Smalltalk community for other adventures. In 2023, he returned to the Smalltalk scene and has been an active contributor to Pharo ever since. Software development tools are his main interest.',
        },
      ],
    ],
  },
  '109-krec-metrics-over-mayhem': {
    title:
      'Metrics over Mayhem – Pragmatic Analysis of Legacy VisualWorks Systems',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/109-krec-metrics-over-mayhem.pdf',
    abstractParagraphs: [
      [
        {
          text: "Many VisualWorks projects have grown over decades – undocumented, complex, and hard to maintain. Traditional static analysis tools like the Java world has? Nowhere to be found. Glamorous Toolkit/Moose? Not available under VisualWorks. In this talk, I'll show how to build simple, custom metrics right in Smalltalk, with no external tooling. The goal: make complexity visible, identify hotspots, and reveal where to refactor first. I'll share practical examples, code snippets, and real-world experience from taming a 6800-class legacy beast with a million lines of code.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Stefan is a principal software engineer at adesso insurance solutions GmbH with over 20 years of experience in large-scale enterprise systems. He started his career in the late '90s with VisualAge Smalltalk and, after years in Java and Python, is now happily back in the Smalltalk world—working with VisualWorks and dabbling in Pharo on the side.",
        },
      ],
    ],
  },
  '110-mccl-memory-management-gemstone': {
    title: 'Memory Management in Linux and GemStone',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day1/110-mccl-memory-management-gemstone.pdf',
    abstractParagraphs: [
      [
        {
          text: 'When you run large applications on expensive servers, you need to use memory effectively. And it can be hard to find reliable information about Linux memory management. Come to this talk to learn how Linux manages memory, how GemStone manages memory under Linux, and see tools that help you understand how memory is being used.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin started his first Smalltalk user's group forty years ago this summer. The first meeting attracted five people, none of whom had actually used Smalltalk. That soon changed, and Martin has been writing Smalltalk professionally for over thirty years. He is a senior engineer at GemTalk, working on the GemStone Smalltalk product line. In his spare time, he does American Contra and English Country dancing, and works on remodeling an old house and church to be his home and dance hall.",
        },
      ],
    ],
  },
  '201-wyat-instantiations-company-update': {
    title: 'Instantiations Company Update',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/201-wyat-instantiations-company-update.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Instantiations is committed to continuing investment in the VAST Platform, open source software, and the Smalltalk community. Get an update on our progress, and see where we’re headed in the near future. Plus, get an overview of the features coming to VAST Platform 2026!',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Josh Wyatt has over 30 years of experience working in information security, risk management, infrastructure management, systems architecture, IoT, and AI/ML. His career encompasses leadership roles across industries like healthcare, national security, fintech, and public services.',
        },
      ],
    ],
  },
  '202-bour-smalltalk-for-the-web': {
    title: 'Smalltalk for the Web and Beyond',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/202-bour-smalltalk-for-the-web.pdf',
    abstractParagraphs: [
      [
        {
          text: "Smalltalk's dynamic nature, pure object model, powerful reflection, and inherent simplicity are legendary. It captivated developers, fostering a dedicated and productive community renowned for continuous innovation. While Smalltalk's core strengths remain compelling, we believe its potential can be further amplified. This talk examines strategies for integrating Smalltalk with the vast wealth of libraries, frameworks, and tools available in other programming languages. We will dive into specific examples from the web sphere (CodeParadise, PharoJS, SmallJS, WebST) extracting practical lessons learned from these projects. We will discuss how these insights can be generalized beyond the web, opening new frontiers for Smalltalk development.",
        },
      ],
    ],
    bioParagraphs: [
      [
        { text: 'Noury Bouraqadi', url: 'https://nootrix.com' },
        {
          text: ' is a software developer, maker, repair hobbyist, environment/technology/robots lover. Noury works part-time as a university professor at IMT Nord Europe. His remaining work time is dedicated to a startup that leverages ',
        },
        { text: 'PharoJS', url: 'https://pharojs.org' },
        {
          text: ' to build a SAS for teaching PLC programming & factory automation: ',
        },
        { text: 'PLC3000', url: 'https://plc3000.com' },
        { text: '.' },
      ],
      [
        {
          text: 'Dave Mason',
          url: 'https://sarg.torontomu.ca/dmason/',
        },
        {
          text: ' is Professor in, and currently Chair of, the School of Computer Science at Toronto Metropolitan University. He is a member of the Software Analysis Research Group. Dave is interested in topics such as environments and tools to support developing code in the highly-productive Smalltalk language and environment while deploying in other contexts such as in web browsers and Node.js with ',
        },
        { text: 'PharoJS', url: 'https://pharojs.org' },
        {
          text: ', the Java Virtual Machine (PharoJVM) and others (Universal Export).',
        },
      ],
      [
        {
          text: 'Richard studied Computer Science at the University of Amsterdam (UvA), where he used Smalltalk-80 to write a query optimizer for a prototype OODBMS. He currently works in IT / Software Management within the IT department of the UvA. Richard is the developer of ',
        },
        {
          text: 'SmallJS',
          url: 'https://small-js.org/Home/Home.html',
        },
        {
          text: ', a free and open source implementation of the elegant and powerful Smalltalk-80 (ST) language. It compiles to JavaScript (JS) that runs in modern browsers or in Node.js.',
        },
      ],
      [
        {
          text: "Erik Stel (aka ErikOnBike) is creating software and cycling since he was a child. The Smalltalk virus got to him in the late 90's and still leaves its marks. Currently Erik works as an independent software engineer and consultant, building software or advising about software development. With a focus on software 'for a good cause' he tries to make his impact, doing the thing he likes most: creating useful software. Erik is the developer of ",
        },
        {
          text: 'CodeParadise',
          url: 'https://github.com/ErikOnBike/CodeParadise',
        },
        {
          text: ', a framework and a future platform. CodeParadise as a framework allows developing web applications, Node.js applications and mobile apps in Smalltalk only.',
        },
      ],
    ],
  },
  '203-bric-web-architecture-seaside': {
    title: 'Advancing Modern Web Architectures in Seaside',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/203-bric-web-architecture-seaside.pdf',
    abstractParagraphs: [
      [
        {
          text: "Seaside is Smalltalk's versatile web application framework. While originally built to develop multi-page server-side-rendered applications, Seaside continues to evolve and integrate with other frameworks to support modern web architectures. We will showcase the recent advances in Seaside's core as well as its integration with client technologies such as Hotwire for building today's web applications.",
        },
      ],
    ],
    bioParagraphs: BRICHAU_BIO,
  },
  '204-chis-working-with-thousands-of-images': {
    title: 'Working with thousands of images',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/204-chis-working-with-thousands-of-images.pdf',
    abstractParagraphs: [
      [
        {
          text: 'While Glamorous Toolkit and Pharo support multiple processes within the image (green threads), this is still managed within a single operating system thread, limiting the performance of the system on multi-core machines, which are the norm. This talk will discuss how we hand off tasks to worker images, tested with thousands of workers, to allow tests, code analysis and other reflective operations to be performed in parallel, all while keeping the code in sync.',
        },
      ],
    ],
    bioParagraphs: CHIS_BIO,
  },
  '205-labo-geoview': {
    title:
      'GeoView, views to display and interact with geographical objects and cartographic layers',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/205-labo-geoview.pdf',
    abstractParagraphs: [
      [
        {
          text: 'GeoView is a geographic display library written for Pharo. GeoView enables the creation and management of the display of geo-referenced objects, as a geographic information system (GIS). The library offers view composition with specialized display layers and projection functions. A cartographic layer compatible with the best standards is provided to display map backgrounds. This cartographic layer integrates the WMS and WMTS standards and connects to any compatible server. GeoView offers an implementation for Bloc via the Alexandrie backend (for good performance) and is designed to be portable to other display technologies if needed.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pierre Laborde and Eric Le Pors are working at Thales in Brest, France. They are User Experience and Software engineers specialized in defense domains. Paul Blottiere is a QGIS contributor and FOSS enthusiast.',
        },
      ],
    ],
  },
  '206-poli-pics': {
    title: 'Fighting the Branch Predictor',
    presentationUrl: 'https://archive.esug.org/ESUG2025/day2/206-poli-PICs.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Inline caches speed up message sends by storing recent types and methods per call site. Traditionally such caches are implemented using code patching: message sends use a fixed sequence of machine instructions that is later rewritten. This design requires that machine code is not only executable but also writable, making patching expensive, preventing the sharing of machine code and being vulnerable to attacks. This talk explores a different design of inline caches avoiding code patching, and the fight to obtain decent performance against our arch enemy: the branch predictor.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guille Polito is chargé de recherche at INRIA and the CRIStAL laboratory in the University of Lille, within the Evref team. He formerly worked in industry on service-oriented and mobile applications before doing a PhD on computer science. Guille's main research interests are compilers, modularity, tooling and automated testing. Guille has participated in the Pharo community since 2010 and is now a board member. His most noticeable contributions to the community are the Pharo Bootstrap process and Iceberg.",
        },
      ],
    ],
  },
  '207-joha-tools-and-techniques-for-vm': {
    title: 'Tools and Techniques for VM',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/207-joha-tools-and-techniques-for-vm.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Smalltalk developers are accustomed to powerful tools for spotting performance bottlenecks. However, profiling at the Virtual Machine (VM) and Just-In-Time (JIT) compiler level introduces unique challenges, as traditional tools struggle with dynamic, symbol-less JIT code.',
        },
      ],
      [
        {
          text: "While most Smalltalkers don't use these low-level tools, learning about VM and JIT internals can lead to a better understanding of where a performance issue could be. This session explains the structure of the VAST JIT, and describes how specialized profiling tools integrated into the VAST VM give better insights into improving overall performance.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Henry Johansen is a software developer with professional experience in most Smalltalk dialects. His passions include maintainable code, performance, and three-element lists. Since joining Instantiations, he's contributed to extending the use of Unicode strings in VAST's development tools, and has started making improvements to the VM.",
        },
      ],
    ],
  },
  '208-hell-many-ai-assistants-gtoolkit': {
    title: 'Working with many AI assistants in Glamorous Toolkit',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/208-hell-many-ai-assistants-gtoolkit.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Many IDEs either already have or are working towards integrating an LLM-powered assistant into their toolset. These assistants are opaque, acting as immutable oracles over your codebase, and provide a fixed set of interactions with your system. In this talk we show how we are building many such assistants, context-dependent and aware of their surroundings, with an open set of capabilities that are extensible and, of course, moldable, directly inside Glamorous Toolkit.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Veit is a developer experience crafter at feenk building tools and techniques for making software systems explainable.',
        },
      ],
    ],
  },
  '209-hart-rhizome': {
    title: 'Rhizome - distributions in soil',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/209-hart-rhizome.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Soil is an object-oriented database that provides object-oriented features which are missing in most other database systems. Currently it is limited to a single machine. The presentation gives an update to Soil and the future plans for how to escape the single machine and become more distributed.',
        },
      ],
    ],
    bioParagraphs: HARTL_BIO,
  },
  '210-denk-soil-tutorial': {
    title: 'Soil Tutorial',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/210-denk-soil-tutorial.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Soil is a new and light-weight object-oriented database for Pharo. It turns a Pharo image into a database instance that supports state-of-the-art abilities like ACID transactions, MVCC and more. It aims to be a small and comprehensible database library that can be adjusted to individual use cases.',
        },
      ],
      [
        {
          text: 'This talk will be a tutorial. Using a simple example, we show how to use Soil to persist data and present how to use indexing to find data stored on disk.',
        },
      ],
    ],
    bioParagraphs: [...DENKER_BIO, ...HARTL_BIO],
  },
  '211-duca-supporting-pharo': {
    title: 'Why Supporting Pharo is important',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day2/211-duca-supporting-pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present the key actions that we are performing in the context of ESUG, the Pharo Association and the consortium.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '212-cipr-code-in-the-corridor': {
    title: 'The Code in the Corridor (Music Performance)',
    abstractParagraphs: [
      [
        {
          text: '"The Code in the Corridor" is an audiovisual live coding performance that merges synthetic sounds, drum samples, and the real-time processing of live external input, capturing organic sounds and noises. Using Coypu, (Turbo)Phausto, and Bloc, the performance combines algorithmic composition, live sampling, and looping. Bloc will be used to symbolically visualize the underlying processes, enhancing the audience’s understanding of the real-time creative flow. The performance explores the transformative potential of electronic music, reflecting on what happens when code intersects with pulsating waveforms to create a daunting and challenging sonic experience.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Domenico Cipriani, a.k.a. Lucretio, has been releasing raw minimalist dance music for more than a decade and, with his label Restoration, has played an active role in the vinyl resurgence of the late 2000s. He has performed all around the globe, from Hanoi to Detroit, and in some of the most prestigious clubs in Europe.',
        },
      ],
      [
        {
          text: 'After his graduation from the S.A.E. Institute of Barcelona, he further developed his research on social semiotics with an M.A. in Linguistics at the University of Padova, focusing on an evolutionary approach to explaining language change. He discovered Smalltalk with Symbolic Sound Kyma in 2016. In 2019, he presented an interactive performance based on network-distributed Open Sound Control at the Sonic Experiments festival at ZKM.',
        },
      ],
      [
        {
          text: 'Since April 2020, he has been live coding with Kyma and Pharo. He has performed with Pharo, Kyma, and Processing at ICLC 2024 in Shanghai. He is currently developing Phausto and Coypu for the Pharo Association.',
        },
      ],
    ],
  },
  '301-gree-gemtalk-roadmap': {
    title: 'GemTalk Update and Roadmap',
    abstractParagraphs: [
      [
        {
          text: 'A brief overview of the GemStone architecture for scalable, multi-user Smalltalk followed by the GemStone/64 product roadmap.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norm Green started his career in 1989 at IBM Canada in Toronto as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build DACS, a site-wide data collection system in VisualWorks and GemStone/S Smalltalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. These days, Norm lives near Portland, Oregon, USA and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
      ...FOSTER_BIO,
    ],
  },
  '302-freu-squeakjs': {
    title: 'SqueakJS: A Decade of Progress',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/302-freu-squeakjs.pdf',
    abstractParagraphs: [
      [
        {
          text: 'SqueakJS is a Smalltalk VM written in pure JavaScript running in web browsers. It is fully compatible with most Squeak images, including a variety of descendants of Squeak. Since its first release in 2014 a lot has improved, including JIT compilation, 64 bit support, SISTA bytecodes, and OpenGL support. The talk will highlight and demonstrate these advances.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Vanessa Freudenberg has been a member of the Squeak Smalltalk community since 1997. She was elected to its Oversight Board many times and is a current board member. While her day-job nowadays does not involve Smalltalk, her Smalltalk knowledge strongly influenced her other architectural designs. Vanessa maintains and keeps improving SqueakJS as the most compatible Squeak Smalltalk VM.',
        },
      ],
    ],
  },
  '303-fost-microservices': {
    title: 'Microservices: The Good, the Bad, and the Ugly',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/303-fost-microservices.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Companies like Netflix, Amazon, and Google pioneered microservices architecture (starting around 2010), demonstrating its scalability and resilience. Their success stories encouraged widespread adoption across various industries. Is this just another passing fad, or should you rewrite your "monolithic" system to keep up?',
        },
      ],
    ],
    bioParagraphs: FOSTER_BIO,
  },
  '304-cipri-turbo-phausto': {
    title: '(Turbo)Phausto: news from the pit lane',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/304-cipri-turbo-phausto.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Phausto is a library and API that enables sound generation and DSP programming in Pharo, powered by an embedded Faust compiler. After its first presentation at ESUG 2024, Phausto has been showcased at the International Faust Conference (through a workshop and performance) and at the Audio Developer Conference (as an online poster session).',
        },
      ],
      [
        {
          text: 'TurboPhausto is a collection of synthesizers and effects specifically designed for programming music on-the-fly, alongside Coypu, another Pharo package focused on algorithmic composition and interactive sound manipulation. In this presentation, after illustrating the advancements made in Phausto over the past year, including MIDI capabilities and the specialized Cmajor exporter that enables quick and accessible development of audio plugins, we will demonstrate how TurboPhausto objects can be used for a fully Pharo-based algorave performance.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Domenico Cipriani, a.k.a. Lucretio, has been releasing raw minimalist dance music for more than a decade and, with his label Restoration, has played an active role in the vinyl resurgence of the late 2000s. He has performed all around the globe, from Hanoi to Detroit, and in some of the most prestigious clubs in Europe.',
        },
      ],
    ],
  },
  '305-mart-enhancing-security-in-vast': {
    title: 'Enhancing Security in VAST: Towards Static Vulnerability Scanning',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/305-mart-enhancing-security-in-vast.pdf',
    abstractParagraphs: [
      [
        {
          text: "Security tooling in the Smalltalk ecosystem remains relatively limited compared to mainstream languages. Recognizing this gap, here at Instantiations, we're well underway with an R&D project to investigate how static analysis techniques can be applied to detect potential security vulnerabilities in applications built on the VAST Platform.",
        },
      ],
      [
        {
          text: "This talk shares our experiences designing a vulnerability scanner tailored to Smalltalk. We will outline the motivations behind this initiative, the security risks we aim to target, and the specific challenges of analyzing Smalltalk code. We'll also discuss the trade-offs, false positives, and what's feasible given Smalltalk's reflective nature.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Mariano Martinez Peck is a systems engineer specializing in dynamic programming language software. In 2018, he joined Instantiations to further develop the VAST Platform through the addition of new frameworks, libraries and tools, as well as improving the existing code base of VAST. He is active in the Smalltalk development community, and has used his expertise to co-author numerous open source projects. Mariano has a PhD in Computer Science, and his academic research has been published across various international journals. In his personal time, Mariano enjoys traveling as well as outdoor activities like camping and fishing.',
        },
      ],
      [
        {
          text: 'Josh has over 30 years of experience working in information security, risk management, infrastructure management, systems architecture, IoT, and AI/ML. His career encompasses leadership roles across industries like healthcare, national security, fintech, and public services.',
        },
      ],
    ],
  },
  '306-hlad-mining-software-repository-with-pharo': {
    title: 'Mining software repository with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/306-hlad-mining-software-repository-with-pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Git platforms like GitLab, GitHub, and Bitbucket offer valuable insights into team dynamics and project workflows. In this regard, the field of Mining Software Repositories (MSR) focuses on techniques and tools to extract and analyze this data.',
        },
      ],
      [
        {
          text: 'This presentation introduces GitProjectHealth (GPH), a framework to interact with Git social platforms and analyze them. We built GPH leveraging the Pharo and Moose platforms. With Moose, we create an extensible metamodel of a Git social platform. Furthermore, we utilize the metamodel extension mechanism to connect Git social platforms and other social platform models, such as Jira (ticket management). In the Pharo environment, we use the inspector and its navigation system, complementary to Moose, to navigate our models. Moreover, we use Roassal3 to visualize elements of our model inside the Pharo inspector view.',
        },
      ],
      [
        {
          text: 'This talk will cover three aspects of GPH: first, its ability to analyze Git repositories; second, its built-in metrics; and finally, its metamodel connection demonstrated with Jira.',
        },
      ],
      [
        { text: 'Tool repository: ' },
        {
          text: 'https://github.com/moosetechnology/GitProjectHealth',
          url: 'https://github.com/moosetechnology/GitProjectHealth',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Nicolas Hlad is a PhD in software engineering at Berger-Levrault, France. He completed his PhD in 2022, focusing on software product lines. Since then, he has been working on software static analysis using metamodel technology built in Pharo, and on how Generative Artificial Intelligence (GenAI), such as Large Language Models (LLMs), can impact the work of developers. Recently, he has used MSR as a means to analyze developers' activity when they benefit from GenAI with LLM tools in their workflow.",
        },
      ],
    ],
  },
  '307-dema-testing-in-spec': {
    title: 'Testing in Spec',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day3/307-dema-testing-in-spec.pdf',
  },
  '401-duca-what-devs-are-doing-with-pharo': {
    title: 'What devs are doing with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/401-duca-what-devs-are-doing-with-pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Many people do not know the kind of applications Pharoers have been developing. In this talk we will present a list of projects that we are aware of.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '402-stel-canyon': {
    title: 'Canyon - develop mobile apps using CodeParadise',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/402-stel-canyon.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Canyon is a framework within CodeParadise to develop mobile apps. The framework is based on the Ionic UI components and uses a REST backend (also created with CodeParadise) for data storage. Canyon apps are Progressive Web Apps (PWA) with an option to become native apps using the Capacitor technology of Ionic. The server side can be deployed to JavaScript-only environments. Still, all development is done in Smalltalk with the well known liveliness characteristics we all love in Smalltalk. This presentation will demonstrate Canyon.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Erik Stel (aka ErikOnBike) is creating software and cycling since he was a child. The Smalltalk virus got to him in the late 90's and still leaves its marks. Currently Erik works as an independent software developer and consultant, building software or advising about software development. With a focus on software 'for a good cause' he tries to make his impact.",
        },
      ],
    ],
  },
  '403-dema-clap': {
    title: 'Clap - Command line for Pharo',
    presentationUrl: 'https://archive.esug.org/ESUG2025/day4/403-dema-clap.pdf',
  },
  '404-chis-gtoolkit': {
    title: 'Glamorous Toolkit',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/404-chis-gtoolkit.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the Moldable Development environment. In this talk we provide an update of the environment since version 1.1 and show through concrete practical cases how a single environment can be molded to many contexts.',
        },
      ],
    ],
    bioParagraphs: CHIS_BIO,
  },
  '405-denk-fluid-class-definitions': {
    title: 'Fluid Class Defintions In Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/405-denk-fluid-class-definitions.pdf',
    abstractParagraphs: [
      [
        {
          text: 'With Pharo 12, the Fluid Class Definition format is now the default.',
        },
      ],
      [
        {
          text: 'We will first look back at the traditional Smalltalk-80 class definition format and show the problems that it has.',
        },
      ],
      [
        {
          text: 'Then we present the Pharo Fluid Class Definitions and show how it solves these problems. We discuss how the Fluid format works hand in hand with First Class Variables. After some examples of Fluid in Pharo 12, we discuss what Fluid could enable in the future.',
        },
      ],
    ],
    bioParagraphs: DENKER_BIO,
  },
  '406-duca-cavrois': {
    title: 'Cavrois: an organic window manager that respects your flow',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/406-duca-cavrois.pdf',
    abstractParagraphs: [
      [
        {
          text: 'While some IDEs force you to follow the rigid frame that they impose on you, Cavrois is a new window manager available in Pharo 13. Based on a deep analysis of development sessions, we designed a window manager that is flexible and respects your own flow of development. Since in general each of us has our own way of working, we decided to support this by making you more efficient and better supporting your own flow.',
        },
      ],
      [
        {
          text: 'Cavrois is based on the definition of profiles. In a profile you can place tools where you want and associate strategies for the displays to new tools. Tools on opening will place themselves in the location your current profile indicates and follow the strategy. You can easily switch between profiles. In addition, you can also reopen the last closed window.',
        },
      ],
    ],
    bioParagraphs: DUCASSE_BIO,
  },
  '407-abed-chatpharo': {
    title: 'ChatPharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/407-abed-chatpharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'ChatPharo is an AI-powered assistant integrated into Pharo. It leverages Large Language Model (LLM) APIs such as Google Gemini and Ollama to offer real-time explanations, code suggestions, and test generation. With features like multi-tab chat, contextual awareness, and modular model switching, ChatPharo transforms Pharo into a modern, intelligent development platform, enhancing both productivity and user experience.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Omar AbedelKader is a researcher in artificial intelligence with a focus on software engineering, currently pursuing a Ph.D. in Computer Science at the University of Lille, where he is exploring intelligent systems to enhance code generation and completion using large language models, particularly in the Pharo programming environment.',
        },
      ],
    ],
  },
  '408-duca-what-people-are-doing-with-pharo': {
    title: 'What people are doing with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2025/day4/408-duca-what-people-are-doing-with-pharo.pdf',
  },
};
