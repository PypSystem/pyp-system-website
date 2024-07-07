<script setup lang="ts">
import { ArrowDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.js';
</script>

<template>
  <main
    class="md:px-80 px-8 flex flex-col justify-center w-full h-screen bg-purple"
  >
    <h1 class="text-center">
      Entendemos os desafios do seu negócio e os resolvemos com soluções
      tecnológicas sob medida.
    </h1>
    <ArrowDownIcon
      @click="scrollToSection('about')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </main>
</template>
