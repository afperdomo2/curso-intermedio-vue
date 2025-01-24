import { createRouter, createWebHistory } from 'vue-router'

import CounterApp from '@/counter-pinia/views/CounterView.vue'
import { pokemonRoute } from '@/pokemon/router'
import AboutView from '../shared/views/AboutView.vue'
import HomeView from '../shared/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/counter', name: 'counter', component: CounterApp },
    { path: '/about', name: 'about', component: AboutView },
    { ...pokemonRoute, path: '/pokemon' },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
})

export default router
