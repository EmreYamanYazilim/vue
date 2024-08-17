import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/studentx',
      name: 'studentx',
      component: () => import('@/views/Students.vue')
    },
    {
      path: '/studentx/:id', // idsini yakalamak pathtan gösteriyoruz
      name: 'sutudentinfo',
      props: true, // bunu sadece sayfada bind edeceğimiz veriyi yazdırırken  data yerine  props:[] içinde  verdiğimiz takma isimle verebiliriz
      component: () => import('@/views/StudentsInfo.vue')
    }
  ]
})

export default router
