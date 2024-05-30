import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import SearchView from '../views/SearchView.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/busqueda/:name',
      component: SearchView
    },
    {
      path: '/categoria/:id',
      component: CategoryView
    },
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/add/:id',
      component: AddView
    },
    {
      path: '/categories',
      component: CategoriesView
    }
  ]
})

export default router
