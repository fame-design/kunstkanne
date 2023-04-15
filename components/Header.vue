<template>
  <header>
    <h1>Kunstkanne</h1>
    <Navigation></Navigation>
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  name: "Header",
  components: {Navigation}
}
</script>

<style scoped>
  header{
    background-color: #FF9933;
  }
</style>
