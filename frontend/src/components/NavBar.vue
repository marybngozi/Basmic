<template>
  <nav class="text-deep-navy h-full">
    <Menu :menu="menuItems" />

    <button
      class="lg:hidden px-2 py-1 bg-gray-100 border"
      @click="showMobileMenu = !showMobileMenu"
    >
      <span class="sr-only">Open menu</span>
      <Icon icon="mdi:menu" color="#1E4D8C" height="24" />
    </button>

    <MobileMenu :menu="menuItems" :showMobileMenu="showMobileMenu" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import MobileMenu from './MobileMenu.vue'
import Menu from './Menu.vue'
import menuItems from '@/libs/constants/menu'

const showMobileMenu = ref(false)
</script>
