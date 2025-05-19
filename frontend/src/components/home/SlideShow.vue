<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 5000,
  slideEffect: 'fade' as 'fade',
  height: '250px',
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

const slides = [
  {
    title: 'Building Materials Distributor',
    content: 'Trusted dealers in Wholesales and Retails',
  },
  {
    title: 'Roofing and Ceilings Materials',
    content: 'POP and PVC Ceilings, Stone-coated Roof and, Water Collector Systems.',
  },
  {
    title: 'Doors and Accessories',
    content: 'Security Doors and Strong House Doors.',
  },
  {
    title: 'Quality Paints and Tiles',
    content: 'All types of Paints, Quality Wall and Floor Tiles',
  },
]
</script>

<template>
  <!-- <div class="mt-9 lg:mt-0 h-2/3 md:h-5/6 lg:h-[400px] w-full"> -->
  <div class="mt-9 lg:mt-0 w-full md:w-[640px] mx-auto">
    <Carousel v-bind="carouselConfig">
      <Slide v-for="(slide, i) in slides" :key="i">
        <div class="w-full md:h-[240px] lg:h-[180px] -translate-y-3">
          <h1
            class="text-4xl leading-tight sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white lg:-translate-y-6"
          >
            {{ slide.title }}
          </h1>

          <h2
            class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white md:translate-y-2 lg:-translate-y-3 mt-4"
          >
            {{ slide.content }}
          </h2>
        </div>
      </Slide>

      <template #addons>
        <!-- <Navigation /> -->
        <!-- <Pagination /> -->
      </template>
    </Carousel>
  </div>
</template>
