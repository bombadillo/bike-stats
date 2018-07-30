import Vuex from 'vuex'
import Vue from 'vue'

import stravaAccessTokenRetriever from './services/strava/stravaAccessTokenRetriever'
import athleteStatsRetriever from './services/strava/athleteStatsRetriever'

Vue.use(Vuex)

var getters = {
  athlete: state => state.athlete,
  athleteStats: state => state.athleteStats,
  stravaAuthorised: state => state.stravaAuthorised,
  gettingStravaAccessToken: state => state.gettingStravaAccessToken,
  stravaError: state => state.stravaError,
  stravaAuthenticationRequired: state => state.stravaAuthenticationRequired
}

var mutations = {
  SET_ATHLETE: (state, athlete) => {
    state.athlete = athlete
  },
  SET_ATHLETE_STATS: (state, athleteStats) => {
    state.athleteStats = athleteStats
  },
  SET_STRAVA_ERROR: (state, isError) => {
    state.stravaError = isError
  },
  SET_STRAVA_AUTHORISED: (state, authorised) => {
    state.stravaAuthorised = authorised
  },
  SET_GETTING_STRAVA_ACCESSTOKEN: (state, getting) => {
    state.gettingStravaAccessToken = getting
  },
  SET_STRAVA_AUTHENTICATION_REQUIRED: (state, required) => {
    state.stravaAuthenticationRequired = required
  }
}

var actions = {
  getStravaAuthCode: (context, authCode) => {
    let stravaAuthCode = authCode || localStorage.getItem('stravaAuthCode')

    if (!stravaAuthCode) {
      context.commit('SET_STRAVA_AUTHENTICATION_REQUIRED', true)
      return
    }

    context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', true)

    return stravaAccessTokenRetriever
      .retrieve(stravaAuthCode)
      .then(response => {
        if (response.athlete) {
          localStorage.setItem('stravaAccessToken', response.access_token)
          context.commit('SET_ATHLETE', response.athlete)
          context.commit('SET_STRAVA_AUTHORISED', true)
          context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', false)
        }
      })
      .catch(error => {
        context.commit('SET_STRAVA_ERROR', true)
        context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', false)
      })
  },
  getAthleteStats: (context, athleteId) => {
    athleteStatsRetriever
      .retrieveById(athleteId)
      .then(stats => {
        context.commit('SET_ATHLETE_STATS', stats)
      })
      .catch(error => {})
  }
}

export default new Vuex.Store({
  state: {
    athlete: undefined,
    stravaAuthorised: undefined,
    athleteStats: undefined,
    gettingStravaAccessToken: undefined,
    stravaError: undefined
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})
