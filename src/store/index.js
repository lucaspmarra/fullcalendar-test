import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  getters: {
    events: state => state.events
  },
  mutations: {
    addEvents: (state, event) => {
      return state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})