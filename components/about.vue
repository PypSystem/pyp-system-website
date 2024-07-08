<script setup lang="ts">
import {
  BoltIcon,
  TvIcon,
  CodeBracketSquareIcon,
  ChevronDoubleDownIcon,
} from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.js';
</script>

<template>
  <main
    id="about"
    class="md:px-48 lg:px-72 px-8 py-48 flex flex-col justify-center w-full h-full bg-light-purple"
  >
    <h4 class="sm:text-3xl text-2xl font-medium">sobre</h4>
    <h2 class="my-8 sm:w-2/3 sm:text-5xl text-3xl font-bold">
      Planejamos, desenvolvemos e entregamos o produto ideal para o seu negócio!
    </h2>
    <p class="pt-4">
      Unimos gestão ágil, engenharia de software e design para criar soluções
      digitais efetivas que aceleram o crescimento do seu negócio.
    </p>
    <div class="grid md:grid-cols-3 gap-8 pt-20">
      <div
        class="flex flex-col items-center text-center transition-transform transform hover:scale-105"
      >
        <BoltIcon class="h-16 w-16" />
        <h3 class="mb-2">Gestão Ágil</h3>
        <p>
          Utilizamos metodologias ágeis para garantir entregas rápidas e
          eficientes.
        </p>
      </div>
      <div
        class="flex flex-col items-center text-center transition-transform transform hover:scale-105"
      >
        <CodeBracketSquareIcon class="h-16 w-16" />
        <h3 class="mb-2">Engenharia de Software</h3>
        <p>
          Desenvolvemos soluções robustas e escaláveis utilizando as melhores
          práticas de engenharia de software.
        </p>
      </div>
      <div
        class="flex flex-col items-center text-center transition-transform transform hover:scale-105"
      >
        <TvIcon class="h-16 w-16" />
        <h3 class="mb-2">Design</h3>
        <p>
          Criamos designs intuitivos e atraentes para proporcionar a melhor
          experiência ao usuário.
        </p>
      </div>
    </div>
    <ChevronDoubleDownIcon
      @click="scrollToSection('services')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </main>
</template>
