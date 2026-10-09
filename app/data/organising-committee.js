// Data for the Organising Committee page.
//
// Each chair is `{ name, organisation, country }`; `organisation` and
// `country` are optional and each shown on its own line below the name. Jane/John Doe entries are
// placeholders until the roles are filled -- update each entry's `names` once
// real chairs are confirmed, and remove the
// "not selected yet" notice on the page once they are.

export default [
  {
    id: 'conference-chair',
    title: 'Conference Chair',
    names: [{ name: 'Jane Doe' }],
  },
  {
    id: 'local-organisation-chairs',
    title: 'Local Organisation Chairs',
    names: [
      {
        name: 'Koen De Hondt',
        organisation: 'all: objects all: theTime',
        country: 'Belgium',
      },
      {
        name: 'Johan Brichau',
        country: 'Belgium',
      },
    ],
  },
  {
    id: 'innovation-award-chairs',
    title: 'Technology Innovation Awards Chairs',
    names: [
      {
        name: 'Noury Bouraqadi',
        organisation: 'IMT Nord Europe',
        country: 'France',
      },
      {
        name: 'Luc Fabresse',
        organisation: 'IMT Nord Europe',
        country: 'France',
      },
    ],
  },
  {
    id: 'iwst-chairs',
    title: 'IWST 2027 Chairs',
    names: [
      {
        name: 'Nahuel Palumbo',
        organisation: 'Universidad Nacional de Quilmes',
        country: 'Argentina',
      },
      {
        name: 'Guillermo Polito',
        organisation: 'Inria Lille',
        country: 'France',
      },
      {
        name: 'Gordana Rakić',
        organisation: 'University of Novi Sad',
        country: 'Serbia',
      },
    ],
  },
  {
    id: 'administration-chair',
    title: 'Administration Chair',
    names: [
      {
        name: 'Pablo Tesone',
        organisation: 'Pharo Consortium',
        country: 'France',
      },
    ],
  },
];
