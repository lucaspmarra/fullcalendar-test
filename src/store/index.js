import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  getters: {
    EVENTS: state => state.events
  },
  mutations: {},
  actions: {},
  modules: {}
})