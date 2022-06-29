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
    addEvent: (state, event) => {
      state.events.push(event)
    },
    updateEvent: (state, {
      id,
      title,
      start,
      end
    }) => {
      let index = state.events.findIndex(_event.id == id)
      state.events[index].title = title;
      state.events[index].start = start;
      state.events[index].end = end;
    },
  },
  actions: {},
  modules: {}
})