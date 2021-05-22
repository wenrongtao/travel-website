import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '../store/mutations/mutations'
import actions from '../store/getters/index'
import getters from '../store/getters/index'

Vue.use(Vuex)

const state =  {
  user_name: localStorage.getItem('user_name'),
  user_pass: localStorage.getItem('user_pass')
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
