<!--suppress HtmlUnknownTarget -->
<template>
  <main>
    <div>
      <img src="~/assets/img/gemaelde/Ukraine.jpg" alt="Ukraine"><br>
      <div class="schilder">Ukraine<br>2023, Aquarell</div>
    </div>

    <div>
      <img src="~/assets/img/gemaelde/Muehlhausen.jpg" alt="Muehlhausen"><br>
      <div class="schilder">M&uuml;hlhausen<br>2023, Aquarell</div>
    </div>

    <div>
      <img src="~/assets/img/gemaelde/Rudi_Dutschke.jpg" alt="Rudi_Dutschke"><br>
      <div class="schilder">Rudi Dutschke<br>2023, Aquarell</div>
    </div>

    <div>
      <img src="~/assets/img/gemaelde/doppelkapelle.png" alt="doppelkapelle"><br>
      <div class="schilder">Doppelkapelle<br>St. Crucis in Landsberg<br>2002, Pastel</div>
    </div>

    <div>
      <img src="~/assets/img/gemaelde/rethimnon.png" alt="rethimnon"><br>
      <div class="schilder">Rethimnon<br>Kreta<br>2000, Aquarell</div>
    </div>

    <div>
      <img src="~/assets/img/gemaelde/dom.png" alt="dom"><br>
      <div class="schilder">Dom<br>zu Meißen<br>2002, Pastel</div>
    </div>
  </main>
</template>

<script>
import Picture from "../components/Picture.vue";

export default {
  name: "gemaelde",
  components: {Picture}
}
</script>

<style scoped>
  main {
    text-align: center;
  }

  img {
    width: 90vw;
    max-width: 755px;
  }

  .schilder {
    border: 1px solid #95A6BF;
    padding: 5px;
    font-size: 0.6em;
    background-color: #D5E6FF;
    margin-top: 5px;
    margin-bottom: 25px;
  }

</style>
