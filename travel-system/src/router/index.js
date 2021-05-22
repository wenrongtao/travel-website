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

const comment = () =>import('../components/NavBar/Comment/comment.vue')
const descfood = () =>import('../components/NavBar/Food/descFood.vue')
const hotel = () =>import('../components/NavBar/Hotel/hotel.vue')
const scenic = () =>import('../components/NavBar/Scenic/scenic.vue')
const tour = () =>import('../components/NavBar/Tour/tour.vue')
const traffic = () =>import('../components/NavBar/Traffic/traffic.vue')
const weather = () =>import('../components/NavBar/Weather/weather.vue')

const process = () =>import('../components/SwiterBar/GiftCard/GiftUser/ProcessPurchase.vue')
const question = () =>import('../components/SwiterBar/GiftCard/GiftUser/Question.vue')
const service = () =>import('../components/SwiterBar/GiftCard/GiftUser/ServiceRgulations.vue')
const tutorial = () =>import('../components/SwiterBar/GiftCard/GiftUser/Tutorial.vue')
const Informations =() =>import('../components/SwiterBar/CityInfo/informations.vue')

const setting = () =>import('../views/Setting.vue')
const personal = () =>import('../views/Personal.vue')

const hoteldetails = () =>import('../components/NavBar/Hotel/hoteldetails.vue')

const transport = () =>import('../components/NavBar/Traffic/transport.vue')
const Foods = () =>import('../components/NavBar/Food/Foods.vue')
const food = () =>import('../components/NavBar/Food/food.vue')
const Menu = () =>import('../components/NavBar/Food/menu.vue')
const foodSearch = () =>import('../components/NavBar/Food/foodSearch.vue')

const routes = [
  {
    path: '/', redirect: '/login'
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
          {path: '/comment', component: comment},
          {
            path: '/descfood', component: descfood,
            redirect: '/Foods',
            children: [
              {path: '/Foods', component: Foods},
              {path: '/food', component: food},
              {path: '/foodSearch', component: foodSearch}
            ]
          },
          {path:'/menu', component: Menu},
          {path: '/hotel', component: hotel},
          {path: '/hoteldetails', component: hoteldetails},
          {path: '/transport', component: transport},
          {path: '/scenic', component: scenic},
          {path: '/tour', component: tour},
          {path: '/traffic', component: traffic},
          {path: '/weather', component: weather}
        ]
      },
      {path:'/informations', component: Informations},
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
  },
  {
    path: '/setting', component: setting
  },
  {
    path: '/personal', component: personal
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    if (token === 'null' || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});
export default router
