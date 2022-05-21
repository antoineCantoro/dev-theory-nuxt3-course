import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],

    css: [
        '@/assets/css/main.css',
    ]
})
