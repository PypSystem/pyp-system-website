<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.js';
</script>

<template>
  <main
    id="banner"
    class="md:px-80 px-8 flex flex-col justify-center w-full h-screen bg-purple"
  >
    <img
      src="@/public/icons/pyp-system-logo.svg"
      alt="Pyp System"
      class="mx-auto mb-16 w-1/4"
    />
    <h1 class="text-center text-7xl w-2/3 mx-auto">
      "Entendemos os desafios do seu negócio e os resolvemos com soluções
      tecnológicas sob medida."
    </h1>
    <ChevronDownIcon
      @click="scrollToSection('about')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </main>
</template>
