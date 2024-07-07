<script setup lang="ts">
const menuItems = [
  { text: 'sobre', link: '/about' },
  { text: 'serviços', link: '/services' },
  { text: 'contato', link: '/contact' },
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
    <section class="flex items-center space-x-8">
      <button v-for="item in menuItems" :href="item.link" class="btn-primary">
        {{ item.text }}
      </button>
    </section>
  </header>
</template>
