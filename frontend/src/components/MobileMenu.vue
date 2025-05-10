<template>
  <div
    class="lg:hidden bg-white absolute top-[55px] right-0 rounded-l-2xl w-max min-w-[200px] py-3 shadow-lg"
  >
    <ul>
      <li v-for="item in menu" :key="item.name">
        <router-link :to="{ name: item.path }" class="px-4 py-3 flex hover:bg-sky-blue">
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
