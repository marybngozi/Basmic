<script setup lang="ts">
import { ref } from 'vue'
import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import Testimonials from '@/assets/data/testimonials.json'

const carouselConfig = {
  itemsToShow: 'auto',
  wrapAround: true,
  autoplay: 5000,
  mouseWheel: true,
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
      <Slide v-for="(testimonial, i) in Testimonials" :key="i">
        <div class="p-4 w-[400px]">
          <h3 class="text-xl font-semibold text-center text-brand-red">{{ testimonial.title }}</h3>
          <p class="text-sm text-center text-deep-navy mt-2">{{ testimonial.post }}</p>
          <h4 class="text-md font-semibold text-center italic text-primary-blue mt-2">
            {{ testimonial.author }}
          </h4>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
