import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Wakati App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width-device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Application de gestion des emploi du temps dans le milieu universitaire' },
        { name: 'format-detection', content: 'telephone-no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
    }
  },
  modules: [// "@pinia/nuxt", 
  "@nuxt/icon", '@nuxtjs/tailwindcss']
});