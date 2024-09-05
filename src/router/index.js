import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/especialidades',
    name: 'especialidades',
    component: () => import(/* webpackChunkName: "especialidades" */ '../views/EspecialidadesView.vue')
  },
  {
    path: '/cirurgia-em-animais',
    name: 'cirurgia-em-animais',
    component: () => import(/* webpackChunkName: "cirurgia-em-animais" */ '../components/servicoes/CirurgiaPage.vue')
  },
  {
    path: '/ortopedia-veterinaria',
    name: 'ortopedia-veterinaria',
    component: () => import(/* webpackChunkName: "ortopedia-veterinaria" */ '../components/servicoes/OrtopediaPage.vue')
  },
  {
    path: '/fisioterapia-e-acupuntura-veterinaria',
    name: 'fisioterapia-e-acupuntura-veterinaria',
    component: () => import(/* webpackChunkName: "fisioterapia-e-acupuntura-veterinaria" */ '../components/servicoes/FisioterapiaPage.vue')
  },
  {
    path: '/laboratorio-veterinario',
    name: 'laboratorio-veterinario',
    component: () => import(/* webpackChunkName: "laboratorio-veterinario" */ '../components/servicoes/LaboratorioPage.vue')
  },
  {
    path: '/internacao-veterinaria',
    name: 'internacao-veterinaria',
    component: () => import(/* webpackChunkName: "internacao-veterinaria" */ '../components/servicoes/InternacaoPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
