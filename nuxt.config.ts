// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  app: {
    head: {
      title: "Wakati App",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Application de gestion des emploi du temps dans le milieu universitaire",
        },
        { name: "format-detection", content: "telephone-no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
});
