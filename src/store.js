import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var getters = {
  getAthlete: state => state.athlete
}

var mutations = {
  SET_ATHLETE: (state, payload) => {
    state.athlete = payload.athlete
  }
}

var actions = {
  setAthlete: (context, payload) => {
    context.commit('SET_ATHLETE', payload)
  }
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})
