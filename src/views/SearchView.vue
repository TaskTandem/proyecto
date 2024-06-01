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
const { getProductsByName } = useProductStore()

const loaded = ref(false)
const products = ref([])

onMounted(async() => {
  products.value = await getProductsByName(route.params.name)
  loaded.value = true
})
</script>

<template>
  <div v-show="loaded" class="search-container">
    <p class="title">{{ products.length > 0 ? `Productos encontrados por buscar ${route.params.name}` : `No se encontraron productos por buscar "${route.params.name}"` }}</p>
    <CardContainer :data="products" />
  </div>
</template>