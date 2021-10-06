import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    props: true,
    name: 'Edit',
    component: Edit
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
