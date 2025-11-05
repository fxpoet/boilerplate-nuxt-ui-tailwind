import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/image'
  ],

  css: ['./app/assets/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})