<script setup lang="ts">
const licenses = [
  {
    name: 'NAFDAC',
    image: './images/licenses/nafdac.png',
  },
]
</script>
<template>
  <footer class="mt-7 pt-5 md:pt-10 text-white bg-primary-blue">
    <section class="flex flex-col md:flex-row justify-between items-center md:items-start pb-5">
      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <h5>We are licensed and insured</h5>

        <div>
          <img src="./images/licenses/nafdac.png" alt="NAFDAC License" class="w-32 h-auto" />
        </div>
      </div>

      <div class="w-full md:w-1/3 mb-6 md:mb-0">
        <div class="mb-4">
          <h4 class="text-xl hover:underline">Contact Us</h4>
          <small>You can leave us a message here</small>
        </div>

        <form class="flex flex-col gap-4">
          <div>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div>
            <label for="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone Number" required />
          </div>

          <div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div>
            <label for="message">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>

    <section class="flex justify-center bg-deep-navy pb-5 md:pb-6 pt-4">
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Basmic Ventures Nigeria Limited. All rights reserved.
      </p>
    </section>
  </footer>
</template>

<style scoped>
section {
  @apply md:px-7 px-5;
}

form > div {
  @apply flex flex-col gap-1;
}
form input,
form textarea {
  @apply p-2 rounded-md border border-light-neutral focus:outline-none focus:ring-2 focus:ring-primary-blue;
}
form button {
  @apply bg-brand-red text-white p-2 rounded-md hover:bg-brand-red/90 transition-colors duration-300;
}
</style>
