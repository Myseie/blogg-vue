import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BloggView from '../views/BloggView.vue'
import SingleBloggView from '../views/SingleBloggView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blogg',
    name: 'blogg',
    component:BloggView
    
  },
  {
    path: '/bloggs/:id',
    name: 'singleBlogg',
    component: SingleBloggView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
