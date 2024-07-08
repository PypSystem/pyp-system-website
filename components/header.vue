<script setup lang="ts">
import { ref } from 'vue';
import { scrollToSection } from '@/utils/scroll.js';

const menuItems = [
  { text: 'sobre', link: 'about' },
  { text: 'serviços', link: 'services' },
  { text: 'tecnologias', link: 'technologies' },
  { text: 'contato', link: 'contact' },
];

const isMenuOpen = ref(false);

const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-20 md:px-48 lg:px-72 px-8 py-2 bg-lime text-purple flex items-center justify-between"
  >
    <section class="flex">
      <img
        src="/icons/logo-pyp-system-purple.svg"
        alt="Pyp System"
        class="h-16 w-16 cursor-pointer transition-transform transform hover:scale-105"
        @click.prevent="scrollToSection('banner')"
      />
    </section>
    <section class="hidden md:flex items-center space-x-8">
      <button
        v-for="item in menuItems"
        :key="item.link"
        @click.prevent="scrollToSection(item.link)"
        class="btn-primary cursor-pointer"
      >
        {{ item.text }}
      </button>
    </section>
    <div class="md:hidden relative">
      <button @click="toggleMenu" class="text-purple focus:outline-none">
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="absolute top-10 right-0 mt-2 w-48 bg-lime shadow-lg rounded-md py-2 z-20"
        >
          <button
            v-for="item in menuItems"
            :key="item.link"
            @click.prevent="
              () => {
                scrollToSection(item.link);
                toggleMenu();
              }
            "
            class="block w-full text-left px-4 py-2 text-purple hover:bg-purple-100"
          >
            {{ item.text }}
          </button>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
