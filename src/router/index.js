import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/v-main-page.vue";
import VLoginPage from "@/pages/v-login-page.vue";
import VRegistrationPage from "@/pages/v-registration-page.vue";



const routes = [
  {
    path: '/',
    component: mainPage
  },
  {
    path: '/login',
    component: VLoginPage

  },
  {
    path: '/registration',
    component: VRegistrationPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
