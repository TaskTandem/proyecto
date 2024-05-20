<script setup>
//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];

const data = {
  id: "4a85ad21-9416-49de-a088-775c2bf1187c",
  name: "Samsung S23 Fe",
  pricePesos: 1164999,
  promotionalPricePesos: null,
  priceDollar: 1110,
  promotionalPriceDollar: 760,
  specification: ["Procesador: Octa-Core", "Camara frontal: 10.0 MP", "Camara trasera: 50.0 MP + 12.0 MP + 8.0 MP", "Memoria interna: 128gb", "Tamaño de pantalla: 6.4'", "Bateria: 4500mAh", "Inteligencia Artificial: Si"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  slug: "samsung_s23_fe",
  stock: 2,
  images: [
  "https://coppelar.vtexassets.com/arquivos/ids/1820336-1200-auto?v=638354860197430000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820337-1200-auto?v=638354860215800000&width=1200&height=auto&aspect=true",
  "https://coppelar.vtexassets.com/arquivos/ids/1820338-1200-auto?v=638354860233130000&width=1200&height=auto&aspect=true"
  ],
  isAvailable: true,
  createdAt: "2024-05-15",
  updatedAt: "2024-05-15"
}

</script>

<template>
  <div class="card-container">

    <div class="images">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :loop="true"
        :modules="modules"
      >
        <swiper-slide v-for="(image, index) in data?.images" :key="index">
          <img :src="image" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="information">
      <h1 class="name">{{ data.name }}</h1>
      <div v-if="data.specification.length > 0" class="specifications">
        <p v-for="(desc, index) in data.specification" :key="index">{{ desc }}</p>
      </div>
      <div class="description" v-if="data.description">
        <p>{{ data.description }}</p>
      </div>
      <div class="price-container">
        <div v-if="data.pricePesos" class="price">
          <span :class="{promotion: data.promotionalPricePesos !== null}">${{ data.pricePesos }}</span>
          <span v-if="data.promotionalPricePesos">${{ data.promotionalPricePesos }}</span>
        </div>
        <div v-if="data.priceDollar" class="price">
          <span :class="{promotion: data.promotionalPriceDollar !== null}">{{ data.priceDollar }}USD</span>
          <span v-if="data.promotionalPriceDollar">{{ data.promotionalPriceDollar }}USD</span>
        </div>
      </div>
    </div>

    <div class="button">
      <fa :icon="['fab', 'whatsapp']" />
      <span>Pedir por whatsapp</span>
    </div>

  </div>
</template>