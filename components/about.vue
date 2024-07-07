<script setup lang="ts">
import {
  BoltIcon,
  TvIcon,
  CodeBracketSquareIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/solid';
import { scrollToSection } from '@/utils/scroll.js';
</script>

<template>
  <main
    id="about"
    class="md:px-80 px-8 py-48 flex flex-col justify-center w-full h-full bg-light-purple"
  >
    <h4>sobre</h4>
    <h2 class="w-2/3">
      Planejamos, desenvolvemos e entregamos o produto ideal para o seu negócio!
    </h2>
    <p class="pt-4">
      Unimos gestão ágil, design e engenharia de software para criar soluções
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
    <ChevronDownIcon
      @click="scrollToSection('services')"
      class="h-12 w-12 cursor-pointer transition-transform transform hover:scale-110 mx-auto mt-16"
    />
  </main>
</template>
