import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginRegister',
    component: () => import('../views/loginRegister.vue')
  },
  {
    path:'/index',
    name:'Index',
    component:() => import('../views/index.vue'),
    children:[
      path:'/children',
      name:'ChildRen',
      component:() => import('../views/children.vue')
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
