<template>
  <div id="pageWrapper">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>
<style scoped>
  #pageWrapper {
    max-width: 795px;
    background-color: #c6d9f1;
  }
</style>
