<template>
  <div class="flex flex-col min-h-screen">
    <Header class="transition-all duration-300 z-30 w-11/12 sm:w-10/12 mx-auto mt-4" />

    <section class="relative bg-primary-blue w-full overflow-hidden text-center text-white py-24">
      <div
        class="absolute inset-0 bg-hero-pattern-products bg-cover bg-center bg-no-repeat opacity-20"
      ></div>
      <motion.div
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }"
        class="relative z-10"
      >
        <h1 class="text-4xl lg:text-5xl font-bold">Our Products & Services</h1>
        <p class="mt-4 text-lg max-w-2xl mx-auto">
          Explore our wide range of high-quality building materials and expert services.
        </p>
      </motion.div>
    </section>

    <main class="py-16 px-4 md:px-10 lg:px-14 flex-1">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <ProductCard v-for="product in products" :key="product.path" :product="product" />
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/home/Footer.vue'
import ProductCard from '@/components/products/Card.vue'
import { motion } from 'motion-v'
import productsData from '@/assets/data/products.json'

const products = ref(productsData)
</script>

<style scoped>
/* Optional: Adds a specific background image for the hero section */
.bg-hero-pattern-products {
  background-image: url('@/assets/images/product-hero.jpeg');
}
</style>
