<script setup>
//vue
import { onMounted, onBeforeUnmount } from 'vue'
//vue-router
import { RouterView } from 'vue-router'
//components
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
//stores
import { useWindowStore } from './stores/index'
const $W = useWindowStore()

onMounted(() => {
  window.addEventListener("resize", $W.handleSize);
});

onBeforeUnmount(() => {
  window.addEventListener("resize", $W.handleSize);
});
</script>

<template>
  <body>
    <Navbar />
    <div id="content">
      <RouterView :key="$route.fullPath" />
    </div>
    <Footer />
  </body>
</template>
