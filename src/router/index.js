import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'planning',
    meta: { layout: 'main' },
    component: () => import('@/views/Planning')
  },
  {
    path: '/tasks',
    name: 'tasks',
    meta: { layout: 'main' },
    component: () => import('@/views/Tasks')
  },
  {
    path: '/documentation',
    name: 'documentation',
    meta: { layout: 'main' },
    component: () => import('@/views/Documentation')
  },
  {
    path: '/management',
    name: 'management',
    meta: { layout: 'main' },
    component: () => import('@/views/Management')
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty' },
    component: () => import('@/views/Login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
