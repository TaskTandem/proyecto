<script setup>
//vue
import { ref, onMounted } from 'vue';
//vue-router
import { RouterLink } from 'vue-router'
//stores
import { useWindowStore, useCategoryStore } from '../stores/index'
const $W = useWindowStore()
const { getCategories } = useCategoryStore()

const menu = ref(false)
const search = ref(false)

const categories = ref();

onMounted(async () => {
  categories.value = await getCategories()
})
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
        <span v-for="(link, index) in categories" :key="index" class="link">{{ link.name }}</span>
      </div>
    </div>

    <!-- logo -->
    <div class="logo">
      <RouterLink to="/">ROCKY_STORE</RouterLink>
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