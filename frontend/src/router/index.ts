import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/products',
      name: 'products',
      component: About,
      children: [
        {
          path: 'building-materials',
          name: 'building-materials',
          component: About,
          children: [
            {
              path: 'doors',
              name: 'doors',
              component: About,
            },
            {
              path: 'roofs-and-ceilings',
              name: 'roofs-and-ceilings',
              component: About,
            },
            {
              path: 'tiles',
              name: 'tiles',
              component: About,
            },
            {
              path: 'paints',
              name: 'paints',
              component: About,
            },
          ],
        },
        {
          path: 'installation-services',
          name: 'installation-services',
          component: About,
        },
      ],
    },
    {
      path: '/place-order',
      name: 'place-order',
      component: About,
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: About,
    },
  ],
})

export default router
