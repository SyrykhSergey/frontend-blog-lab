import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/v-main-page.vue";



const routes = [
  {
    path: '/',
    component: mainPage
  },
  {

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
