// Talk titles, abstracts, and speaker bios for the ESUG 2016 Archive's
// Conference Program page.
//
// ESUG 2016 predates the archive.esug.org agenda-page organization used
// from 2022 onward, so this data was assembled from two sources:
//
// - title/abstractParagraphs/bioParagraphs: sourced directly from the
//   conference's public Google Calendar (Main Track .ics feed, calendar id
//   8tt9grjos12ool4hqrpifjle9s@group.calendar.google.com, linked directly
//   by Koen), whose DESCRIPTION field carries each talk's speaker(s),
//   abstract, and bio inline (matching the ESUG 2017/2018 calendars).
//   Light copy-edits only (obvious typos fixed, per-field labels like
//   "First Name:"/"Last Name:"/"Email:"/"Title:"/"Type:" removed, a
//   stray "Add Comment" calendar-UI artifact and one speaker's trailing
//   email-signature block dropped). 'Pharo Update' had no DESCRIPTION at
//   all; 'Pillar: one language for all supports' had an abstract but no
//   speaker/bio -- see program-2016.js's header comment for why both keep
//   their `talkId` but no `speaker`.
// - `videoId`/`presentationUrl`: unlike ESUG 2017-2019, ESUG 2016 has a
//   real slide-and-video archive at https://archive.esug.org/ESUG2016/
//   (day folders 01-Monday..05-Friday, each with a further
//   "<time> <topic>" subfolder per session). Each subfolder's
//   Info.txt/Infos.txt names the session's SlideShare deck, PDF filename,
//   and YouTube link directly, which is what `presentationUrl` (the PDF,
//   linked via archive.esug.org rather than SlideShare) and `videoId` are
//   sourced from -- no title-matching against a YouTube playlist was
//   needed, unlike every other archived year. A handful of talks were
//   demos or otherwise had no slide deck (only a Prezi export, or a
//   "DEMO-NoSlides.txt" placeholder) and so have no `presentationUrl`;
//   a handful of others (mostly Wed 24 and Fri 26 morning sessions) have
//   no `videoId` because the session folder held no video file and no
//   Info.txt YouTube link either.
//
// Presenter names come from the schedule (app/data/program-2016.js) rather
// than being duplicated here.
//
// Each paragraph is an array of "runs" -- plain text segments, matching
// the shape used by the other talks-YYYY.js files.
export default {
  '101-thom-cincom-smalltalk-roadmap-2016': {
    title: 'Cincom Smalltalk Roadmap 2016',
    videoId: 'ZV-1gecpttY',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1100-1145%20Cincom%20Roadmap/2016-08-22-b-Cincom-Smalltalk-Roadmap%20ESUG-2016-Final.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation, Arden Thomas, the Product Manager for Cincom Smalltalk, will discuss recent, current, and future product changes and developments',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Arden Thomas started using Smalltalk in 1986, when he was researching and exploring better ways to do software development. He found it! Smalltalk and object-oriented were such a profound improvement for doing software development, that he made a full commitment to using Smalltalk. Arden used Smalltalk in his post-graduate work thesis and projects. Prior to becoming Cincom’s Smalltalk product manager, Arden has done Smalltalk work for IBM, Parcplace Systems, ParcPlace-Digitalk, ObjectShare, and a hedge fund in a number of capacities including; lead developer, trainer, architect, consultant, and sales SE. When not working with Smalltalk, Arden can be found cycling, officiating at swim meets, or attending events with his family and children. This year Arden became certified as a USA-swimming referee after years as a stroke-and-turn and starting official.',
        },
      ],
    ],
  },
  '102-girb-the-glamorous-toolkit-towards-a-novel-live-ide': {
    title: 'The Glamorous Toolkit: Towards a novel live IDE',
    videoId: 'XWOOJa3kEa0',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1145-1230%20GT/2016-08-22-c-tudorgirba-gt.pdf',
    abstractParagraphs: [
      [
        {
          text: 'The Glamorous Toolkit project aims to reinvent the IDE (http://gtoolkit.org). Over the last two years the team has produced four significant tools that are part of Pharo: Playground, Inspector, Spotter, Debugger. In this demo-driven talk we exemplify how these tools can change the development workflow, and we sketch the broader perspective and outlook of the project.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Tudor Gîrba (http://tudorgirba.com) founded feenk gmbh, a consulting and coaching company (http://feenk.com), and in partnership with Eliot Miranda helps companies adopt Pharo.',
        },
      ],
      [
        {
          text: 'He leads the work on the Moose platform for software and data analysis (http://moosetechnology.org), he founded the Glamorous Toolkit project for rethinking the IDE (http://gtoolkit.org), and he is a board member of the Pharo live programming environment (http://pharo.org).',
        },
      ],
      [
        {
          text: 'He authored the humane assessment method (http://humane-assessment.com) to help teams to rethink the way they manage large software systems and data sets. Tudor also argues that storytelling should be prominent in software development (http://demodriven.com).',
        },
      ],
      [
        {
          text: 'In 2014, he won the prestigious Dahl-Nygaard Junior Prize (http://aito.org) for his work on modeling and visualization of evolution and interplay of large numbers of objects.',
        },
      ],
    ],
  },
  '103-poli-a-tour-on-spur-for-non-vm-experts': {
    title: 'A tour on Spur for non-VM experts',
    videoId: 'OlJZMHLTfuc',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1400-1430%20Spur/2016-08-22-d-Spur.pdf',
    abstractParagraphs: [
      [
        {
          text: "Spur is the new memory manager for the Cog virtual machine used by Pharo, Newspeak and Squeak. It features a two generation scavenger garbage collector with an adaptative tenuring policy, lazy become, (transparent) segmented memory, a new 64bit-compatible object-format, ephemerons, pinned objects, a class table, among others. If you're high-level application developer, or a programming amateur, but not a VM expert, but you're interested in understanding these concepts and what is their impact on your day to day development this talk is for you.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guille Polito is research engineer at CNRS, France. Pharoer since 2010, he participates actively in the Pharo open source community since several years. He currently works on the modularization of Pharo where he does software archeology, refactoring, library rewriting and participates in the Virtual Machine development.',
        },
      ],
    ],
  },
  '104-thom-hidden-gems-in-cincom-smalltalk': {
    title: 'Hidden Gems in Cincom Smalltalk',
    videoId: 'UnCcrT5qRDw',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1430-1500%20Cincom%20Gems/2016-08-22-e-Hidden%20Gems-ESUG-2016-Final.pdf',
    abstractParagraphs: [
      [
        {
          text: 'There are many useful abilities and techniques in Cincom Smalltalk; but they may not always be obvious. “Hidden Gems” shows some practical capabilities of the development environment that are useful to the Smalltalk developer.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Arden Thomas started using Smalltalk in 1986, when he was researching and exploring better ways to do software development. He found it! Smalltalk and object-oriented were such a profound improvement for doing software development, that he made a full commitment to using Smalltalk. Arden used Smalltalk in his post-graduate work thesis and projects. Prior to becoming Cincom’s Smalltalk product manager, Arden has done Smalltalk work for IBM, Parcplace Systems, ParcPlace-Digitalk, ObjectShare, and a hedge fund in a number of capacities including; lead developer, trainer, architect, consultant, and sales SE. When not working with Smalltalk, Arden can be found cycling, officiating at swim meets, or attending events with his family and children. This year Arden became certified as a USA-swimming referee after years as a stroke-and-turn and starting official.',
        },
      ],
    ],
  },
  '105-bour-pharojs': {
    title: 'PharoJS',
    videoId: 'nmRPSb0t9lw',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1500-1530%20PharoJS/2016-08-22-f-pharoJs-nouryBouraqadi-Esug2016.pdf',
    abstractParagraphs: [
      [
        {
          text: 'PharoJS is an infrastructure (framework + middleware + tools) that allows developing and testing in Smalltalk for applications that will ultimately run on a Javascript interpreter. Unlike to Amber, that runs inside a web browser, PharoJS is built on top of Pharo. Apps are initially built in the image as pure Pharo objects that run on the Smalltalk virtual machine. The PharoJS middleware allows interacting remotely with third party Javascript objects running on a web browser, or interacting with a web view, particularly for mobile apps. Such interactions are used only during tests. Ultimately, the Smalltalk code is converted to Javascript. So, at the production stage, only a Javascript interpreter is required to run the app. In this talk, we present the current status of PharoJS and its implementation. Through an example, we describe the application development process, with a focus on tests and TDD.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Noury Bouraqadi is a full professor at Ecole des Mines de Douai, France. His research is about Software Engineering and AI with a focus on robotic applications.',
        },
      ],
      [
        {
          text: 'Dave Mason is a full professor at Ryerson University, Toronto, Canada. His research interests are: software reliability, software engineering, compilers, programming languages, concurrency, formal verification, operating systems. His primary research focus at the moment is Programming for the Rest of Us - creating an environment for anybody to be able to transform the data swarming around them into useful information.',
        },
      ],
    ],
  },
  '106-fost-intro-to-gemstone-s': {
    title: 'Intro to GemStone/S',
    videoId: 'NGMxjtOl8oA',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/01-Monday/1530-1600%20GemStone/2016-08-22-g-ESUG-Objects-and-Classes-in-GemStone.pdf',
    abstractParagraphs: [
      [
        {
          text: 'What is GemStone/S and how does it compare to other Smalltalks? This talk is intended to introduce you to a system that combines an ANSI-compliant Smalltalk application server with a full-featured multi-user database. In particular, because of the multi-user nature of the system, GemStone/S has implemented namespaces as well as class/object versioning. How this works presents interesting technical challenges.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'As a junior-high student in 1971, James discovered the local university’s computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk bigot. James is Director of Operations for GemTalk Systems and is a passionate advocate for GemStone and all things Smalltalk.',
        },
      ],
    ],
  },
  '201-okee-va-smalltalk-product-update-and-roadmap': {
    title: 'VA Smalltalk Product Update and Roadmap',
    videoId: '7a3GUi2rIw4',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/0900-0945%20VA%20Smalltalk%20update/2016-08-23-a-VA-%20Smalltalk-Update-ESUG2016.pdf',
    abstractParagraphs: [
      [
        {
          text: "VA Smalltalk continues to evolve, and I'm going to share the current state of this evolution. During this last year, we have all been diligently refreshing product features. I will have some exciting new capabilities to show together with the “Roadmap to the Future” for VA Smalltalk.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I have been developing software for almost 50 years. I joined the original IBM Smalltalk prototype team in 1990 and was a founding member of the IBM VisualAge Smalltalk development team. I was Team Lead and Chief Architect of IBM VisualAge Smalltalk from 1997 to 2007. In February 2007, I joined Instantiations to lead the VA Smalltalk development team. I am currently the CTO and Principal Smalltalk Architect focusing on future product architecture and development. I live in Durham, NC and work in Raleigh, NC.',
        },
      ],
    ],
  },
  '202-hilt-new-native-windows-ui-possibilities': {
    title:
      'New Native Windows UI possibilities in Next Generation Cincom Smalltalk ObjectStudio',
    videoId: 'YwR_tXJ35w8',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/0945-1030%20New%20native%20windows%20Objects%20studio/GUI%20Features.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This presentation will demonstrate several of the modern native Windows user interface capabilities that are now part of Cincom Smalltalk using ObjectStudio’s all Smalltalk Next Generation UI. Andreas will demonstrate the new workspace for Cincom Smalltalk ObjectStudio, manipulation of the window screenshots shown in the Windows taskbar, and other examples that display the power of having full Windows API control from Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andreas Hiltner is currently the Lead VM Engineer for Cincom ObjectStudio, in addition to having a hand in most aspects of base image and database development. He works from home near Nuremberg, Germany, where he just recently returned after spending five years with his family in the US at Cincom’s headquarters in Cincinnati, Ohio.',
        },
      ],
      [
        {
          text: 'Along with many contributions to ObjectStudio over the years, he was the project lead in Cincom’s development of the current 8.x versions of ObjectStudio, based on Cincom® VisualWorks®. He was also the Lead Engineer for the Next Generation UI Project. Andreas is a seasoned architect who has specialized in ObjectStudio for more than 15 years. In his years of working with Cincom he has had the opportunity to assist key Cincom Smalltalk™ users worldwide, including one of the world’s top five financial institutions, and several government agencies.',
        },
      ],
    ],
  },
  '203-pass-iceberg-bringing-next-generation-source-versioning': {
    title: 'Iceberg: bringing next generation source versioning to Pharo',
    videoId: 'DGgzdOLBx9c',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1100-1130%20Iceberg/Iceberg.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Monticello is a simple but powerful distributed versioning system that has been the default code versioning system for several flavors of Smalltalk for around 20 years. In the past decade, newer distributing versioning systems such as Git and Mercurial have become outrageously popular and, although Monticello still has lots of fans, there is an increasing consensus in the community about the convenience of taking advantage of those modern versioning systems. While there exist a few tools that allow to commit Smalltalk code into such code repositories (most frequently: git), none of them has reached the maturity to replace Monticello. In this talk I will present Iceberg, a git integration Pharo which is designed for Monticello-lovers that do not want to get immerse in the (sometimes needless) complexities of git, but at the same time tries to allow git-lovers to use the full power of the tool, getting rid of Monticello limitations. The final aim of Iceberg is to become the default repository for Pharo-core, allowing for smoother and faster integration of contributions, as well as better branch and version management.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Nicolás Passerini is currently an Software Engineer in RMOD group in INRIA. Before that he has been a teacher and researcher at the University of Quilmes, University of San Martín and Technological University, in Argentina. He has worked as software engineer for almost 20 years, in several languages and environments, and has a broad experience in tools and methodologies in fields such as software configuration management, continuous integration and continuous delivery.',
        },
      ],
    ],
  },
  '204-tymc-stories-about-renraku-the-new-quality-model-of-pharo': {
    title: 'Stories About Renraku — the new Quality Model of Pharo',
    videoId: 'K4rMfQ_bQuI',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1130-1200%20Renraku/2016-08-23-x-ESUG-Uko.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Earlier this year Pharo 5 was released with QualityAssistant on board. However the live quality feedback in the code browser is just the tip of the iceberg. The main value comes from Renraku — a quality model that was forged during the last two years based on the requirements of quality tools. One cannot simply “show” Renraku as it is just a meta-model with a set of handy functions. And I will never allow myself to bore audience by presenting dry specifications. Luckily I have enough stories that accumulated during the development to unveil Renraku by telling about the challenges and solutions that shaped Pharo’s quality model.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm a Ph.D. student at the University of Bern in the Institute of Informatics. I am working under the supervision of Prof. Dr. Oscar Nierstrasz, in the Software Composition Group. My main topic is software quality especially the tools that helps developers to deal with the quality of code and rules that work behind the stage. For the last couple of years I was doing my Ph.D. studies in Lugano. In the past I worked as a network administrator at ISP, Java and Ruby developer in two software companies and ran a freelance web development team. Now I am Pharo evangelist, and also I promote collaboration with outer world in Ukrainian universities where I am originally from.",
        },
      ],
    ],
  },
  '205-berm-security-with-va-smalltalk': {
    title: 'Security with VA Smalltalk',
    videoId: 'RCjS2SuiGZM',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1200-1230%20Security%20with%20VAST/2016-08-23-IWST-a1-Security%20With%20VA%20Smalltalk-ESUG2016.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In response to customer demand, Instantiations has continued to enhance the SSL/TLS and Cryptographic libraries for the next release of VA Smalltalk. In this talk, I will provide a brief overview of the design of these libraries, as well as the tools they provide to help our customers build modern secure software. We have added support for the latest OpenSSL 1.1.0 and with it, some great new features which I will cover, as well.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Before joining Instantiations in May of 2011, Seth spent 10 years developing software for the U.S. government. During this time he worked in a variety of domains to include stochastic simulation, operations research, grid computing and link analysis. Seth is currently the Vice President of Engineering at Instantiations focusing on product development of VA Smalltalk. He has a B.S. in Computer Science and an M.S. in Software Engineering.',
        },
      ],
    ],
  },
  '206-ferr-parallelism-with-opencl-in-bee-smalltalk': {
    title: 'Parallelism with OpenCL in Bee Smalltalk',
    videoId: 'QlpbPYNAO90',
    abstractParagraphs: [
      [
        {
          text: 'OpenCL is an open, free standard for parallel programming consisting of an API, a cross-platform intermediate language and the specification of a computing environment. Besides graphical applications, it can be used to accelerate computations by means of GPUs. We have built an object model in Bee that uses OpenCL and allows us to run algorithms in parallel, regardless of the platform of the final user. We present a specific application for the PetroVR suite to compute Monte Carlo statistics indicators.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Carlos E. Ferro has worked as Senior Developer since 2005 in PetroVR, developing and maintaining a tool suite for business simulation and decision support in the Oil&Gas industry. He works there under Leandro Caniglia's leadership, and the team also develops the Bee Smalltalk platform. Previously, he was a Smalltalk developer for InfOil (information services for petroleum companies) and Superintendencia de Seguros de la Nación (Argentine national insurance oversight board). He has a degree in Computer Science at the University of Buenos Aires where he was teaching assistant for 8 years in several courses - mainly Object Oriented Programming with Professor Máximo Prieto. From 1991 to 2000 he also worked on his own as software developer for several small and medium-sized companies.",
        },
      ],
    ],
  },
  '207-salg-woden-2-developing-a-modern-3d-graphics-engine': {
    title: 'Woden 2: Developing a modern 3D graphics engine in Smalltalk',
    videoId: 'fnPv7jtVY8U',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1400-1500%20Woden2/woden%202.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Developing a 3D graphics engine is hard. A 3D graphics engine has to be fast and has to be very flexible for being used in multiples projects. By writing a graphics engine in Smalltalk, we gain a huge flexibility for free. However, Smalltalk is not a fast programming language as C++. Newer low-level graphics APIs such as Vulkan, Direct3D 12 and Metal allows to communicate very fast with the graphics card by mapping memory buffers present in the graphics processing unit in the CPU address space. For Woden 2, we extended Smalltalk to get more performance in some critical sections, such as the math library. With these extensions we are able to write directly to the graphics card memory and to avoid marshalling/unmarshalling overhead. We made an abstraction layer for low-level graphics APIs (Vulkan, Direct3D 12 and Metal) in C that we are calling via FFI. For programming the GPU, we made a custom shader language with a compiler written in Smalltalk. This custom shader language can be compiled into graphics API specific shader languages for being executed by the GPU. This talk is about the challenges of the new architecture behind Woden 2, and about building an integrated environment for 3D graphics software development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Ronie Salgado is the main architect behind Woden, a 3D graphics engine that won the third place in ESUG 2014, 11th innovation technology awards.',
        },
      ],
    ],
  },
  '208-cava-bloc-a-graphical-user-interface-for-the-future': {
    title: 'Bloc: a graphical user interface for the future',
    videoId: '5Txf774hLKY',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1500-1530%20Bloc/Bloc.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Bloc is a new graphical user interface framework for Pharo. It currently spawns three layers: - Widget set provided by Brick including a flexible styling framework. - Basic visual objects and event management. - Vector Graphics provided by Athens/Cairo and Sparta/Moz2D canvases.',
        },
      ],
      [
        {
          text: 'We layout the current state and provide an outlook of future steps.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Glenn Cavarlé is a PhD student at the University of Brest (France). He is working under the supervision of Prof. Alain Plantec, at Lab-STICC. His main research interests lie in the area of Model-Driven Engineering with a focus on dynamic environments for software prototyping. His specific research goals include GUI prototyping and software assessment in the context of multi-platform development. For three years, he is also a lead software engineer at Diazol, a freelance developer and a contributor to Pharo.',
        },
      ],
      [
        {
          text: 'Aliaksei Syrel is a student at the University of Bern in the Software Composition Group and a member of the GT Team (http://gt.moosetechnology.org). His interests are software engineering and UX design. He is also a contributor to Pharo (http://pharo.org), a live, Smalltalk-inspired programming language and environment, and Moose (http://moosetechnology.org), a platform for software and data analysis.',
        },
      ],
    ],
  },
  '209-dals-talking-about-bugs-with-bugs': {
    title: 'Talking about bugs with bugs',
    videoId: 'XZR8qpZhzNg',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/02-Tuesday/1600-1630%20Talkin%20about%20bugs%20with%20bugs/tommaso%20dal%20sasso%20-%20esug2016.pdf',
    abstractParagraphs: [
      [
        {
          text: 'We present ShoreLine, a new approach to track bugs in Pharo. With ShoreLine users can report and describe errors in a program from the image, without stopping the conversation with the system. Reporting bugs is easier and faster, since you can attach any kind of information, not just text: you can easily configure the system to collect your custom data. ShoreLine allows you to access the information about defects from the image and connect together the different pieces of data, to build a knowledge graph of your system.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Tommaso Dal Sasso is a PhD student in Software Engineering at the University of Lugano, in Switzerland. He works with Professor Michele Lanza to improve the way developers describe software defects and interact with bug reports.',
        },
      ],
    ],
  },
  '210-niep-continuous-integration-and-deployment-for-smalltalk': {
    title:
      'Continuous Integration and Deployment for Smalltalk Projects - A Tutorial using GitHub, Travis CI, and Squeak',
    abstractParagraphs: [
      [
        {
          text: 'In this session, Fabio Niephaus will demonstrate how to test and deploy Smalltalk projects that are hosted on GitHub with Travis CI. For this, he will present smalltalkCI (https://github.com/hpi-swa/smalltalkCI <https://github.com/hpi-swa/smalltalkCI>), a continuous integration (CI) framework for Smalltalk, which currently supports Squeak, Pharo, and GemStone. The tutorial covers the following topics:',
        },
      ],
      [
        {
          text: '- How to set up CI testing for Smalltalk projects on GitHub - How to deploy Smalltalk images and other build artifacts - How to use smalltalkCI locally - How to contribute to smalltalkCI',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Fabio Niephaus is a graduate student from the Hasso Plattner Institute in Potsdam, Germany with interests in programming languages, virtual machines, and software architectures. He is a member of the Squeak/Smalltalk community, a core maintainer of smalltalkCI, and he currently works on the RSqueak/VM (https://github.com/HPI-SWA-Lab/RSqueak <https://github.com/HPI-SWA-Lab/RSqueak>) as part of his studies.',
        },
      ],
    ],
  },
  '301-gree-gemstone-64-product-update-and-road-map': {
    title: 'GemStone/64 product update and road map',
    videoId: 'mCdoq7P5Zkw',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/0900-0945%20GemStone%2064%20update/2016-08-24-norm-esug-2016.pdf',
    abstractParagraphs: [
      [
        {
          text: 'GemStone/64 product update and road map. A review of what\'s new in version 3.3 and a preview to what we\'re working on for version 3.4. This year, I will also start with a few slides describing what GemStone is and benefits of using it ("GemStone-101").',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Norm Green started his career in 1989 at IBM in Toronto, Canada as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build site-wide data collection system in VisualWorks and GemStone/S Smalltalk.',
        },
      ],
      [
        {
          text: 'In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. Currently, Norm lives near Portland, Oregon and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
    ],
  },
  '302-pharo-update': {
    title: 'Pharo Update',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/0945-1030%20Pharo%20update/2016-ESUG-Pharo.pdf',
  },
  '303-larc-getting-more-out-of-visualworks': {
    title: 'Getting more out of VisualWorks',
    videoId: '5DR1metKabg',
    abstractParagraphs: [
      [
        {
          text: 'VisualWorks is an industrial strength development environment. It supports the development of advanced products acting often as key assets for client business. However, as with any successful products, such successful applications often suffer from the problems of large systems developed by multiple programmers over multi-year periods: code duplication, large class bases, architectural drift, dead code, lack of domain specific rule validation.',
        },
      ],
      [
        {
          text: 'There is a definitive need for advanced tools supporting managers and project leaders but also programmers to: get more accurate views on their systems (in terms of bugs, code weight, technical debt), support to take decisions, support to extract architectural information.',
        },
      ],
      [
        {
          text: 'Synectique Inventive Analysis is a dedicated tool suite to get more out of VisualWorks applications. It offers advanced software metrics and a customizable dashboard, advanced maps (developer activities, developer responsibilities), support for architecture extraction and migration, domain specific rules, and domain extraction.',
        },
      ],
      [
        {
          text: 'Taking decisions with such advanced information allows one to take empowered decisions and prolong the life of such large applications. Inventive Analysis lets its users get more out of their large applications.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Guillaume Larcheveque is a member of the R&D team of Synectique. He was previously part of the Rmod Team (INRIA) and focused on the data modelling and software quality within the Moose platform. His main contributions to Synectique's analysis environment are dedicated visualisations and web developments. Guillaume is also involved in 2 open source projects: Artefact (PDF generation) and Telescope (dynamic data visualisations).",
        },
      ],
      [
        {
          text: "Synectique was founded in 2013 as a spin-off of INRIA, the French National Institute for Research Science. Each of the four founders, all long-term experts in the IT domain, has in-depth experience in software development and particularly the requirements and challenges that come along with the maintenance and migration process. The company's goal is to support software teams by providing highly specific tools that respond to the client's analytical problem, also taking into account the client's domain and its specific constraints.",
        },
      ],
    ],
  },
  '304-berg-the-roassal-visualization-engine': {
    title: 'The Roassal Visualization Engine',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/1130-1200%20Roassal/2016-08-24-ESUG-Roassal.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Roassal is an agile visualization engine. Roassal graphically renders objects using short and expressive Smalltalk expressions. A large set of interaction facilities are provided for a better user experience. Painting, brushing, interconnecting, zooming, drag and dropping will just make you more intimate with any arbitrary object model. Roassal is used in dozen of commercial or open source projects and is available under the MIT license. This presentation will demonstrate the latest advances of Roassal using Pharo and VisualWorks',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Assistant Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering and software quality, more specifically on code profiling, testing and data visualization. Alexandre Bergel has authored over 90 articles, published in international and peer reviewed scientific forums, including the most competitive conferences and journals in the field of software engineering. Alexandre has participated to over 85 program committees of international events. Alexandre has also a strong interest in applying his research results to industry. Several of his research prototypes have been turned into products and adopted by major companies in the semi-conductor industry and certification of critical software systems. Alexandre co-authored the book Deep Into Pharo and Agile Visualization.',
        },
      ],
    ],
  },
  '305-kott-cincom-smalltalk-protocols-new-features-and-tools': {
    title: 'Cincom Smalltalk Protocols - new features and tools',
    videoId: 'djSTkL94rgg',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/1200-1230%20Cincom%20Smalltalk%20Protocols/2016-08-24-ESUG2016-Protocols.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Jerry Kott, a Senior Software Engineer with Cincom Systems, Inc., will present a ‘Look what we have done since last year’ summary of new additions to the Protocols frameworks and components. In this talk, Jerry will introduce several new features of the AppeX web development framework: Javascript code minification, shared session support that makes it easier to write multi-page web applications with AppeX, access to third party Javascript libraries, and UserMessages framework for localization of AppeX applications. A new JSFile framework which permits a round-trip Rapid Application Development with Chrome Developer Tools will be mentioned, with a demo of the framework presented in a separate session. Jerry will revisit the AppeX-Scaffolding framework that was in preview in VisualWorks 8.1, and is now ready for a full release in the upcoming version 8.2 of VisualWorks, including a new GUI tool for automatic generation of AppeX applications from existing databases. In the realm of Security, Jerry will talk about OpenSsl support for AES+GCM encryption and related AEAD cipher suites for TLS v 1.2, the addition of Application Layer Protocol Negotiation (ALPN), the introduction of the HTTP/2 protocol implementation, and the support for LDAPS. Finally, Jerry will mention some Security protocols that have been deprecated because they are no longer considered secure.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jerry Kott has been a senior software engineer with Cincom Systems, Inc. since 2008. He is a member of the Cincom Smalltalk team responsible for network protocols, security and web application development components of the Cincom Smalltalk Foundation.',
        },
      ],
      [
        {
          text: 'Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his Masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good. Jerry’s recollection of his falling in love with Smalltalk can be summed up like this:',
        },
      ],
      [
        {
          text: 'Day one: This is weird, no source code file? Day two: This is interesting; I can inspect live objects and send messages to them! Day three: This is great! I never want to use any other language!',
        },
      ],
      [
        {
          text: 'Jerry is excited about the opportunity to return to his country of origin, to share his experiences with the Smalltalk community not far from where he lived when studying in Prague. When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He lives in Victoria, British Columbia with his wife, five chickens and approximately 120,000 bees.',
        },
      ],
    ],
  },
  '306-henr-tugrik-a-new-persistence-option-for-pharo': {
    title: 'Tugrik: A new persistence option for Pharo',
    videoId: 'YwlUdRaqTwE',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/1400-1445%20Tugrik/2016-08-24-Voyage-Tugrik.key.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Tugrik[1] is a new persistence framework for Pharo using GemStone/S 64[3] as the data base engine.',
        },
      ],
      [
        {
          text: '"GemStone/S 64 provides a distributed, server-based, multi-user, transactional Smalltalk runtime system, with the ability to partition the application between client and server"[4]',
        },
      ],
      [
        {
          text: 'As of this writing, a proof of concept for Tugrik has been implemented using a MongoTalk-style[2] API. The proof of concept includes a Voyage[5] implementation for Tugrik.',
        },
      ],
      [
        {
          text: 'While it is somewhat interesting for developers to use Tugrik to simply replace MongoDb in their Pharo applications, the work moving forward will focus on expanding the functionality of Tugrik beyond that of a simple document database, after all, GemStone/S is a fully functional Smalltalk implementation.',
        },
      ],
      [
        {
          text: 'This talk will describe the proof of concept and discuss the current state of the project.',
        },
      ],
      [
        {
          text: '[1] https://github.com/dalehenrich/Tugrik [2] https://github.com/pharo-nosql/mongotalk [3] https://gemtalksystems.com/products/gs64/ [4] https://downloads.gemtalksystems.com/docs/GemStone64/3.3.x/GS64-ProgGuide-3.3/GS64-ProgGuide-3.3.htm [5] https://github.com/dalehenrich/voyage',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Dale Henrichs is a Principal Engineer at GemTalk Systems and has been working in Smalltalk since 1985. For the last decade Dale has focused on the development and support of open source projects for both GemTalk Systems and the Smalltalk community. His contributions to the Smalltalk community include Metacello, FileTree, and the GemStone port of Seaside.',
        },
      ],
    ],
  },
  '307-lore-voyage-reloaded': {
    title:
      'Voyage Reloaded - New features and backends in the document-database',
    videoId: 'sYFAwjpCFKA',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/1445-1530%20Voyage%20Reloaded/2016-08-24-Voyage.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Voyage is an Object-Document Mapper developed since 2010 to provide a nice framework for using document-databases. This talk is an update about latest features added along with an overview of the new backend incorporated (unqlite).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano, 44 years. Programmer since ever, Full-time Smalltalker since 2007 and Pharo enthusiast since almost its every beginning, after owning his own company and spend some years teaching at different universities in Argentina, he currently leads de development of Pharo itself, at the RMoD team of INRIA (France)',
        },
      ],
    ],
  },
  '308-hilt-development-and-features-of-the-new-cincom-launcher': {
    title:
      'Development and Features of the new Cincom Smalltalk ObjectStudio Launcher',
    videoId: 'iJxAUhydgHA',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/03-Wednesday/1530-1600%20ObjectStudio%20Launcher/2016-08-24-OSTLauncher.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation Andreas will demonstrate a new launcher for Cincom Smalltalk ObjectStudio 8.8, written from the ground up in the Next Generation UI. The NG UI is a framework for a native Windows UI that is written entirely in Cincom Smalltalk, using DLLCC to connect to the Windows API.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andreas Hiltner is currently the Lead VM Engineer for Cincom ObjectStudio, in addition to having a hand in most aspects of base image and database development. He works from home near Nuremberg, Germany, where he just recently returned after spending five years with his family in the US at Cincom’s headquarters in Cincinnati, Ohio.',
        },
      ],
      [
        {
          text: 'Along with many contributions to ObjectStudio over the years, he was the project lead in Cincom’s development of the current 8.x versions of ObjectStudio, based on Cincom® VisualWorks®. He was also the Lead Engineer for the Next Generation UI Project. Andreas is a seasoned architect who has specialized in ObjectStudio for more than 15 years. In his years of working with Cincom he has had the opportunity to assist key Cincom Smalltalk™ users worldwide, including one of the world’s top five financial institutions, and several government agencies.',
        },
      ],
    ],
  },
  '401-amar-let-it-bee': {
    title: 'Let It Bee',
    videoId: 'PCfQWyetg1Q',
    abstractParagraphs: [
      [
        {
          text: "Algorithmic Composition (AC) is a well-known technic for creating music by using computers, either to assist the human composition process or to automatically generate a musical piece. Such algorithms go from stochastic processes to evolutionary systems. A particular form of AC deals with deriving music from some existing source of data, such as numbers, text, paintings. I will present some ways of deriving a music from Smalltalk code (methods, classes, projects, etc.), for which I've developed a basic composition framework, using Bee Smalltalk.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I live in Buenos Aires, Argentina. I have been devoted to Smalltalk for more than 10 years. I have used it and enjoyed it throughout my entire professional career. I am currently working at Caesar Systems, an international company of software development for the oil & gas industry.',
        },
      ],
    ],
  },
  '402-cani-out-of-the-vm-into-the-vi': {
    title: 'Out of the VM into the VI',
    videoId: 'GEIZnadi0BQ',
    abstractParagraphs: [
      [
        {
          text: 'The Bee Smalltalk project is aimed at moving functionality from the VM to the VI. In this talk I will describe some of the problems we had to solve to keep the system working in the transition so that both the VM and the VI remained consistent after such structural changes.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'President of FAST - President & CTO of Caesar Systems. A person who is vegan will save 1,100 gallons of water, 20 pounds CO2 equivalent, 30 square feet of forested land, 45 pounds of grain, and one sentient animal’s live every day.',
        },
      ],
    ],
  },
  '403-poli-mission-pharo-kernel': {
    title: 'Mission Pharo Kernel',
    videoId: 'YQD0pSb2mzw',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1000-1030%20Mission%20Pharo%20Kernel/2016-08-25-Mission-Pharo-Bootstrap-ESUG-2016.pdf',
    abstractParagraphs: [
      [
        {
          text: "The Pharo team and community have been working a lot lately to make Pharo a modular system. The mission: make Pharo a simpler system, easier to build and change. The tools: dependency analyses, refactorings, bootstrapping, modular package installation. The challenges: a circular system definition, spaghetti and legacy code, hidden dependencies. This talk presents the work around the Pharo Kernel, a minimal Pharo image that contains the necessary systems to boot and load your own packages. The Pharo Kernel is not only an image. It is also a new process to build an image. A new process to manage, validate and install packages in Pharo, to integrate issues, to build Pharo systems. In this talk you'll learn what you could expect from Pharo in the (not so far away) future.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guille Polito is research engineer at CNRS, France. Pharoer since 2010, he participates actively in the Pharo open source community since several years. He currently works on the modularization of Pharo where he does software archeology, refactoring, library rewriting and participates in the Virtual Machine development.',
        },
      ],
    ],
  },
  '404-kudr-the-road-to-remote-debugger': {
    title: 'The road to remote debugger',
    videoId: '89O_tA5g3-I',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1100-1130%20Remote%20debugger/2016-08-25-Esug2016RemoteDebugger.pdf',
    abstractParagraphs: [
      [
        {
          text: "Debugger is a tool to lively explore system behaviour and analyze it failures. Smalltalk debugger implements unique features which makes this process much more effective: editing methods on fly, restarting method execution, inspecting variables, executing scripts, forking new debuggers and much more. But debuggers in smalltalk systems are only working on local environment. Smalltalk's still lack remote development tools. In this presentation I will show how smalltalk tools could be used transparently on remote environment. I will show problems and solutions to achieve this goals. I will demonstrate debugging remote Pharo images.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Denis Kudriashov is currently working as engineer in RMOD-INRIA team on project "remote development tools". He has been working with Smalltalk around 10 years. In the past he had also worked in Russian bank using Pharo Smalltalk and Java. Nowadays, he is maintainer to several open-source projects like Mocketry, Presenty, Seamless Ghost, etc.',
        },
      ],
    ],
  },
  '405-bera-the-cog-vm-evolution': {
    title: 'The Cog VM evolution',
    videoId: 'Gi0WiIxvJ60',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1130-1200%20The%20cog%20vm%20evolution/2016-08-25-CogVMEvolution.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In 2008, the Squeak VM repository made by Dan Ingalls was forked to give birth to the high-performance Cog VM, which is now the default VM for multiple Smalltalk dialects such as Pharo, Squeak or Cuis. Since the fork, new features and performance enhancements have been introduced every year. This talk sums up all the main features and main performance tweaks that were added to the Cog VM in chronological order from 2008 to today. The focus is on the execution engine: Memory management, interpretation, JIT compilation and FFI. The talk lastly discusses the current work in-progress and short-term future work.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Clément Béra is a PhD student working on virtual machines for object oriented languages at Inria, Lille. He is now focusing on runtime optimisations for the Cog virtual machine and its Smalltalk clients.',
        },
      ],
    ],
  },
  '406-felg-hacking-rsqueak-vm': {
    title: 'Hacking RSqueak/VM: A fast binary-compatible Squeak VM with PyPy',
    videoId: '9QAQS5jcPgE',
    abstractParagraphs: [
      [
        {
          text: 'Squeak, Pharo, and other related Smalltalk dialects run on the Cog virtual machine (VM) and share an object format that is tied to the internal representation of the VM. With RSqueak/VM, we have built a fast virtual machine using the meta-tracing JIT toolchain that also powers the PyPy Python VM and that supports a variety of object formats. In the course of building this VM, we have challenged or even ignored many "common wisdoms" of VM design: For example, we do not use tagged integers and we avoid VM-level primitives in favor of their Smalltalk implementations. Our Python-based VM implementation invites experiments and in this talk, I will show some of our most recent experiments such as how to inject full Ruby support into RSqueak/VM and how to re-use binary plugins from the Cog VM for extensions that have no Smalltalk fallback code.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I am a Ph.D. student at the Hasso Plattner Institute in Potsdam. My interests are in programming languages and virtual machine design. I focus on developing language features meant to improve expressiveness and VM technologies to make sure those language features offer good performance. I am involved in the PyPy/RPython project and various dynamic language VMs built on top of it, and I am the creator of the Babelsberg project, which has spawned a family of languages that integrate constraint solving with object-oriented programming. I prototype much of my research in self-supporting development environments such as Squeak/Smalltalk and the Lively Kernel.',
        },
      ],
    ],
  },
  '407-heeg-controlling-machines-with-smalltalk-on-raspberry-pi': {
    title: 'Controlling Machines with Smalltalk on Raspberry PI',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1400-1430%20Controlling%20Machines%20with%20Smalltalk%20on%20Raspberry%20PI/Esug2016-RPi.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In 2015 Georg Heeg eK presented an exhibition sound system at ESUG. Meanwhile they applied the same technology onto machine control. The first example is a service lift which was built in 1911 powered by a crank. The crank was to be replaced by an electric cable winch. The control was implemented in Smalltalk on a Raspberry pi. The main advantage of Smalltalk as control language is abstraction over standard PLC technology.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Georg Heeg uses Smalltalk since 1983. Four years later he founded Georg Heeg eK, a Smalltalk software house. He has not yet stopped using Smalltalk.',
        },
      ],
      [
        {
          text: "Karsten uses Smalltalk and VisualWorks since 12 years, working at Georg Heeg eK. He is one of the developers of seaBreeze, created the tools to find the Bach Haus in Köthen and also worked on Dakar Testing during his diploma thesis. In his spare time, he's an Objective-C developer writing useful little tools for Mac OS X.",
        },
      ],
    ],
  },
  '408-uhna-dynacase-modeling-platform': {
    title: 'DynaCASE modeling platform',
    videoId: 'H43_FUghz7k',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1430-1500%20OpenPonk%20modeling%20platform/openponk-esug16.pdf',
    abstractParagraphs: [
      [
        {
          text: 'DynaCASE is a software and business modeling platform aimed at supporting many aspects involved in the process of software and business engineering, such as modeling, source code generation and model reengineering, validations, and more. One of our aims is to provide a platform that is not only easy to use, but also easy to extend by end-user-developers to support their specific domain needs. We will present the current state of the tool on a range of models: UML Class Diagrams in the context of Cormas — an agent-based simulation platform, OntoUML used for conceptual modeling, and BORM and DEMO for business and enterprise engineering.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I am a student at FIT CTU (Faculty of Information Technology at Czech Technical University), and also a member of CCMi (Centre for Conceptual Modelling and Implementations) — a research group concerned with software and business modeling, ontological conceptualizations, and implementation. I am also the author/main developer of DynaCASE. Apart of DynaCASE I contribute to Roassal visualization library, Spec GUI framework, and Pharo itself.',
        },
      ],
    ],
  },
  '409-poli-a-weak-pharo-story': {
    title: 'A Weak Pharo Story',
    videoId: 'nLEmAVVC6aQ',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1500-1530%20A%20weak%20phary%20story/A%20Weak%20Pharo%20Story.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Automatic garbage collection, used to free unused objects, generally provides a finalization mechanism that allows developers to execute some arbitrary code when an object was or is about to be garbage collected. This finalization mechanism, useful to free external resources, is implemented in Pharo through the usage of special weak references and a weak registry. While this finalization process was in place and working since several years, with the increase of the complexity of the Pharo IDE it demonstrated to not be sufficient. In this talk we will show some popular misconceptions of the idea of "weak" references, and how memory leaks can be (and were) created from these misconceptions. We will also show how to avoid and solve this problem, ending up in the introduction of Ephemerons in latest Pharo 6.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Guille Polito is research engineer at CNRS, France. Pharoer since 2010, he participates actively in the Pharo open source community since several years. He currently works on the modularization of Pharo where he does software archeology, refactoring, library rewriting and participates in the Virtual Machine development.',
        },
      ],
    ],
  },
  '410-ross-more-xp-rience': {
    title: 'More XP-rience',
    videoId: 'DoFrzbpECCY',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1600-1630%20more%20xp-rience/MoreXPrience%20-%20Display.pdf',
    abstractParagraphs: [
      [
        {
          text: "In the 15 years since I last presented my 'XP-rience' of eXtreme Programming to ESUG, I've had a lot more experience: of working in partly and wholly not-colocated teams; of how I and others actually think while doing XP; of the disadvantages and positive advantages of non-colocation; of what is most used and most needed in tools. This talk will let you (and me) discover if I've learned anything in the last decade and a half.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Niall ended his undergraduate career with two intellectual interests: computing and the theory of relativity. A quick check of how much commercial work was available to relativity and gravitation theorists made him decide to do academic research in that field and then seek a commercial job in computing, rather than the other way round. Niall started working commercially in IT in 1985. At first, he was assigned to designing and implementing software engineering process improvements; only after three years did he begin significant writing and delivery of commercial software. This experience taught him that intelligent people can form foolish ideas about software engineering if they have not worked at the coding coalface of real, large commercial projects.',
        },
      ],
      [
        {
          text: 'Learning from this, Niall spent the nineties working on software to manage complex, rapidly changing telecoms networks. A side effect of this work was that it taught him much about how scale and rate of change affects software. Early in the nineties, he discovered Smalltalk. The more he used it the more he came to recognize its power in this area. This perception was strengthened when he spent a year delivering a telecoms management system in Java.',
        },
      ],
      [
        {
          text: 'At the end of the decade, Niall formed his own software company to offer consultancy in meta-data system design, Smalltalk and agile methods. Over the next decade, he worked on a variety of meta-data-driven systems, mostly in the financial domain.',
        },
      ],
      [
        {
          text: 'Niall joined the Cincom Smalltalk Engineering Team nearly eight years ago. His first task was to lead the team that does the weekly VisualWorks builds - an experience he likened to doing brain surgery on yourself every Friday (e.g., "Prepare new memory for insertion, remove old memory … uh, I can\'t remember what I was going to do next!").',
        },
      ],
      [
        {
          text: 'Currently, he leads the Glorp and Database team. He also leads the Custom Refactoring open-source project, which he co-founded, and the SUnit open-source project.',
        },
      ],
    ],
  },
  '411-heeg-seamless-object-oriented-cms-system': {
    title: 'seamless – Object Oriented CMS System',
    videoId: 'm_DmvTfTS64',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/04-Thursday/1630-1700%20seamless-object%20oriented%20cms%20system/Esug2016-Seamless.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Since 1992 HTML-Websites are available on the Internet. But HTML does not scale, CMS became available. Classical CMS do not scale to flexibility. Thus Georg Heeg eK uses a typical Smalltalk approach: Take Seaside and seaBreeze and Objects and build an Object Oriented CMS system.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Georg Heeg uses Smalltalk since 1983. Four years later he founded Georg Heeg eK, a Smalltalk software house. He has not yet stopped using Smalltalk.',
        },
      ],
      [
        {
          text: "Karsten uses Smalltalk and VisualWorks since 12 years, working at Georg Heeg eK. He is one of the developers of seaBreeze, created the tools to find the Bach Haus in Köthen and also worked on Dakar Testing during his diploma thesis. In his spare time, he's an Objective-C developer writing useful little tools for Mac OS X.",
        },
      ],
    ],
  },
  '501-pillar-one-language-for-all-supports': {
    title: 'Pillar: one language for all supports',
    videoId: 'gcnK5B7tfC0',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/05-Friday/0900-0930%20pillar/presentation.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Pillar is a markdown extracted from the original Pier wiki. Markdown can be used to generate books, booklets, webpages, slides,.... This presentation will present the new architecture of Pillar',
        },
      ],
    ],
  },
  '502-denk-why-is-worse-better-the-power-of-feedback-loops': {
    title: 'Why is worse better? or: The Power of Feedback Loops',
    videoId: 'LRFLdWG24Mk',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/05-Friday/0930-1000%20feedback%20loops/FeedbackLoops.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Did you ever wonder why in-complete, bad solutions are successful while that "perfect" project (which will be finished very soon now!) never had any impact?',
        },
      ],
      [
        {
          text: 'In this talk I will discuss the power and properties of feedback loops and how they relate to growth and success of software projects.',
        },
      ],
      [
        {
          text: 'In a way this talk can be seen Part II (or an iteration?) of the "Nomads do not build Cathedrals” talk held at ESUG 2014.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher (CR1, with tenure) at INRIA Lille - Nord Europe and co-founder of 2Denker GmbH. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years. Marcus Denker received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004. He is a member of ACM, GI and a board-member of ESUG.',
        },
      ],
    ],
  },
  '503-kott-rapid-application-development-with-appex': {
    title:
      'Rapid Application Development with AppeX and Google Chrome Developer Tools',
    videoId: '1yqaY0wqhWY',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/05-Friday/1000-1030%20App%20with%20AppeX/2016-07-ESUG2016-RoundTripDevelopment.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Jerry Kott, a Senior Software Engineer with Cincom Systems, Inc., will present JSFile - a mini-framework that allows rapid web application development with code updates made in Chrome Developer Tools applied to the AppeX Javascript code in the VisualWorks IDE. He will show the steps that allow a developer to link the Chrome Network Resources to those on the local development machine’s file system, and edit those files right in the web browser. When a Javascript file is saved from the Chrome debugger, that change is automatically reflected in the AppeX development image, where it can be further refined, published to a repository, and so on. This provides development experience similar to what Smalltalkers love - the ability to apply code changes without the need to restart an application, and a seamless integration between the Google Chrome web browser and the VisualWorks development environments.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jerry Kott has been a senior software engineer with Cincom Systems, Inc. since 2008. He is a member of the Cincom Smalltalk team responsible for network protocols, security and web application development components of the Cincom Smalltalk Foundation.',
        },
      ],
      [
        {
          text: 'Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his Masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good. Jerry’s recollection of his falling in love with Smalltalk can be summed up like this:',
        },
      ],
      [
        {
          text: 'Day one: This is weird, no source code file? Day two: This is interesting; I can inspect live objects and send messages to them! Day three: This is great! I never want to use any other language!',
        },
      ],
      [
        {
          text: 'Jerry is excited about the opportunity to return to his country of origin, to share his experiences with the Smalltalk community not far from where he lived when studying in Prague. When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He lives in Victoria, British Columbia with his wife, five chickens and approximately 120,000 bees.',
        },
      ],
    ],
  },
  '504-mccl-replicated-service-objects': {
    title:
      'Replicated Service Objects -- A Strategy for Distributed Applications',
    videoId: '_MtwXqYsBD0',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/05-Friday/1100-1145%20Replicated%20Service%20Objects/ReplicatedServiceObjects-Final.pdf',
    abstractParagraphs: [
      [
        {
          text: "Early in the history of distributed Smalltalk applications, designers built systems that provided transparent distribution. This enabled distributed applications to be written almost as if they were on a single machine. After the explosion of the Internet in the late '90s, it was widely recognized that this approach led to applications that did not perform well -- application developers needed to be aware of and design around communication latency. One solution to this problem is Replicated Service Objects, an architecture for distributed Smalltalk applications that makes it easy to minimize the impact of network latency.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin has been interested in Smalltalk since he first heard about it in 1975. After a frustrating ten-year wait he finally got his hands on a running Smalltalk system and hasn't let go since. As a senior engineer working on GemStone Smalltalk products at GemTalk Systems, he leads a team that designs and implements a distributed object system that acts as a bridge between a Smalltalk client and a GemStone Smalltalk server. In his spare time, he works on Mist (a Smalltalk-like language with improved modularity and security and no virtual machine) and does a lot of contra dancing. Lately, he's been working on remodeling an old house with attached former church which will become his home with built-in dance hall.",
        },
      ],
    ],
  },
  '505-lore-unifiedffi-a-common-language-for-the-outside-world': {
    title: 'UnifiedFFI - A common language for the outside world',
    videoId: '418eEvCiepU',
    presentationUrl:
      'https://archive.esug.org/ESUG2016/05-Friday/1145-1230%20UnifiedFFI/ESUG2016%20-%20UFFI.pdf',
    abstractParagraphs: [
      [
        {
          text: 'UnifiedFFI is a new foreign function interface who aims to reunite the best of all previous implementations into a single common API. Developed for the new SpurVM, it keeps the simplicity of NativeBoost function calls syntax but with the backbone of the more easy to maintain FFIPlugin.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano, 44 years. Programmer since ever, Full-time Smalltalker since 2007 and Pharo enthusiast since almost its every beginning, after owning his own company and spend some years teaching at different universities in Argentina, he currently leads de development of Pharo itself, at the RMoD team of INRIA (France)',
        },
      ],
    ],
  },
};
