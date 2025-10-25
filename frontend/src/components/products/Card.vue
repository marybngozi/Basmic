<template>
  <div
    class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
  >
    <div class="relative overflow-hidden h-48">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold text-deep-navy mb-1">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mb-4">{{ product.desc }}</p>
      <router-link
        :to="`/products/${product.path}`"
        class="block w-full text-center bg-brand-red text-white py-2 rounded-full font-semibold hover:bg-brand-red/90 transition-colors duration-300"
      >
        View More
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Product {
  name: string
  path: string
  desc: string
  image: string
  cat: string
}

defineProps<{
  product: Product
}>()
</script>
