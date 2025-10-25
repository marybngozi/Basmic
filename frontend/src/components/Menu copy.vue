<template>
  <div class="hidden lg:block">
    <ul class="flex gap-4 xl:gap-10">
      <li
        v-for="(item, index) in menu"
        :key="item.name"
        class=""
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <motion.div
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
            class="font-bold hover:underline transition-colors duration-200 flex items-center gap-1 py-2"
          >
            {{ item.name }}
          </router-link>

          <button
            v-else
            class="font-bold hover:underline transition-colors duration-200 flex items-center gap-1 py-2 cursor-pointer"
            :class="{ 'text-blue-600': hoveredIndex === index }"
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
          </button>
        </motion.div>

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
            width: '83vw',
            left: '0%',
          }"
          class="absolute top-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
        >
          <!-- transform: 'translateX(-50%)', -->
          <div class="py-4">
            <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"> -->
            <div class="grid grid-cols-1 gap-2">
              <div
                v-for="(child, childIndex) in item.children"
                :key="child.name"
                class="relative"
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
                  class="h-full"
                >
                  <router-link
                    v-if="!child.children"
                    :to="{ name: child.path }"
                    class="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group rounded-lg mx-2 h-full"
                  >
                    <div
                      class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200"
                    >
                      {{ child.name }}
                    </div>
                    <div class="text-sm text-gray-600 mt-1 leading-relaxed">
                      {{ child.desc }}
                    </div>
                  </router-link>

                  <div
                    v-else
                    class="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group cursor-pointer rounded-lg mx-2 h-full"
                    :class="{ 'bg-gray-50': hoveredChildIndex[index] === childIndex }"
                  >
                    <div class="flex items-start justify-between">
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
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="text-gray-400 group-hover:text-blue-600 transition-colors duration-200 mt-1 ml-2 flex-shrink-0"
                        :animate="{
                          x: hoveredChildIndex[index] === childIndex ? 4 : 0,
                          transition: { duration: 0.2, ease: 'easeOut' },
                        }"
                      >
                        <path d="M6 4L10 8L6 12V4z" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>

                <!-- Second Level Dropdown -->
                <motion.div
                  v-if="child.children && hoveredChildIndex[index] === childIndex"
                  :initial="{ opacity: 0, x: -20, scale: 0.95 }"
                  :animate="
                    hoveredIndex === index && hoveredChildIndex[index] === childIndex
                      ? {
                          opacity: 1,
                          x: 0,
                          scale: 1,
                          transition: { duration: 0.25, ease: 'easeOut' },
                        }
                      : {
                          opacity: 0,
                          x: -20,
                          scale: 0.95,
                          transition: { duration: 0.15, ease: 'easeIn' },
                        }
                  "
                  :style="{
                    pointerEvents:
                      hoveredIndex === index && hoveredChildIndex[index] === childIndex
                        ? 'auto'
                        : 'none',
                    zIndex: 60,
                  }"
                  class="absolute top-0 left-full ml-4 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden min-w-80"
                  @mouseenter="handleChildMouseEnter(index, childIndex)"
                  @mouseleave="handleChildMouseLeave(index, childIndex)"
                >
                  <div class="py-4">
                    <motion.div
                      v-for="(grandChild, grandChildIndex) in child.children"
                      :key="grandChild.name"
                      :initial="{ opacity: 0, x: -15 }"
                      :animate="
                        hoveredIndex === index && hoveredChildIndex[index] === childIndex
                          ? {
                              opacity: 1,
                              x: 0,
                              transition: {
                                delay: grandChildIndex * 0.03,
                                duration: 0.2,
                                ease: 'easeOut',
                              },
                            }
                          : {
                              opacity: 0,
                              x: -15,
                            }
                      "
                    >
                      <router-link
                        :to="{ name: grandChild.path }"
                        class="block px-6 py-3 hover:bg-blue-50 transition-colors duration-200 group"
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
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </li>
    </ul>
  </div>
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
