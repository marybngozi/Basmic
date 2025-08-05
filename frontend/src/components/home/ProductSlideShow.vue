<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Products from '@/assets/data/products.json'

const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  autoplay: 5500,
  // slideEffect: 'fade' as 'fade',
  // height: '250px',
  gap: 50,
  pagination: false,
  breakpoint: 'carousel',
  // breakpoints: {
  //   400: {
  //     height: 'auto',
  //   },
  //   600: {
  //     height: 'auto',
  //   },
  // },
}
</script>

<template>
  <div class="mt-9 lg:mt-0 w-full">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(product, i) in Products" :key="i">
        <!-- TODO
         On hover, add  an overlay on the routerlink, and show the text, buy now
        -->
        <router-link
          :to="{ name: product.path }"
          class="w-[350px] h-[300px] relative overflow-hidden block hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-t-lg shadow-xl group"
        >
          <div class="w-full h-[270px]">
            <img
              :src="product.image"
              :alt="product.name"
              class="size-full object-cover rounded-lg shadow-lg border border-light-neutral/60"
            />
            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            >
              <span
                class="text-white text-md font-bold tracking-wide border border-white/60 p-2 rounded-lg px-4 hover:bg-white hover:text-deep-navy transition-colors duration-300 cursor-pointer"
              >
                Buy Now
              </span>
            </div>
          </div>

          <div
            class="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-deep-navy to-transparent z-20"
          >
            <h3 class="text-xl font-semibold text-white">{{ product.name }}</h3>
            <p class="text-sm text-white">{{ product.desc }}</p>
          </div>
        </router-link>
      </Slide>
    </Carousel>
  </div>
</template>
