// Scientific publications sponsored by ESUG, grouped by sponsoring year.
//
// Source: https://esug.org/publications.html ("Your Scientific
// Publication"). Each entry carries the authors, the title, the venue
// (conference, journal or magazine) and an optional DOI URL (only doi.org
// links are kept, since other URLs tend to change or disappear). Where the source
// page lists an affiliation (2008-2009 entries), it is appended to the
// authors in parentheses. Obvious typos in the source were fixed ("SPLASH
// 202" -> "SPLASH 2020", "Window Plangue" -> "Window Plague"), and a
// duplicate 2009 "Autumn Leaves" entry was dropped. The source lists
// "Misery Loves Company" and "Untangling Fine-Grained Code Changes" under
// SAC 2015; their DOIs show they appeared at SANER 2015, so the venue was
// corrected. Dead 2008-2009 conference-website links (checked November 2026)
// were replaced with the paper's DOI. Papers the source lists without a link
// were given their DOI where Crossref has one (checked November 2026); only
// "Do Objects need Occurrence Typing?" (JCC 2012) and the ReCoSoC 2008 paper
// have none.

export default [
  {
    year: 2020,
    papers: [
      {
        authors: 'Matteo Marra, Guillermo Polito, Elisa Gonzalez Boix',
        title: 'Framework-Aware Debugging with Stack Tailoring',
        venue: '16th Dynamic Languages Symposium (DLS) at SPLASH 2020',
        url: 'https://doi.org/10.1145/3426422.3426982',
      },
    ],
  },
  {
    year: 2019,
    papers: [
      {
        authors: 'Juraj Kubelka, Romain Robbes, Alexandre Bergel',
        title:
          'Live Programming and Software Evolution: Questions during a Programming Change Task',
        venue:
          '27th IEEE/ACM International Conference on Program Comprehension, 2019',
        url: 'https://doi.org/10.1109/ICPC.2019.00017',
      },
      {
        authors: 'Matteo Marra, Guillermo Polito, Elisa Gonzalez Boix',
        title:
          'Out-of-place debugging: A debugging architecture to reduce debugging interference',
        venue:
          'The Art, Science and Engineering of Programming, Vol. 3(2), 2018',
        url: 'https://doi.org/10.22152/programming-journal.org/2019/3/3',
      },
    ],
  },
  {
    year: 2016,
    papers: [
      {
        authors:
          'Ignacio Fernandez, Alexandre Bergel, Juan Pablo Sandoval Alcocer, Alejandro Infante and Tudor Gîrba',
        title: 'Glyph-based software component identification',
        venue:
          '2016 IEEE 24th International Conference on Program Comprehension (ICPC), p. 1-10, 2016',
        url: 'https://doi.org/10.1109/ICPC.2016.7503713',
      },
      {
        authors: 'Boris Spasojevic, Mircea Lungu and Oscar Nierstrasz',
        title:
          'A Case Study on Type Hints in Method Argument Names in Pharo Smalltalk Projects',
        venue:
          '2016 IEEE 23rd International Conference on Software Analysis, Evolution, and Reengineering (SANER), p. 283-292, 2016',
        url: 'https://doi.org/10.1109/SANER.2016.41',
      },
    ],
  },
  {
    year: 2015,
    papers: [
      {
        authors:
          'Alvao Jose Peralta, Thanh Le Nguyen Tuan, Serge Stinckwich, Chihab Hanachi, Alexandre Bergel and Vinh Ho Tuong',
        title:
          'A Tool for Assessing Quality of Rescue Plans by Combining Visualizations of Different Business Process Perspectives',
        venue:
          'International Conference on Information Systems for Crisis Response and Management in Mediterranean Countries, Lecture Notes in Business Information Processing, Vol. 233, p. 155-166, 2015',
        url: 'https://doi.org/10.1007/978-3-319-24399-3_14',
      },
      {
        authors:
          'Paloma Oliveira, Marco Tulio Valente, Alexandre Bergel and Alexander Serebrenik',
        title: 'Validating metric thresholds with developers: An early result',
        venue:
          '2015 IEEE International Conference on Software Maintenance and Evolution (ICSME), p. 546-550, 2015',
        url: 'https://doi.org/10.1109/icsm.2015.7332511',
      },
      {
        authors: 'Juan Pablo Sandoval Alcocer and Alexandre Bergel',
        title:
          'Tracking down performance variation against source code evolution',
        venue: 'ACM SIGPLAN Notices, Vol. 51, No. 2, p. 129-139, 2015',
        url: 'https://doi.org/10.1145/2936313.2816718',
      },
      {
        authors:
          'Andrei Chis, Tudor Girba, Oscar Nierstrasz and Aliaksei Syrel',
        title: 'The Moldable Inspector',
        venue:
          '2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), p. 44-60, 2015',
        url: 'https://doi.org/10.1145/2814228.2814234',
      },
      {
        authors:
          'Guido Chari, Diego Garbervetsky, Stefan Marr and Stéphane Ducasse',
        title: 'Towards fully reflective environments',
        venue:
          '2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), p. 240-253, 2015',
        url: 'https://doi.org/10.1145/2814228.2814241',
      },
      {
        authors:
          'Guillermo Polito, Stéphane Ducasse, Noury Bouraqadi and Luc Fabresse',
        title:
          'A bootstrapping infrastructure to build and extend Pharo-like languages',
        venue:
          '2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), p. 183-196, 2015',
        url: 'https://doi.org/10.1145/2814228.2814236',
      },
      {
        authors:
          'Guillermo Polito, Stéphane Ducasse, Noury Bouraqadi and Luc Fabresse',
        title: 'Virtualization support for dynamic core library update',
        venue:
          '2015 ACM International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward!), p. 211-223, 2015',
        url: 'https://doi.org/10.1145/2814228.2814233',
      },
      {
        authors:
          'Nevena Milojković, Andrea Caracciolo, Mircea Lungu, Oscar Nierstrasz, David Röthlisberger and Romain Robbes',
        title:
          'Polymorphism in the Spotlight: Studying its Prevalence in Java and Smalltalk',
        venue:
          '2015 IEEE 23rd International Conference on Program Comprehension, p. 186-195, 2015',
        url: 'https://doi.org/10.1109/ICPC.2015.29',
      },
      {
        authors: 'Tommaso Dal Sasso, Andrea Mocci and Michele Lanza',
        title:
          'Misery Loves Company - CrowdStacking Traces to Aid Problem Detection',
        venue:
          '2015 IEEE 22nd International Conference on Software Analysis, Evolution, and Reengineering (SANER), p. 131-140, 2015',
        url: 'https://doi.org/10.1109/SANER.2015.7081823',
      },
      {
        authors:
          'Martin Dias, Alberto Bacchelli, Georgios Gousios, Damien Cassou and Stéphane Ducasse',
        title: 'Untangling Fine-Grained Code Changes',
        venue:
          '2015 IEEE 22nd International Conference on Software Analysis, Evolution, and Reengineering (SANER), p. 341-350, 2015',
        url: 'https://doi.org/10.1109/SANER.2015.7081844',
      },
    ],
  },
  {
    year: 2014,
    papers: [
      {
        authors:
          'Nick Papoulias, Marcus Denker, Stéphane Ducasse, Luc Fabresse',
        title:
          'Reifying the reflectogram: Towards explicit control for implicit reflection',
        venue:
          'Proceedings of the 30th Annual ACM Symposium on Applied Computing, p. 1978-1985, 2015',
        url: 'https://doi.org/10.1145/2695664.2695883',
      },
      {
        authors: 'Yuriy Tymchuk, Andrea Mocci, Michele Lanza',
        title: 'Code Review: Veni, ViDI, Vici',
        venue:
          '2015 IEEE 22nd International Conference on Software Analysis, Evolution, and Reengineering (SANER), p. 151-160, 2015',
        url: 'https://doi.org/10.1109/SANER.2015.7081825',
      },
      {
        authors:
          'Bui Thi Mai Anh, Serge Stinckwich, Mikal Ziane, Benjamin Roche and Ho Tuong Vinh',
        title:
          'KENDRICK: a Domain Specific Language and Platform for Mathematical Epidemiological Modelling',
        venue:
          '11th IEEE-RIVF International Conference on Computing and Communication Technologies (RIVF 2015), 2015',
        url: 'https://doi.org/10.1109/RIVF.2015.7049888',
      },
      {
        authors: 'Boris Spasojevic, Mircea Lungu and Oscar Nierstrasz',
        title:
          'Mining the Ecosystem to Improve Type Inference For Dynamically Typed Languages',
        venue: 'Onward! 2014, 2014',
        url: 'https://doi.org/10.1145/2661136.2661141',
      },
      {
        authors:
          'Oscar Callau, Romain Robbes, Eric Tanter, David Rothlisberger and Alexandre Bergel',
        title:
          'On the Use of Type Predicates in Object-Oriented Software: The Case of Smalltalk',
        venue: 'SPLASH 2014 Dynamic Languages Symposium, 2014',
        url: 'https://doi.org/10.1145/2661088.2661091',
      },
      {
        authors: 'Johan Fabry and Miguel Campusano',
        title: 'Live Robot Programming',
        venue:
          '14th edition of the Ibero-American Conference on Artificial Intelligence (IBERAMIA 2014), Santiago de Chile, 2014',
        url: 'https://doi.org/10.1007/978-3-319-12027-0_36',
      },
      {
        authors: 'Yuriy Tymchuk, Andrea Mocci and Michele Lanza',
        title: 'Collaboration in Open-Source Projects: Myth or Reality?',
        venue:
          '11th Working Conference on Mining Software Repositories (MSR 2014), 2014',
        url: 'https://doi.org/10.1145/2597073.2597093',
      },
    ],
  },
  {
    year: 2013,
    papers: [
      {
        authors: 'Johan Fabry and Alexandre Bergel',
        title: 'Design Decisions in AspectMaps',
        venue: '1st IEEE Working Conference on Software Visualization, 2013',
        url: 'https://doi.org/10.1109/VISSOFT.2013.6650548',
      },
      {
        authors: 'Jannick Laval, Luc Fabresse and Noury Bouraqadi',
        title: 'A Methodology for Testing Mobile Autonomous Robots',
        venue:
          'IROS 2013 conference (IEEE/RSJ International Conference on Intelligent Robots and Systems), 2013',
        url: 'https://doi.org/10.1109/IROS.2013.6696599',
      },
    ],
  },
  {
    year: 2012,
    papers: [
      {
        authors:
          "Fernando Olivero, Michele Lanza, Marco D'Ambros and Romain Robbes",
        title: 'Tracking Human-Centric Controlled Experiments with Biscuit',
        venue:
          'Proceedings of the Workshop on Evaluation and Usability of Programming Languages and Tools (PLATEAU) at the ACM Onward! and SPLASH Conferences, October 2012',
        url: 'https://doi.org/10.1145/2414721.2414723',
      },
      {
        authors: 'Jorge Ressia, Alexandre Bergel, and Oscar Nierstrasz',
        title: 'Object-Centric Debugging',
        venue: 'Proceedings of ICSE 2012, p. 485-495, 2012',
        url: 'https://doi.org/10.1109/ICSE.2012.6227167',
      },
      {
        authors:
          "Alberto Bacchelli, Tommaso dal Sasso, Marco D'Ambros, and Michele Lanza",
        title: 'Content Classification of Development Emails',
        venue: 'Proceedings of ICSE 2012, p. 375-385, 2012',
        url: 'https://doi.org/10.1109/ICSE.2012.6227177',
      },
      {
        authors: 'Oscar Callau',
        title: 'Do Objects need Occurrence Typing?',
        venue: 'JCC 2012 (Jornadas Chilenas de Computación), 2012',
      },
    ],
  },
  {
    year: 2011,
    papers: [
      {
        authors:
          "Fernando Olivero, Michele Lanza, Marco D'Ambros, and Romain Robbes",
        title:
          'Enabling Program Comprehension through a Visual Object-focused Development Environment',
        venue: 'Proceedings of VL/HCC 2011, 2011',
        url: 'https://doi.org/10.1109/VLHCC.2011.6070389',
      },
      {
        authors: "Alberto Bacchelli, Michele Lanza, and Marco D'Ambros",
        title: 'Miler: A Toolset for Exploring Email Data',
        venue: 'Demonstration at ICSE 2011, 2011',
        url: 'https://doi.org/10.1145/1985793.1985984',
      },
      {
        authors: 'Alexandre Bergel',
        title:
          'Counting Messages as a Proxy for Average Execution Time in Pharo',
        venue: 'Proceedings of ECOOP 2011, 2011',
        url: 'https://doi.org/10.1007/978-3-642-22655-7_25',
      },
      {
        authors: 'Richard Wettel, Michele Lanza, and Romain Robbes',
        title: 'Software Systems as Cities: A Controlled Experiment',
        venue: 'Proceedings of ICSE 2011, p. 551-560, 2011',
        url: 'https://doi.org/10.1145/1985793.1985868',
      },
    ],
  },
  {
    year: 2010,
    papers: [
      {
        authors:
          'Jean-Baptiste Arnaud, Marcus Denker, Stéphane Ducasse, Damien Pollet, Alexandre Bergel and Mathieu Suen',
        title: 'Read-Only Execution for Dynamic Languages',
        venue:
          'Proceedings of TOOLS EUROPE 2010, LNCS 6141, p. 117-136, Springer, 2010',
        url: 'https://doi.org/10.1007/978-3-642-13953-6_7',
      },
    ],
  },
  {
    year: 2009,
    papers: [
      {
        authors:
          'David Röthlisberger, Oscar Nierstrasz and Stéphane Ducasse (Software Composition Group, University of Bern)',
        title: 'Autumn Leaves: Curing the Window Plague in IDEs',
        venue: 'Working Conference on Reverse Engineering (WCRE 2009)',
        url: 'https://doi.org/10.1109/WCRE.2009.18',
      },
      {
        authors: 'Lukas Renggli, Marcus Denker and Oscar Nierstrasz',
        title:
          'Language Boxes: Bending the Host Language with Modular Language Changes',
        venue:
          '2nd International Conference on Software Language Engineering (SLE 2009)',
        url: 'https://doi.org/10.1007/978-3-642-12107-4_20',
      },
      {
        authors:
          'Jannik Laval, Simon Denier, Stéphane Ducasse, Alexandre Bergel',
        title:
          'Identifying cycle causes with Enriched Dependency Structural Matrix',
        venue: 'WCRE 2009',
        url: 'https://doi.org/10.1109/WCRE.2009.11',
      },
      {
        authors:
          'Le Van Tuan, Noury Bouraqadi, Victor Moraru, Serge Stinckwich and Arnaud Doniec (UMMISCO UMI 209 (IRD/UPMC/MSI), Ecole des Mines de Douai)',
        title: 'Making Networked Robot Connectivity-Aware',
        venue: 'ICRA 2009',
        url: 'https://doi.org/10.1109/ROBOT.2009.5152471',
      },
      {
        authors: "Marco D'Ambros, Michele Lanza (University of Lugano)",
        title:
          'Promises and Perils of Porting Software Visualization Tools to the Web',
        venue: '11th IEEE International Symposium on Web Systems Evolution',
        url: 'https://doi.org/10.1109/WSE.2009.5631247',
      },
    ],
  },
  {
    year: 2008,
    papers: [
      {
        authors:
          'Damien Picard, Loïc Lagadec (STICC - Université de Bretagne Occidentale)',
        title:
          'Multi-level simulation of Heterogeneous Reconfigurable Platforms',
        venue: 'ReCoSoC 2008',
      },
      {
        authors:
          'Richard Wettel, Michele Lanza (REVEAL - University of Lugano)',
        title: 'Visually Localizing Design Problems with Disharmony Maps',
        venue: 'SoftVis 2008',
        url: 'https://doi.org/10.1145/1409720.1409745',
      },
      {
        authors: 'Hani Abdeen (RMOD INRIA Lille Nord Europe)',
        title:
          'Package Reference Fingerprint: a Rich and Compact Visualization to Understand Package Relationship',
        venue: 'CSMR 2008',
        url: 'https://doi.org/10.1109/CSMR.2008.4493316',
      },
      {
        authors: "Marco D'Ambros (REVEAL - University of Lugano)",
        title:
          'A Flexible Framework to Support Collaborative Software Evolution Analysis',
        venue: 'CSMR 2008',
        url: 'https://doi.org/10.1109/CSMR.2008.4493295',
      },
      {
        authors:
          'Adrian Lienhard (Software Composition Group, University of Bern)',
        title: 'Practical Object-Oriented Back-in-Time Debugging',
        venue: 'ECOOP 2008',
        url: 'https://doi.org/10.1007/978-3-540-70592-5_25',
      },
      {
        authors:
          'Adrian Lienhard (Software Composition Group, University of Bern)',
        title:
          'Test Blueprints, Exposing Side Effects in Execution Traces to Support Writing Unit Tests',
        venue: 'CSMR 2008',
        url: 'https://doi.org/10.1109/CSMR.2008.4493303',
      },
      {
        authors: 'Guillermo Adrián Molina',
        title: 'Huemul, a Smalltalk Implementation',
        venue: 'S3 Workshop 2008',
        url: 'https://doi.org/10.1007/978-3-540-89275-5_4',
      },
      {
        authors:
          'David Röthlisberger (Software Composition Group, University of Bern)',
        title: 'Exploiting Runtime Information in the IDE',
        venue: 'ICPC 2008',
        url: 'https://doi.org/10.1109/ICPC.2008.32',
      },
    ],
  },
];
