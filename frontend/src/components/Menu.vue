<template>
  <ul class="gap-1 xl:gap-1 hidden lg:flex h-full items-center">
    <li
      v-for="(item, index) in menu"
      :key="item.name"
      class="h-full"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave(index)"
    >
      <motion.span
        :initial="{ opacity: 0, y: -10 }"
        :animate="{
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.05, duration: 0.3, ease: 'easeOut' },
        }"
        :whileHover="{ scale: 1.05, transition: { duration: 0.2 } }"
      >
        <router-link
          v-if="!item.children"
          :to="{ name: item.path }"
          class="font-bold hover:underline transition-colors duration-200 flex items-center gap-1 py-2 h-full px-4"
        >
          {{ item.name }}
        </router-link>

        <router-link
          :to="{ name: item.path }"
          v-else
          class="font-bold hover:underline transition-colors duration-200 flex items-center gap-1 py-2 h-full cursor-pointer px-3"
        >
          {{ item.name }}
          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            :animate="{
              rotate: hoveredIndex === index ? 180 : 0,
              transition: { duration: 0.3, ease: 'easeInOut' },
            }"
          >
            <path d="M6 8L2 4h8L6 8z" />
          </motion.svg>
        </router-link>
      </motion.span>

      <!-- First Level Dropdown -->
      <motion.div
        v-if="item.children"
        :initial="{ opacity: 0, y: -20, scale: 0.95 }"
        :animate="
          hoveredIndex === index
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.3, ease: 'easeOut' },
              }
            : {
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: { duration: 0.2, ease: 'easeIn' },
              }
        "
        :style="{
          pointerEvents: hoveredIndex === index ? 'auto' : 'none',
          zIndex: 50,
        }"
        class="absolute top-full mt-0.5 bg-white rounded-xl shadow-2xl border border-gray-100 w-full max-w-[30rem] right-0 -translate-x-1/2"
      >
        <div class="py-4">
          <div class="grid grid-cols-1 gap-2 px-2">
            <div
              v-for="(child, childIndex) in item.children"
              :key="child.name"
              @mouseenter="handleChildMouseEnter(index, childIndex)"
              @mouseleave="handleChildMouseLeave(index, childIndex)"
            >
              <motion.div
                :initial="{ opacity: 0, x: -20 }"
                :animate="
                  hoveredIndex === index
                    ? {
                        opacity: 1,
                        x: 0,
                        transition: { delay: childIndex * 0.05, duration: 0.2, ease: 'easeOut' },
                      }
                    : {
                        opacity: 0,
                        x: -20,
                      }
                "
              >
                <router-link
                  :to="{ name: item.path, params: { category: child.path } }"
                  class="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group rounded-lg"
                  :class="{
                    'bg-gray-50': hoveredChildIndex[index] === childIndex && child.children,
                  }"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex-1">
                      <div
                        class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                      >
                        {{ child.name }}
                      </div>
                      <div class="text-sm text-gray-600 mt-1 leading-relaxed">
                        {{ child.desc }}
                      </div>
                    </div>

                    <motion.svg
                      v-if="child.children"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      class="text-gray-400 group-hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
                      :animate="{
                        rotate: hoveredChildIndex[index] === childIndex ? 180 : 0,
                        transition: { duration: 0.3, ease: 'easeInOut' },
                      }"
                    >
                      <path d="M6 8L2 4h8L6 8z" />
                    </motion.svg>
                  </div>
                </router-link>
              </motion.div>

              <div
                v-if="child.children && hoveredChildIndex[index] === childIndex"
                :initial="{ height: 0, opacity: 0, overflow: 'hidden' }"
                :animate="{
                  height: 'auto',
                  opacity: 1,
                  overflow: 'hidden',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }"
                :exit="{
                  height: 0,
                  opacity: 0,
                  overflow: 'hidden',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }"
                class="ml-4 bg-white overflow-hidden rounded-lg mt-2"
              >
                <!-- @mouseenter="handleChildMouseEnter(index, childIndex)"
                  @mouseleave="handleChildMouseLeave(index, childIndex)" -->
                <div class="py-4 px-2">
                  <motion.div
                    v-for="grandChild in child.children"
                    :key="grandChild.name"
                    :initial="{ opacity: 0.8 }"
                    :whileHover="{ opacity: 1, x: 4, transition: { duration: 0.2 } }"
                  >
                    <router-link
                      :to="{ name: grandChild.path }"
                      class="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group rounded-lg"
                    >
                      <div
                        class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                      >
                        {{ grandChild.name }}
                      </div>
                      <div class="text-sm text-gray-600 mt-1 leading-relaxed">
                        {{ grandChild.desc }}
                      </div>
                    </router-link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { type MenuItem } from '@/libs/types'
import { motion } from 'motion-v'

defineProps({
  menu: {
    type: Array as () => MenuItem[],
    required: true,
  },
})

const hoveredIndex = ref<number | null>(null)
const hoveredChildIndex = reactive<Record<number, number | null>>({})

let hoverTimeout: ReturnType<typeof setTimeout> | null = null
let childHoverTimeout: ReturnType<typeof setTimeout> | null = null

const handleMouseEnter = (index: number) => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
  hoveredIndex.value = index
}

const handleMouseLeave = (index: number) => {
  hoverTimeout = setTimeout(() => {
    if (hoveredIndex.value === index) {
      hoveredIndex.value = null
      hoveredChildIndex[index] = null
    }
  }, 100)
}

const handleChildMouseEnter = (parentIndex: number, childIndex: number) => {
  if (childHoverTimeout) {
    clearTimeout(childHoverTimeout)
    childHoverTimeout = null
  }
  hoveredChildIndex[parentIndex] = childIndex
}

const handleChildMouseLeave = (parentIndex: number, childIndex: number) => {
  childHoverTimeout = setTimeout(() => {
    if (hoveredChildIndex[parentIndex] === childIndex) {
      hoveredChildIndex[parentIndex] = null
    }
  }, 150)
}
</script>
