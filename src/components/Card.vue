<script setup>
//store
import { useAdminStore } from '@/stores';
const { logged } = useAdminStore()
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination];
//props
defineProps(['data', 'add'])

const admin = false;
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
        <div v-if="data.price" class="price">
          <span :class="{promotion: data.promotionalPrice !== null}">{{ data.price }}USD</span>
          <span v-if="data.promotionalPrice">{{ data.promotionalPrice }}USD</span>
        </div>
      </div>
      <div v-else class="isntAvailable">
        <span>Agotado</span>
      </div>
    </div>

    <div v-if="logged && !add" class="button-container">
      <div class="button">
        <fa icon="pencil" />
        <span>Editar</span>
      </div>
      <div class="button delete">
        <fa icon="times" />
        <span>Eliminar</span>
      </div>
    </div>

    <div v-if="!logged && !add" class="button">
      <fa :icon="['fab', 'whatsapp']" />
      <span>{{ data.isAvailable ? 'Pedir por whatsapp' : 'Consultar por whatsapp' }}</span>
    </div>

  </div>
</template>