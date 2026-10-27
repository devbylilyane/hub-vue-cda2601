
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    // Accueil
    {
      path: '/home',
      alias: '/',
      component: Home
    },

    // Toutes les leçons sur une page
    {
      path: '/lecons',
      name: 'lecons',
      component: () => import('../views/Lessons.vue')
    },

    // Tous les exercices sur une page
    {
      path: '/exercices',
      name: 'exercices',
      component: () => import('../views/Exercices.vue')
    },

        // Tous les TP sur une seule page
    {
      path: '/tp',
      name: 'tp',
      component: () => import('../views/TP.vue')
    },

    // Pages classiques
    {
      path: '/about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      component: () => import('../views/Contact.vue')
    },

    // Exercices individuels
    {
      path: '/exercice-fetch-api',
      name: 'exercice-fetch-api',
      component: () => import('../views/ExerciceFetchApi.vue')
    },
    {
      path: '/exercice-chart',
      name: 'exercice-chart',
      component: () => import('../views/ExerciceChart.vue')
    },

    // TP Data Binding
    {
      path: '/tp-data-binding',
      name: 'tp-data-binding',
      component: () => import('../views/ExerciceDataBinding.vue')
    },

    // TP Dynamic Styling
    {
      path: '/tp-dynamic-styling',
      name: 'tp-dynamic-styling',
      component: () => import('../components/TPDynamicStyling.vue')
    },

    // TP List
    {
      path: '/tp-list-conditional-rendering',
      name: 'tp-list-conditional-rendering',
      component: () => import('../components/TPListConditionalRendering.vue')
    },

    // TP Watcher Computed
    {
      path: '/tp-watcher-computed',
      name: 'tp-watcher-computed',
      component: () => import('../components/TPWatcherComputed.vue')
    }

  ],

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 20,
        behavior: 'smooth'
      }
    }

    return { top: 0 }
  }
})

export default router
