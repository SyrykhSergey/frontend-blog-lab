import { createRouter, createWebHistory } from 'vue-router'
import mainPage from "@/pages/v-main-page.vue";
import VLoginPage from "@/pages/v-login-page.vue";
import VRegistrationPage from "@/pages/v-registration-page.vue";
import VProfilePage from "@/pages/v-profile-page.vue";
import VAuthorsPage from "@/pages/v-authors-page.vue";
import VPostPage from "@/pages/v-post-page.vue";



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
  },
  {
    path: '/profile',
    component: VProfilePage
  },
  {
    path: '/authors',
    component: VAuthorsPage
  },
  {
    path: '/post/:postId',
    component: VPostPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
