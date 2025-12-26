<template>
  <div id="pageWrapper">
    <Header />
    <NuxtPage  />
    <Footer />
  </div>
</template>
<script setup>
useSeoMeta({
  title: 'kunstkanne',
  description: 'Homepage von Friedemann Kannengießer – Malerei, Musik und mehr.',
  ogTitle: 'kunstkanne',
  ogDescription: 'Homepage von Friedemann Kannengießer – Malerei, Musik und mehr.',
  ogImage: '/social-card.png',
  ogUrl: 'https://www.kunstkanne.de/',
  twitterCard: 'summary',
  twitterTitle: 'kunstkanne',
  twitterDescription: 'Homepage von Friedemann Kannengießer – Malerei, Musik und mehr.',
  twitterImage: '/android-chrome-512x512.png'
})

useHead({
  htmlAttrs: { lang: 'de' },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
</script>
<style scoped>
  #pageWrapper {
    max-width: 795px;
    background-color: #c6d9f1;
  }
</style>
