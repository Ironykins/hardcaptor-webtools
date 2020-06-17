import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/summary',
    name: 'Character Summary',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "summary" */ '../views/CharacterSummary.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/enemyref',
    name: 'Enemy Abilities',
    component: () => import(/* webpackChunkName: "enemyref" */ '../views/EnemyAbilities.vue')
  },
  {
    path: '/magicalburst',
    name: 'Magical Burst',
    component: () => import(/* webpackChunkName: "magicalburst" */ '../views/MagicalBurst.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
