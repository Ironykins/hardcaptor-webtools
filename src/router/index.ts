import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Edit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edit
  },
  {
    path: '/summary',
    name: 'Character Summary',
    component: () => import(/* webpackChunkName: "summary" */ '../views/CharacterSummary.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
