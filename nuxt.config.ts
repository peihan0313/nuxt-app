import eslintPlugin from 'vite-plugin-eslint'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/assets/sass/main.sass'],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
