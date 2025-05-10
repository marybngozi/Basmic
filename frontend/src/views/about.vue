<template>
  <div class="about">
    <h1 class="text-2xl">This is an {{ route.name }} page</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style></style>
