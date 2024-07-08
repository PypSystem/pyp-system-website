<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll.js';
const menuItems = [
  { text: 'sobre', link: 'about' },
  { text: 'serviços', link: 'services' },
  { text: 'contato', link: 'contact' },
];
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
    <section class="flex items-center space-x-8">
      <button
        v-for="item in menuItems"
        @click.prevent="scrollToSection(item.link)"
        class="btn-primary cursor-pointer"
      >
        {{ item.text }}
      </button>
    </section>
  </header>
</template>
