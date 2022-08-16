import { createRouter, createWebHistory } from 'vue-router'
import GoodsList from '../views/GoodsList.vue'
import EditGoods from '../views/EditGoods.vue'

const routes = [
  {
    path: '/',
    name: 'goodsList',
    component: GoodsList
  },
  {
    path: '/editGoods/:id',
    name: 'editGoods',
    component: EditGoods
  },
  {
    path: '/editGoods',
    name: 'editGoods',
    component: EditGoods
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
