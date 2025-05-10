<script setup lang="ts">
import NavBar from './NavBar.vue'
</script>

<template>
  <header
    class="flex justify-between items-center h-14 md:h-16 shadow rounded-xl px-3 md:px-4 bg-white"
  >
    <router-link to="/" class="flex items-center gap-1 md:gap-3">
      <img
        src="@/assets/images/logo.svg"
        alt="Basmic Ventures Nigeria Limited"
        class="size-5 md:size-12"
      />

      <h1 class="text-base md:text-xl lg:text-2xl text-primary-blue font-semibold">
        Basmic Ventures
        <span class="inline md:hidden">Nig</span>
        <span class="hidden md:inline">Nigeria</span>

        <span class="inline md:hidden"> Ltd</span>
        <span class="hidden md:inline"> Limited</span>
      </h1>
    </router-link>

    <NavBar />
  </header>
</template>
