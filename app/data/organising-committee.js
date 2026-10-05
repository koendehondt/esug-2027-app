// Data for the Organising Committee page.
//
// Each chair is `{ name, affiliation }`; `affiliation` (organisation and/or
// country) is optional and shown on a second line. Jane/John Doe entries are
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
    id: 'innovation-award-chairs',
    title: 'Innovation Award Chairs',
    names: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  },
  {
    id: 'iwst-chairs',
    title: 'IWST 2027 Chairs',
    names: [
      { name: 'Nahuel Palumbo', affiliation: 'Argentina' },
      { name: 'Guillermo Polito', affiliation: 'Inria Lille, France' },
      { name: 'Gordana Rakić', affiliation: 'University of Novi Sad, Serbia' },
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
    names: [{ name: 'Pablo Tesone', affiliation: 'Pharo Consortium, France' }],
  },
  {
    id: 'technology-chairs',
    title: 'Technology Chairs',
    names: [{ name: 'Jane Doe' }, { name: 'John Doe' }],
  },
];
