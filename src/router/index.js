// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import {ro} from "vuetify/locale";
import {useAppStore} from "@/store/app";
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: HomeView,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/ContactView.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView.vue'),
        meta: {
          adminOnly: true
        }
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const appStore = useAppStore();

  if(to.meta?.adminOnly && !appStore.isLoggedIn) {
    next('/login');
  } else {
    next();
  }
})

export default router
