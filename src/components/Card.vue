<script setup>
//vue-router
import { useRouter } from 'vue-router';
//store
import { useAdminStore, useProductStore } from '@/stores';
const { logged } = useAdminStore()
const { deleteProduct } = useProductStore()
//swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const modules = [Pagination];
//props
const props = defineProps(['data', 'add'])
const router = useRouter()

const deleteProd = async () => {
  if (confirm('¿Estas seguro que queres eliminar este producto?')) {
    const res = await deleteProduct(props.data.id)
    if(res) {
      router.go()
    } else {
      alert('Hubo un error al eliminar el producto')
    }
  }
}
</script>

<template>
  <div class="card-container">

    <div v-if="data.images.length > 0" class="images">
      <swiper
        :pagination="{
          clickable: true,
        }"
        :grab-cursor="true"
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
      <div v-if="data.specifications.length > 0" class="specifications">
        <p v-for="(desc, index) in data.specifications" :key="index">{{ desc }}</p>
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
      <RouterLink :to="`/add/${data.id}`" class="button">
        <fa icon="pencil" />
        <span>Editar</span>
      </RouterLink>
      <div @click="deleteProd" class="button delete">
        <fa icon="times" />
        <span>Eliminar</span>
      </div>
    </div>

    <a :href="`https://wa.me/5492235458947?text=${'¡Hola! Me interesa este producto: ' + data.name}`" target='_blank' v-if="!logged && !add" class="button">
      <fa :icon="['fab', 'whatsapp']" />
      <span>{{ data.isAvailable ? 'Pedir por whatsapp' : 'Consultar por whatsapp' }}</span>
    </a>

  </div>
</template>