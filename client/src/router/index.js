import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Mailables from '../views/Mailables.vue'

const routes = [
  {
    path: '/',
    name: 'Mailables',
    component: Mailables
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
