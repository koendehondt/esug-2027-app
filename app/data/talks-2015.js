// Talk titles, abstracts, and speaker bios for the ESUG 2015 Archive's
// Conference Program page.
//
// ESUG 2015 predates the archive.esug.org agenda-page organization used
// from 2022 onward, so this data was assembled the same way as ESUG
// 2016-2018:
//
// - title/abstractParagraphs/bioParagraphs: sourced directly from the
//   conference's public Google Calendar (Main Track .ics feed, calendar id
//   qajq51tk7t22h6u87dp01b6ncc@group.calendar.google.com, linked directly
//   by Koen), whose DESCRIPTION field carries each talk's speaker(s),
//   abstract, and bio inline. Light copy-edits only (obvious typos fixed,
//   per-field labels like "First Name:"/"Last Name:"/"Email:"/"Title:"/
//   "Type:" removed, a stray unrelated sentence about veganism dropped
//   from the end of Leandro Caniglia's bio, trademark symbols dropped).
//   'Welcome' and 'Smalltalk/X: Test Automation' had no DESCRIPTION at all
//   -- see program-2015.js's header comment and below for how their
//   speakers were confirmed instead.
// - `videoId`: matched from the conference's YouTube playlist
//   (youtube.com/playlist?list=PLJ5nSnWzQXi9rnk77bTf-juPt5I6-ered, 81
//   entries) by title, since most sessions were split across 2-3 videos
//   there -- the first part is used throughout. 'Welcome''s speaker
//   (Stéphane Ducasse) and 'Smalltalk/X: Test Automation''s speaker (Claus
//   Gittinger) were both read directly off their video's own title/
//   description, since neither has a calendar DESCRIPTION.
// - `presentationUrl`: ESUG 2015 *does* have a real slide archive at
//   https://archive.esug.org/ESUG2015/ (day folders, each with a further
//   "<time> <topic>" subfolder per session, same layout as ESUG 2016),
//   but only 14 of the 33 catalogued talks have a subfolder there at all
//   (archive.esug.org/ESUG2015/MISSING.txt lists several more as known-
//   missing recordings/slides) -- matched to a talk by title, not by the
//   subfolder's day/time (see program-2015.js's header comment for why).
//
// Presenter names come from the schedule (app/data/program-2015.js)
// rather than being duplicated here.
//
// Each paragraph is an array of "runs" -- plain text segments, matching
// the shape used by the other talks-YYYY.js files (no inline links were
// carried over from the source calendar text for this year).
export default {
  '101-duca-welcome-2015': {
    title: 'Welcome',
    videoId: 'UCxq1rYcIH4',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/1%20monday/1000-1030%20welcome/01-2015-ESUG-Welcome.pdf',
  },
  '102-gree-gemstone-64-update': {
    title: 'GemStone/64 Update',
    videoId: 'tY-XlttlvcI',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/1%20monday/1030-1100%20Gemstone/02GemStone%3A64%20Update.pdf',
    abstractParagraphs: [[{ text: 'GemStone/64 Update' }]],
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
  '103-fabr-live-robot-programming': {
    title: 'Live Robot Programming',
    videoId: '0CYMkxV919s',
    abstractParagraphs: [
      [
        {
          text: 'When thinking about robotics, the first thing that comes to mind is impressive hardware. The main problems to solve here are difficulties in building it and managing its low level functionalities, e.g. making a robot that can walk. But the robot only starts to do interesting things when you build on top of these functionalities, e.g. make it walk to a door and open it. This is almost purely a software challenge and sadly roboticists are stuck in the nineties when it comes to software development. They have an incredibly static way of programming robot behaviors. In our research we are pushing towards the total opposite: live programming of a robot, while it is running.',
        },
      ],
      [
        {
          text: 'In this talk I will present our language, called Live Robot Programming (LRP), built on Pharo and making heavy use of Roassal for visualizations. I will show how LRP allows for the creation and evolution of robotic behaviors on-the-fly and how you can use it to play with robots. I will demonstrate LRP with a simple robot behavior, and on a real robot if I can get it to board the plane with me.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Johan Fabry is an assistant professor at the computer science department (DCC) of the University of Chile. His research interests are software engineering, more specifically language engineering and how advanced language features can be made available to the common developer. He is currently focused on software engineering for robotics, looking at how robot software development can finally be brought into the 21st century.',
        },
      ],
    ],
  },
  '104-berg-rethinking-data-visualization-and-charting': {
    title: 'Rethinking Data Visualization and Charting with Roassal',
    videoId: 'Zc7CgAZyeUo',
    abstractParagraphs: [
      [
        {
          text: 'Roassal is an agile visualization engine. Roassal graphically renders objects using short and expressive Smalltalk expressions. A large set of interaction facilities are provided for a better user experience. Painting, brushing, interconnecting, zooming, drag and dropping will just make you more intimate with any arbitrary object model. Roassal is used in dozen of commercial or open source projects. Roassal is available under the MIT License for VisualWorks, VASmalltalk, Pharo and Amber.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Alexandre Bergel is Assistant Professor and researcher at the University of Chile. Alexandre Bergel and his collaborators carry out research in software engineering and software quality, more specifically on code profiling, testing and data visualization. Alexandre Bergel has authored over 60 articles, published in international and peer reviewed scientific forums, including the most competitive conferences and journals in the field of software engineering. Alexandre has participated to over 50 program committees of international events. Alexandre has also a strong interest in applying his research results to industry. Several of his research prototypes have been turned into products and adopted by major companies in the semi-conductor industry and certification of critical software systems. Alexandre co-authored the book Deep Into Pharo.',
        },
      ],
    ],
  },
  '105-mccl-concurrency-in-smalltalk-beyond-threads': {
    title: 'Concurrency in Smalltalk -- Beyond Threads',
    videoId: 'MCm9A7nHTCw',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/1%20monday/1445-1530%20Concurrency%20in%20Smalltalk/05-ConcurrencyAndE.pdf',
    abstractParagraphs: [
      [
        {
          text: "Smalltalk relies on threads to provide concurrency. However, threads are very difficult to use correctly except in the simplest cases. One interesting alternative is that used by the E language. This talk explores E's design and how it might inspire alternative concurrency models in Smalltalk.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin has been interested in Smalltalk since he first heard about it in 1975. After a frustrating ten-year wait he finally got his hands on a running Smalltalk system and hasn't let go since. As a senior engineer working on GemStone Smalltalk products at GemTalk Systems, he leads a team that designs and implements a distributed object system that acts as a bridge between a Smalltalk client and a GemStone Smalltalk server. In his spare time, he works on Mist (a Smalltalk-like language with improved modularity and security and no virtual machine) and does a lot of contra dancing. Lately, he's been working on remodeling an old house and church which will become his home with built-in dance hall.",
        },
      ],
    ],
  },
  '201-duca-pharo': {
    title: 'Pharo',
    videoId: 'RwzwCMLFIJ8',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/2%20tuesday/0900-1030%20Pharo/01-2015-ESUG-Pharo.pdf',
    abstractParagraphs: [
      [
        {
          text: 'This talk will present some exciting news about Pharo such as the birth of PharoPro a support service for Pharo. We will cover the new tools of Pharo 40 and we will show the current development effort such as event touch, new graphical kernel.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stephane is directeur de recherche at Inria. He has more than 16 years of experience in software maintenance. He leads the RMoD (http://rmod.lille.inria.fr) team. He is expert in two domains: object-oriented language design and reengineering. He worked on traits, composable groups of methods, and this work got some impact. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala, Fortress of SUN Microsystems. He is also expert on software quality, program understanding, program visualizations, reengineering and metamodeling. He is one of the developer of Moose, an open-source software analysis platform http://www.moosetechnology.org/. He created http://www.synectique.eu/ a company building dedicated tools for advanced software analysis.',
        },
      ],
    ],
  },
  '202-hilt-windows-systems-tools-in-smalltalk': {
    title: 'Windows Systems Tools in Smalltalk',
    videoId: '-8_EerbEGWc',
    abstractParagraphs: [
      [
        {
          text: 'In this session, Andreas Hiltner, Lead Software Engineer from Cincom Systems, Inc., will be accessing Windows internal information using Cincom Smalltalk, as well as building system level tools that help with testing and debugging.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Andreas Hiltner is currently a Lead Software Engineer for Cincom ObjectStudio, and has a hand in many aspects of VM, base image and database development. He works from home near Nuremberg, Germany, where he just recently returned after spending five years with his family in the US at Cincom's headquarters in Cincinnati, Ohio.",
        },
      ],
      [
        {
          text: "Along with many contributions to ObjectStudio over the years, he was the project lead in Cincom's development of the current 8.x versions of ObjectStudio, built on the Cincom Smalltalk Foundation. Andreas is a seasoned architect who has specialized in ObjectStudio for more than 15 years. In his years of working with Cincom, he has had the opportunity to assist key Cincom Smalltalk users worldwide including one of the world's top five financial institutions, and several government agencies. Andreas also accepted the responsibility of being the technical lead for ObjectStudio's Next Generation GUI Project.",
        },
      ],
    ],
  },
  '203-denk-reflectivity-behavioral-reflection-in-pharo': {
    title: 'Reflectivity: Behavioral Reflection in Pharo',
    videoId: 'Ik539CtjtTI',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present Reflectivity, a framework for behavioral reflection. Reflectivity was implemented some years ago as a research prototype but now has been re-implemented in Pharo5 in a practically usable way.',
        },
      ],
      [
        {
          text: 'This talk will present the ideas behind Reflectivity and show how to use by presenting examples. I will explain the implementation strategy used and discuss future improvements.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher at INRIA Lille - Nord Europe. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years and the co-founder of 2Denker/Cologne/Germany. Marcus received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004.',
        },
      ],
    ],
  },
  '204-denk-first-class-variables-in-pharo': {
    title: 'First class Variables in Pharo',
    videoId: 'hEWKV9eWAGY',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the first class variables in Pharo: With Slots, Class, and Global variables, we now model variables as objects. These meta-objects provide a new reflective API for variables and in addition, and allow the programmer to introduce new kinds of variables.',
        },
      ],
      [
        {
          text: 'This talk will present the ideas behind and show how to use first class variables by presenting examples. It will present how variable meta objects simplify reflecting on variables in combination with Reflectivity.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Marcus Denker is a permanent researcher at INRIA Lille - Nord Europe. Before, he was a postdoc at the PLEIAD lab/DCC University of Chile and the Software Composition Group, University of Bern. His research focuses on reflection and meta-programming for dynamic languages. He is an active participant in the Squeak and Pharo open source communities for many years and the co-founder of 2Denker/Cologne/Germany. Marcus received a PhD in Computer Science from the University of Bern/Switzerland in 2008 and a Dipl.-Inform. (MSc) from the University of Karlsruhe/Germany in 2004.',
        },
      ],
    ],
  },
  '205-cani-homological-smalltalk-algebra': {
    title: 'Homological Smalltalk Algebra',
    videoId: 'YErLZMn1TbQ',
    abstractParagraphs: [
      [
        {
          text: "In this talk I will show how I've used Smalltalk to support advanced scientific research in Homological Algebra in a project that started in 2009 and was revamped this year.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'President of FAST (Fundación Argentina de Smalltalk) - President and CTO of Caesar Systems.',
        },
      ],
    ],
  },
  '206-shin-hardware-assisted-liveness-on-reconfigurable': {
    title: 'Hardware-Assisted Liveness on Reconfigurable Silicon',
    videoId: '7qr8dLn4NeM',
    abstractParagraphs: [
      [
        {
          text: 'We will explore an open-source soft core and modify it to perform analysis of otherwise-invisible processor state, affording a view of the running Smalltalk VM from an angle different from the traditional debugging perspective.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Boris has a Master\'s degree in Theoretical Physics from MSU "M. V. Lomonosov". He has made a number of fundamental contributions to Smalltalk through his work at major Smalltalk companies such as The Object People, OTI and Cincom. Boris is the co-author of the VisualAge for Smalltalk Handbook published by IBM. He is one of the Founding Committers of Eclipse. He is also the named inventor on patents relating to a wide range of fields, from template-driven code generation and database structures for information retrieval, to music notation for mediaeval chant. Boris currently works at LabWare.',
        },
      ],
    ],
  },
  '207-hilt-cincom-smalltalk-on-a-tablet': {
    title: 'Cincom Smalltalk on a Tablet',
    videoId: 'ZLjPeW26biQ',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/2%20tuesday/1445-1500%20Cincom%20Smalltalk%20on%20a%20Tablet/CST%20on%20a%20Tablet.pdf',
    abstractParagraphs: [
      [
        {
          text: 'In this teaching pearl, Andreas Hiltner, Lead Software Engineer from Cincom Systems, Inc., will use Cincom Smalltalk on a tablet, demonstrating the full use of touchscreen gestures in using the software.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Andreas Hiltner is currently a Lead Software Engineer for Cincom ObjectStudio, and has a hand in many aspects of VM, base image and database development. He works from home near Nuremberg, Germany, where he just recently returned after spending five years with his family in the US at Cincom's headquarters in Cincinnati, Ohio.",
        },
      ],
      [
        {
          text: "Along with many contributions to ObjectStudio over the years, he was the project lead in Cincom's development of the current 8.x versions of ObjectStudio, built on the Cincom Smalltalk Foundation. Andreas is a seasoned architect who has specialized in ObjectStudio for more than 15 years. In his years of working with Cincom, he has had the opportunity to assist key Cincom Smalltalk users worldwide including one of the world's top five financial institutions, and several government agencies. Andreas also accepted the responsibility of being the technical lead for ObjectStudio's Next Generation GUI Project.",
        },
      ],
    ],
  },
  '208-bald-querier-simple-relational-database-access': {
    title: 'Querier – simple relational database access',
    videoId: 'c2yhd8BjFjU',
    abstractParagraphs: [
      [
        {
          text: 'Querier is a library which simplifies the usage of relational databases in Pharo. It directly exposes tables and rows, there is no ORM layer. Table querying uses a collection-like interface, queries are built transparently and executed lazily. Simple and effective access to related tables is one of the key features of Querier.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Michal Balda is a web developer, coming from the Czech Technical University in Prague. He's currently using Pharo and Seaside to build a commercial web application in a university research project.",
        },
      ],
    ],
  },
  '209-guhl-compliance-of-soap-xml-standards': {
    title:
      'Compliance of SOAP/XML standards does not release from extensive testing',
    abstractParagraphs: [
      [
        {
          text: 'GLOBALFOUNDRIES has decided to move their Equipment Interface (EI) software from Cincom VisualWorks 7.5 to 7.10 to stay on a supported version. VisualWorks 7.10 contains major harmonization to SOAP/XML standards which is appreciated in general.',
        },
      ],
      [
        {
          text: 'With the talk on the International Smalltalk Joint Conference we want to report about our experiences and difficulties with evaluating and testing SOAP/XML interface changes raised by the VisualWorks migration in a highly complex system environment that extensively uses SOAP/XML communication.',
        },
      ],
      [
        {
          text: 'We want to show that the compliance to SOAP/XML standards is important but does not release from extensive testing. The policy to use standard SOAP/XML does not ensure that every application implements correctly and fully compliant with the standards.',
        },
      ],
      [
        {
          text: 'In the end the usage of SOAP/XML standard ensures the manageability of a complex environment but is no instrument to reduce testing effort.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Holger Guhl is with Georg Heeg e.K. since 1993. He is Senior Consultant and Certified Scrum Master, and has been on development and consulting projects since 1995. During long time partnership he was part of the development team at GLOBALFOUNDRIES (former AMD). A significant work field was the adoption and maintenance of SOAP/XML features. GLOBALFOUNDRIES has decided to move their Equipment Interface (EI) software from Cincom VisualWorks 7.5 to 7.10, and again Holger joined the team.',
        },
      ],
    ],
  },
  '210-lore-the-pharo-evolution': {
    title: 'The Pharo Evolution',
    videoId: 'yzss4mzwAAo',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/2%20tuesday/1615-1645%20Pharo%20Evolution/ESUG2015-PharoEvolution.pdf',
    abstractParagraphs: [
      [
        {
          text: 'How will Pharo look in releases 5, 6 and even 7? This talk will show the kitchen of Pharo, what we are working on and what we are planning for the future (and how we plan to achieve them).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano, 43 years old. He studied -and let unfinished- Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object oriented technologies (Delphi, C++, Java), where he scaled from "Junior Programmer" to "Senior Architect". On 2007 he and two friends began a new start-up, Smallworks, an enterprise for agile developments, centered on Smalltalk. Currently, he is working in the RMoD INRIA team in Lille, France, as core developer for Pharo.',
        },
      ],
    ],
  },
  '301-thom-cincom-smalltalk-roadmap-2015': {
    title: 'Cincom Smalltalk Roadmap 2015',
    videoId: 'DXtREAUqW9o',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation, Arden Thomas, the Product Manager for Cincom Smalltalk, will discuss recent, current, and future product changes and developments.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Arden Thomas started using Smalltalk in 1986, when he was researching and exploring better ways to do software development. He found it! Smalltalk and object-oriented were such a profoundly improved approach to software development, that he made a full commitment to using Smalltalk. Arden used Smalltalk in his post-graduate work thesis and projects. Arden has worked with Smalltalk for IBM, Parcplace Systems, ParcPlace-Digitalk, ObjectShare, and a hedge fund in a number of capacities including; lead developer, trainer, architect, consultant, and sales SE. When not working with Smalltalk, Arden can be found doing cycling, crossfit, coaching soccer, officiating at swim meets, or attending events with his children. Arden believes in trying out new things in Smalltalk and his personal life, and recently performed in a local theater rendition of the musical "Jesus Christ Superstar".',
        },
      ],
    ],
  },
  '302-kott-cincom-smalltalk-security-update': {
    title: 'Cincom Smalltalk Security Update',
    videoId: 'FZJrTOO2iuY',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/3%20wednesday/1030-1100%20Cincom%20Smalltalk%20Security%20Update/2015-07-ESUG2015-Security-final.pdf',
    abstractParagraphs: [
      [
        {
          text: 'Jerry Kott, a senior software engineer with Cincom Systems, Inc., will provide an update of the security components of the Cincom Smalltalk Foundation. The security frameworks received some significant upgrades in recent years, enabling the products to support all of the current versions of SSL/TLS. Jerry will show some aspects of proper TLS configuration and discuss the ongoing focus on TLS cipher suite support, including work on Elliptic Curve Cryptography with Cincom Smalltalk.',
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
          text: "Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good. Jerry's recollection of his falling in love with Smalltalk can be summed up like this:",
        },
      ],
      [
        {
          text: 'Day one: This is weird, no source code file? Day two: This is interesting; I can inspect live objects and send messages to them! Day three: This is great! I never want to use any other language!',
        },
      ],
      [
        {
          text: 'When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He lives in Victoria, British Columbia with his wife, five chickens and approximately 120,000 bees.',
        },
      ],
    ],
  },
  '303-fost-sql-queries-on-smalltalk-objects': {
    title: 'SQL Queries on Smalltalk Objects',
    videoId: '56956-yPofs',
    abstractParagraphs: [
      [
        {
          text: 'Object-oriented programming (OOP) languages are very popular and relational database management systems (RDBMSs) are likewise common, but there is a well-known "impedance mismatch" when they interact. Much work has gone into bridging that gap by allowing objects from an OOP application to be saved in an RDBMS (see GLORP). On the other hand, comparatively little effort has gone into presenting objects from an OOP environment or application directly to RDBMS tools. This functionality would be useful because many RDBMS tools exist that simplify the end-user\'s exploration of data, but that capability is not available until the data has been stored in the RDBMS. This functionality is one of the most common high-level feature-requests for GemStone/S by those who are evaluating it as a database ("Can I use my familiar query tools?").',
        },
      ],
      [
        {
          text: 'In this talk we will discuss a project to create a library that parses SQL queries (using PetitParser) and evaluates Smalltalk code that builds a result sets to be returned to the external tools.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "As a junior-high student in 1971, James discovered the local university's computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk bigot. James is Director of Operations for GemTalk Systems and is a passionate advocate for GemStone and all things Smalltalk.",
        },
      ],
    ],
  },
  '304-oudd-event-touch-gestures': {
    title: 'Event Touch / Gestures',
    videoId: 'BWHSaeDXw8I',
    abstractParagraphs: [
      [
        {
          text: "Merwan is implement gestures in Pharo for touch devices. In this talk, he'll present what has been accomplished with some examples. He will also demonstrate how to use gestures in applications using OSWindow and how to add new gestures.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Merwan is a 3rd year student in computer engineering who started to use Pharo this year. He is currently doing an internship with the RMoD team at Inria Lille.',
        },
      ],
    ],
  },
  '305-hilt-smalltalk-driven-gui-testing': {
    title: 'Smalltalk-driven GUI Testing',
    videoId: 'Adh9rgFX0fY',
    abstractParagraphs: [
      [
        {
          text: 'In this session, Andreas Hiltner, Lead Software Engineer from Cincom Systems, Inc., will be testing graphical user interface applications using Cincom Smalltalk. Features in this demonstration include: recording and replaying events, showing Smalltalk code to perform mouse/keyboard input and taking screenshots to compare with previously recorded templates.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Andreas Hiltner is currently a Lead Software Engineer for Cincom ObjectStudio, and has a hand in many aspects of VM, base image and database development. He works from home near Nuremberg, Germany, where he just recently returned after spending five years with his family in the US at Cincom's headquarters in Cincinnati, Ohio.",
        },
      ],
      [
        {
          text: "Along with many contributions to ObjectStudio over the years, he was the project lead in Cincom's development of the current 8.x versions of ObjectStudio, built on the Cincom Smalltalk Foundation. Andreas is a seasoned architect who has specialized in ObjectStudio for more than 15 years. In his years of working with Cincom, he has had the opportunity to assist key Cincom Smalltalk users worldwide including one of the world's top five financial institutions, and several government agencies. Andreas also accepted the responsibility of being the technical lead for ObjectStudio's Next Generation GUI Project.",
        },
      ],
    ],
  },
  '306-chis-the-glamorous-toolkit-for-pharo': {
    title: 'The Glamorous Toolkit for Pharo',
    videoId: 'Dm86Tva1T6g',
    abstractParagraphs: [
      [
        {
          text: 'Mold your development environment. Your system is too special to leave it in the hands of generic tools. The Glamorous Toolkit (GT) brings a new generation of easily customizable development tools.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș is a PhD student at the University of Bern in the Software Composition Group. He maintains that development environments have to be moldable, that is, they have to both adapt themselves and be adapted by developers to their own problems and domains. His current research focuses on build new solutions that make that vision possible as part of the GT team.',
        },
      ],
    ],
  },
  '307-chis-the-glamorous-toolkit-for-pharo-hands-on': {
    title: '[TUTORIAL] The Glamorous Toolkit for Pharo - hands-on',
    videoId: 'cxcJxgphiuE',
    abstractParagraphs: [
      [
        {
          text: 'Mold your development environment. Your system is too special to leave it in the hands of generic tools. The Glamorous Toolkit (GT) brings a new generation of easily customizable development tools. In this tutorial you will learn how to create custom extension for you own objects!',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chiș is a PhD student at the University of Bern in the Software Composition Group. He maintains that development environments have to be moldable, that is, they have to both adapt themselves and be adapted by developers to their own problems and domains. His current research focuses on build new solutions that make that vision possible as part of the GT team.',
        },
      ],
    ],
  },
  '401-okee-va-smalltalk-product-update-and-roadmap': {
    title: 'VA Smalltalk Product Update and Roadmap',
    videoId: 'hSyEA78xhFM',
    abstractParagraphs: [
      [
        {
          text: 'VA Smalltalk continues to evolve, I\'m going to share the current state of this evolution. During this last year, we have all been hard at work refreshing the product with new features as well as upgrading some of the old ones. I will have some exciting new capabilities to show together with the "Roadmap to the Future" for VA Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I have been developing software for over 45 years. I joined the original IBM Smalltalk prototype team in 1990 and was a founding member of the IBM VisualAge Smalltalk development team. I was Team Lead and Chief Architect of IBM VisualAge Smalltalk from 1997 to 2007. In February 2007, I joined Instantiations to lead the VA Smalltalk development team. I am currently the CTO and Principal Smalltalk Architect focusing on future product architecture and development. I live in Durham, NC and work in Raleigh, NC.',
        },
      ],
    ],
  },
  '402-okee-dino2-the-amazing-evolution-of-the-va-smalltalk-vm': {
    title: 'Dino2 - the Amazing Evolution of the VA Smalltalk Virtual Machine',
    videoId: 'Ii8Dwq1b6YI',
    abstractParagraphs: [
      [
        {
          text: 'Over the last 18 months we have evolved the VA Smalltalk VM from a Smalltalk model-based 32-bit VM to a C-based 32/64-bit VM. During this talk I will tell the story of our journey along this evolutionary path, describe some of the innovative techniques and approaches we took to reach our goal, and demonstrate the running 64-bit VM.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I have been developing software for over 45 years. I joined the original IBM Smalltalk prototype team in 1990 and was a founding member of the IBM VisualAge Smalltalk development team. I was Team Lead and Chief Architect of IBM VisualAge Smalltalk from 1997 to 2007. In February 2007, I joined Instantiations to lead the VA Smalltalk development team. I am currently the CTO and Principal Smalltalk Architect focusing on future product architecture and development. I live in Durham, NC and work in Raleigh, NC.',
        },
      ],
    ],
  },
  '403-lore-garage-rdbms': {
    title: 'Garage RDBMS',
    videoId: '_kuyAUt5AMw',
    abstractParagraphs: [
      [
        {
          text: 'Access to RDBMS is key to make successful business and Pharo has improved support for them in the last years, but there is still a lot of work to do. DBXTalk is the umbrella project in which we are grouping all our relational persistence strategy: It contains low level database drivers and high level object mappers. This talk proposes a review of the state of art on relational persistence support.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Esteban Lorenzano, 43 years old. He studied -and let unfinished- Computer Sciences at Universidad de Buenos Aires, and worked since 1994 in several object oriented technologies (Delphi, C++, Java), where he scaled from "Junior Programmer" to "Senior Architect". On 2007 he and two friends began a new start-up, Smallworks, an enterprise for agile developments, centered on Smalltalk. Currently, he is working in the RMoD INRIA team in Lille, France, as core developer for Pharo.',
        },
      ],
    ],
  },
  '404-ross-from-legacy-database-to-domain-layer': {
    title:
      'From Legacy Database to Domain Layer Using a New Cincom VisualWorks Tool',
    videoId: '0-lcmF_eVjo',
    abstractParagraphs: [
      [
        {
          text: 'The new tool sits on Glorp, which sits on VisualWorks\' external database drivers, including the new Postgres protocol 3.0 drivers. After presenting these new items, Niall Ross of Cincom Systems, Inc. will demonstrate using the tool to kick-start fresh application development from a legacy database application. The talk will end at the starting point for Jerry Kott\'s talk "Single Page Web Application Development with SiouX and AppeX."',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Niall ended his undergraduate career with two intellectual interests: computing and the theory of relativity. A quick check of how much commercial work was available to relativity and gravitation theorists made him decide to do academic research in that field and then seek a commercial job in computing, rather than the other way round. Niall started working commercially in IT in 1985. At first, he was assigned to designing and implementing software engineering process improvements, and after only three years, he began significant writing and delivery of commercial software. This experience taught him that intelligent people can nevertheless form foolish ideas about software engineering if they have not worked at the coding coalface of real, large commercial projects.',
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
          text: 'Niall joined the Cincom Smalltalk Engineering Team nearly seven years ago. His first task was to lead the team that does the weekly VisualWorks builds—an experience he likened to doing brain surgery on yourself every Friday (e.g., "Prepare new memory for insertion, remove old memory … uh, I can\'t remember what I was going to do next!").',
        },
      ],
      [
        {
          text: 'Currently, he leads the Glorp and Database team. He also leads the Custom Refactoring open-source project, which he co-founded, and the SUnit open-source project.',
        },
      ],
    ],
  },
  '405-kurs-petitparser': {
    title: 'PetitParser',
    videoId: 'HQswKmwkuhk',
    abstractParagraphs: [
      [
        {
          text: 'PetitParser is PEG-based parser combinator framework utilizing scannerless parsing and packrat parsing. PetitParser makes it easy to define parsers with Smalltalk code and to dynamically reuse, compose, transform and extend grammars. Recently, PetitParser was extended in two areas: 1) parsing context sensitive and indentation sensitive grammars; and 2) parsing imprecisely or incompletely specified grammars (island parsing).',
        },
      ],
      [
        {
          text: 'In this tutorial we will show how to quickly develop an island parser of an indentation sensitive language using the PetitParser framework.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I am a PhD candidate at the Software Composition Group, University of Bern since 2012. My research interest is in model extraction and parsing technologies.',
        },
      ],
    ],
  },
  '406-kott-single-page-web-application-development': {
    title: 'Single Page Web Application Development with SiouX and AppeX',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/4%20thursday/1400-1430%20single%20page%20web%20application/2015-07-ESUG2015-AppeX-final.pdf',
    abstractParagraphs: [
      [
        {
          text: "Jerry Kott, a senior software engineer with Cincom Systems, Inc., will revisit key aspects of AppeX, Cincom's new web development framework. AppeX provides a tight integration of Cincom VisualWorks IDE with object-oriented Javascript running in the web browser, as well as automatic support for client/server session management, authentication, server-to-client event notification and mobile applications. Jerry will highlight new features of AppeX, with emphasis on the upcoming Scaffolding framework. With AppeX Scaffolding, developers can build a single-page web application from an existing database, with minimal coding, using AppeX REST-ful services, Glorp and ActiveRecord.",
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
          text: "Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good. Jerry's recollection of his falling in love with Smalltalk can be summed up like this:",
        },
      ],
      [
        {
          text: 'Day one: This is weird, no source code file? Day two: This is interesting; I can inspect live objects and send messages to them! Day three: This is great! I never want to use any other language!',
        },
      ],
      [
        {
          text: 'When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He lives in Victoria, British Columbia with his wife, five chickens and approximately 120,000 bees.',
        },
      ],
    ],
  },
  '407-tymc-bringing-the-concept-of-quality-into-pharo': {
    title: 'Bringing the Concept of Quality into Pharo',
    presentationUrl:
      'https://archive.esug.org/ESUG2015/4%20thursday/1430-1500%20Concept%20of%20Quality/Yuriy__Beyond_the_quality_.pdf',
    abstractParagraphs: [
      [
        {
          text: "People were using the notion of quality for as long as they live, and software engineers are not an exception. Our goal is to introduce a concept of quality as a first class entity that can be used to facilitate the software evolution process. Last year we have presented ViDI - a Visual Design Inspector. Now we want to present QualityAssistant - a tool which assists you with a quality of your code right when you are working with it. QualityAssistant is based on an idea that each code entity should be able to tell about it's quality, and the ways to improve it.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm a Ph.D. student at the University of Lugano (USI) in the Faculty of Informatics. I am working under the supervision of Prof. Dr. Michele Lanza, in the REVEAL research group. My main topic is software quality and how do you embed it in an object oriented system. In the past I worked as a network administrator at ISP, Java and Ruby developer in two software companies and ran a freelance web development team. Now I am Pharo evangelist, and also I promote collaboration with outer world in Ukrainian universities where I am originally from.",
        },
      ],
    ],
  },
  '408-tymc-towards-well-planned-code-cities': {
    title: 'Towards Well Planned Code Cities',
    abstractParagraphs: [
      [
        {
          text: 'Software visualization has been shown as effective to support program and system comprehension. A possible solution adopts the city metaphor, and visualizes software systems as 3D cities. Most of the existing implementations, like CodeCity, exploit rectangle packing layout for placing the entities in a compact positioning. However, the distance between elements is determined by the layout algorithm only, without any connection to the actual structure of the system and the relations between software entities, which are fundamental for comprehension and maintenance.',
        },
      ],
      [
        {
          text: 'We are currently investigating a new 3D representation for visualizing large software systems as cities. In our tool, we exploit force based layout to place software entities like classes and packages based on their relations, for example by considering client dependency. Our cities look more "organic", characterized by dependent entities grouped together, and less coupled entities more far away from each other.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I\'m a Ph.D. student at the Faculty of Informatics of University of Lugano. I am working under the supervision of Prof. Dr. Michele Lanza, in the REVEAL research group. My main topic is how to improve the visualization of software systems in a useful and realistic way. On the last ESUG I presented Voronoi diagram builder, while 2 years ago I worked on the project "SciSmalltalk - Ordinary Differential Equations Solver" in GSoC.',
        },
      ],
    ],
  },
  '409-schi-fuzzyworld': {
    title:
      'FuzzyWorld: a frame for high performance Neuro Fuzzy Expert Systems generation',
    videoId: 'U_jl9rQltwo',
    abstractParagraphs: [
      [
        {
          text: 'FuzzyWorld is a tool for building Fuzzy Expert system receiving expert knowledge from data (DB or Excel sheets) and transforming their contents to an expert system, using a DI-RO (Data In Rules Out) approach. The resulting expert system can be optimized using a genetic algorithm.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I founded EDOR Metodi Quantitativi 1972; in 1975 I developed MIDA (Management Integrato Dati Aziendali) one of the first application in CPM for companies; MIDA was HP's official package for about 10 years and sold more than 23.000 packages in Italy and abroad; in 1982 I started using Digitalk's VSE and EDOR became Italian distributor for this product. In 1998 EDOR sponsored ESUG in Brescia. Since 1975 I am contract professor of Operating Research at Università Cattolica del Sacro Cuore a Brescia.",
        },
      ],
    ],
  },
  '410-ferl-pillar-one-format-to-rule-them-all': {
    title: 'Pillar: One Format to Rule them All',
    videoId: '3EdSENvCmjg',
    abstractParagraphs: [
      [
        {
          text: 'Pillar is a markup syntax and associated tools to write and generate documentation and books. Pillar is currently used to write the Enterprise Pharo book, the Updated Pharo by Example book, and many other texts. Pillar has many features: simple markup syntax with references, tables, pictures, captions; export to HTML, LaTeX, Markdown and Pillar itself; customization of the export through a dedicated STON configuration file; support of templates using the Mustache templating engine; syntax-highlighting of generated code blocks; configurable numbering of section titles and figures; and more.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Cyril Ferlicot-Delbecque is a student at the French University of Lille 1. He follows a course to get a Master's degree in Business Informatics. He is currently doing an internship in the RMoD research group at INRIA Lille and he is working on Pillar.",
        },
      ],
      [
        {
          text: "Damien Cassou received his PhD degree in Computer Science from the University of Bordeaux, France. He is working as associate professor (maître de conférences) at the University of Lille, France, and is a member of the RMod research group (Inria, CRIStAL). He is currently working on dynamic programming languages (most notably around traits and modules) and software engineering (mainly tools for developers). Damien has co-organized many events (including ECOOP'14 and several ESUGs), wrote several books, and is an active member of the Smalltalk and Emacs-Lisp communities.",
        },
      ],
    ],
  },
  '501-uhna-software-and-business-modeling-platform-dynacase': {
    title: 'Software and Business Modeling Platform DynaCASE',
    videoId: 'y41okrpK5hM',
    abstractParagraphs: [
      [
        {
          text: 'DynaCASE is an ongoing effort to create a platform aimed at facilitating various challenges of software and business modelling: starting from drawing diagrams via canvas-based interface, going through simulations and validations, and ending with generation of business reports and source code. One of important aspects is the ability for users--developers to create custom diagram notations specific to their needs, as well as custom algorithms and visualizations, thus providing flexible tooling support even for niche markets. This presentation will show current state of the platform demonstrated with business (BORM), and software/ontological (OntoUML) modeling. Finally, it will present a vision towards which the development is heading and it will mention known interests of third parties, as well.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Peter Uhnák is a BSc student of Software Engineering at Faculty of Information Technology of Czech Technical University, and a member of the Centre for Conceptual Modelling and Implementations research group. After learning Pharo during university's course in 2013/2014 he took greater interest and started working on DynaCASE as a member of student software project team. He now also participates in the development of Pharo and Pharo's visualization engine Roassal.",
        },
      ],
    ],
  },
  '502-noe-write-everything-only-once-smalltalk-in-government': {
    title: 'Write everything only once. Smalltalk in government',
    videoId: 'fn6L4KBcFWY',
    abstractParagraphs: [
      [
        {
          text: 'A mainframe government application was rewritten in Smalltalk. The guiding principle was to write everything only once. The design patterns that were developed or extended for this purpose will be documented. Most of these could be used by other government divisions. This resulting application has more functionality, a fraction of the original code volume and is easy to maintain. Some metrics comparing different implementations (cobol generator, java) will be shown.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: '1972. Civil Engineer. KUL. 1973. International Business Machines (IBM). Introduced to Smalltalk in 1989. 1992. Object Technology International (OTI). VisualAge Smalltalk consultancy. 1995. ICT Consultant in Government. 2013. Retired.',
        },
      ],
    ],
  },
  '503-gitt-smalltalk-x-test-automation': {
    title: 'Smalltalk/X: Test Automation',
    videoId: 'Ih4Xyynx4QI',
  },
  '504-stin-scismalltalk-doing-science-with-agility': {
    title: 'SciSmalltalk: Doing Science with Agility',
    abstractParagraphs: [
      [
        {
          text: "In this talk, we will present SciSmalltalk, an ongoing open-source effort in order to have something similar to existing scientific libraries like NumPy, SciPy for Python or SciRuby for Ruby. SciSmalltalk already define the following basic functionalities: complex and quaternions extensions, random number generators, fuzzy algorithms, Didier Besset's numerical methods, Ordinary Differential Equation (ODE) Solver.",
        },
      ],
      [
        {
          text: 'I will provide a broad overview of the SciSmalltalk library current state and present future development. As an illustration of SciSmalltalk, I will also present one application, the KENDRICK platform to visualize and analyze epidemiological models.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Serge was introduced to Smalltalk during his master in 1990 and since then is a Smalltalk zealot. Serge is assistant-professor at Paris 6 University and adjunct researcher at IRD (Institut de Recherche pour le Développement) in an international joint research unit called UMMISCO working on computer science modelling of complex systems.',
        },
      ],
    ],
  },
  '505-duca-bloc-a-modern-core-for-highly-dynamic-graphics': {
    title: 'Bloc: a Modern Core for Highly Dynamic Graphics',
    abstractParagraphs: [
      [
        {
          text: 'Bloc is the new generation core for Pharo graphics. Bloc is a complete rewrite from scratch of core classes and logic of Morphic. Bloc is developed by A. Plantec since a couple of years, it is the result of several iterations and based on the experience accumulated by Alain while designing Miro and Miro2 several years ago. Bloc is the basis for Brick the new widget sets developed by the University of Bern. In this presentation we will show the essence of the design of Bloc.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stephane is directeur de recherche at Inria. He has more than 16 years of experience in software maintenance. He leads the RMoD (http://rmod.lille.inria.fr) team. He is expert in two domains: object-oriented language design and reengineering. He worked on traits, composable groups of methods, and this work got some impact. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala, Fortress of SUN Microsystems. He is also expert on software quality, program understanding, program visualizations, reengineering and metamodeling. He is one of the developer of Moose, an open-source software analysis platform http://www.moosetechnology.org/. He created http://www.synectique.eu/ a company building dedicated tools for advanced software analysis.',
        },
      ],
    ],
  },
};
