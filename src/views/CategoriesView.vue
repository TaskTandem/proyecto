<script setup>
//vue
import { ref, reactive, onMounted } from 'vue';
//store
import { useCategoryStore } from '@/stores';
const { getCategories, createCategories, deleteCategory } = useCategoryStore();
//helpers
import { isAuthenticated } from '@/helpers/authentication';

const categories = ref([])
const data = reactive({
  name: '',
  description: 'aaa',
  parentId: null
})

const modalAdd = ref(false)
const modalDelete = ref(false)

const addCategory = async () => {
  if(data.name !== '') {
    await createCategories(data)
    categories.value = await getCategories()
    data.name = ''
  }
}

const deleteOne = async (id) => {
  await deleteCategory(id)
  categories.value = await getCategories()
}

onMounted(async () => {
  isAuthenticated()
  categories.value = await getCategories()
})
</script>

<template>
  <div class="category-container">

    <p @click="modalAdd = !modalAdd" class="title">Agregar categoria</p>
    <div class="add" :class="{active: modalAdd}">
      <input type="text" placeholder="Nombre de la categoria" v-model="data.name">
      <div class="select">
        <span>Categoria padre: </span>
        <select v-model="data.parentId">
          <option :value="null">Categoria nueva</option>
          <option v-for="(category, index) in categories" :key="index" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div @click="addCategory" class="button">
        <span>Agregar categoria</span>
      </div>
    </div>

    <p @click="modalDelete = !modalDelete" class="title">Eliminar categorias</p>
    <div class="delete" :class="{active: modalDelete}">
      <div v-for="(category, index) in categories" :key="index" class="parent">
        <div>
          <p class="category">{{ category.name }}</p>
          <span @click="deleteOne(category.id)">Eliminar</span>
        </div>
        <div v-for="(child, index) in category.childrens" :key="index" class="childs">
          <p class="child">{{ child.name }}</p>
          <fa @click="deleteOne(child.id)" icon="times" />
        </div>
      </div>
    </div>
  </div>

</template>