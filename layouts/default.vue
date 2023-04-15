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
    border: solid black 1px;
    margin: 10px auto;
    /*max-width: 795px;*/
    max-width: 1000px;
    background-color: #c6d9f1;
  }
</style>
