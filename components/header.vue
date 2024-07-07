<script setup lang="ts">
const menuItems = [
  { text: 'Início', link: '/' },
  { text: 'Sobre', link: '/about' },
  { text: 'Serviços', link: '/services' },
];
</script>

<template>
  <header
    class="md:px-80 px-8 py-2 bg-lime text-purple flex items-center justify-between"
  >
    <section class="flex">
      <img
        src="/icons/logo-pyp-system-purple.svg"
        alt="Pyp System"
        class="h-16 w-16"
      />
    </section>
    <section class="flex items-center space-x-10">
      <a
        v-for="item in menuItems"
        :href="item.link"
        class="text-lg cursor-pointer transition-transform transform hover:scale-105 hover:text-zinc-500 hover:underline"
      >
        {{ item.text }}
      </a>
      <button class="border">Entrar em contato</button>
    </section>
  </header>
</template>
