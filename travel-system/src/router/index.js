import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = () =>import('../views/Home.vue')
const nav = () =>import('../views/Nav.vue')
const main = () =>import('../components/NavBar/main.vue')
const login = () =>import('../views/Login.vue')
const register = () =>import('../views/Register.vue')


const routes = [
  {
    path: '/', redirect: '/home'
  },
  {
    path: '/home', component: home,
    redirect: '/nav',
    children: [
      {
        path: '/nav', component: nav,
        redirect: '/main',
        children: [
          {path: '/main',component: main}
        ]
      }
    ]
  },
  {
    path: '/login', component: login
  },
  {
    path: '/register', component: register
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
