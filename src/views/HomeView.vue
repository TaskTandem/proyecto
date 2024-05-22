<script setup>
//vue-router
import { RouterLink } from 'vue-router'
//components
import Card from '@/components/Card.vue'

const data = {
  id: "4a85ad21-9416-49de-a088-775c2bf1187c",
  name: "Samsung S23 Fe",
  pricePesos: 1164999,
  promotionalPricePesos: null,
  priceDollar: 1110,
  promotionalPriceDollar: 760,
  specification: ["Procesador: Octa-Core", "Camara frontal: 10.0 MP", "Camara trasera: 50.0 MP + 12.0 MP + 8.0 MP", "Memoria interna: 128gb", "Tamaño de pantalla: 6.4'", "Bateria: 4500mAh", "Inteligencia Artificial: Si"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  images: [
  "https://coppelar.vtexassets.com/arquivos/ids/1820336-1200-auto?v=638354860197430000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820337-1200-auto?v=638354860215800000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820338-1200-auto?v=638354860233130000&width=1200&height=auto&aspect=true"
  ],
  isAvailable: false,
  createdAt: "2024-05-15",
  updatedAt: "2024-05-15"
}

</script>

<template>
  <div class="home-container">
    <RouterLink to="/add" class="button add-product">
      <fa icon="plus" />
    </RouterLink>
    <Card :data="data" />
  </div>
</template>
