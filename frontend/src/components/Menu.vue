<template>
  <div class="hidden lg:block">
    <ul class="flex gap-3">
      <li v-for="item in menu" :key="item.name">
        <router-link :to="{ name: item.path }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  menu: Object,
})
</script>
