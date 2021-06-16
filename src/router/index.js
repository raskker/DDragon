import { createRouter, createWebHistory } from 'vue-router'
import Champions from '../components/Champions.vue'
import Home from '../components/Home.vue'
import ChampionDetails from '../components/ChampionDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/champions',
    name: 'Champions',
    component: Champions
  },

  {
    path: '/champions/:name',
    name: 'ChampionDetails',
    component: ChampionDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
