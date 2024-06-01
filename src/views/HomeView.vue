<script setup>
//vue
import { ref, onMounted } from 'vue';
//vue-router
import { RouterLink } from 'vue-router'
//components
import CardContainer from '@/components/CardContainer.vue';
//store
import { useProductStore, useAdminStore, useWindowStore } from '@/stores'
const $P = useProductStore()
const $W = useWindowStore()
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
    <CardContainer :data="products" />
  </div>
</template>
