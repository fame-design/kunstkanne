export default defineNuxtConfig({
  // Target: Only 'static' or 'server' in Nuxt 2, in Nuxt 3 use 'ssr: false' for static
  ssr: false, // Set to false if you want a static site
  app: {
    baseURL: '/kunstkanne/',
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
        { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/x-icon', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  css: [
    '~/assets/css/main.scss'
  ],
  components: true,
  modules: [
    // Add Nuxt 3 compatible modules here
  ],
  build: {
    // Add custom build options if needed
  }
}) 