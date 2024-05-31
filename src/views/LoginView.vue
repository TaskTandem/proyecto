<script setup>
//vue
import { reactive } from 'vue';
//vue-router
import { useRouter } from 'vue-router';
const router = useRouter()
//store
import { useAdminStore } from '@/stores/admin'
const $A = useAdminStore()

const data = reactive({
  email: '',
  password: ''
})

const login = async () => {
  const res = await $A.login(data)
  if(res) {
    router.push('/')
  } else {
    alert('Usuario incorrecto')
  }
}
</script>

<template>
  <div class="login-container">
    <div class="form">
      <input type="text" placeholder="Email" v-model="data.email">
      <input type="password" placeholder="Contraseña" v-model="data.password">
      <div @click="login" class="button">
        <fa icon="sign-in" />
        <span>Entrar</span>
      </div>
    </div>
  </div>
</template>
