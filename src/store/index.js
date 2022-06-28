import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: []
  },
  getters: {
    eventsComputed: state => {
      return state.events
    }
    // EVENTS: state => state.events
  },
  mutations: {
    ADD_EVENT: (state, event) => {
      return state.events.push(event)
    },
    UPDATE_EVENT: (state, {
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