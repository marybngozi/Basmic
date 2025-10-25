<template>
  <footer class="mt-7 pt-5 md:pt-10 text-white bg-primary-blue w-full overflow-x-clip">
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-5 px-5 md:px-7"
    >
      <div class="flex flex-col gap-4 flex-1">
        <h5 class="text-xl font-semibold">BASMIC COMPANY NIG. LIMITED</h5>
        <p class="text-sm text-gray-200">
          A leading distributor of quality building materials in Nigeria.
        </p>

        <h5 class="mt-4 text-sm">We are licensed and insured</h5>
        <div>
          <img src="@/assets/images/licenses/nafdac.png" alt="NAFDAC License" class="w-32 h-auto" />
        </div>
      </div>

      <div class="flex flex-col gap-4 grow-0">
        <h5 class="text-xl font-semibold">Quick Links</h5>
        <ul class="flex flex-col gap-2 text-sm text-gray-200">
          <li>
            <router-link to="/" class="hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:underline">About Us</router-link>
          </li>
          <li>
            <router-link to="/products" class="hover:underline">Products</router-link>
          </li>
          <li>
            <router-link to="/contact" class="hover:underline">Contact Us</router-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h5 class="text-xl font-semibold">Leave us a message</h5>
        <form class="flex flex-col gap-4">
          <div>
            <label for="name" class="sr-only">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>

          <div>
            <label for="phone" class="sr-only">Phone</label>
            <input type="tel" id="phone" placeholder="Your Phone Number" required />
          </div>

          <div>
            <label for="email" class="sr-only">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>

          <div>
            <label for="message" class="sr-only">Message</label>
            <textarea id="message" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div class="flex flex-col gap-4">
        <h5 class="text-xl font-semibold">Find Our Office</h5>
        <div class="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1883.612332580655!2d6.84988255700839!3d6.160956250158539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104391c4aa09e497%3A0x84f7817dfd057ca5!2sAccess%20Bank%20Plc%20Ogidi%20Branch%2C%20Building%20Material%20Market!5e0!3m2!1sen!2sng!4v1757636515606!5m2!1sen!2sng"
            width="100%"
            height="350"
            style="border: 0"
            :allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    <div class="bg-deep-navy py-5 px-5 md:px-7">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex gap-4">
          <a
            title="Our WhatsApp line"
            href="https://wa.me/2347034828064"
            target="_blank"
            class="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            <i class="fab fa-whatsapp text-lg"></i>
            +234 703 482 8064
          </a>

          <a
            href="mailto:basmicgroup@yahoo.com"
            title="Our Email"
            class="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
          >
            <i class="far fa-envelope text-lg"></i>
            basmicgroup@yahoo.com
          </a>
        </div>
        <div class="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          <a href="#" class="text-sm text-gray-400 hover:underline">Privacy Policy</a>
          <a href="#" class="text-sm text-gray-400 hover:underline">Terms of Use</a>
          <a href="#" class="text-sm text-gray-400 hover:underline">Sitemap</a>
        </div>
      </div>
    </div>
    <a href="mailto:"></a>

    <div class="bg-primary-blue py-4 text-center text-sm text-gray-400">
      <p>© {{ new Date().getFullYear() }} Basmic Company Nigeria Limited. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
/* Scoped styles remain the same, but I've updated the selector for better specificity */
form > div {
  @apply flex flex-col gap-1;
}

form input,
form textarea {
  @apply p-2 rounded-md border border-light-neutral focus:outline-none focus:ring-2 focus:ring-primary-blue w-full text-black;
}

form button {
  @apply bg-brand-red text-white p-2 rounded-md hover:bg-brand-red/90 transition-colors duration-300;
}
</style>
