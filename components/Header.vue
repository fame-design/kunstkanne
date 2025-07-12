<template>
  <header>
    <h1>Kunstkanne</h1>
    <Navigation></Navigation>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  header{
    /* background-color: #FF9933; */
    background: linear-gradient(to bottom,  #ffc578 0%,#fb9d23 100%);
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
