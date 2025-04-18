import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import BlogDetail from '../views/BlogDetail.vue'
import TagView from '../views/TagView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/detail/:id',
    name: 'blogDetail',
    component: BlogDetail,
    props:true
  },
  {
    path: '/tags/:tag',
    name: 'tagView',
    component: TagView,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
