<script setup lang="ts"></script>

<template>
  <main class="w-full min-h-screen flex flex-col relative">
    <Header />
    <article class="flex flex-col flex-grow h-full pt-20">
      <slot />
    </article>
    <Footer />
  </main>
</template>
