<template>
  <main class="py-16 px-4 md:px-10 lg:px-14">
    <h1 class="text-4xl lg:text-5xl font-bold text-center text-primary-blue mb-12">
      {{ pageTitle }}
    </h1>
    <div
      v-if="filteredProducts.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.name"
        class="bg-white rounded-lg shadow-lg overflow-hidden p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-32 h-32 object-contain mx-auto mb-4"
        />
        <h3 class="text-xl font-bold text-deep-navy mb-1">{{ product.name }}</h3>
        <p class="text-sm text-gray-600">{{ product.desc }}</p>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      <p>No products found for this category.</p>
      <router-link to="/products" class="text-brand-red hover:underline mt-4 inline-block">
        &larr; Back to all products
      </router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import productsData from '@/assets/data/products.json'

const route = useRoute()
const allProducts = ref(productsData)

const filteredProducts = computed(() => {
  return allProducts.value.filter((product) => product.path === route.params.category)
})

const pageTitle = computed(() => {
  const category = route.params.category as string
  const product = allProducts.value.find((p) => p.path === category)
  return product ? product.name : category.replace(/-/g, ' ').toUpperCase()
})

watch(
  () => route.params.category,
  (newCategory) => {
    // You can perform an action here if the category changes, e.g., fetching new data
    console.log(`Category changed to: ${newCategory}`)
  },
  { immediate: true },
)
</script>
