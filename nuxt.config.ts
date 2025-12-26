import { join } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-12-26',
  // Target: Only 'static' or 'server' in Nuxt 2, in Nuxt 3 use 'ssr: false' for static
  ssr: false, // Set to false if you want a static site
  app: {
    baseURL: process.env.BASE_URL || '/',
    head: {
      title: 'kunstkanne',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/kunstkanne/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/kunstkanne/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/kunstkanne/favicon-16x16.png' },
        { rel: 'manifest', href: '/kunstkanne/site.webmanifest' }
      ]
    }
  },
  css: [
    join(__dirname, 'assets/css/fonts.scss'),
    join(__dirname, 'assets/css/main.scss')
  ],
  components: true,
  modules: [
    // Add Nuxt 3 compatible modules here
  ],
  // Entferne publicPath, da es in Nuxt 3 nicht unterstützt wird
}) 