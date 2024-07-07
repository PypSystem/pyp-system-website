<script setup lang="ts">
const limeColor = ref('#CFEF9F');
const purpleColor = ref('#240D7D');
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.bg-lime {
  background-color: v-bind(limeColor);
}

.text-purple {
  color: v-bind(purpleColor);
}
</style>
