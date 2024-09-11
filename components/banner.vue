<script setup lang="ts">
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.ts';
</script>

<template>
  <main
    id="banner"
    class="md:px-48 lg:px-72 px-8 flex flex-col justify-center w-full h-screen bg-purple"
  >
    <img
      src="@/public/icons/pyp-system-logo.svg"
      alt="Pyp System"
      class="mx-auto mb-16 2xl:w-1/4 sm:w-1/2 w-3/4"
    />
    <h1 class="text-center 2xl:text-6xl 2xl:w-2/3 sm:text-5xl text-4xl mx-auto">
      Entendemos os desafios do seu negócio e os resolvemos com soluções
      tecnológicas sob medida.
    </h1>
    <ChevronDoubleDownIcon
      @click="scrollToSection('about')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </main>
</template>
