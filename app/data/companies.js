// Companies using Smalltalk, shown on the "Companies" page.
//
// Source: https://esug.org/companies.html. That page embeds an ApptiveGrid
// page listing the companies registered through its "New Company" form;
// `currentCompanies` is a snapshot of that list (November 2026), so new
// submissions only show up here once this file is updated.
// `oldCompanies` are the page's "old entries" (Pillar source
// companies.pillar in https://github.com/ESUG/esug.github.io), grouped by
// country. They have not been reviewed yet: many of these companies
// probably no longer use Smalltalk, and many links are likely dead.

export const NEW_COMPANY_FORM_URL =
  'https://app.apptivegrid.de/form?uri=/api/a/6229d48b322a681a3a99ce35/622a08ac322a685a8d99d0f2/BDOmRVrRfuAzfyGa0wk2MzubjFOjUzUblB0RZ0cU3clqVrSlMSh&embedded=true';

export const currentCompanies = [
  {
    name: 'adesso insurance solutions GmbH',
    url: 'https://www.adesso-insure.de/',
  },
  {
    name: 'Agistral',
    url: 'https://agistral.ch',
  },
  {
    name: 'ApptiveGrid GmbH',
    url: 'http://www.apptivegrid.de',
  },
  {
    name: 'Audacis',
    url: 'https://all-objects-all-the-time.st/',
  },
  {
    name: 'Base.golf',
    url: 'https://base.golf',
  },
  {
    name: 'Berger-Levrault',
    url: 'http://www.berger-levrault.com/',
  },
  {
    name: 'Computas AS',
    url: 'http://computas.com',
  },
  {
    name: 'Inspired.org',
    url: 'https://www.inspired.org',
  },
  {
    name: 'Lifeware',
    url: 'https://www.lifeware.ch/',
  },
  {
    name: 'MetaCase',
    url: 'https://metacase.com/',
  },
  {
    name: 'mindclue GmbH',
    url: 'https://www.mindclue.ch/',
  },
  {
    name: 'Modelligent GmbH',
    url: 'https://modelligent.com',
  },
  {
    name: 'mutabiT',
    url: 'https://mutabit.com',
  },
  {
    name: 'Natural Software Services SL',
    url: 'http://natural-software.eu',
  },
  {
    name: 'Nootrix',
    url: 'https://plc3000.com',
  },
  {
    name: 'Orderflow',
    url: 'https://www.orderflow.be',
  },
  {
    name: 'Projector Software GmbH',
    url: 'https://projector.de',
  },
  {
    name: 'Spesenfuchs GmbH',
    url: 'https://spesenfuchs.de',
  },
  {
    name: 'Stel it',
    url: 'https://stel-it.nl',
  },
  {
    name: 'The Hokus Platform SàRL',
    url: 'https://www.thehokusplatform.com',
  },
  {
    name: 'Zweidenker GmbH',
    url: 'http://zweidenker.de',
  },
];

export const oldCompanies = [
  {
    country: 'Argentina',
    companies: [
      {
        name: '10 Pines',
        url: 'http://www.10pines.com/',
        note: 'Agile software development and services',
      },
      {
        name: 'aleReimondo',
        url: 'http://www.alereimondo.com/',
      },
      {
        name: 'Arduino Software',
        url: 'http://www.arduinosoftware.com/',
      },
      {
        name: 'Mercap Software',
        url: 'http://www.mercapsoftware.com/',
      },
      {
        name: 'Psiware',
        url: 'http://www.psiware.com.ar/',
      },
    ],
  },
  {
    country: 'Australia',
    companies: [
      {
        name: 'Bedarra',
        url: 'http://www.bedarra.com/',
      },
    ],
  },
  {
    country: 'Belgium',
    companies: [
      {
        name: 'CBFA',
        url: 'http://www.cbfa.be/',
        note: 'Uses a Smalltalk application for its insurance division',
      },
      {
        name: 'KBC',
        url: 'http://www.kbc.be/',
        note: 'Has a Smalltalk application for printing its fund guides',
      },
      {
        name: 'MediaGeniX NG',
        url: 'http://www.mediagenix.tv/',
      },
      {
        name: 'RAAT',
        url: 'http://www.raat.be/',
        note: 'Their application "Nectar" is based on VisualWorks',
      },
      {
        name: 'Roots',
        url: 'http://www.roots.be/',
        note: 'Smalltalk consultancy',
      },
    ],
  },
  {
    country: 'Brazil',
    companies: [
      {
        name: 'Apprise',
        url: 'http://www.apprise.com.br/',
      },
      {
        name: 'Objective Solutions',
        url: 'http://www.objective.com.br/',
      },
    ],
  },
  {
    country: 'Canada',
    companies: [
      {
        name: 'Bombardier Aerospace',
        url: 'http://iflybombardier.com/',
        note: 'Commercial aircraft, Toronto, Canada',
      },
      {
        name: 'Interfacing Technologies',
        url: 'http://www.interfacing.com/',
      },
      {
        name: "Marque d'or",
        url: 'http://www.marquedor.com/',
      },
      {
        name: 'Minidata',
        url: 'http://www.minidata.ca/',
        note: 'Provides scheduling software for distribution centres and batch manufacturing',
      },
      {
        name: 'Northwater Objects Inc.',
        url: 'http://www.northwatercapital.com/',
      },
      {
        name: 'SageTea Group',
        url: 'http://sageteagroup.com/',
      },
      {
        name: 'Telna',
        url: 'http://telna.com',
        note: 'Communications',
      },
    ],
  },
  {
    country: 'Czech Republic',
    companies: [
      {
        name: 'e-Fractal',
        url: 'http://www.efractal.cz/',
      },
    ],
  },
  {
    country: 'Denmark',
    companies: [
      {
        name: 'CDM',
        url: 'http://www.cdm.dk/',
      },
      {
        name: 'sPeople ApS',
        url: 'http://www.speople.dk/',
      },
    ],
  },
  {
    country: 'France',
    companies: [
      {
        name: 'AFC Europe',
        url: 'http://www.afceurope.com/',
      },
      {
        name: 'Laboratoire Pasteur-CERBA',
      },
      {
        name: 'Ontologos Corp',
        url: 'http://www.ontologos-corp.com/',
      },
      {
        name: 'Oxiane',
        url: 'http://www.oxiane.com',
      },
      {
        name: 'Pharo Consortium',
        url: 'http://consortium.pharo.org',
      },
      {
        name: 'Sodifrance',
        url: 'http://www.sodifrance.fr/',
      },
      {
        name: 'Sopragroup',
        url: 'http://www.sopragroup.com/',
      },
    ],
  },
  {
    country: 'Germany',
    companies: [
      {
        name: 'Andrena objects',
        url: 'http://www.andrena.de/',
      },
      {
        name: 'ATLAS.ti Scientific Software Development GmbH',
        url: 'http://www.atlasti.com/',
      },
      {
        name: 'Collogia',
        url: 'http://www.collogia.de',
        note: 'See also www.collphir.de',
      },
      {
        name: 'EWE TEL GmbH',
        url: 'http://www.ewetel.de/',
      },
      {
        name: 'eXept Software',
        url: 'http://www.exept.de/',
      },
      {
        name: 'Georg Heeg',
        url: 'http://www.heeg.de/',
      },
      {
        name: 'HRworks',
        url: 'http://www.hrworks.de/',
      },
      {
        name: 'Intelligent Views',
        url: 'http://www.i-views.de/',
      },
      {
        name: 'Kontolino',
        url: 'https://www.kontolino.de',
      },
      {
        name: 'OBJECT dynamics Software',
        url: 'http://www.objdyn.com/',
      },
      {
        name: 'objektfabrik',
        url: 'http://www.objektfabrik.de/',
      },
      {
        name: 'omeleon GmbH',
        url: 'http://omeleon.de/',
      },
      {
        name: 'SmallCharts',
        url: 'http://www.smallcharts.de/',
      },
      {
        name: 'Spesenfuchs',
        url: 'https://www.spesenfuchs.de',
      },
      {
        name: 'straightec GmbH',
        url: 'http://www.straightec.de/',
      },
      {
        name: 'Tomcat computer GmbH',
        url: 'http://www.tomcat.de/',
      },
      {
        name: 'Tricept Informationssysteme AG',
        url: 'http://www.tricept.de/',
      },
    ],
  },
  {
    country: 'Greece',
    companies: [
      {
        name: 'Delta Pi Systems',
        url: 'http://www.delta-pi-systems.eu/',
      },
    ],
  },
  {
    country: 'Hungary',
    companies: [
      {
        name: 'Gal Zsolt (CalmoSoft)',
        url: 'http://calmosoft.webnode.hu/',
      },
      {
        name: 'Giscom Kkt',
        url: 'http://www.giscom.hu/index.php/en/',
      },
    ],
  },
  {
    country: 'India',
    companies: [
      {
        name: 'HCL Technologies',
        url: 'http://www.hcltech.com/',
      },
      {
        name: 'VeServ',
        url: 'http://www.veserv.co.in/',
      },
    ],
  },
  {
    country: 'Italy',
    companies: [
      {
        name: 'EDOR Metodi Quantitativi',
        url: 'http://www.edor.it/',
      },
      {
        name: 'Prometeo Informatica',
        url: 'http://www.promet.it/',
      },
      {
        name: 'Telebit Consulting',
        url: 'http://www.telebitconsulting.it/',
      },
    ],
  },
  {
    country: 'Luxembourg',
    companies: [
      {
        name: 'Clearstream',
        note: 'Has an internal VSE application',
      },
    ],
  },
  {
    country: 'The Netherlands',
    companies: [
      {
        name: 'ADP',
        url: 'http://www.adp.nl/productenendiensten/personeelsadministratie/permanii/',
        note: 'Their application "Perman II" is based on ObjectStudio',
      },
      {
        name: 'LEI',
        url: 'http://www.lei.nl/',
      },
      {
        name: 'Nationaal Spaarfonds',
        url: 'http://www.nationaalspaarfonds.nl/',
        note: 'Part of Delta Lloyd Group. Its front office, mid office and insurance web shop are actively developed in VA Smalltalk.',
      },
      {
        name: 'Sogyo',
        url: 'http://www.sogyo.nl/',
        note: 'Consultancy and projects',
      },
      {
        name: 'Soops',
        url: 'http://www.soops.nl/',
      },
    ],
  },
  {
    country: 'Russia',
    companies: [
      {
        name: 'PharoCloud',
        url: 'https://www.pharocloud.com',
      },
      {
        name: 'Sakhalin Diocese of the Russian Orthodox Church',
        url: 'http://pravosakh.ru',
      },
    ],
  },
  {
    country: 'Slovenia',
    companies: [
      {
        name: 'e-racuni.com',
        url: 'http://e-racuni.com',
      },
      {
        name: 'Eranova',
        url: 'http://www.eranova.si/',
      },
      {
        name: 'Geoplin',
        url: 'http://www.geoplin.si/',
      },
    ],
  },
  {
    country: 'South Africa',
    companies: [
      {
        name: 'FinWorks',
        url: 'http://www.finworks.biz/',
      },
    ],
  },
  {
    country: 'Spain',
    companies: [
      {
        name: 'AGBO Business Architecture S.L.',
        url: 'http://www.easyjob.net/',
      },
    ],
  },
  {
    country: 'Switzerland',
    companies: [
      {
        name: 'AICOS',
        url: 'http://www.aicos.com/',
        note: 'VisualWorks applications for the statistical design of experiments and material flow simulation',
      },
      {
        name: 'Aloba',
        url: 'http://www.aloba.ch/',
      },
      {
        name: 'Brine',
        url: 'http://www.brinesa.ch/',
      },
      {
        name: 'DV',
        url: 'http://www.dvbern.ch/',
      },
      {
        name: 'ESEC',
        url: 'http://www.esec.com/',
      },
      {
        name: 'G.H.O.S.T',
        url: 'http://www.ghost.ch/',
      },
      {
        name: 'Graubündner Kantonalbank',
        url: 'http://www.gkb.ch/',
      },
      {
        name: 'Inextenso SARL',
        url: 'http://www.inextenso.com/',
      },
      {
        name: 'Less Informatik AG',
        url: 'http://www.less.ch/',
      },
      {
        name: 'Marwik Informatik',
        url: 'http://www.mix.ch/',
      },
      {
        name: 'MetaProg',
        url: 'http://www.metaprog.com/',
      },
      {
        name: 'netstyle.ch',
        url: 'http://www.netstyle.ch/',
      },
      {
        name: 'Suisa',
        url: 'http://www.suisa.ch/',
      },
    ],
  },
  {
    country: 'United Kingdom',
    companies: [
      {
        name: 'J.P. Morgan',
        url: 'http://www.jpmorgan.com/',
      },
      {
        name: 'LShift',
        url: 'http://www.lshift.net/',
      },
      {
        name: 'Object Arts',
        url: 'http://www.object-arts.com/',
      },
      {
        name: 'PineSoft',
        url: 'http://www.pinesoft.co.uk/',
      },
    ],
  },
  {
    country: 'United States',
    companies: [
      {
        name: 'Caesar Systems',
        url: 'http://caesarsystems.com/',
      },
      {
        name: 'Cincom Smalltalk',
        url: 'http://smalltalk.cincom.com/',
      },
      {
        name: 'Corlew Solutions',
        url: 'http://corlewsolutions.com/',
      },
      {
        name: 'FPL',
        note: 'Juno Beach, Florida',
      },
      {
        name: 'GemStone',
        url: 'http://www.gemstone.com/',
      },
      {
        name: 'HRWorks',
        url: 'http://www.hrworks.com/',
      },
      {
        name: 'ICE',
        note: 'Atlanta',
      },
      {
        name: 'Instantiations',
        url: 'http://www.instantiations.com/',
      },
      {
        name: 'J.P. Morgan',
        url: 'http://www.jpmorgan.com/',
      },
      {
        name: 'Kscape',
        url: 'http://www.kscape.com/',
      },
      {
        name: 'NYK',
        note: 'New Jersey/Washington',
      },
      {
        name: 'OOCL',
        note: 'San Jose, California',
      },
      {
        name: 'Shaffer Consulting',
        url: 'http://www.shaffer-consulting.com/',
      },
      {
        name: 'US Medical Record Specialists',
        url: 'http://www.usmedrec.com/',
      },
    ],
  },
];
