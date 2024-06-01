<script setup>
//vue
import { ref, onMounted } from 'vue'
//vue-router
import { useRoute } from 'vue-router'
const route = useRoute()
//component
import CardContainer from '@/components/CardContainer.vue';
//store
import { useProductStore } from '@/stores'
const { getProductsByCategory } = useProductStore()

const loaded = ref(false)
const products = ref([])

onMounted(async() => {
  products.value = await getProductsByCategory(route.params.id)
  console.log(products.value)
  loaded.value = true
})
</script>

<template>
  <div v-if="loaded" class="search-container">
    <p v-if="products.length === 0" class="title">No hay productos en este momento</p>
    <CardContainer :data="products" />
  </div>
</template>