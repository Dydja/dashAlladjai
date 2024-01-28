import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserComponent from '@/components/users/UserComponent.vue'
import ServiceComponent from '@/components/services/ServiceComponent.vue'
import ReservationComponent from '@/components/reservations/ReservationComponent.vue'

const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Clients', href: '/clients', current: false },
  { name: 'Prestataires', href: '/prestataires', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Sous-services', href: '/sous-services', current: false },
  { name: 'Prestations', href: '/prestations', current: false }
]

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/sign-out' }
]

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/clients', component: UserComponent }
    // Ajoutez d'autres routes pour les fonctionnalités supplémentaires
  ]
})

router.beforeEach((to, from, next) => {
  // Mettez à jour l'état 'current' en fonction de la route active
  navigation.forEach((item) => {
    item.current = item.href === to.path
  })
  next()
})

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
