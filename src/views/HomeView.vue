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

const data = {
  "name": "Samsung S23 Fe",
  "price": 1110,
  "promotionalPrice": 760,
  "specification": ["Procesador: Octa-Core", "Camara frontal: 10.0 MP", "Camara trasera: 50.0 MP + 12.0 MP + 8.0 MP", "Memoria interna: 128gb", "Tamaño de pantalla: 6.4'", "Bateria: 4500mAh", "Inteligencia Artificial: Si"],
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  "images": [
  "https://coppelar.vtexassets.com/arquivos/ids/1820336-1200-auto?v=638354860197430000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820337-1200-auto?v=638354860215800000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820338-1200-auto?v=638354860233130000&width=1200&height=auto&aspect=true"
  ],
  "isAvailable": true,
  "categoryIds": []
}

const data2 = {
  "name": "Samsung S23 Fe",
  "price": 1110,
  "promotionalPrice": 760,
  "specification": ["Procesador: Octa-Core", "Camara frontal: 10.0 MP", "Camara trasera: 50.0 MP + 12.0 MP + 8.0 MP", "Memoria interna: 128gb", "Tamaño de pantalla: 6.4'", "Bateria: 4500mAh"],
  "description": "",
  "images": [
  "https://coppelar.vtexassets.com/arquivos/ids/1820336-1200-auto?v=638354860197430000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820337-1200-auto?v=638354860215800000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820338-1200-auto?v=638354860233130000&width=1200&height=auto&aspect=true"
  ],
  "isAvailable": false,
  "categoryIds": []
}

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
      <RouterLink to="/add" class="button">
        <span>Agregar producto</span>
      </RouterLink>
    </div>
    <Card :data="data" />
    <Card :data="data2" />
    <div class="cards-container">
      <!-- <Card v-for="(product, index) in products" :data="product" :key="index" /> -->
    </div>
  </div>
</template>
