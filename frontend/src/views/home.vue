<script setup lang="ts">
import Header from '@/components/Header.vue'
import { TopSlideShow, Footer, ProductSlideShow, TestimonialSlideShow } from '@/components/home'
import { motion } from 'motion-v'
import { ref, onMounted, onUnmounted } from 'vue'

const addresses = [
  {
    name: 'Ogidi Office',
    address: '5.5 Ichi Lane Ezeiweka Road Awada, Isiokwe, Onitsha North, Anambra, Nigeria',
    phone: '+234 803 333 4840',
    class: '',
  },
  {
    name: 'Yola Office',
    address: '7CHW+Q92, Karewa-Jimeta Rd, Jimeta, 640101, Adamawa, Nigeria',
    phone: '+234 803 716 6112',
    class: 'text-right lg:text-left',
  },
  {
    name: 'Jalingo Office',
    address: '7CHW+Q92, Karewa-Jimeta Rd, Jimeta, 640101, Taraba, Nigeria',
    phone: '+234 703 482 8064',
    class: '',
  },
]

const isScrolled = ref(false)

// Function to handle scroll events
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

// Set up and clean up scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section
    class="h-[60vh] lg:h-auto bg-primary-blue flex flex-col items-center w-full relative overflow-hidden"
  >
    <Header
      class="transition-all duration-300 z-30"
      :class="
        isScrolled
          ? 'w-full px-4 sm:px-8 fixed top-0 !-translate-y-0'
          : 'w-11/12 sm:w-10/12 mx-auto absolute rounded-xl'
      "
    />

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
        <TopSlideShow />

        <div
          class="w-full max-w-[640px] mx-auto -translate-y-8 md:-translate-y-10 lg:-translate-y-4"
        >
          <motion.button
            :animate="{
              scale: [1, 1.05, 1],
            }"
            :transition="{
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1,
              times: [0, 0.2, 0.5, 0.8, 1],
            }"
            class="p-2.5 md:py-3 lg:py-4 px-4 bg-brand-red flex items-center justify-center text-white rounded-full hover:bg-white hover:text-brand-red w-[200px] transition-colors duration-300 shadow-lg shadows-white lg:mt-6 border border-brand-red font-bold"
          >
            Buy From Us
          </motion.button>
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
    <section class="bg-light-neutral/60 relative py-9 mt-12 z-[25]">
      <svg
        class="absolute -top-[80px] left-0 w-full h-[80px] z-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C0,0 200,80 800,80 C1200,80 1400,0 1440,80 L0,80" fill="#f7e6e699"></path>
      </svg>

      <motion.div
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
        class="mb-5"
      >
        <h3 class="text-xl lg:text-2xl text-primary-blue text-center w-full font-bold">
          Our Office Locations
        </h3>
        <small class="text-sm text-deep-navy text-center block mt-1">
          We deliver nationwide across Nigeria
        </small>
      </motion.div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4 divide-y lg:divide-y-0 divide-primary-blue/30"
      >
        <motion.div
          v-for="(address, i) in addresses"
          :key="i"
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.5, delay: i * 0.2, ease: 'easeOut' }"
          :class="`px-4 ${address.class} hover:bg-primary-blue/5 hover:rounded-tr-[200px] rounded-lg transition-colors duration-300 py-4`"
        >
          <h4 class="text-lg font-semibold text-deep-navy text-center">{{ address.name }}</h4>
          <p class="text-sm">{{ address.address }}</p>
          <a
            :href="`tel:${address.phone}`"
            class="text-brand-red text-sm hover:underline text-center block"
          >
            {{ address.phone }}
          </a>
        </motion.div>
      </div>
    </section>

    <section
      class="bg-white flex flex-col-reverse lg:flex-row items-center justify-center py-16 px-4 md:px-10 lg:px-14 gap-4"
    >
      <div class="w-full lg:w-1/3 flex items-center justify-start p-5">
        <img
          src="@/assets/images/building1.jpeg"
          alt="Image of building"
          class="w-full h-[400px] rounded-tr-3xl rounded-bl-3xl object-cover"
        />
      </div>
      <div class="w-full lg:w-2/3 flex flex-col items-center justify-center p-5 gap-5">
        <div>
          <h3 class="text-2xl text-primary-blue font-bold mb-3">Basmic Ventures Nigeria Limited</h3>

          <div class="flex flex-col gap-5 text-dark-neutral text-justify">
            <p class="">
              Basmic Ventures Nigeria Limited is a leading distributor, wholeseller, retailer and
              supplier of building materials in Nigeria. We specialize in the supply of various
              construction materials, including roofing materials (roofing sheets, roofing tiles,
              POP ceilings, PVC ceilings), plumbing materials (water collector systems, plumbing
              pipes), and building materials such as doors, tiles, and paints. Our mission is to
              provide high-quality materials at competitive prices to meet the needs of our clients.
            </p>

            <p>
              At Basmic Ventures Nigeria Limited, we believe in providing our clients with the best
              possible materials at the most affordable prices. We are committed to delivering
              exceptional customer service and ensuring that our products meet the highest standards
              of quality, and are NAFDAC approved.
            </p>

            <p>
              Contact us today to learn more about our products and services. We look forward to
              serving you!
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 px-4 md:px-10 lg:px-14 bg-sky-blue/30">
      <h3 class="text-2xl text-deep-navy font-bold mb-9 text-center">
        Our Products and Services
        <hr class="border-brand-red w-40 mx-auto mt-3" />
      </h3>

      <ProductSlideShow />
    </section>

    <section class="py-12 px-4 md:px-10 lg:px-14">
      <h3 class="text-2xl text-deep-navy font-bold mb-9 text-center">
        What Our Customers Say About Us
        <hr class="border-brand-red w-40 mx-auto mt-3" />
      </h3>

      <TestimonialSlideShow />
    </section>

    <Footer />
  </main>
</template>
