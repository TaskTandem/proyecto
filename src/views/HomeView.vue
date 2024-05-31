<script setup>
//vue
import { ref, onMounted } from 'vue';
//vue-router
import { RouterLink } from 'vue-router'
//components
import Card from '@/components/Card.vue'
//store
import { useProductStore, useAdminStore } from '@/stores'
const $P = useProductStore()
const { logged } = useAdminStore()

const products = ref()

onMounted(async () => {
  products.value = await $P.getProducts()
})
</script>

<template>
  <div class="home-container">
    <div v-if="logged" class="admin-buttons">
      <RouterLink to="/categories" class="button">
        <span>Categorias</span>
      </RouterLink>
      <RouterLink to="/add/new" class="button">
        <span>Agregar producto</span>
      </RouterLink>
    </div>
    <div class="cards-container">
      <Card v-for="(product, index) in products" :data="product" :key="index" />
    </div>
  </div>
</template>
