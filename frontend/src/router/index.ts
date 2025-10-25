import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Products from '../views/products.vue'
import ProductCategory from '../views/products-category.vue'

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
      component: Products,
    },
    {
      path: '/products/:category',
      name: 'product-category',
      component: ProductCategory,
    },
    {
      path: '/products/:category/:kind/:item',
      name: 'product-category',
      component: ProductCategory,
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
