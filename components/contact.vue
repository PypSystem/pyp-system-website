<script setup lang="ts">
const contact = reactive({
  name: '',
  email: '',
  message: '',
  cellphone: '',
});

function submitForm() {
  console.log(contact);
}
</script>

<template>
  <section
    id="services"
    class="md:px-80 px-8 py-48 flex flex-col justify-center w-full min-h-full bg-purple"
  >
    <h4>contato</h4>
    <h2>Entre em contato com a nossa equipe:</h2>
    <form @submit.prevent="submitForm" class="w-full max-w-lg space-y-4">
      <div class="flex flex-col space-y-4">
        <input
          v-model="contact.name"
          type="text"
          placeholder="Nome"
          class="input-field"
          required
        />
        <input
          v-model="contact.email"
          type="email"
          placeholder="E-mail"
          class="input-field"
          required
        />
        <input
          v-model="contact.cellphone"
          type="text"
          placeholder="Celular"
          class="input-field"
          required
        />
      </div>
      <textarea
        v-model="contact.message"
        placeholder="Mensagem"
        rows="4"
        class="textarea-field"
        required
      ></textarea>
      <button type="submit" class="btn-secundary">Enviar</button>
    </form>
  </section>
</template>
