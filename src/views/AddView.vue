<script setup>
//vue
import { ref, reactive, onMounted } from 'vue';
//vue-router
import { useRouter } from 'vue-router';
//components
import Card from '@/components/Card.vue';
//store
import { useCategoryStore, useProductStore } from '@/stores';
//helpers
import { isAuthenticated } from '@/helpers/authentication';

const data = reactive({
  name: '',
  price: null,
  promotionalPrice: null,
  specification: [],
  description: '',
  images: [],
  categoryIds: [],
  isAvailable: true
})

const addData = (model) => {
  const input = document.getElementById(model)
  if(input.value != '') {
    data[model].push(input.value)
    input.value = ''
  }
}

const deleteData = (model, index) => {
  data[model].splice(index, 1)
}

const categories = ref([])
const selectParent = ref(null)
const selectchild = ref(null)

const refresh = () => {
  selectchild.value = null
}

const addProduct = async () => {
  data.categoryIds.push(selectParent.value)
  if(selectchild.value) data.categoryIds.push(selectchild.value)
  console.log(data);
  const res = await useProductStore().addProduct(data)
  if(res) {
    useRouter().push('/')
  } else {
    alert('Hubo un error al crear el producto')
  }
}

onMounted(async () => {
  isAuthenticated()
  categories.value = await useCategoryStore().getCategories()
})

</script>

<template>
  <div class="add-container">

    <p class="title">Producto nuevo</p>

    <div class="form">
      <input type="text" placeholder="Nombre del producto" v-model="data.name">

      <input type="number" placeholder="Precio en dolares" v-model="data.price">

      <input type="number" placeholder="Promocion en dolares" v-model="data.promotionalPrice">

      <div class="add-item">
        <input id="specification" type="text" placeholder="Agregar una especificacion">
        <div @click="addData('specification')" class="button add-form">
          <fa icon="plus" />
        </div>
      </div>
      <div v-if="data.specification.length > 0" class="list">
        <div v-for="(item, index) in data.specification" :key="index" class="item">
          <p>{{ item }}</p>
          <fa @click="deleteData('specification', index)" icon="close" />
        </div>
      </div>

      <input type="text" placeholder="Descripcion" v-model="data.description">

      <div class="add-item">
        <input id="images" type="text" placeholder="Agregar una imagen">
        <div @click="addData('images')" class="button add-form">
          <fa icon="plus" />
        </div>
      </div>
      <div v-if="data.images.length > 0" class="list">
        <div v-for="(item, index) in data.images" :key="index" class="item">
          <p>{{ item }}</p>
          <fa @click="deleteData('images', index)" icon="close" />
        </div>
      </div>

      <div class="categories">
        <select @change="refresh" v-model="selectParent">
          <option :value="null">Seleccionar categoria padre</option>
          <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.name }}</option>
        </select>

        <select v-if="selectParent && categories.find(c => c.id === selectParent).childrens.length > 0" v-model="selectchild">
          <option :value="null">Categoria hijo</option>
          <option v-for="(category, index) in categories.find(c => c.id === selectParent).childrens" :key="index" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div @click="data.isAvailable = !data.isAvailable" class="checkbox">
        <span>¿Esta disponible?</span>
        <fa v-if="data.isAvailable" icon="check-circle" class="true" />
        <fa v-else icon="times-circle" class="false" />
      </div>
    </div>

    <Card :data="data" :add="true" />

    <div v-if="data.name && data.price && data.images.length > 0 && selectParent" class="button" @click="addProduct">
      <fa icon="plus" />
      <span>Agregar producto</span>
    </div>

  </div>
</template>