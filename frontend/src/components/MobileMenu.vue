<template>
  <AnimatePresence>
    <motion.div
      v-if="showMobileMenu"
      key="mobile-menu"
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } }"
      :exit="{ opacity: 0, scale: 0, transition: { duration: 0.3, ease: 'easeInOut' } }"
      class="lg:hidden bg-white absolute top-[55px] right-0 rounded-l-2xl w-full max-w-[350px] py-3 shadow-lg max-h-[80vh] overflow-y-auto origin-top-right"
    >
      <ul>
        <li v-for="(item, index) in menu" :key="item.name">
          <!-- If item has children -->
          <div v-if="item.children && item.children.length" class="menu-item">
            <motion.div
              :initial="{ backgroundColor: '#ffffff' }"
              :whileHover="{ backgroundColor: '#e6f7ff', transition: { duration: 0.2 } }"
              class="px-4 py-3 flex justify-between items-center cursor-pointer"
              @click="toggleSubmenu(index)"
            >
              <span>{{ item.name }}</span>
              <span
                class="ml-2 transform transition-transform"
                :class="{ 'rotate-180': openSubmenus.includes(index) }"
              >
                <Icon icon="mdi:chevron-down" height="22" />
              </span>
            </motion.div>

            <!-- First level submenu -->
            <AnimatePresence>
              <motion.div
                v-if="openSubmenus.includes(index)"
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
              >
                <div class="pl-3">
                  <div v-for="(child, childIndex) in item.children" :key="child.name">
                    <!-- If child has children -->
                    <div v-if="child.children && child.children.length" class="menu-subitem">
                      <motion.div
                        :initial="{ backgroundColor: '#ffffff' }"
                        :whileHover="{ backgroundColor: '#e6f7ff', transition: { duration: 0.2 } }"
                        class="px-4 py-2 flex justify-between items-center cursor-pointer"
                        @click="toggleNestedSubmenu(index, childIndex)"
                      >
                        <div class="flex flex-col">
                          <p>{{ child.name }}</p>
                          <small v-if="child.desc" class="text-xs text-gray-500 text-left">
                            {{ child.desc }}
                          </small>
                        </div>
                        <span
                          class="ml-2 transform transition-transform text-sm"
                          :class="{ 'rotate-180': isNestedSubmenuOpen(index, childIndex) }"
                        >
                          <Icon icon="mdi:chevron-down" height="22" />
                        </span>
                      </motion.div>

                      <!-- Second level submenu -->
                      <AnimatePresence>
                        <motion.div
                          v-if="isNestedSubmenuOpen(index, childIndex)"
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
                        >
                          <div class="pl-3">
                            <motion.div
                              v-for="grandchild in child.children"
                              :key="grandchild.name"
                              :initial="{ opacity: 0.8 }"
                              :whileHover="{ opacity: 1, x: 4, transition: { duration: 0.2 } }"
                            >
                              <router-link
                                :to="{ name: grandchild.path }"
                                class="px-4 py-2 flex flex-col hover:bg-sky-blue"
                              >
                                <span class="font-medium">{{ grandchild.name }}</span>
                                <span v-if="grandchild.desc" class="text-xs text-gray-500">
                                  {{ grandchild.desc }}
                                </span>
                              </router-link>
                            </motion.div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <!-- If child has no children -->
                    <motion.div
                      v-else
                      :initial="{ opacity: 0.8 }"
                      :whileHover="{ opacity: 1, x: 4, transition: { duration: 0.2 } }"
                    >
                      <router-link
                        :to="{ name: child.path }"
                        class="px-4 py-2 flex flex-col hover:bg-sky-blue"
                      >
                        <span class="font-medium">{{ child.name }}</span>
                        <span v-if="child.desc" class="text-xs text-gray-500">{{
                          child.desc
                        }}</span>
                      </router-link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <!-- Simple menu item with no children -->
          <motion.div
            v-else
            :initial="{ opacity: 0.8 }"
            :whileHover="{ opacity: 1, x: 4, transition: { duration: 0.2 } }"
          >
            <router-link :to="{ name: item.path }" class="px-4 py-3 flex hover:bg-sky-blue">
              <span>{{ item.name }}</span>
            </router-link>
          </motion.div>
        </li>
      </ul>
    </motion.div>
  </AnimatePresence>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import { Icon } from '@iconify/vue'
import { type MenuItem } from '@/libs/types'

defineProps({
  showMobileMenu: {
    type: Boolean,
    required: true,
  },
  menu: {
    type: Array as () => MenuItem[],
    required: true,
  },
})

// Track open submenus
const openSubmenus = ref<number[]>([])
const nestedOpenSubmenus = ref<{ [key: number]: number[] }>({})

// Toggle a submenu open/closed
const toggleSubmenu = (index: number) => {
  if (openSubmenus.value.includes(index)) {
    openSubmenus.value = openSubmenus.value.filter((i) => i !== index)
  } else {
    openSubmenus.value.push(index)
  }
}

// Toggle a nested submenu open/closed
const toggleNestedSubmenu = (parentIndex: number, childIndex: number) => {
  if (!nestedOpenSubmenus.value[parentIndex]) {
    nestedOpenSubmenus.value[parentIndex] = []
  }

  if (nestedOpenSubmenus.value[parentIndex].includes(childIndex)) {
    nestedOpenSubmenus.value[parentIndex] = nestedOpenSubmenus.value[parentIndex].filter(
      (i) => i !== childIndex,
    )
  } else {
    nestedOpenSubmenus.value[parentIndex].push(childIndex)
  }
}

// Check if a nested submenu is open
const isNestedSubmenuOpen = (parentIndex: number, childIndex: number) => {
  return nestedOpenSubmenus.value[parentIndex]?.includes(childIndex) || false
}
</script>

<style scoped>
.menu-item,
.menu-subitem {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.menu-item:last-child,
.menu-subitem:last-child {
  border-bottom: none;
}
</style>
