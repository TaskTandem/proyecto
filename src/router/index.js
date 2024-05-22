import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/add',
      component: AddView
    }
  ]
})

export default router
