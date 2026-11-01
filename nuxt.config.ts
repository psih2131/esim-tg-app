// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', 'nuxt-swiper'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/style/main.scss'],
  ssr: false,

  // Vite 6+ rejects unknown Host headers (DNS-rebinding protection).
  // ngrok free tunnels get a new *.ngrok-free.dev name each time.
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io', '.ngrok.app'],
    },
  },

  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
      ],
      script: [{ src: 'https://telegram.org/js/telegram-web-app.js' }],
    },
  },

})
