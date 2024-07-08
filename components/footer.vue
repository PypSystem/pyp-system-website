<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll.js';
</script>

<template>
  <footer
    class="bg-light-purple py-4 md:px-96 px-8 flex items-center justify-between text-lime"
  >
    <img
      src="/icons/logo-pyp-system-white.svg"
      alt="Pyp System"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-105"
      @click.prevent="scrollToSection('banner')"
    />
    <p>© Pyp System - 2024</p>
  </footer>
</template>
