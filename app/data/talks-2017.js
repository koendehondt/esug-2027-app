// Talk titles, abstracts, and speaker bios for the ESUG 2017 Archive's
// Conference Program page.
//
// ESUG 2017 predates the archive.esug.org agenda-page/slide-index and
// YouTube-playlist organization used from 2022 onward, so this data was
// assembled by hand rather than scraped in bulk:
//
// - title/abstractParagraphs/bioParagraphs: sourced directly from the
//   conference's public Google Calendar (Main Track .ics feed, calendar id
//   1b6gsg4lfp8nkuicn3clljjtn8@group.calendar.google.com -- the same
//   calendar embedded by https://esug.org/2017-Conference/monday.html and
//   its Tue-Fri equivalents), whose DESCRIPTION field carries each talk's
//   speaker(s), abstract, and bio inline (matching the ESUG 2018 calendar,
//   not ESUG 2019's, which only links out to GitHub Pillar files). Light
//   copy-edits only (obvious typos fixed, HTML stripped, labels like
//   "Abstract:"/"Bio:"/"First Name:" removed), matching the convention used
//   for other years. Five talks -- 'Moose reloaded', 'Cargo', 'Bloc new
//   hands-on', 'Dimensional Analysis' and 'Understanding the Pharo Dev
//   Process' -- had no DESCRIPTION at all; they keep their confirmed
//   `videoId` but no abstract/bio (see program-2017.js's header comment for
//   why they also carry no speaker).
// - `videoId`: matched from the conference's YouTube playlist
//   (youtube.com/playlist?list=PLJ5nSnWzQXi_THfKwhzxFwbXy00YTi0uv, 34
//   videos) by title (read via the built-in Browser pane's JS execution
//   against each `a[aria-label]` playlist-row link, since titles sometimes
//   differ slightly from the calendar title, e.g. "An Introduction to the
//   Cargo Package Manager" for 'Cargo'). 29 of the 32 talks below have a
//   video; the rest ('When Smalltalk images get large', 'Calypso
//   underhood', 'ReStore for Dolphin -- Improved Query Block Analyser')
//   were never uploaded. Two further playlist videos ('Iceberg',
//   'PharoJS') couldn't be matched to any calendar session at all -- see
//   program-2017.js's header comment.
// - `presentationUrl`: no slide archive exists for ESUG 2017 on
//   archive.esug.org, so these link directly to the matching deck on the
//   'esug' SlideShare account (a real PDF/PPTX file, since Koen has a
//   SlideShare account and downloaded these himself once signed in --
//   downloading is otherwise gated behind account signup and what looks
//   like a paid Scribd trial). Candidates were found by web-searching each
//   talk's title/speaker (SlideShare's own in-site search does not
//   reliably index decks this old), but the 'esug' account turned out to
//   have re-uploaded similarly- or identically-titled decks from *other*
//   ESUG years under the same slug pattern (confirmed by reading each
//   deck's own title slide, which usually names its conference/year) --
//   five otherwise-plausible title/speaker matches were discarded once
//   opened because the deck itself said ESUG 2015, 2016, 2019 or 2022, or
//   (for 'Cargo') "Pharo Days 2017" rather than ESUG 2017: 'Running Pharo
//   on the GemStone VM', 'GemStone/64 update and roadmap', 'VA Smalltalk
//   Product Update and Roadmap', 'Bloc new hands-on', and 'Cargo'. Only 9
//   of the 32 talks below have a confirmed `presentationUrl`; each was
//   verified against its own title slide (explicit "ESUG 2017"/date, or a
//   filename Koen's download produced that itself contains "esug2017")
//   before being kept, and the two Calypso talks additionally have
//   slideshow IDs in the same narrow numeric range as the other 2017
//   decks, consistent with a single post-conference upload batch.
//
// Presenter names come from the schedule (app/data/program-2017.js) rather
// than being duplicated here.
//
// Each paragraph is an array of "runs" -- plain text segments, matching
// the shape used by the other talks-YYYY.js files.

export default {
  '101-girb-approachable-software': {
    title: 'Approachable software',
    videoId: 'tbQVIrca6CA',
    abstractParagraphs: [
      [
        {
          text: 'Software appears to be hard to grasp especially for non-technical people. This situation is particularly problematic as makes it hard to make proper decisions. But, this does not have to be like that. In this talk, we show how software can be made approachable. We start from a concrete experience of building a reference model for hospitality automation in Pharo through the Glamorous Toolkit, and, by means of live demos, we exemplify how changing the approach and the nature of the tools significantly affects the outcome. We then take a step back and learn how decision making should become and explicit discipline at all layers of software development.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Tudor Gîrba (tudorgirba.com) is a software environmentalist and co-founder of feenk gmbh, a consulting and coaching company (feenk.com). Tudor leads the work on the Moose platform for software and data analysis (moosetechnology.org), he initiated the Glamorous Toolkit project for rethinking the IDE (gtoolkit.org), and he is a board member of the Pharo live programming language (pharo.org). He authored the humane assessment method to help teams solve real problems without reading code (humane-assessment.com). Tudor also argues that storytelling should be prominent in software development (demodriven.com). In 2014, he won the prestigious Dahl-Nygaard Junior Prize for his work on the modeling and visualization of evolution and interplay of large numbers of objects (aito.org). Tudor holds a PhD from the University of Bern.',
        },
      ],
    ],
  },
  '102-fost-running-pharo-on-the-gemstone-vm': {
    title: 'Running Pharo on the GemStone VM',
    videoId: 'TkvjUXn3tGs',
    abstractParagraphs: [
      [
        {
          text: "One of the features of traditional Smalltalk is that the development tools are in the same object space as the application being developed. A corollary is that it has generally been a challenge to debug a remote object space or build up a new class library from scratch. But GemStone's multi-user architecture provides some intriguing abilities to isolate not just classes, but methods. In this presentation we provide an introduction to GemStone/S and demonstrate running a Minimal-Pharo (with over 1400 classes) in GemStone.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "As a junior-high student in 1971, James discovered the local university's computer center and a life-long obsession with computers began. He was introduced to Smalltalk/V for the Mac in the mid-90s, and became a Smalltalk bigot. James is VP of Finance & Operations for GemTalk Systems and is a passionate advocate for GemStone and all things Smalltalk.",
        },
      ],
    ],
  },
  '103-chis-gt4gemstone': {
    title: 'gt4gemstone',
    videoId: 'wj5IWvAYSlw',
    abstractParagraphs: [
      [
        {
          text: 'gt4gemstone is a variant of the Glamorous Toolkit aimed at supporting remote development with GemStone/S. Using the known GT mechanisms, gt4gemstone also enables rapid customization of development tools while still paying close attention to the performance of the tools. Currently gt4gemStone makes it possible to express most custom views for GTInspector exactly in the same way both in Pharo and in GemStone. With the ability of having the same code working both in Pharo and in GemStone, the scenario of building in Pharo and deploying in GemStone is even more appealing (http://www.humane-assessment.com/blog/introducing-gt4gemstone).',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Andrei Chis (andreichis.com) acts as a tool crafter at feenk gmbh. He is a co-author of the Glamorous Toolkit (gtoolkit.org) and of gt4gemstone and a core contributor to both the Moose analysis platform (moosetechnology.org) and the Pharo programming language (pharo.org). His PhD work showed how a moldable development environment significantly improves the development productivity, and received several research and industrial prizes.',
        },
      ],
    ],
  },
  '104-tymc-pharo-quality-engine-the-last-strokes': {
    title: 'Pharo Quality Engine: The Last Strokes',
    videoId: 'OM3eh05GHQo',
    presentationUrl:
      'https://www.slideshare.net/esug/pharo-quality-engine-the-last-strokes',
    abstractParagraphs: [
      [
        {
          text: 'Pharo 6 was shipped with Renraku — the single quality model to rule them all. While being an advanced piece of software, Renraku alone provided no immediate benefits to end users. In this talk we are going to present the upcoming development changes that utilize Renraku and range from advanced bug fixing guidance to the five times speedup in quality rules; as well as a few more usability features.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "I'm a Ph.D. student at the University of Bern in the Institute of Informatics. I am finishing my studies under the supervision of Prof. Dr. Oscar Nierstrasz, in the Software Composition Group. My main topic is software quality especially the tools that helps developers to deal with the quality of code and rules that work behind the stage. For the last couple of years I was doing my Ph.D. studies in Lugano. In the past I worked as a network administrator at ISP, Java and Ruby developer in two software companies and ran a freelance web development teem. Now I am Pharo evangelist, and also I promote collaboration with outer world in Ukrainian universities where I am originally from.",
        },
      ],
    ],
  },
  '105-denk-supporting-feedback-loops': {
    title: 'Supporting Feedback Loops',
    videoId: 'a-C7h63MXb0',
    abstractParagraphs: [
      [
        {
          text: 'This talk takes the the ideas of last years Feedback Loop talk and discusses feedback loops in the Pharo Project. I will discuss the challenges that we face to enable feedback and show some examples of support, both technical and non-technical.',
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
  '106-denk-what-is-new-with-pharo-6': {
    title: 'What is new with Pharo 6',
    videoId: 'n_iUaf4a7C0',
    abstractParagraphs: [
      [
        {
          text: 'Another year, another release: Pharo 6 was released in June 2017. This talk will give an overview of the changes and improvement.',
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
  '107-wink-do-visualizations-help-during-development': {
    title:
      'Do Visualizations help during development? Using Moose while coding.',
    videoId: '0ttLYM1tkek',
    abstractParagraphs: [
      [
        {
          text: 'I will discuss how visualizations can help while coding. I explain the intention behind the visualization tool RW-Moose-Diagram (http://www.smalltalkhub.com/#!/~RainerWinkler/RW-Moose-Diagram) which is based on Moose and Roassal. It is used to make dependency diagrams that focus on a certain aspect of an application. It supports comments; elements can be dragged; changes to diagrams can be stored. I speak about the experiences I made while using it with ABAP and Smalltalk. The main intention was to make understanding code easier while working with Legacy code. I discuss also in which cases it can help while working with new applications that have a very high test coverage.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Rainer Winkler is developer for SAP applications specialized in SAP tools for reporting. He is interested in software maintenance and in getting Legacy code under control. He works primarily with ABAP and enjoyed to learn Pharo recently to utilize Roassal and Moose.',
        },
      ],
    ],
  },
  '201-thom-cincom-smalltalk-roadmap-2017': {
    title: 'Cincom Smalltalk Roadmap 2017',
    videoId: 'yPdhxg75m6w',
    presentationUrl:
      'https://www.slideshare.net/esug/cincom-smalltalk-2017-roadmap',
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
          text: 'Arden Thomas started using Smalltalk in 1986, when he was researching and exploring better ways to do software development. He found it! Smalltalk and object-oriented were such a profoundly improved approach to software development, that he made a full commitment to using Smalltalk. Arden used Smalltalk in his post-graduate work, thesis and projects. Arden has worked with Smalltalk for IBM, Parcplace Systems, ParcPlace-Digitalk, ObjectShare, and a hedge fund in a number of capacities including; lead developer, trainer, architect, consultant, and sales SE. When not working with Smalltalk, Arden can be found cycling, officiating at swim meets, or attending events with his children.',
        },
      ],
    ],
  },
  '202-henr-when-smalltalk-images-get-large': {
    title: 'When Smalltalk images get large',
    presentationUrl:
      'https://www.slideshare.net/esug/when-smalltalk-images-get-large',
    abstractParagraphs: [
      [
        {
          text: 'Currently in Pharo, the largest image that you can comfortably work with is around 7 gigabytes[1]. If your object graph is bigger than that you have no choice but to look for alternatives.',
        },
      ],
      [
        {
          text: 'If you do not want to leave the comfort of Smalltalk, GemStone/S is a good alternative. GemTalk Systems has commercial customers with production GemStone/S images that exceed 1.5 terabytes, so mage size is not an issue. With a free for commercial use license[2], you can have images up to 50Gb and for a reasonable yearly subscription, the image size restriction is lifted. Using a "develop in Pharo and deploy in GemStone" methodolgy, you can continue to develop your application in Pharp while taking advantage of GemStone\'s huge image size.',
        },
      ],
      [
        {
          text: 'In this talk I will discuss the key pieces of GemStone/S technology that makes it possible to work comfortably with a 1.5 terabyte Smalltalk image; provide suggestions on the best way to structure your application to leverage GemStone\'s strengths; and outline the "develop in Pharo and deploy in GemStone" methodolgy.',
        },
      ],
      [
        {
          text: '[1] https://clementbera.wordpress.com/2017/03/12/tuning-the-pharo-garbage-collector/ [2] https://gemtalksystems.com/licensing/#CWELicensing',
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
  '203-hadr-pdf-for-gemstone': {
    title: 'PDF for Gemstone',
    videoId: 'ehCPF89iruE',
    abstractParagraphs: [
      [
        {
          text: 'The PDF library PDF4Smalltalk is available in a new version under a new name: PDFtalk. Some of the improvements are: support for bitmap pictures, annotations and the redesign of PDF types. New is also a version for Gemstone. For this purpose, a new "VisualWorks to Gemstone" fileOut library was written. The approach will be presented.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Christian Haider is using Smalltalk since 1992 and never had to leave it since. He experienced large projects as employee and consultant. Since 2002 he works in on "smallCharts", a charting tool for newspapers. 2011 he published a PDF Library for VisualWorks. His interest is in Graphics and User interfaces',
        },
      ],
    ],
  },
  '204-neme-seaside-based-custom-erp-system': {
    title: 'Seaside based custom ERP system',
    videoId: 'ehZtXx-rjx4',
    abstractParagraphs: [
      [
        {
          text: "TRAX is a custom, in-house Seaside ERP system written for, and used by, HTS, an industrial HVAC sales company. We use VisualWorks to build, manage and test the code, and GemStone to deploy it. Running since September 2015, the application continues to be developed and adapted to the changing needs of the business. This talk will highlight some of the design choices and technical decisions we've made, and the agile development process we use.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Bob Nemec is the Software Architect of TRAX. Bob has worked with Smalltalk since 1990, and used it exclusively to build commercial systems since 1994.',
        },
      ],
    ],
  },
  '205-kott-http-2-in-the-cincom-smalltalk-sioux-server': {
    title: 'HTTP/2 in the Cincom Smalltalk™ SiouX Server',
    videoId: 'F8TCVnpMt2w',
    abstractParagraphs: [
      [
        {
          text: 'In this presentation, Jerry will discuss technical aspects of the newly added support for HTTP/2 in the SiouX HTTP server. SiouX is a general-purpose Web server that uses both HTTP and HTTPS protocols and Net/Xtreams. This framework provides a secure, efficient and extensible server with HTTP services that are in sync with the current HTTP standards.',
        },
      ],
      [
        {
          text: 'Some of the topics covered in this talk will include: - How to configure a SiouX Server to handle HTTP/2 requests. A brief overview of the HTTP protocol upgrade mechanism and the API to enable processing of HTTP/2 requests by SiouX. - High level design overview. Describe differences between multiple request/response pairs over multiple connections in HTTP/1.1 and stream multiplexing over a single connection in HTTP/2. - Security considerations: although HTTP/2 can be used over a plaintext connection, all browser vendors announced they will only implement the secure version, using TLSv1.2 as the transport protocol. This has significant consequences for web server operators as it requires certificate management and a minimum required set of supported cipher suites. Jerry will present a summary of those requirements and show a full secure web server configuration with certificate files and HTTP/2 support. - A demo of an AppeX application using combined HTTP/1.1 and HTTP/2 resources, showing a comparison between the two protocols relative performance.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jerry Kott, a senior software engineer, has been with Cincom Systems, Inc. now for nine years. Jerry is a valuable member of the Protocols team responsible for network protocols, security and web application development components of the Cincom Smalltalk Foundation. With Cincom® ObjectStudio® and Cincom® VisualWorks® both built on the same Foundation, this engineering group is responsible for critical improvements that enhance both products. Specifically, Jerry brings a vast knowledge of network protocols and security to this team, instrumental in enhancing those components in Cincom Smalltalk.',
        },
      ],
      [
        {
          text: "Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his Masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good. Jerry's recollection of his falling in love with Smalltalk can be summed up like this: Day one: this is weird, no source code file? Day two: this is interesting; I can inspect live objects and send messages to them! Day three: this is great! I never want to use any other language!",
        },
      ],
      [
        {
          text: 'Jerry and his wife also recently got 450 programmers to "bite" on Cincom Smalltalk at Battlesnake 2017 where they came in second place with their Medusa algorithm. BattleSnake 2017 is a programming competition that was recently held in Victoria, BC, where teams of students and developers build web-based AIs for the classic arcade game "Snake." While many platforms were used in developing these algorithms by other competitors, Jerry and his wife built their impressive algorithm using Cincom Smalltalk.',
        },
      ],
      [
        {
          text: 'When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He recently started practicing with his dog Cindy to be accepted to the training program of British Columbia Search Dog Association. He lives in Victoria, British Columbia.',
        },
      ],
    ],
  },
  '206-dege-appex-and-javascript-support-enhancements': {
    title: 'AppeX and JavaScript Support Enhancements in Cincom Smalltalk™',
    videoId: 'sZRAG7L1DgI',
    presentationUrl:
      'https://www.slideshare.net/esug/appex-and-javascript-support-enhancements-in-cincom-smalltalk',
    abstractParagraphs: [
      [
        {
          text: 'JavaScript is the de facto language of the web, while Smalltalk is a premier language for developing powerful and innovative programs. AppeX, featured at ESUG in past years, continues to evolve as a tool for bringing these two languages together in a simple and natural way to support the development of complex web applications. AppeX is a very lightweight and flexible modern web application framework in Cincom Smalltalk. With AppeX, users get the most current web technologies like HTML5, JavaScript, Ajax, JSON, XHR, etc. AppeX is open and uses any preferred JavaScript libraries, as well as automatic session management. AppeX allows users to manage Smalltalk and JavaScript code within Cincom Smalltalk and also provides browser support for JavaScript, which allows users to search senders/implementers and parse JavaScript literals. In this talk, Vladimir Degen will explain and demonstrate some recent, interesting features of AppeX, including editing arbitrary JavaScript code from within AppeX, and the ability of AppeX to "task" web browsers to do such things as utilizing JavaScript libraries and functionally testing and scripting websites from within Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Vladimir Degen, a senior software engineer, has been with Cincom Systems, Inc. now for three years. Vladimir is a valuable member of the Protocols team responsible for network protocols, security and web application development components of the Cincom Smalltalk™ Foundation. With Cincom® ObjectStudio® and Cincom® VisualWorks® both built on the same Foundation, this engineering group is responsible for critical improvements that enhance both products. Specifically, Vladimir combines his experience in Smalltalk and JavaScript to enhance the web application development components in Cincom Smalltalk.',
        },
      ],
      [
        {
          text: "Vladimir first decided that there must be something better than Basic to create wargame simulations back before entering college. Unfortunately the internet back then just wasn't what it is today, and he remained oblivious of Smalltalk while pursuing his other love, physics, and into the early 90's, when he first heard talk of Smalltalk from a fellow contract programmer in SAS. Eager to make up for lost time, he's spent most of his professional life since then working with Smalltalk, and also (more recently), as a JavaScript developer. A few years ago he found an opportunity at Cincom to combine working with Smalltalk and JavaScript and has been doing so from his home in Maryland up to the present time.",
        },
      ],
      [
        {
          text: 'Apart from work, Vladimir has engaged in various martial arts (most recently Kung Fu and Kunst des Fechtens), and now does some bouldering. He has also written a couple of short (and so far unpublished) novels.',
        },
      ],
    ],
  },
  '207-moose-reloaded': {
    title: 'Moose reloaded',
    videoId: 'VQrnPxKTfXY',
  },
  '208-kudr-calypso-a-new-modular-code-browser-for-pharo': {
    title: 'Calypso a new modular code browser for Pharo',
    videoId: 's4nSzTOdXTk',
    presentationUrl:
      'https://www.slideshare.net/esug/calypso-a-new-modular-code-browser-for-pharo',
    abstractParagraphs: [
      [
        {
          text: 'Calypso is a new modular code browser for Pharo. It implements system and method browsers based on new navigation model which is optimised for remote development. This talk will demonstrate current functionality of Calypso.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Denis Kudriashov is currently working as engineer in RMOD-INRIA team on project "remote development tools". He has been working with Smalltalk around 11 years. In the past he had also worked in Russian bank using Pharo Smalltalk and Java. Nowadays, he is maintainer to several open-source projects like PharoThings, TelePharo, Calypso, Mocketry, Seamless, etc.',
        },
      ],
    ],
  },
  '209-kudr-calypso-underhood': {
    title: 'Calypso underhood',
    presentationUrl: 'https://www.slideshare.net/esug/calypso-underhood',
    abstractParagraphs: [
      [
        {
          text: 'Calypso is a new extendable toolset for Pharo. It is based on new navigation model with first class queries, scopes and results. it is optimised for remote browsing. This talk will explain model in details and show how particular browser functions are simplified by it. Also talk will demonstrate with examples how extend browser by plugins.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Denis Kudriashov is currently working as engineer in RMOD-INRIA team on project "remote development tools". He has been working with Smalltalk around 11 years. In the past he had also worked in Russian bank using Pharo Smalltalk and Java. Nowadays, he is maintainer to several open-source projects like PharoThings, TelePharo, Calypso, Mocketry, Seamless, etc.',
        },
      ],
    ],
  },
  '301-gree-gemstone-64-update-and-roadmap': {
    title: 'GemStone/64 update and roadmap',
    videoId: 'ejtXqJoSrb4',
    abstractParagraphs: [
      [
        {
          text: 'A review of what\'s new in version 3.3 and a preview to what we\'re working on for version 3.4. This year, as time permits, I will also start with a few slides describing what GemStone is and benefits of using it ("GemStone-101").',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Dan joined GemStone Systems in 1994 as Senior Vice President of worldwide operations. He has held several senior executive positions prior to becoming President and CEO, including general manager, where he was responsible for overseeing sales, product development, customer support, professional services and business development. He has been responsible for expanding GemStone Systems's presence in both domestic and overseas markets. In 2013, he lead the successful acquisition of GemStone/S products from VMware and formed GemTalk Systems.",
        },
      ],
      [
        {
          text: 'Norm Green started his career in 1989 at IBM in Toronto, Canada as a quality assurance engineer. In 1993, he moved to the DACS (Data Acquisition and Control System) team where he helped design and build site-wide data collection system in VisualWorks and GemStone/S Smallalk. In 1996, he joined GemStone Systems as a Senior Consultant and traveled the world helping GemStone/S customers be successful. Currently, Norm lives near Portland, Oregon and holds the position of Chief Technical Officer at GemTalk Systems.',
        },
      ],
    ],
  },
  '302-okee-va-smalltalk-product-update-and-roadmap': {
    title: 'VA Smalltalk Product Update and Roadmap',
    videoId: '7jAFE1WBwEQ',
    abstractParagraphs: [
      [
        {
          text: 'VA Smalltalk continues to evolve, and I\'m going to share the current state of this evolution. During this last year, we have all been working on 64-bit support. I will be describing this new capability (and some of the pitfalls along the way). And, as usual you will see the "Roadmap to the Future" for VA Smalltalk.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'I have been developing software for over 50 years and Smalltalk for over half that time. I joined the original IBM Smalltalk prototype team in 1990 and was a founding member of the IBM VisualAge Smalltalk development team. I was Team Lead and Chief Architect of IBM VisualAge Smalltalk from 1997 to 2007. In February 2007, I joined Instantiations to lead the VA Smalltalk development team. I am currently the CTO and Principal Smalltalk Architect focusing on future product architecture and development. I live in Durham, NC and work in Raleigh, NC.',
        },
      ],
    ],
  },
  '303-duca-a-taste-of-pharo-70': {
    title: 'A Taste of Pharo 70',
    videoId: 'OGkGgx4iymM',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present the roadmap for Pharo 70. - support for Undefined Classes - Class Parser - new class definition - support for namespace (not namespace) modules.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Stéphane is directeur de recherche at Inria. He leads the RMoD (http://rmod.lille.inria.fr) team. He is expert in two domains: object-oriented language design and reengineering. He worked on traits, composable groups of methods. Traits have been introduced in Pharo, Perl, PHP and under a variant into Scala and Fortress. He is also expert on software quality, program understanding, program visualisations, reengineering and metamodeling. He is one of the developer of Moose, an open-source software analysis platform (moosetechnology.org). He created synectique.eu, a company building dedicated tools for advanced software analyses. He is one of the leader of Pharo (pharo.org), a dynamic reflective object-oriented language supporting live programming. The objective of Pharo is to create an ecosystem where innovation and business bloom. He wrote several books such as Functional Programming in Scheme, Pharo by Example, Deep into Pharo, Object-oriented Reengineering Patterns, and Dynamic web development with Seaside.',
        },
      ],
    ],
  },
  '304-kott-security-enhancements-in-cincom-visualworks-8-3': {
    title: 'Security Enhancements in Cincom® VisualWorks® 8.3',
    videoId: 'kxIE9kQpRvE',
    abstractParagraphs: [
      [
        {
          text: "The upcoming release Cincom VisualWorks 8.3 includes several security enhancements. In this presentation, Jerry will give an overview of what they are and how application developers can take full advantage of Cincom's pluggable, platform-independent security framework. Among others, topics will include: - Added support for Authenticated Encryption with Additional Data (AEAD). This family of algorithms uses Advanced Encryption Standard (AES) block cipher as the base encryption algorithm, and applies Galois/Counter Mode (GCM) as the block chaining mechanism for data larger than a single block. Examples of use in both OpenSSL libcrypto and Windows BCrypt.dll cryptographic libraries and their interoperability. - Added support for Elliptic Curve cryptography on Windows, with a discussion of the limitations imposed by different versions of Windows. - High-level discussion of Elliptic Curve Diffie-Hellman (ECDH) key exchange algorithm and Elliptic Curve Digital Signature Algorithm (ECDSA), and how Cincom Smalltalk™ solves the lack of usable implementation in early versions of these algorithms on Windows. - An overview of newly added cipher suites to the TLSv1.2 protocol - Current status and plans for TLSv1.3 implementation",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Jerry Kott, a senior software engineer, has been with Cincom Systems, Inc. now for nine years. Jerry is a valuable member of the Protocols team responsible for network protocols, security and web application development components of the Cincom Smalltalk Foundation. With Cincom® ObjectStudio® and Cincom® VisualWorks® both built on the same Foundation, this engineering group is responsible for critical improvements that enhance both products. Specifically, Jerry brings a vast knowledge of network protocols and security to this team, instrumental in enhancing those components in Cincom Smalltalk.',
        },
      ],
      [
        {
          text: 'Prior to joining Cincom, Jerry worked as a Smalltalk consultant in a variety of industries including finance, insurance, telecommunications, manufacturing and entertainment. Throughout his career, Jerry has used most of the Smalltalk dialects. He first met Smalltalk/V in his native Czechoslovakia in 1988 while writing his Masters theses at the Faculty of Mathematics and Physics, Charles University of Prague. The political upheaval of 1988/1989 led Jerry to leave Czechoslovakia, and after a year in Austria, his family settled in Canada. While working as a programmer analyst at the TD Bank in Toronto, he was reintroduced to Smalltalk in 1993—this time with the intent of staying with it for good.',
        },
      ],
      [
        {
          text: 'Jerry and his wife also recently got 450 programmers to "bite" on Cincom Smalltalk at Battlesnake 2017 where they came in second place with their Medusa algorithm. BattleSnake 2017 is a programming competition that was recently held in Victoria, BC, where teams of students and developers build web-based AIs for the classic arcade game "Snake." While many platforms were used in developing these algorithms by other competitors, Jerry and his wife built their impressive algorithm using Cincom Smalltalk.',
        },
      ],
      [
        {
          text: 'When not programming in Smalltalk, Jerry uses his passion for photography and film by helping independent filmmakers as a cinematographer. He occasionally dabbles as an associate producer and assistant director. Jerry is also a member of Juan de Fuca Search and Rescue, a volunteer emergency response team that services the rugged western coastline of Vancouver Island off the West Coast of Canada. He lives in Victoria, British Columbia.',
        },
      ],
    ],
  },
  '305-kudr-pharothings-a-live-programming-iot-platform': {
    title: 'PharoThings: a live programming IoT-platform.',
    videoId: 'MtrKsnLDAhU',
    presentationUrl:
      'https://www.slideshare.net/esug/pharothings-a-live-programming-iotplatform',
    abstractParagraphs: [
      [
        {
          text: 'PharoThings is a new project built on top of Pharo. It targets IoT domain to bring immersive live programming experience to the world of internet of things. With example of RaspberryPi this talk will show how to control and program embedded devices in live using remote development tools and advanced model of boards.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Denis Kudriashov is currently working as engineer in RMOD-INRIA team on project "remote development tools". He has been working with Smalltalk around 11 years. In the past he had also worked in Russian bank using Pharo Smalltalk and Java. Nowadays, he is maintainer to several open-source projects like PharoThings, TelePharo, Calypso, Mocketry, Seamless, etc.',
        },
      ],
    ],
  },
  '306-syre-the-moldable-editor': {
    title: 'The moldable editor',
    videoId: 'oo60bb529cA',
    abstractParagraphs: [
      [
        {
          text: 'The moldable editor is a fresh take on what an editor could mean like in a live programming environment. It is built in Pharo and takes advantage of both the underlying rendering power of Bloc and a flexible model. The result is a rich editor that can work in the presence of run-time objects. Following the principles exhibited in the Glamorous Toolkit project, the editor enables developers to attach multiple custom graphical views to run-time objects and embed these representations next to the code, thus leading to a new level of feedback and liveliness.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Aliaksei Syrel works as a UI magician at feenk gmbh. He is a co-author of the Glamorous Toolkit (gtoolkit.org). Since recently he spends his energy rethinking the graphical stack of Pharo, a space in which he is a core contributor to Bloc and the creator of the Sparta canvas, a project that received the 1st prize at the ESUG 2016 Innovation Awards.',
        },
      ],
    ],
  },
  '307-mccl-ephemerons-the-strong-path-to-finalization': {
    title: 'Ephemerons: The Strong Path to Finalization',
    videoId: 'udyIThQleFs',
    presentationUrl:
      'https://www.slideshare.net/esug/ephemerons-the-strong-path-to-finalization',
    abstractParagraphs: [
      [
        {
          text: "Many applications need to finalize objects before they are garbage-collected. Smalltalk implementations have long provided weak containers as a way to address this need, but the newer ephemeron construct is becoming more widely available. Ephemerons are less well understood. What are ephemeron semantics, exactly? What are the differences (and similarities) between weak containers and ephemerons? What are the advantages and disadvantages? In this talk we'll take a look at these and other questions surrounding finalization, weakness, and ephemerons.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Martin has been interested in Smalltalk since he first heard about it in 1975. After a frustrating ten-year wait he finally got his hands on a running Smalltalk system and hasn't let go since. As a senior engineer working on GemStone Smalltalk products at GemTalk Systems, he leads a team that designs and implements a distributed object system that acts as a bridge between a Smalltalk client and a GemStone Smalltalk server. In his spare time, he works on Mist (a Smalltalk variant with improved modularity and security and no virtual machine) and does a lot of contra dancing. Lately, he's been working on remodeling an old house with attached former church which will become his home with built-in dance hall.",
        },
      ],
    ],
  },
  '401-bera-pharo-optimizing-jit-internals': {
    title: 'Pharo Optimizing JIT Internals',
    videoId: 'yDKaHphbFow',
    abstractParagraphs: [
      [
        {
          text: 'At ESUG in Cambridge I introduced Sista, an optimizing JIT design for the Pharo VM. The current implementation is now running 1.5x times faster on production applications and up to 5x faster on specific benchmarks than the production Pharo VM. In this talk, I will present the overall optimization pipeline and I will try to show the myriad of implementation details, including the interaction between Sista and other optimizations (Context-to-Stack mapping, closure optimizations, ...), pathological code patterns or the problems related to stack deoptimization and closures.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Clément Béra implemented the Sista optimizing JIT in the Cog VM for Pharo. He worked 5 years with Eliot Miranda on improving the Cog VM.',
        },
      ],
    ],
  },
  '402-aspi-restore-for-dolphin-improved-query-block-analyser': {
    title: 'ReStore for Dolphin – Improved Query Block Analyser',
    abstractParagraphs: [
      [
        {
          text: 'ReStore is an object-relational database interface for Dolphin Smalltalk. A key design philosophy behind ReStore is the use of familiar Smalltalk expressions in preference to relational database terminology. This is particularly evident in the querying subsystem which uses standard Collection expressions, for example:',
        },
      ],
      [
        {
          text: "Employee storedInstances select: [ :each | each office city = 'London']",
        },
      ],
      [
        {
          text: 'Translation of the select block to a SQL query uses the familiar technique of evaluating the block with an analysis object, tracking each message send via doesNotUnderstand:. A shortcoming of this approach is the inability to handle commonly-used optimised/inlined expressions such as isNil, and: etc. This forces the use of less common or non-standard equivalents, compromising the design philosophy and leading to errors where code uses the more familiar expressions.',
        },
      ],
      [
        {
          text: "This presentation describes recent improvements to ReStore's query block analyser, using the reflective capabilities of Smalltalk to track optimised expressions via examination and manipulation of the execution stack.",
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
  '403-kott-playing-with-snakes': {
    title: 'Playing with Snakes',
    videoId: 'lBxwaUvortA',
    abstractParagraphs: [
      [
        {
          text: "Alena recently participated in a programming competition Battlesnake held in Victoria, British Columbia, Canada. Together with her husband, a Cincom Smalltalk software engineer, they won a second place with their 'Medusa' algorithm, implemented in Cincom Smalltalk with the use of SiouX and AppeX frameworks. In her talk, Alena will talk about how the game invigorated the competitors and their interest in understanding the algorithms and the programming languages used in designing the snakes. Alena will show how the power of playfulness has the capacity to transform professional environments and entice wide and diverse group of people to join the fun of programming. Her talk will include a short video of the final Battlesnake game (the only game Medusa lost in the competition), and present a challenge to the audience: create a similar competition that would be based on Smalltalk but open to other programming languages as well.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: "Alena has been interested in the intersection of arts, society and natural sciences since young age. She studied Physics and Philosophy at the Charles University of Prague, with focus on how Einstein's Special Theory of Relativity affected the philosophical thoughts of 20th century. Soon after graduation, she secretly left her native Czechoslovakia and finally settled with her family in Canada. She became an educator and a program developer for the Challenger Learning Center, a simulated space flight mission program at the Ontario Science Centre in Toronto, Ontario. This is where she first started programming the \"mission controls\" in Hypercard, which eventually led to her encounter with Smalltalk. After several years as a Smalltalk developer, she decided to go back to her main passion, which is Science Education. She earned her Ph.D. from University of Victoria with an award-winning thesis on how filmmaking can be effectively used to immerse students in the exploration of Nature of Science and how it affects society. For the past eight years, she has been running Mad Science of Vancouver Island, a children's science enrichment program based in Victoria, BC that reaches 'children' of all ages with fun insights into scientific theories. Currently she teaches courses in Technology and Society at the Faculty of Engineering, University of Victoria.",
        },
      ],
    ],
  },
  '404-cargo': {
    title: 'Cargo',
    videoId: 'W5NnLDWPVqM',
    abstractParagraphs: [
      [
        {
          text: 'Cargo is a new package manager allowing to describe dependencies at the package level. Its goal is to ease package dependencies description, enforce the use of semantic versioning and enhance fine-grain package reusability. The talk will present Cargo core concepts and then focus on concrete scenarios to show how to use Cargo package manager in practice.',
        },
      ],
    ],
  },
  '405-bloc-new-hands-on': {
    title: 'Bloc new hands-on',
    videoId: 'L631DBHvlLk',
  },
  '501-dimensional-analysis': {
    title: 'Dimensional Analysis',
    videoId: 'W_EygutgA5s',
  },
  '502-berm-enhancing-envy-developer-for-modern-programming': {
    title: 'Enhancing ENVY/Developer for Modern Programming Environments',
    videoId: '0mdmtiw_kMk',
    abstractParagraphs: [
      [
        {
          text: "VA Smalltalk uses a configuration and source code management system known as ENVY/Developer. I am going to provide a brief overview of the core concepts of ENVY, as well as some of the strengths and weaknesses of ENVY in today's programming environments. I'll also talk about some of the new development we're doing in this area to include IPV6 support, SSL/TLS support and pluggable backend datastores like an alternative DBMS or Git. I'll also discuss some of the challenges we faced with ENVY during the port of VA Smalltalk to 64-bit.",
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Seth is the President/CEO of Instantiations, as well as a member of the technical staff. Before joining Instantiations in May of 2011, Seth spent 10 years developing software for the U.S. government. During this time he worked in a variety of domains to include stochastic simulation, operations research, grid computing and link analysis. He has a B.S. in Computer Science and an M.S. in Software Engineering.',
        },
      ],
    ],
  },
  '503-understanding-the-pharo-dev-process': {
    title: 'Understanding the Pharo Dev Process',
    videoId: 'tp-YnkZWnNw',
  },
  '504-kriv-metamodeling-of-custom-pharo-images': {
    title: 'Metamodeling of custom Pharo images',
    videoId: 'RfalKwgvf0I',
    presentationUrl:
      'https://www.slideshare.net/esug/metamodeling-of-custom-pharo-images',
    abstractParagraphs: [
      [
        {
          text: 'In this talk I will present a new improved implementation of the Smalltalk metamodel named Ring. I will describe reasons why a new implementation was required and I will show the basics of its architecture and how to use it from the user perspective. Then I will present how the Ring models can be used for bootstrapping of small custom task-oriented Pharo images and how to use them in practice.',
        },
      ],
    ],
    bioParagraphs: [
      [
        {
          text: 'Pavel Krivanek is a software engineer at Inria Nord Europe in the RmoD team. He actively participates in the Pharo open source community with the main focus on Pharo modularization, bootstrapping and cleaning. Currently he works on new metamodeling basics of the Moose platform.',
        },
      ],
    ],
  },
};
