<script setup lang="ts">
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.js';
const technologies = [
  {
    name: 'TypeScript',
    icon: '/icons/typescript.svg',
  },
  {
    name: 'Nest.js',
    icon: '/icons/nestjs.svg',
  },
  {
    name: 'Nuxt.js',
    icon: '/icons/nuxt.svg',
  },
  {
    name: 'Flutter',
    icon: '/icons/flutter.svg',
  },
  {
    name: 'MySQL',
    icon: '/icons/mysql.svg',
  },
  {
    name: 'Vue.js',
    icon: '/icons/vue.svg',
  },
  {
    name: 'Docker',
    icon: '/icons/docker.svg',
  },
  {
    name: 'AWS',
    icon: '/icons/aws.svg',
  },
  {
    name: 'GitHub',
    icon: '/icons/github.svg',
  },
];
</script>

<template>
  <section
    id="technologies"
    class="md:px-80 px-8 py-48 flex flex-col items-start w-full min-h-full bg-light-purple text-zinc-900"
  >
    <h4 class="sm:text-3xl text-2xl">tecnologias</h4>
    <h2 class="sm:w-2/3 sm:text-5xl text-3xl">
      Tecnologias de ponta que utilizamos
    </h2>
    <div class="grid md:grid-cols-3 gap-16 mt-10 w-full">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex flex-col items-center text-center py-6 bg-light-gray rounded-xl shadow-2xl transition-transform transform hover:scale-105"
      >
        <img :src="tech.icon" :alt="tech.name" class="h-16 w-16 mb-4" />
        <h3 class="text-xl font-semibold mb-2">{{ tech.name }}</h3>
      </div>
    </div>
    <ChevronDoubleDownIcon
      @click="scrollToSection('contact')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </section>
</template>
