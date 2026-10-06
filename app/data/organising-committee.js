// Data for the Organising Committee page.
//
// Each chair is `{ name, organisation, country }`; `organisation` and
// `country` are optional and each shown on its own line below the name. Jane/John Doe entries are
// placeholders until the roles are filled -- update each entry's `names` once
// real chairs are confirmed, and remove the
// "not selected yet" notice on the page once they are.

export default [
  {
    id: 'conference-chairs',
    title: 'Conference Chairs',
    names: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  },
  {
    id: 'innovation-award-chair',
    title: 'Innovation Award Chair',
    names: [
      {
        name: 'Noury Bouraqadi',
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
    id: 'newcomers-chairs',
    title: 'Newcomers Chairs',
    names: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
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
  {
    id: 'technology-chairs',
    title: 'Technology Chairs',
    names: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  },
];
