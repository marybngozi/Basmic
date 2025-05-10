const Routes = [
  {
    name: 'About',
    path: 'about',
    desc: 'About us.',
  },
  {
    name: 'Products',
    path: 'products',
    children: [
      {
        name: 'Building Materials',
        path: 'building-materials',
        desc: 'Building Materials of all kinds, doors, POP ceiling, tiles, paints, plumbing materials etc.',
        children: [
          {
            name: 'Doors',
            path: 'doors',
            desc: 'Security Doors and strong house doors.',
          },
          {
            name: 'Roofs and Ceilings',
            path: 'roofs-and-ceilings',
            desc: 'Shinges Roofs, POP ceilings, PVC ceilings and water collector systems.',
          },
          {
            name: 'Tiles',
            path: 'tiles',
            desc: 'Tiles and tiles accessories.',
          },
          {
            name: 'Paints',
            path: 'paints',
            desc: 'High quality wall and floor paints',
          },
        ],
      },
      {
        name: 'Installation Services',
        path: 'installation-services',
        desc: 'Installation Services for building materials.',
      },
    ],
  },
  {
    name: 'Place an Order',
    path: 'place-order',
    desc: 'Place an order for your building materials needs.',
  },
  {
    name: 'Contact Us',
    path: 'contact-us',
    desc: 'Contact us for your building materials needs.',
  },
]

export default Routes
