export default defineNuxtConfig({
  app: {
    head: {
      title: 'Pyp System',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icons/logo-pyp-system-white.svg',
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
});
