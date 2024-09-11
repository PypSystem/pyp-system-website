<script setup lang="ts">
import { scrollToSection } from '@/utils/scroll.ts';
import {
  ChevronDoubleDownIcon,
  CodeBracketIcon,
  LightBulbIcon,
  ArrowPathRoundedSquareIcon,
} from '@heroicons/vue/24/solid';

const services = [
  {
    title: 'Desenvolvimento de Software',
    description:
      'Desenvolvemos soluções sob medida com as melhores práticas, garantindo qualidade e inovação.',
    icon: CodeBracketIcon,
  },
  {
    title: 'Consultoria Tecnológica',
    description:
      'Identificamos e implementamos as tecnologias ideais para o seu negócio, otimizando processos e aumentando a competitividade.',
    icon: LightBulbIcon,
  },
  {
    title: 'Automação de CI/CD',
    description:
      'Automatizamos integração e entrega contínua, reduzindo o tempo de lançamento e mantendo a qualidade.',
    icon: ArrowPathRoundedSquareIcon,
  },
];
</script>

<template>
  <section
    id="services"
    class="md:px-48 lg:px-72 px-8 py-48 flex flex-col justify-center items-end w-full min-h-full bg-white text-zinc-900"
  >
    <h4 class="sm:text-3xl text-2xl font-medium">serviços</h4>
    <h2 class="my-8 sm:w-2/3 sm:text-5xl text-3xl text-right font-bold">
      Serviços que nossa empresa oferece
    </h2>
    <p class="sm:w-2/3 text-right mb-10">
      Oferecemos serviços para transformar e impulsionar seu negócio, desde
      desenvolvimento personalizado até consultoria especializada.
    </p>
    <div class="grid md:grid-cols-3 gap-8 mt-10">
      <div
        v-for="service in services"
        :key="service.title"
        class="flex flex-col items-center text-center p-6 bg-lime rounded-lg shadow-2xl transition-transform transform hover:scale-105"
      >
        <component
          :is="service.icon"
          class="h-16 w-16 mb-4 text-light-purple"
        />
        <h4 class="mb-2 font-semibold">{{ service.title }}</h4>
        <p>{{ service.description }}</p>
      </div>
    </div>
    <ChevronDoubleDownIcon
      @click="scrollToSection('technologies')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </section>
</template>
