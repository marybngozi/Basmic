<template>
  <div
    v-motion
    :initial="{ opacity: 0, x: 50 }"
    :enter="{ opacity: 1, x: 0, transition: { duration: 300 } }"
    class="lg:hidden bg-white absolute top-[55px] right-0 rounded-l-2xl w-full max-w-[350px] py-3 shadow-lg max-h-[80vh] overflow-y-auto"
  >
    <ul>
      <li v-for="(item, index) in menu" :key="item.name">
        <!-- If has children, show expandable menu -->
        <div v-if="item.children && item.children.length" class="menu-item">
          <div
            @click="toggleSubmenu(index)"
            class="px-4 py-3 flex justify-between items-center hover:bg-sky-blue cursor-pointer"
            v-motion
            :initial="{ backgroundColor: '#ffffff' }"
            :hover="{ backgroundColor: '#e6f7ff', transition: { duration: 200 } }"
          >
            <span>{{ item.name }}</span>
            <span
              class="ml-2 transform transition-transform"
              :class="{ 'rotate-180': openSubmenus.includes(index) }"
            >
              <Icon icon="mdi:chevron-down" height="22" />
            </span>
          </div>

          <!-- First level submenu -->
          <div
            v-show="openSubmenus.includes(index)"
            v-motion
            :variants="submenuVariants"
            :animate="openSubmenus.includes(index) ? 'open' : 'closed'"
          >
            <div class="pl-3">
              <div v-for="(child, childIndex) in item.children" :key="child.name">
                <!-- If child has children -->
                <div v-if="child.children && child.children.length" class="menu-subitem">
                  <div
                    @click="toggleNestedSubmenu(index, childIndex)"
                    class="px-4 py-2 flex justify-between items-center hover:bg-sky-blue cursor-pointer"
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
                  </div>

                  <!-- Second level submenu -->
                  <div
                    v-show="isNestedSubmenuOpen(index, childIndex)"
                    v-motion
                    :variants="submenuVariants"
                    :animate="isNestedSubmenuOpen(index, childIndex) ? 'open' : 'closed'"
                  >
                    <div class="pl-3">
                      <router-link
                        v-for="grandchild in child.children"
                        :key="grandchild.name"
                        :to="{ name: grandchild.path }"
                        class="px-4 py-2 flex flex-col hover:bg-sky-blue"
                        v-motion
                        :initial="{ opacity: 0.8 }"
                        :hover="{ opacity: 1, x: 4, transition: { duration: 200 } }"
                      >
                        <span class="font-medium">{{ grandchild.name }}</span>
                        <span v-if="grandchild.desc" class="text-xs text-gray-500">
                          {{ grandchild.desc }}
                        </span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <!-- If child has no children -->
                <router-link
                  v-else
                  :to="{ name: child.path }"
                  class="px-4 py-2 flex flex-col hover:bg-sky-blue"
                  v-motion
                  :initial="{ opacity: 0.8 }"
                  :hover="{ opacity: 1, x: 4, transition: { duration: 200 } }"
                >
                  <span class="font-medium">{{ child.name }}</span>
                  <span v-if="child.desc" class="text-xs text-gray-500">{{ child.desc }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Simple menu item with no children -->
        <router-link
          v-else
          :to="{ name: item.path }"
          class="px-4 py-3 flex hover:bg-sky-blue"
          v-motion
          :initial="{ opacity: 0.8 }"
          :hover="{ opacity: 1, x: 4, transition: { duration: 200 } }"
        >
          <span>{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Item {
  name: string
  path: string
  desc?: string
  children?: Item[]
}

defineProps({
  menu: {
    type: Array as () => Item[],
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

// Animation variants for submenus
const submenuVariants = {
  closed: {
    height: '0px',
    opacity: 0,
    overflow: 'hidden',
    transition: { duration: 300, ease: 'easeInOut' },
  },
  open: {
    height: 'auto',
    opacity: 1,
    overflow: 'hidden',
    transition: { duration: 300, ease: 'easeInOut' },
  },
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
