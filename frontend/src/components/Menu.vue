<template>
  <div class="hidden lg:block">
    <ul class="flex gap-4 xl:gap-6">
      <li v-for="(item, index) in menu" :key="item.name">
        <motion.div
          :initial="{ opacity: 0, y: -10 }"
          :animate="{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.05, duration: 0.3, ease: 'easeOut' },
          }"
          :whileHover="{ scale: 1.05, transition: { duration: 0.2 } }"
        >
          <router-link :to="{ name: item.path }" class="font-bold hover:underline">
            {{ item.name }}
          </router-link>
        </motion.div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { type MenuItem } from '@/libs/types'
import { motion } from 'motion-v'

defineProps({
  menu: {
    type: Array as () => MenuItem[],
    required: true,
  },
})
</script>
