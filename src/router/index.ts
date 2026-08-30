import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 90,
      }
    }
    return { top: 0 }
  },
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
      path: '/proyectos/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;