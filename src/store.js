import Vuex from 'vuex'
import Vue from 'vue'

import stravaAccessTokenRetriever from './services/strava/stravaAccessTokenRetriever'
import athleteStatsRetriever from './services/strava/athleteStatsRetriever'
import athleteRetriever from './services/strava/athleteRetriever'
import activityRetriever from './services/strava/activityRetriever'

Vue.use(Vuex)

var getters = {
  athlete: state => state.athlete,
  athleteStats: state => state.athleteStats,
  stravaAuthorised: state => state.stravaAuthorised,
  gettingStravaAccessToken: state => state.gettingStravaAccessToken,
  stravaError: state => state.stravaError,
  stravaAuthenticationRequired: state => state.stravaAuthenticationRequired,
  bike: state => state.bike,
  initialLoadComplete: state => state.initialLoadComplete,
  latestActivity: state => state.latestActivity
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
  },
  SET_BIKE: (state, bike) => {
    state.bike = bike
  },
  SET_INITIAL_LOAD_COMPLETE: state => {
    state.initialLoadComplete = true
  },
  SET_LATEST_ACTIVITY: (state, acitvity) => {
    state.latestActivity = acitvity
  }
}

var actions = {
  getStravaAuthCode: (context, authCode) => {
    let stravaAuthCode = authCode || localStorage.getItem('stravaAuthCode')

    if (!stravaAuthCode) {
      context.commit('SET_INITIAL_LOAD_COMPLETE')
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
          context.commit('SET_INITIAL_LOAD_COMPLETE')
        }
      })
      .catch(error => {
        context.commit('SET_STRAVA_ERROR', true)
        context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', false)
        context.commit('SET_INITIAL_LOAD_COMPLETE')
      })
  },
  getAthleteStats: (context, athleteId) => {
    athleteStatsRetriever
      .retrieveById(athleteId)
      .then(stats => {
        context.commit('SET_ATHLETE_STATS', stats)
      })
      .catch(error => {})
  },
  getAthlete: context => {
    athleteRetriever
      .retrieve()
      .then(athlete => {
        context.commit('SET_ATHLETE', athlete)
      })
      .catch(error => {})
  },
  getBike: context => {
    bikeRetriever
      .retrieve()
      .then(bike => {
        context.commit('SET_BIKE', bike)
      })
      .catch(error => {})
  },
  getLatestActivity: context => {
    activityRetriever
      .retrieveLatest(1)
      .then(activities => {
        context.commit('SET_LATEST_ACTIVITY', activities[0])
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
    stravaError: undefined,
    bike: undefined,
    initialLoadComplete: undefined,
    latestActivity: undefined
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})

function compare(a, b) {
  if (a.distance < b.distance) return -1
  if (a.distance > b.distance) return 1
  return 0
}
