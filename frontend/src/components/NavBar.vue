<template>
  <nav class="text-deep-navy">
    <Menu :menu="menuItems" />

    <button
      class="lg:hidden px-2 py-1 bg-gray-100 border"
      @click="showMobileMenu = !showMobileMenu"
    >
      <span class="sr-only">Open menu</span>
      <Icon icon="mdi:menu" color="#1E4D8C" height="24" />
    </button>

    <MobileMenu :menu="menuItems" v-if="showMobileMenu" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MobileMenu from './MobileMenu.vue'
import Menu from './Menu.vue'
// import { motion } from 'motion-v'

const menuItems = [
  {
    name: 'About',
    path: 'about',
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

const showMobileMenu = ref(false)
</script>
