<script setup>
//swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const modules = [Pagination];
//props
defineProps(['data', 'add'])

const admin = true;
</script>

<template>
  <div class="card-container">

    <div v-if="data.images.length > 0" class="images">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :loop="data.images.length > 1"
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
      <div v-if="data.isAvailable" class="price-container">
        <div v-if="data.pricePesos" class="price">
          <span :class="{promotion: data.promotionalPricePesos !== null}">${{ data.pricePesos }}</span>
          <span v-if="data.promotionalPricePesos">${{ data.promotionalPricePesos }}</span>
        </div>
        <div v-if="data.priceDollar" class="price">
          <span :class="{promotion: data.promotionalPriceDollar !== null}">{{ data.priceDollar }}USD</span>
          <span v-if="data.promotionalPriceDollar">{{ data.promotionalPriceDollar }}USD</span>
        </div>
      </div>
      <div v-else class="isntAvailable">
        <span>Agotado</span>
      </div>
    </div>

    <div v-if="admin && !add" class="button-container">
      <div class="button">
        <fa icon="pencil" />
        <span>Editar</span>
      </div>
      <div class="button delete">
        <fa icon="times" />
        <span>Eliminar</span>
      </div>
    </div>

    <div v-if="!admin && !add" class="button">
      <fa :icon="['fab', 'whatsapp']" />
      <span>{{ data.isAvailable ? 'Pedir por whatsapp' : 'Consultar por whatsapp' }}</span>
    </div>

  </div>
</template>