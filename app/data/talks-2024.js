// Talk titles, abstracts, speaker bios, and slide links for the ESUG 2024
// Archive's Conference Program page.
//
// Abstracts and bios are sourced from the Pillar talk files at
// https://github.com/ESUG/esug.github.io/tree/source/2024-Conference/talks
// (light copy-edits only: obvious typos fixed). Presenter names come from
// the schedule (app/data/program-2024.js) rather than being duplicated
// here.
//
// Presentation slide links point at the files hosted in the ESUG 2024 slide
// archive: https://archive.esug.org/ESUG2024 (day1-day4 folders). A few
// talks were given without slides, and a few have neither slides nor an
// abstract available -- those are omitted below (only a title is shown on
// their talk page).
//
// Each paragraph is an array of "runs" -- plain text segments, or link
// segments ({ text, url }) for inline links in the original Pillar markup.

const CHIS_BIO = [
  [
    {
      text: 'Andrei Chiș acts as a tool crafter at feenk building tools and techniques for improving software development and is a co-author of the Glamorous Toolkit platform. Andrei holds a PhD from the University of Bern. In his PhD he maintained that integrated development environments have to be moldable, that is, they have to be aware of the application under development and enable rapid customizations to new applications and tasks, and explored solutions to make this vision possible.',
    },
  ],
];

const POLITO_BIO = [
  [
    {
      text: "Guille Polito is chargé de recherche at INRIA and the CRIStAL laboratory in the University of Lille, within the Evref team. He formerly worked in industry on service-oriented and mobile applications before doing a PhD on computer science. Guille's main research interests are compilers, modularity, tooling and automated testing. Guille participates in the Pharo community since 2010 and is now a board member. His most noticeable contributions to the community are the Pharo Bootstrap process and Iceberg.",
    },
  ],
];

const COSTIOU_BIO = [
  [
    {
      text: 'Steven is an Inria researcher and works in the EVREF team. He builds and studies debugging tools to help developers understand their programs and fix bugs. In this context, his research interests span reflection and meta-programming, object-centric instrumentation, dynamic software adaptation and dynamic languages.',
    },
  ],
];

const LORENZANO_BIO = [
  [
    {
      text: 'Esteban Lorenzano studied Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object-oriented and low-level technologies, in different software companies, serving in various positions from programmer to senior architect. In 2007 he co-founded Smallworks to offer Pharo-based agile development projects. Since 2012 he dedicated full time to developing the Pharo code and community. He works with the INRIA-RMoD team in Lille, France, as core developer for Pharo, being responsible for the coordination of new releases, the implementation and maintenance of Pharo libraries and the maintenance of the Pharo flavour of the Cog Virtual Machine, FFI integration and plugins in all major platforms (OSX, Linux and Windows).',
    },
  ],
];

export default {
  '101-stef-welcome': {
    title: 'Welcome',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/01-stef_welcome.pdf',
  },
  '102-raki-strengthening-community': {
    title: 'Strengthening our community',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/02-Gordana_COSTActions.pdf',
  },
  '103-poli-mutalk': {
    title: 'Who watches the tests?',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/03-guille-mutalk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Automated testing is a popular technique to validate the correctness of programs. Tests specify the expected behaviour of a program, and are used to guide program design with techniques such as TDD. Once written, they work as regression detectors: they tell us when bugs are introduced.',
        },
      ],
      [
        {
          text: 'However, as developers can introduce bugs in a program, they can also introduce them in the tests. Who watches the watchmen? In this talk we will show the new features in Mutalk v2 that make it practical for everyday use and far more interesting than code coverage.',
        },
      ],
    ],
    bioParagraphs: POLITO_BIO,
  },
  '104-salg-vr-in-woden': {
    title: 'Virtual Reality in Pharo using WODEN Engine: Challenges and Demo',
    presentationUrl: 'https://archive.esug.org/ESUG2024/day1/04-WodenVR.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Virtual Reality is the new frontier for immersive user experiences. WODEN Engine is a 3D graphics engine with a focus on scientific and engineering applications, but it is also meant to be used for prototyping and designing 3D interactive video games. So far, Virtual Reality support in Pharo and WODEN Engine has been quite limited, but with recent changes. This talk presents the new challenges that involve supporting and constructing a 3D immersive experience in VR using Pharo and WODEN Engine, along with their solutions and the presentation of a demo in virtual reality.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Ronie Salgado is a freelance software engineer and PhD Student at Universidad de Chile on programming languages and computer graphics. He is the main author of WODEN Engine, a 3D graphics engine in Pharo. He has been working on 3D graphics on Pharo since 2013 when he was still a computer science and software engineering undergrad student. He also has experience working on the Chilean videogame industry working on Omen of Sorrow for the PS4 and other videogames as a contractor at positions of software architect and senior software engineer.',
        },
      ],
    ],
  },
  '105-zara-llm-onboarding': {
    title:
      'How to get more people onboard with Pharo? Applying LLM as support for the onboarding of new developers',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/05-Pharo%20RAG%20LLM%20-%20PZAR.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Large Language Models (LLMs) have taken the spotlight in many fields with their ability to generate text in an intelligent manner. In computer science, they are being used to generate code, documentation, and also to explain any code base. These use cases rely on a technique called Retrieval Augmented Generation (RAG). This technique relies on retrieving the relevant document or code just in time to perform the task. In this work, we explore RAG to study their use in the onboarding of developers toward new technologies.',
        },
      ],
      [
        {
          text: 'As beginners in Pharo ourselves, we have developed a RAG on the Pharo code base and tested it on a set of questions from the official Pharo Discord where many new developers go to seek answers from the community. In this talk, we present a quick overview of LLMs and how to build a RAG on any given documents (e.g., Pharo source code and public books of Pharo). Then, we demonstrate the ability of RAG to automatically help onboard Pharo users, based on previous questions found in the Pharo Discord.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pascal Zaragoza has a PhD in computer science from the University of Montpellier. His thesis was on the migration of monolithic architecture toward microservices using model driven engineering. Since 2022, he works on integrating AI/LLM inside the workflow of Berger-Levrault products.',
        },
      ],
      [
        {
          text: 'Marius Pingaud is a computer science student in his first year of master at the University of Sorbonne Paris. He is also a part-time intern at Berger-Levrault, under the supervision of Dr. Pascal Zaragoza. His work focuses on the development of a RAG platform for Berger-Levrault and he explores the RAG ability to accelerate the onboarding of new developers.',
        },
      ],
    ],
  },
  '106-cipr-phausto': {
    title: 'Phausto: the sound within Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/06-domenico-phausto.pdf',
    abstractParagraphs: [
      [
        {
          text: "Phausto is a Pharo library that enables the generation of audio directly from Pharo itself. It leverages FFI calls to a dynamic library that exposes Faust's standard library and Box API to developers and sound artists. It is conceived to be lightweight, minimalist and multi-platform, by the use of the multi-platform PortAudio open-source library for audio playback.",
        },
      ],
      [
        {
          text: 'The classes and methods in the Phausto package allow quick development and design of Digital Sound Processors (DSPs) such as synthesisers, physical models and audio effects, and can be used both by Pharo developers (to add sounds to their applications) and by musicians and artists who want to approach computer music creation and DSP programming enjoying the easiness and the reflectiveness of Pharo. Furthermore, the integration of Phausto with the Coypu package for programming music on-the-fly turns Pharo into a stand-alone environment for live coding performances.',
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
  '107-gree-gemtalk-roadmap': {
    title: 'GemTalk Update and Roadmap',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/07-norm_green_gemstone.pdf',
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
      [
        {
          text: 'James Foster discovered the local university’s computer center as a junior-high student in 1971 and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James teaches undergraduate computer science classes and serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '108-cost-debug-points': {
    title: 'Debug Points',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/08-steven-debug-points.pdf',
    abstractParagraphs: [[{ text: 'Breakpoints. But better.' }]],
    bioParagraphs: COSTIOU_BIO,
  },
  '109-chis-moldable-debugging': {
    title: 'Moldable Debugging',
    abstractParagraphs: [
      [
        {
          text: 'Moldable Development is a way of programming through custom tools built for each development problem. One type of tool that is moldable in Glamorous Toolkit is the debugger. The Moldable Debugger provides explicit support for creating and working with domain-specific debuggers. In this talk we show practical examples of domain-specific debuggers, and explore the mechanisms for creating custom debuggers that go from simple extensions based on exceptions to elaborate debugger interfaces. The examples show both how the debugger can adapt to different Pharo code executions, but also how the same infrastructure can adapt seamlessly to other languages and runtimes.',
        },
      ],
    ],
    bioParagraphs: CHIS_BIO,
  },
  '110-tpso-toplo': {
    title: 'Toplo',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/10-pablo-toplo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Toplo: a gorgeous widget library for Pharo inspired by the ant.design library.',
        },
      ],
    ],
  },
  '111-lore-spec-gtk': {
    title: 'Building a GTK app with Spec',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/11-esteban-spec-gtk.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk, you will discover the power of designing your GUI with the Spec framework. You can design your app as usual and render it with the Morphic backend inside the Pharo image, or you can choose to go to the GTK backend and use OS windows.',
        },
      ],
      [
        {
          text: 'We will present how to design an app with Spec to be compatible with the GTK backend. You will also see how to package and distribute your app with GTK.',
        },
      ],
    ],
    bioParagraphs: [
      ...LORENZANO_BIO,
      [
        {
          text: 'Christophe Demarey is a research engineer at Inria Lille, working in tight relation with the Evref team. Christophe has participated in the Pharo community since 2012. His most noticeable contributions in the past months are in the Pharo Launcher and contributing to the Pharo ecosystem. Christophe is interested in Software Craftsmanship and initiated the Inria Continuous Integration service.',
        },
      ],
    ],
  },
  '112-amar-webside': {
    title: 'Webside 2.0',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day1/12-amaral_webside.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Webside is an API aimed at standardizing a way to talk to a Smalltalk system through HTTP. It also comes with one possible application: a fully operational IDE. During the presentation at ESUG 22 (Novi Sad), questions around the extensibility of such an IDE arose. In this talk, I present the progress in that regard, together with other improvements made since that presentation in the context of a real development environment.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guille is the creator of Webside. He has been devoted to Smalltalk for more than 20 years, using and enjoying it throughout his entire academic and professional career. He is currently working for Quorum Software, a solution provider for the oil & gas industry.',
        },
      ],
    ],
  },
  '201-duca-pharo12': {
    title: 'Pharo 12',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/01-stef_pharo12.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the Pharo 12 release. Pharo 12 got massive improvements underneath: permanent space in production, a fully optimised version of tags, tool migration to Spec2, Spec enhancements, a new architecture for refactoring, a leaner version of Metacello, strict mode for FFI, and a Bloc preview. I will also develop the vision around Pharo architecture in terms of the new UI.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stéphane Ducasse is one of the creators of Pharo. He leads Pharo development with special attention to making sure that while Pharo delivers exciting new features, it can be used by companies to deliver business value.',
        },
      ],
    ],
  },
  '202-joha-unicode-overview': {
    title: 'Unicode String Implementations - An Overview',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/02-Unicode-Henry.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Most Smalltalk dialects now include string classes that can represent Unicode codepoints. However, the way in which different dialects provide this can differ quite a bit. This presentation will give a general overview of the implementations in VAST, Pharo, GemStone, and Cuis, with an extra focus on Unicode string hashing, comparing the design choices and tradeoffs involved.',
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
  '203-mari-unicode-vast': {
    title: 'Building Full-Stack Unicode Applications with VAST',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/03-unicode_demo-maringolo.pdf',
    abstractParagraphs: [
      [
        {
          text: "The VAST Platform's extensive Unicode support enables the creation of applications that cater to global audiences with diverse language requirements. In this presentation, we'll walk you through the creation of a full-stack demo application that seamlessly integrates and reliably manages Unicode strings across its various layers. Starting from the user interface on the web, we will demonstrate how Unicode strings are handled on the Seaside server. Then, we'll show how these strings are manipulated within the development tools. Finally, we'll explore how Unicode text is stored and retrieved in the database storage layer.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban A. Maringolo is a senior software developer specializing in analysis, application development, and web architectures. Due to his experience with other Smalltalk dialects, he was keen to join the Instantiations team in 2019 to improve the extensibility of VAST and bridge the gap between it and other platforms. Esteban is involved in ongoing improvements to VAST’s new Unicode and Async frameworks, and he’s an active member of the Smalltalk development community with regular contributions to various open source projects.',
        },
      ],
    ],
  },
  '204-zait-cormas-games': {
    title: 'Companion modelling and serious games in Pharo and VisualWorks',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/04-2024-esug-cormas.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present the lessons learned from 25 years of developing tools for companion agent-based modelling and serious games in Smalltalk. We will explain the companion modelling approach, the practices that researchers at CIRAD adopt, and the software tools that support those practices. We will then discuss our experience developing those tools in VisualWorks Smalltalk and their recent migration to Pharo. We will discuss the unique features that make Smalltalk programming environments well-suited for building accessible and interactive tools. We will also communicate the challenges we face when migrating to Pharo and adopting modern libraries (Spec2, Roassal3, Iceberg, etc.).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Oleksandr Zaitsev is a computer science researcher at CIRAD - a French agricultural research and international cooperation organization working for the sustainable development of tropical and Mediterranean regions. Oleksandr works on software engineering and AI techniques for participatory agent-based modelling and serious games. In 2022, he defended his PhD at Inria Lille; his thesis was about data mining-based tools to support software evolution. Oleksandr is contributing to many open-source projects (DataFrame, PolyMath, Pharo-AI). He is currently the lead developer of the Cormas modelling platform.',
        },
      ],
      [
        {
          text: 'Pierre Bommel is a computer science and modelling researcher at CIRAD. He is a specialist in participatory modelling and agent-based modelling. In 2020, he defended his HDR titled "Participatory modelling and interactive simulation to support the management of the commons". He was hosted as an associate professor at the University of Brasilia then at the University of Rio de Janeiro (PUC), where he worked on subjects such as the adaptation of livestock to drought in Uruguay or the relationships between livestock farming and deforestation in the Amazon. He was also a visiting professor at UCR (Costa Rica) where he worked on issues of adaptation to climate change in the Guanacaste region. He was also an associate researcher at CATIE for the establishment of an early warning system for coffee rust in Central America. He is currently based in Montpellier.',
        },
      ],
    ],
  },
  '205-chis-glamorous-toolkit': {
    title: 'Glamorous Toolkit',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit is the Moldable Development environment. In this talk we provide an update of the environment since version 1.0 and show through concrete practical cases how a single environment can be molded to many contexts.',
        },
      ],
    ],
    bioParagraphs: CHIS_BIO,
  },
  '206-dema-pharo-launcher-cli': {
    title: 'Manage your Pharo images from command line',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/06-christophe-PharoLauncher-CLI.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Dealing with Pharo images and their virtual machines is not always easy. For some years, Pharo Launcher has helped to organize your images and VMs nicely and be more productive.',
        },
      ],
      [
        {
          text: 'We present this year a new way to manage your images through the command line. You will see that most actions available with the Pharo Launcher UI are now available on the command line with the pharo-launcher command. You will also discover new features available only on the command line that will boost your productivity: create an image with code from your repository, list running images, and spot a bug with bisection.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Christophe Demarey is a research engineer at Inria Lille, working in tight relation with the Evref team. Christophe has participated in the Pharo community since 2012. His most noticeable contributions in the past months are in the Pharo Launcher and contributing to the Pharo ecosystem. Christophe is interested in Software Craftsmanship and initiated the Inria Continuous Integration service.',
        },
      ],
    ],
  },
  '207-fost-async-await': {
    title: 'Asynchronous Programming with Async and Await',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/07-foster-asynchronous.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Many modern languages support asynchronous programming using the async/await syntax. In this presentation we look at this pattern and compare and contrast it with the Smalltalk process model.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'James Foster discovered the local university’s computer center as a junior-high student in 1971 and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk fan. James teaches undergraduate computer science classes and serves as VP of Finance & Operations for GemTalk Systems. He is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '208-noce-notebooks': {
    title: 'Notebooks',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/08-massimo-notebooks.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present my project called "Notebooks". It shows how to document Smalltalk software by combining documentation text with executable Playgrounds. The documentation can also include interfaces to foreign languages used. It can be navigated and edited from within Smalltalk, allowing Playgrounds to be executed immediately. The full documentation can be exported as either PDF or SVG files.',
        },
      ],
      [
        {
          text: 'Technologies used include: Outliners (recursive visualization of objects driven by slot descriptors), Treesitter (syntax coloring for C, Lua and SQL), Pango (a new Roassal shape to render text given in Pango markup format), a new Microdown visitor to render documentation via Roassal, and Poppler (a new Roassal shape to render PDF files directly in your own image).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Massimo Nocentini got his PhD in computer science at the University of Florence, Italy. Currently he works as a freelancer using Smalltalk in his 9-to-5 job. He is interested in documentation and in the application of the functional approach to programming and design.',
        },
      ],
    ],
  },
  '209-lego-pyramid': {
    title: 'Pyramid: a User Interface Editor for Bloc',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day2/09-legolf-Pyramid.pdf',
    abstractParagraphs: [
      [
        {
          text: "Implementing or understanding the composition of user interfaces can be tedious. At Thales-DMS, we implement Pyramid, a tool designed to edit Bloc UI. We use it to implement or change our prototype's UI even on a running application.",
        },
      ],
      [
        {
          text: 'In this talk we will present the different features of Pyramid based on demonstrations.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Yann Le Goff is a PhD student at the University of Brest (France). He developed Pyramid during an internship at Thales DMS. He was introduced to Smalltalk and Pharo during his internship.',
        },
      ],
    ],
  },
  '210-kriv-runtime-type-collecting': {
    title: 'Runtime type collection and its usage in code transpiling',
    abstractParagraphs: [
      [
        {
          text: 'While Pharo significantly benefits from the flexibility and expressiveness of strong, dynamic typing, in some cases, static type annotations of code can play an irreplaceable role. In this presentation, we discuss our approach to adding type annotations to existing code with the help of runtime type collection based on the Metalinks infrastructure. We then demonstrate how we utilized these annotations for the successful transpiling of Pharo code to a statically typed language.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Nidea s.r.o. focused on software consulting. He is a former member of the INRIA RMoD team. He actively participates in the Pharo open-source community with a primary focus on Pharo modularization, bootstrapping, cleaning, and meta-modelling infrastructure.',
        },
      ],
    ],
  },
  '301-berm-instantiations-update': {
    title: 'Instantiations Company Update & VAST 2025 Preview',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/01-Instantiations-company-update.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Instantiations is committed to continuing investment in the VAST Platform and ongoing involvement with the Smalltalk community. Get an update on our progress, and see where we’re headed in the near future. Plus, get an overview of the features coming to VAST Platform 2025!',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Seth Berman is President & CEO of Instantiations. He oversees a dedicated team that tirelessly supports and enhances Instantiations' VAST Platform, while he guides expansion into new software/service areas like Fintech, IoT, cloud, and edge computing solutions. Before leading Instantiations, Seth joined the company in 2011 as a software engineer working on projects ranging from advanced code editors and cryptography libraries to FFI enhancements and virtual machine implementations. Previously, he worked for the US government in a variety of domains including stochastic simulation, operations research, grid computing, and link analysis. Seth has a B.S. in Computer Science and an M.S. in Software Engineering.",
        },
      ],
    ],
  },
  '302-poli-jit-compiler': {
    title: 'How easy is to write a JIT compiler?',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/02-guille-vm-profiling.pdf',
    abstractParagraphs: [
      [
        {
          text: 'JIT compilers are compilers that accelerate most-used methods by detecting them and compiling to machine code at runtime. However, the required expertise and engineering cost to implement a JIT compiler cannot be ignored.',
        },
      ],
      [
        {
          text: 'In this talk we will showcase Druid: a meta-compiler that automatically generates part of a JIT compiler for you. Druid splits the maintenance of the JIT compiler from the maintenance of the language interpreter. This allows experts to focus on their own domain and brings clear interfaces between them. We will show that this auto-generated approach not only improves modularity but also improves interpreter performance, and presents nice perspectives for the future.',
        },
      ],
    ],
    bioParagraphs: POLITO_BIO,
  },
  '303-lore-pharo-cig': {
    title: 'Bridging the Gap: Streamlining Pharo FFI Bindings',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/03-esteban-Pharo-CIG.pdf',
    abstractParagraphs: [
      [
        {
          text: "The Pharo FFI (Foreign Function Interface) system is an excellent tool that enables Pharo users to create bindings with external C libraries. However, there's a significant drawback that often discourages its use: the bindings must be manually created, a process that can be slow and prone to crashes. This talk presents a solution to bridge that gap.",
        },
      ],
    ],
    bioParagraphs: LORENZANO_BIO,
  },
  '304-stel-code-paradise': {
    title: 'CodeParadise',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/04-Code-paradise.pdf',
    abstractParagraphs: [
      [
        {
          text: 'CodeParadise is a framework which aids in developing web applications and Node.js applications using Pharo Smalltalk. This talk will explain how CodeParadise can be used. The talk is based on an application consisting of a web application, a mobile app and a backend server application running on Node.js, all created using Pharo Smalltalk and the CodeParadise framework.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Erik Stel (aka ErikOnBike) is creating software and cycling since he was a child. The Smalltalk virus got to him in the late 90's and still leaves its marks. Currently Erik works as an independent software engineer and consultant, building software or advising about software development. With a focus on software 'for a good cause' he tries to make his impact, doing the thing he likes most: creating useful software.",
        },
      ],
    ],
  },
  '305-buck-beagle-smalltalk': {
    title: 'Beagle Smalltalk',
    presentationUrl: 'https://archive.esug.org/ESUG2024/day3/05-beagle.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Beagle Smalltalk is a new dialect of Smalltalk destined to be open source. It\'s intended to be a vehicle to help new programmers explore the joy and adventure of programming. This presentation will include the language and its implementation, the compiler and code generator, development tools and UIs using web browsers, and sample "kits" for new programmers to build on.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'David Buck is the president of Simberon Incorporated. He has been doing Smalltalk consulting and training for over 30 years. He has written games for iOS and Android using Smalltalk and has used Smalltalk to explore areas of software development from business applications to games and simulated physics.',
        },
      ],
    ],
  },
  '306-chis-gt4gemstone': {
    title: 'gt4gemstone',
    abstractParagraphs: [
      [
        {
          text: "Moldable Development is a way of programming through custom tools built for each development problem. Glamorous Toolkit is an environment for Moldable Development. It is implemented in Pharo and, of course, it offers an experience for Pharo as well. But it's made to work with arbitrary technologies.",
        },
      ],
      [
        {
          text: 'In this talk we show how it works when developing in GemStone. In particular, the talk shows how tools like Lepiter, Coder and Debugger seamlessly work with GemStone and how extensions defined once can work with both local and remote objects.',
        },
      ],
    ],
    bioParagraphs: CHIS_BIO,
  },
  '307-cost-pharo-debugger': {
    title: 'The Pharo Debugger and Debugging Tools: Advances and Roadmap',
    abstractParagraphs: [
      [
        {
          text: 'In this talk we summarize the latest debugger improvements. We will also try to present a map of the current unsolved problems, and of the most requested features from the community that we aim to incorporate into our roadmap.',
        },
      ],
    ],
    bioParagraphs: COSTIOU_BIO,
  },
  '308-hart-tale-about-scale': {
    title: 'A tale about scale',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/08-a-tale-about-scale-norbert.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Scale is a term often used by people with very different meanings. In software development it is one of the big causes of premature optimizations and complexity. A couple of years after the last talk about how to do projects with Pharo, here comes an updated version.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norbert Hartl has a long track record of creating and building software projects. Currently he is on a mission to create projects with zero dependencies. He co-founded ApptiveGrid where he is working at the moment. He also co-founded PharoPro.',
        },
      ],
    ],
  },
  '309-bour-webst': {
    title: 'WebST: Web Components with PharoJS',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day3/09-WebST-noury.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Web Components are standard web technologies that support the definition of reusable custom HTML elements. This JavaScript API allows defining both the view of web components as well as their behavior. Web component custom tags can encapsulate the view in a "shadow" DOM tree. This supports creating web pages combining different web components from different sources while avoiding collisions.',
        },
      ],
      [
        { text: 'This talk introduces ' },
        { text: 'WebST', url: 'https://github.com/bouraqadi/WebST' },
        { text: ', a ' },
        { text: 'PharoJS-based', url: 'https://pharojs.org' },
        {
          text: ' solution to seamlessly implement and test web components using the powerful Pharo Smalltalk IDE. By delving into practical examples, we demonstrate how WebST facilitates the implementation and reuse of web components. Moreover, for production purposes, WebST generates web clients with standalone HTML and JavaScript code.',
        },
      ],
    ],
    bioParagraphs: [
      [
        { text: 'Noury Bouraqadi', url: 'https://nootrix.com' },
        {
          text: ' is a software developer, maker, repair hobbyist, environment/technology/robots lover. Noury works part-time as a university professor at IMT Nord Europe, in the Autonomous and ResilienT Systems group. His remaining work time is dedicated to a startup that uses ',
        },
        { text: 'PharoJS', url: 'https://pharojs.org' },
        {
          text: ' to build a SaaS for teaching PLC programming & factory automation: ',
        },
        { text: 'PLC3000', url: 'https://plc3000.com' },
        { text: '.' },
      ],
    ],
  },
  '401-krie-community-building': {
    title: 'Community building',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day4/01-Community-krief.pdf',
  },
  '402-bour-object-centric-debugging': {
    title: 'Object-Centric Debugging',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day4/02-ObjectCentric-Debugging.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Object-Centric Debugging is a technique that focuses debugging tools on objects rather than on the call stack. Object-centric breakpoints have been available in Pharo since 2019. Recently we conducted an empirical experiment to study the impact of object-centric breakpoints and the results are encouraging.',
        },
      ],
      [
        {
          text: 'In this talk, we will take the opportunity to present again the object-centric breakpoints, then we will discuss the preliminary findings of our experiment. Additionally, we aim to share our perspective on object-centric debugging, advocating for its expansion beyond breakpoints within Pharo and discussing why and how we should pursue this advancement.',
        },
      ],
    ],
    bioParagraphs: [
      ...COSTIOU_BIO,
      [
        {
          text: "Valentin Bourcier is a PhD student at Inria in the EVREF team since October 2022. He studies object-centric debugging, a novel debugging technique that aims to lower the cost of debugging object-oriented programs. In this context, Valentin's main interests are debugging methodologies and debugging techniques, especially object-centric instrumentation but also other techniques based on language analysis or language features such as reflection.",
        },
      ],
    ],
  },
  '403-vanc-gt4python': {
    title: 'gt4python: Moldable Development for Python',
    presentationUrl: 'https://archive.esug.org/ESUG2024/day4/03-gt4python.pdf',
    abstractParagraphs: [
      [
        {
          text: "Moldable Development is a way of programming through custom tools built for each development problem. Glamorous Toolkit is an environment for Moldable Development. It is implemented in Pharo and, of course, it offers an experience for Pharo as well. But it's made to work with arbitrary technologies.",
        },
      ],
      [
        {
          text: 'In this talk we show how it works when developing in Python. In particular, the talk shows demos of Python snippets that work with object inspectors extensible through Python code, a Python debugger that works seamlessly, a coding experience including completion, and even a custom-made profiler.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Sven Van Caekenberghe is a veteran Smalltalk developer and longtime contributor to the Pharo ecosystem. He is currently a developer experience crafter at feenk building tools and techniques for making software systems explainable.',
        },
      ],
    ],
  },
  '404-ferl-pharo-ide': {
    title: 'Getting more from your Pharo IDE',
    presentationUrl: 'https://archive.esug.org/ESUG2024/day4/04-cyril-ide.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Pharo has the particularity of being at the same time a programming language and an IDE. This can make it easy to customize the IDE even further compared to other languages.',
        },
      ],
      [
        {
          text: "It's hard for an IDE to cover everyone's perfect workflow, but it is possible to adapt the Pharo IDE to add those missing touches and increase our productivity.",
        },
      ],
      [
        {
          text: "In this presentation I'll show what kind of customizations I am doing.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Cyril Ferlicot-Delbecque is a research and development engineer working in the Inria Evref team. He has worked since 2015 on diverse projects around Pharo and on Pharo itself. He is currently working on software analysis to detect security vulnerabilities in software with the Software Heritage Security project.',
        },
      ],
    ],
  },
  '405-mart-making-of-vast': {
    title: 'Behind the scenes: The Making of VAST',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day4/05-developingVAST-mariano.pdf',
    abstractParagraphs: [
      [
        {
          text: "You've probably already heard much about how organizations develop and deploy Smalltalk applications, but how is a complete Smalltalk platform made? In this talk, get a behind-the-scenes look at how Instantiations creates the VAST Platform. We'll discuss how we successfully develop, test, benchmark, and build a commercial Smalltalk platform like VAST.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Mariano Martinez Peck is a systems engineer specializing in dynamic programming language software. In 2018, he joined Instantiations to further develop the VAST Platform through the addition of new frameworks, libraries and tools, as well as improving the existing code base of VAST. He is active in the Smalltalk development community, and has used his expertise to co-author numerous open source projects. Mariano has a PhD in Computer Science, and his academic research has been published across various international journals. In addition to his development duties, he currently leads the VAST Platform engineering team at Instantiations. In his personal time, Mariano enjoys traveling as well as outdoor activities like camping and fishing.',
        },
      ],
    ],
  },
  '406-saya-vulnerability': {
    title: 'Detecting and preventing Pharo vulnerabilities',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day4/06-imen-security.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Object-oriented applications are prone to vulnerabilities in their code leading to attacks. These attacks, once detected, are declared in known databases such as Mitre and NVD. Based on some criteria such as severity and scope, these attacks are classified according to the Open Source Foundation for Application Security (OWASP) into more than 10 categories. In the Mitre database, there are no declared attacks against Pharo code.',
        },
      ],
      [
        {
          text: 'Recently, we conducted an experiment to simulate attacks on Pharo using log files as an entry point for attacks. We succeeded in carrying out an attack targeting code written in Pharo. In this talk, we will present some concepts linked to attacks on object-oriented languages. We will then give a proof of concept and explain how the simulated attack was performed. We will conclude by sharing some lessons learned and good practices to avoid this kind of attack.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Imen is a lecturer in Computer Science in the Evref Team and at the FST of the University of Lille. She obtained her PhD from the University of Lorraine. Her research areas include code analysis for vulnerability detection, meta-modelling, and formal development of Cyber-Physical Systems (CPS) and Systems of Systems (SoS).',
        },
      ],
      ...COSTIOU_BIO,
    ],
  },
  '407-hell-gt4llm': {
    title: 'gt4llm: A programmable environment for large language models',
    presentationUrl: 'https://archive.esug.org/ESUG2024/day4/07-gt4llm.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Glamorous Toolkit (GT) is an environment for exploring systems, documenting them, and communicating about them. As such, views on objects, both technical and for the domain, are essential. And although GT aims to make creating views inexpensive and for them to be amortized as quickly as possible, it is still often repetitive work. So naturally, we explored how to generate that code using a large language model (LLM), a tool which is great at performing repetitive work quickly. While working on this, we also created an infrastructure for working with LLMs more generally, enabling a moldable approach to exploring the interaction with models.',
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
  '408-luna-data-storytelling': {
    title: 'Data Storytelling with Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2024/day4/08-data-storytelling-with-pharo.svg',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present how data storytelling is used in a local hackerspace since 2015, and with undergrad and post-grad students at the Javeriana University since 2022, to introduce non-developers to computational thinking via several prototypes and experiences, including interactive documentation, performative grassroots (re)publishing of books and booklets, (inter)personal wikis and websites for learning experiences and research projects, and "data portraits" of presidential candidates as civic tech to innovate in political participation.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Offray is a hacktivist, researcher and academician. He currently works as a full-time professor at the Javeriana University in Colombia and does consultancy through his enterprise mutabiT. He is the creator of the civic tech and data storytelling and visualization tool Grafoscopio and a bootstrapper/facilitator of its community.',
        },
      ],
    ],
  },
};
