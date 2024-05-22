<script setup>
//vue
import { reactive } from 'vue';
//components
import Card from '@/components/Card.vue';

const data = reactive({
  name: '',
  pricePesos: null,
  promotionalPricePesos: null,
  priceDollar: null,
  promotionalPriceDollar: null,
  specification: [],
  description: '',
  images: [],
  isAvailable: true,
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

</script>

<template>
  <div class="add-container">

    <p class="title">Producto nuevo</p>

    <div class="form">
      <input type="text" placeholder="Nombre del producto" v-model="data.name">

      <input type="number" placeholder="Precio en pesos" v-model="data.pricePesos">

      <input type="number" placeholder="Promocion en pesos" v-model="data.promotionalPricePesos">

      <input type="number" placeholder="Precio en dolares" v-model="data.priceDollar">

      <input type="number" placeholder="Promocion en dolares" v-model="data.promotionalPriceDollar">

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

      <div @click="data.isAvailable = !data.isAvailable" class="checkbox">
        <span>¿Esta disponible?</span>
        <fa v-if="data.isAvailable" icon="check-circle" class="true" />
        <fa v-else icon="times-circle" class="false" />
      </div>
    </div>

    <Card :data="data" :add="true" />

    <div class="button">
      <fa icon="plus" />
      <span>Agregar producto</span>
    </div>

  </div>
</template>