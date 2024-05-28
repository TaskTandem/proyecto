<script setup>
//vue
import { ref, onMounted } from 'vue';
//vue-router
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter();
//stores
import { useWindowStore, useCategoryStore } from '../stores/index'
const $W = useWindowStore()
const { getCategories } = useCategoryStore()

const menu = ref(false)
const search = ref(false)

const searchBar = ref('')

const categories = ref()
const children = ref([])

const goTo = (id, name) => {
  if(name) {
    router.push(`/busqueda/${name}`)
    search.value = false
    searchBar.value = ''
  } else {
    router.push(`/categoria/${id}`)
    menu.value = false
    children.value = []
  }
}

const getChildren = ({name, id}) => {
  const c = categories.value.find(n => n.name === name).childrens
  if(c.length > 0) {
    children.value.push( {name: 'Ver todos', id}, ...c)
  } else {
    goTo(id);
  }
}

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
      <fa v-if="children.length === 0" @click="menu = false" icon="times" />
      <fa v-else @click="children = []" icon="arrow-left" />
      <div class="links">
        <template v-if="children.length === 0">
          <span v-for="(link, index) in categories" :key="index" @click="getChildren(link)" class="link">{{ link.name }}</span>
        </template>

        <template v-else>
          <span v-for="(link, index) in children" :key="index" @click="goTo(link.id)" class="link">{{ link.name }}</span>
        </template>
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
      <div class="search-bar">
        <fa @click="goTo(null, searchBar)" icon="search" />
        <input v-model="searchBar" type="text" placeholder="buscar" @keyup.enter="goTo(null, searchBar)">
        <fa @click="search = false" icon="times" />
      </div>
    </div>
    
  </div>
  
</template>