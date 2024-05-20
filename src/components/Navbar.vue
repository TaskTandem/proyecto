<script setup>
//vue
import { ref } from 'vue';
//vue-router
import { RouterLink } from 'vue-router'
//stores
import { useWindowStore } from '../stores/index'
const $W = useWindowStore()

const menu = ref(false)
const search = ref(false)

document.addEventListener("backbutton", () => {
  if(menu.value) menu.value = false
  if(search.value) search.value = false
}, false)
</script>

<template>

  <div v-if="$W.width > 768" id="navbar">
    navbar
  </div>

  <div v-else id="navbar_mobile">
    <!-- menu -->
    <div @click="menu = true" class="menu-button">
      <fa icon="bars" />
    </div>
    <div class="menu" :class="{disabledL: menu === false}">
      <fa @click="menu = false" icon="times" />
      <div class="links">
        botones
      </div>
    </div>

    <!-- logo -->
    <div class="logo">
      <RouterLink to="/">CELULARES</RouterLink>
    </div>

    <!-- buscador -->
    <div @click="search = true" class="search-button">
      <fa icon="search" />
    </div>
    <div class="menu search" :class="{disabledR: search === false}">
      <fa @click="search = false" icon="times" />
      <div class="links">
        buscador
      </div>
    </div>
    
  </div>
  
</template>