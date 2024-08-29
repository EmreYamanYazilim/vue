import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import { projectAuth } from '@/firebase/config'

//to nereye  from nerden  ve next
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'welcome' })
  }else {
    next();
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/Chatroom.vue'),
      // giriş yapmadan önce kontrol
      beforeEnter: requireAuth
    }
  ]
})

export default router
