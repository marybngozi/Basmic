<script setup lang="ts">
import Header from '@/components/Header.vue'
import SlideShow from '@/components/home/SlideShow.vue'
import { motion } from 'motion-v'

const addresses = [
  {
    name: 'Ogidi Office',
    address: '5.5 Ichi Lane Ezeiweka Road Awada, Isiokwe, Onitsha North, Anambra, Nigeria',
    alias: '',
    class: '',
  },
  {
    name: 'Yola Office',
    address: '7CHW+Q92, Karewa-Jimeta Rd, Jimeta, 640101, Adamawa, Nigeria',
    alias: '',
    class: 'text-right lg:text-left',
  },
  {
    name: 'Jalingo Office',
    address: '7CHW+Q92, Karewa-Jimeta Rd, Jimeta, 640101, Taraba, Nigeria',
    alias: '',
    class: '',
  },
]
</script>

<template>
  <section
    class="h-[60vh] lg:h-auto bg-primary-blue flex flex-col items-center w-full relative overflow-hidden"
  >
    <Header class="w-11/12 sm:w-10/12 z-10 sticky top-0" />

    <!-- Curved Bottom SVG -->
    <svg
      class="absolute bottom-0 left-0 w-full h-[100px] z-20"
      viewBox="0 0 1440 150"
      preserveAspectRatio="none"
    >
      <path d="M0,0 C20,10 400,150 1440,150 L0,150 Z" fill="white"></path>
    </svg>

    <section class="flex justify-between items-center w-full h-full">
      <motion.div
        :initial="{ opacity: 0, x: -10 }"
        :animate="{ opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 } }"
        class="w-full h-full lg:w-3/5 px-4 md:px-7 lg:pl-12 xl:pl-20 pt-2 bg-primary-blue bg-[url('@/assets/images/hero.jpeg')] bg-blend-overlay bg-cover lg:bg-none bg-center bg-no-repeat flex flex-col justify-center"
      >
        <SlideShow />

        <div
          class="w-full max-w-[640px] mx-auto -translate-y-8 md:-translate-y-10 lg:-translate-y-4"
        >
          <button
            class="p-2.5 md:py-3 lg:py-4 px-4 bg-brand-red flex items-center justify-center text-white rounded-full hover:bg-white hover:text-brand-red w-[200px] transition-colors duration-300 shadow-lg shadows-white lg:mt-6 border border-brand-red font-bold"
          >
            Buy From Us
          </button>
        </div>
      </motion.div>

      <motion.div class="w-2/5 justify-end hidden lg:flex">
        <img
          src="@/assets/images/hero.jpeg"
          alt="Basmic Ventures Nigeria Limited"
          class="object-cover h-[700px] w-full"
        />
      </motion.div>
    </section>
  </section>

  <main>
    <!-- Locations section -->
    <section class="bg-light-neutral relative py-9 mt-7 rounded-tr-[200px] rounded-bl-[80px]">
      <h3 class="text-xl lg:text-2xl text-primary-blue text-center w-full font-bold mb-5">
        Office Locations
      </h3>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 divide-y-2 lg:divide-y-0 divide-brand-red/30"
      >
        <div v-for="(address, i) in addresses" :class="`px-4 ${address.class}`" :key="i">
          <h4 class="text-lg font-semibold text-deep-navy">{{ address.name }}</h4>
          <p>{{ address.address }}</p>
        </div>
      </div>
    </section>

    <section class="mt-7 px-5 p-3 text-white bg-primary-blue">
      <div class="w-full h-[150px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quis quae est magnam
        amet ipsum obcaecati! Unde, itaque ea impedit, libero qui iusto quam dignissimos animi
        dolores ipsum, quisquam dolorum.

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus similique quasi
          atque amet hic libero, laborum repudiandae dolor nobis tempora provident incidunt
          excepturi eveniet sequi recusandae. Sint, id! Aut, voluptatem!
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quis quae est magnam
          amet ipsum obcaecati! Unde, itaque ea impedit, libero qui iusto quam dignissimos animi
          dolores ipsum, quisquam dolorum.
        </p>
      </div>
    </section>
  </main>
</template>
