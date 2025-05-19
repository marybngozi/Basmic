<script setup lang="ts">
import NavBar from './NavBar.vue'
import { motion } from 'motion-v'
</script>

<template>
  <motion.header
    :initial="{ opacity: 0, y: -20 }"
    :animate="{ opacity: 1, y: 30, transition: { duration: 0.5, ease: 'easeOut' } }"
    :whileHover="{ scale: 1.01, transition: { duration: 0.2 } }"
    class="flex justify-between items-center h-14 md:h-16 shadow rounded-xl px-3 md:px-4 bg-white"
  >
    <router-link to="/" class="flex items-center gap-1 md:gap-3">
      <img
        src="@/assets/images/logo.svg"
        alt="Basmic Ventures Nigeria Limited"
        class="size-5 md:size-12"
      />

      <motion.h1
        :initial="{ opacity: 0, x: -10 }"
        :animate="{ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } }"
        class="text-base md:text-xl lg:text-2xl text-primary-blue font-semibold"
      >
        Basmic Ventures
        <span class="inline md:hidden">Nig</span>
        <span class="hidden md:inline">Nigeria</span>

        <span class="inline md:hidden"> Ltd</span>
        <span class="hidden md:inline"> Limited</span>
      </motion.h1>
    </router-link>

    <motion.div
      :initial="{ opacity: 0, x: 10 }"
      :animate="{ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } }"
    >
      <NavBar />
    </motion.div>
  </motion.header>
</template>
