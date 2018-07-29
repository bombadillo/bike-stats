import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var getters = {
  getAthlete: state => state.athlete,
  getAthleteStats: state => state.athleteStats
}

var mutations = {
  SET_ATHLETE: (state, payload) => {
    state.athlete = payload.athlete
  },
  SET_ATHLETE_STATS: (state, payload) => {
    state.athleteStats = payload.athleteStats
  }
}

var actions = {
  setAthlete: (context, payload) => {
    context.commit('SET_ATHLETE', payload)
  },
  setAthleteStats: (context, payload) => {
    context.commit('SET_ATHLETE_STATS', payload)
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
