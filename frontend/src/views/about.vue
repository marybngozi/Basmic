<script setup lang="ts">
import Header from '@/components/Header.vue'
import { Footer } from '@/components/home'
import { motion } from 'motion-v'
</script>

<template>
  <Header class="w-full z-[4] fixed top-0 !translate-y-[0px]" />

  <section class="relative w-full overflow-hidden bg-primary-blue py-20 lg:py-40 bg-hero-pattern">
    <!-- <Header class="w-11/12 sm:w-10/12 mx-auto z-[200]" /> -->

    <div class="text-center text-white pt-24 pb-12 bg-cover">
      <motion.h1
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
        class="text-4xl lg:text-5xl font-bold z-[3]"
      >
        About Basmic Ventures
      </motion.h1>
      <motion.p
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }"
        class="mt-4 text-lg max-w-2xl mx-auto z-[3]"
      >
        Your trusted partner for quality building materials in Nigeria.
      </motion.p>
    </div>
  </section>

  <main>
    <section class="py-16 px-4 md:px-10 lg:px-14 bg-white">
      <div class="mx-auto flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          :initial="{ opacity: 0, x: -50 }"
          :while-in-view="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
          class="w-full lg:w-1/2"
        >
          <h2 class="text-3xl font-bold text-primary-blue mb-4">Our Story</h2>
          <p class="text-gray-700 leading-relaxed text-justify">
            Basmic Ventures Nigeria Limited was founded on the principle of providing high-quality,
            durable, and affordable building materials to the Nigerian market. From our humble
            beginnings, we have grown to become a leading distributor, supplying a wide range of
            products including roofing materials, doors, tiles, and paints. Our journey is a
            testament to our commitment to excellence and our unwavering focus on customer
            satisfaction.
          </p>
          <p class="mt-4 text-gray-700 leading-relaxed text-justify">
            We understand the challenges of construction in Nigeria and strive to be a reliable
            partner for our clients, whether they are individual homeowners or large-scale
            contractors. Our mission is to empower you with the best materials at the most
            competitive prices, ensuring your projects are built to last.
          </p>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, x: 50 }"
          :while-in-view="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
          class="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <img
            src="@/assets/images/building1.jpeg"
            alt="Basmic Ventures office"
            class="w-full h-auto max-h-[500px] rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>

    <section class="py-16 px-4 md:px-10 lg:px-14 bg-sky-blue/30">
      <div class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
        >
          <h3 class="text-2xl font-bold text-deep-navy mb-3">Our Mission</h3>
          <p class="text-gray-700 leading-relaxed">
            To provide high-quality building materials at competitive prices, backed by exceptional
            customer service, to meet and exceed the needs of our clients.
          </p>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }"
        >
          <h3 class="text-2xl font-bold text-deep-navy mb-3">Our Vision</h3>
          <p class="text-gray-700 leading-relaxed">
            To be the most trusted and reliable supplier of building materials in Nigeria,
            recognized for our commitment to quality, integrity, and innovation.
          </p>
        </motion.div>
      </div>
    </section>

    <section class="py-16 px-4 md:px-10 lg:px-14 bg-white w-full overflow-hidden">
      <div class="mx-auto text-center">
        <motion.h2
          :initial="{ opacity: 0, y: -20 }"
          :while-in-view="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
          class="text-3xl font-bold text-primary-blue mb-8"
        >
          Our Core Values
        </motion.h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <motion.div
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } }"
            class="p-6 bg-light-neutral rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <i class="fas fa-handshake text-4xl text-brand-red mb-4"></i>
            <h4 class="text-xl font-semibold text-deep-navy mb-2">Integrity</h4>
            <p class="text-gray-600 text-sm">
              We operate with honesty and transparency in all our dealings.
            </p>
          </motion.div>
          <motion.div
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }"
            class="p-6 bg-light-neutral rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <i class="fas fa-gem text-4xl text-brand-red mb-4"></i>
            <h4 class="text-xl font-semibold text-deep-navy mb-2">Quality</h4>
            <p class="text-gray-600 text-sm">
              We provide only the best materials that meet international standards.
            </p>
          </motion.div>
          <motion.div
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5 } }"
            class="p-6 bg-light-neutral rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <i class="fas fa-users text-4xl text-brand-red mb-4"></i>
            <h4 class="text-xl font-semibold text-deep-navy mb-2">Customer-Centric</h4>
            <p class="text-gray-600 text-sm">
              Our clients' satisfaction is at the heart of everything we do.
            </p>
          </motion.div>
          <motion.div
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.7 } }"
            class="p-6 bg-light-neutral rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <i class="fas fa-truck text-4xl text-brand-red mb-4"></i>
            <h4 class="text-xl font-semibold text-deep-navy mb-2">Reliability</h4>
            <p class="text-gray-600 text-sm">
              You can always count on us for timely delivery and consistent supply.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<style scoped>
.bg-hero-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.2;
  z-index: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('@/assets/images/building1.jpeg');
}
</style>
