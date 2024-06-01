<script setup>
//components
import Card from './Card.vue';
//store
import { useWindowStore } from '@/stores';
const $W = useWindowStore()
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [Navigation];
//props
defineProps(['data'])
</script>

<template>
  <div v-if="$W.width < 768" class="cards-container">
    <Card v-for="(product, index) in data" :data="product" :key="index" />
  </div>
  <div v-else class="cards-container">
    <swiper
      v-if="data?.length > 2"
      :navigation="true"
      :allowTouchMove="false"
      :slidesPerView="3"
      :loop="data?.length > 2"
      :modules="modules"
    >
      <swiper-slide v-for="(product, index) in data" :key="index">
        <Card :data="product" :key="index" />
      </swiper-slide>
    </swiper>
    <Card v-else v-for="(product, index) in data" :data="product" :key="index" />
  </div>
</template>