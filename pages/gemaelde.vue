<template>
  <main>
    <table style="margin-top: 20px;" border="0">
      <tbody>
      <tr>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/Ukraine.jpg" width="156" border="0"><br>
          <div class="schilder">Ukraine<br>2023, Aquarell</div>
        </td>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/Muehlhausen.jpg" width="156" border="0"><br>
          <div class="schilder">M&uuml;hlhausen<br>2023, Aquarell</div>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #a0a0a0;"></td>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/Rudi_Dutschke.jpg" width="156" border="0"><br>
          <div class="schilder">Rudi Dutschke<br>2023, Aquarell</div>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/doppelkapelle.png" height="214" width="156" border="0"><br>
          <div class="schilder">Doppelkapelle<br>St. Crucis in Landsberg<br>2003, Pastel</div>
        </td>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/rethimnon.png" height="214" width="203" border="0"><br>
          <div class="schilder">Rethimnon<br>Kreta<br>2000, Aquarell</div>
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #a0a0a0;"></td>
        <td style="border: 1px solid #a0a0a0;">
          <img src="~/assets/img/gemaelde/dom.png" height="268" width="199" border="0"><br>
          <div class="schilder">Dom<br>zu Meißen<br>2002, Pastel</div>
        </td>
      </tr>
      </tbody>
    </table>
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

</style>
