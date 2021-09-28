import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comics: [],
    cart: [],
    total: 0,
    loading: false,
    error: null,
  },
  actions,
  mutations,
  getters
})
