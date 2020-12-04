import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = () =>import('../views/Home.vue')
const main = () =>import('../components/NavBar/main.vue')

const login = () =>import('../views/Login.vue')
const register = () =>import('../views/Register.vue')

const nav = () =>import('../views/Nav.vue')
const strategynotes = () =>import('../components/SwiterBar/Strategy/StrategyNotes.vue')
const Strategyexperience = () =>import('../components/SwiterBar/Strategy/StrategyExperience.vue')
const Writenotes = () =>import('../components/SwiterBar/Strategy/WriteNotes.vue')
const shopping = () =>import('../components/SwiterBar/GlobalShopping/Shopping.vue')
const card = () =>import('../components/SwiterBar/GiftCard/Gift.vue')
const remark = () =>import('../components/SwiterBar/Remark/Remark.vue')
const contact = () =>import('../components/SwiterBar/Contact/Contact.vue')

const city = () =>import('../components/NavBar/City/city.vue')
const comment = () =>import('../components/NavBar/Comment/comment.vue')
const food = () =>import('../components/NavBar/Food/descFood.vue')
const hotel = () =>import('../components/NavBar/Hotel/hotel.vue')
const scenic = () =>import('../components/NavBar/Scenic/scenic.vue')
const tour = () =>import('../components/NavBar/Tour/tour.vue')
const traffic = () =>import('../components/NavBar/Traffic/traffic.vue')
const weather = () =>import('../components/NavBar/Weather/weather.vue')

const process = () =>import('../components/SwiterBar/GiftCard/GiftUser/ProcessPurchase.vue')
const question = () =>import('../components/SwiterBar/GiftCard/GiftUser/Question.vue')
const service = () =>import('../components/SwiterBar/GiftCard/GiftUser/ServiceRgulations.vue')
const tutorial = () =>import('../components/SwiterBar/GiftCard/GiftUser/Tutorial.vue')

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
          {path: '/main', component: main},
          {path: '/city', component: city},
          {path: '/comment', component: comment},
          {path: '/food', component: food},
          {path: '/hotel', component: hotel},
          {path: '/scenic', component: scenic},
          {path: '/tour', component: tour},
          {path: '/traffic', component: traffic},
          {path: '/weather', component: weather}
        ]
      },
      {
        path: '/strategynotes', component: strategynotes
      },
      {
        path: '/Strategyexperience', component: Strategyexperience
      },
      {
        path: '/Writenotes', component: Writenotes
      },
      {
        path: '/shopping', component: shopping
      },
      {
        path: '/card', component: card,
        redirect: '/process',
        children: [
          {
            path: '/process', component: process
          },
          {
            path: '/question', component: question
          },
          {
            path: '/service', component: service
          },
          {
            path: '/tutorial', component: tutorial
          }
        ]
      },
      {
        path: '/remark', component: remark
      },
      {
        path: '/contact', component: contact
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
