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

  @media screen and (min-width: 795px) {

    header {
      height: 215px;
      background-image: url("~/assets/img/layout/kopf.jpg");
    }

    h1{
      display: none;
    }

    nav{
      padding-top: 192px;
    }
  }
</style>
