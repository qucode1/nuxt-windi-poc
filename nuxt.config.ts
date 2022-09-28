import path from 'path'
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        'nuxt-windicss',
    ],
    css: [
        path.resolve(__dirname, 'assets/styles.css')
    ],
    ssr: true,
})
