<script setup>
//vue-router
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="footer-container">

    <div class="logo">
      <RouterLink to="/">ROCKY STORE</RouterLink>
    </div>

    <div class="social">
      <a href="https://www.instagram.com/rockystoremdq/" target="_blank"><fa :icon="['fab', 'instagram']" /></a>
      <a href="https://www.facebook.com/profile.php?id=61559945134594" target="_blank"><fa :icon="['fab', 'facebook']" /></a>
      <a href="https://wa.me/5492235458947?text=¡Hola!" target="_blank"><fa :icon="['fab', 'whatsapp']" /></a>
    </div>

    <div class="devs">
      <span>Desarrollado por:</span>
      <div class="links">
        <a href="https://www.linkedin.com/in/santiago-moraes-1361671b5/" target="_blank">Santiago Moraes</a>
        <a href="https://www.linkedin.com/in/franmacedonio/" target="_blank">Francisco Macedonio</a>
      </div>
    </div>

  </div>
</template>