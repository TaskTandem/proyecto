<script setup>
//vue
import { ref, onMounted } from 'vue'
//vue-router
import { useRoute } from 'vue-router'
const route = useRoute()
//component
import Card from '@/components/Card.vue';
//store
import { useProductStore } from '@/stores'
const { getProductsByCategory } = useProductStore()

const loaded = ref(false)
const products = ref([])

onMounted(async() => {
  products.value = await getProductsByCategory(route.params.id)
  loaded.value = true
})
</script>

<template>
  <div v-show="loaded" class="search-container">
    <p v-if="products.length === 0" class="title">No hay productos en este momento</p>
    <Card v-else v-for="(product, index) in products" :key="index" :data="product" />
  </div>
</template>