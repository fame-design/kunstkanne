<template>
  <nav>
    <button class="burger" @click="open = !open" aria-label="Toggle navigation">
      <span :class="{ open }">&#9776;</span>
    </button>
    <div class="links" :class="{ open }">
      <NuxtLink to="/" @click="open = false">start</NuxtLink>
      <NuxtLink to="/vita" @click="open = false">vita</NuxtLink>
      <NuxtLink to="/animationen" @click="open = false">animationen</NuxtLink>
      <NuxtLink to="/gemaelde" @click="open = false">gemälde</NuxtLink>
      <NuxtLink to="/kontakt" @click="open = false">kontakt</NuxtLink>
      <NuxtLink to="/datenschutz" @click="open = false">Datenschutz</NuxtLink>
      <NuxtLink to="/impressum" @click="open = false">Impressum</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
nav {
  position: relative;
  margin-bottom: 8px;
  text-align: left;
  height: 100%;
}
.burger {
  display: block;
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
  position: absolute;
  right: 0.5em;
  top: -57px;
  /* Passe diesen Wert ggf. weiter an */
  z-index: 2;
}
.links {
  display: none;
  flex-direction: column;
  gap: 8px;
  background: #fff;
  position: absolute;
  /* top: 2.5em; */
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 12px 0;
  z-index: 1;
}
.links.open {
  display: flex;
}
.links a {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 4px 8px;
  border-radius: 4px;
}
.links a:hover {
  background: #eee;
}

/* Desktop-Ansicht ab 795px */
@media screen and (min-width: 795px) {
  .burger {
    display: none;
  }
  .links {
    display: flex !important;
    /* position: static; */
    flex-direction: row;
    gap: 0 12px;
    /* background: none; */
    top: 215px;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffc578+0,fb9d23+100;Orange+3D+%233 */
    background: linear-gradient(to bottom,  #ffc578 0%,#fb9d23 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    box-shadow: none;
    padding: 0;
  }
  .links a {
    display: inline-block;
    margin-right: 0;
    margin-bottom: 0;
    padding: 4px 8px;
  }
}
</style>
