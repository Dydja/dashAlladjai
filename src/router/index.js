import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserComponent from '@/components/users/UserComponent.vue'
import ServiceComponent from '@/components/services/ServiceComponent.vue'
import ReservationComponent from '@/components/reservations/ReservationComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      children: [
        { path: 'users', component: UserComponent },
        { path: 'services', component: ServiceComponent },
        { path: 'reservations', component: ReservationComponent }
      ]
    }
  ]
})

export default router
