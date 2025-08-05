import Products from '@/assets/data/products.json'

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
        children: Products.filter((product) => product.cat === 'building-materials'),
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
