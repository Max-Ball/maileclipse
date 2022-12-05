import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import Mailables from '../views/Mailable.vue'
// @ts-ignore
import Templates from '../views/Template.vue'
// @ts-ignore
import AddTemplates from '../views/AddTemplate.vue'

const routes = [
  {
    path: '/',
    name: 'Mailables',
    component: Mailables
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates
  },
  {
    path: '/templates/add',
    name: 'NewTemplates',
    component: AddTemplates
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
