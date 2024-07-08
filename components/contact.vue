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
    id="contact"
    class="md:px-48 lg:px-72 px-8 py-48 flex flex-col items-center justify-center w-full min-h-full bg-purple"
  >
    <h4 class="sm:text-3xl text-2xl">contato</h4>
    <h2 class="sm:text-5xl text-3xl text-center">
      Entre em contato com a nossa equipe
    </h2>
    <form @submit.prevent="submitForm" class="w-full max-w-lg space-y-4 mt-6">
      <div class="flex flex-col space-y-4">
        <div>
          <label for="name">Nome</label>
          <input
            id="name"
            v-model="contact.name"
            type="text"
            placeholder="Seu nome completo"
            class="input-field"
            required
          />
        </div>
        <div>
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model="contact.email"
            type="email"
            placeholder="seuemail@exemplo.com"
            class="input-field"
            required
          />
        </div>
        <div>
          <label for="cellphone">Celular</label>
          <input
            id="cellphone"
            v-model="contact.cellphone"
            type="text"
            placeholder="(XX) XXXXX-XXXX"
            class="input-field"
            required
          />
        </div>
      </div>
      <div>
        <label for="message">Mensagem</label>
        <textarea
          id="message"
          v-model="contact.message"
          rows="4"
          placeholder="Escreva sua mensagem aqui..."
          class="textarea-field"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn-secundary">Enviar</button>
    </form>
  </section>
</template>
