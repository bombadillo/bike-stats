import Vuex from 'vuex'
import Vue from 'vue'

import stravaAccessTokenRetriever from './services/strava/stravaAccessTokenRetriever'
import athleteStatsRetriever from './services/strava/athleteStatsRetriever'
import athleteRetriever from './services/strava/athleteRetriever'
import activityRetriever from './services/strava/activityRetriever'
import bikeRetriever from './services/strava/bikeRetriever'
import userCreator from './services/user/userCreator'
import bikeCheckRetriever from './services/bike/bikeCheckRetriever'
import bikeCheckCreator from './services/bike/bikeCheckCreator'
import bikeCheckUpdater from './services/bike/bikeCheckUpdater'

Vue.use(Vuex)

var getters = {
  athlete: state => state.athlete,
  athleteStats: state => state.athleteStats,
  loadingAthleteStats: state => state.loadingAthleteStats,
  athleteStatsLoadError: state => state.athleteStatsLoadError,
  stravaAuthorised: state => state.stravaAuthorised,
  gettingStravaAccessToken: state => state.gettingStravaAccessToken,
  stravaError: state => state.stravaError,
  stravaAuthenticationRequired: state => state.stravaAuthenticationRequired,
  bike: state => state.bike,
  bikeChecks: state => state.bikeChecks,
  bikeCheckUpdated: state => state.bikeCheckUpdated,
  bikeCheckAdded: state => state.bikeCheckAdded,
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
  SET_LOADING_ATHLETE_STATS: (state, loadingAthleteStats) => {
    state.loadingAthleteStats = loadingAthleteStats
  },
  SET_ATHLETE_STATS_LOAD_ERROR: (state, athleteStatsLoadError) => {
    state.athleteStatsLoadError = athleteStatsLoadError
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
  SET_BIKE_CHECKS: (state, bikeChecks) => {
    state.bikeChecks = bikeChecks
  },
  SET_BIKE_CHECK_ADDED: (state, added) => {
    state.bikeCheckAdded = added
  },
  SET_BIKE_CHECK_UPDATED: (state, updated) => {
    state.bikeCheckUpdated = updated
  },
  SET_INITIAL_LOAD_COMPLETE: state => {
    state.initialLoadComplete = true
  },
  SET_LATEST_ACTIVITY: (state, acitvity) => {
    state.latestActivity = acitvity
  }
}

var actions = {
  getStravaAuthCode: async (context, authCode) => {
    let stravaAuthCode = authCode || localStorage.getItem('stravaAuthCode')
    if (!stravaAuthCode) {
      context.commit('SET_INITIAL_LOAD_COMPLETE')
      context.commit('SET_STRAVA_AUTHENTICATION_REQUIRED', true)
      return
    }

    context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', true)
    try {
      console.log('getting response')
      const response = await stravaAccessTokenRetriever.retrieve(stravaAuthCode)
      console.log(response)

      if (response.athlete) {
        localStorage.setItem('stravaAccessToken', response.access_token)
        context.commit('SET_STRAVA_AUTHORISED', true)
        context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', false)
        context.commit('SET_INITIAL_LOAD_COMPLETE')
      }
    } catch (error) {
      console.log(error)
      context.commit('SET_STRAVA_ERROR', true)
      context.commit('SET_GETTING_STRAVA_ACCESSTOKEN', false)
      context.commit('SET_INITIAL_LOAD_COMPLETE')
    }
  },
  getAthleteStats: (context, athleteId) => {
    console.log('getting athlete stats')
    context.commit('SET_LOADING_ATHLETE_STATS', true)
    athleteStatsRetriever
      .retrieveById(athleteId)
      .then(stats => {
        console.log('got athlete stats')
        context.commit('SET_ATHLETE_STATS', stats)
        context.commit('SET_LOADING_ATHLETE_STATS', false)
      })
      .catch(error => {
        console.log('error getting athlete stats')
        console.log(error)
        context.commit('SET_LOADING_ATHLETE_STATS', false)
        context.commit('SET_ATHLETE_STATS_LOAD_ERROR', false)
      })
  },
  getAthlete: async context => {
    athleteRetriever
      .retrieve()
      .then(async athlete => {
        await userCreator.create(athlete)
        context.commit('SET_ATHLETE', athlete)
      })
      .catch(error => {})
  },
  getBike: (context, bikeId) => {
    console.log('getting bike')
    bikeRetriever
      .retrieveById(bikeId)
      .then(bike => {
        context.commit('SET_BIKE', bike)
      })
      .catch(error => {})
  },
  getBikeChecks: (context, bikeId) => {
    console.log('getting bike checks')
    bikeCheckRetriever
      .retrieveByBikeId(bikeId)
      .then(bikeChecks => {
        context.commit('SET_BIKE_CHECKS', bikeChecks)
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
  },
  addBikeCheck: (context, bikeCheck) => {
    bikeCheckCreator
      .create(bikeCheck)
      .then(() => {
        context.commit('SET_BIKE_CHECK_ADDED', true)
        setTimeout(() => {
          context.commit('SET_BIKE_CHECK_ADDED', false)
        }, 6000)
      })
      .catch(error => {
        context.commit('SET_BIKE_CHECK_ADDED', false)
      })
  },
  updateBikeCheck: (context, bikeCheckUpdate) => {
    console.log('updating bike check')
    bikeCheckUpdate.stravaId = context.state.athlete.stravaId
    bikeCheckUpdater
      .update(bikeCheckUpdate)
      .then(() => {
        context.commit('SET_BIKE_CHECK_UPDATED', true)
        context.dispatch('getBikeChecks', bikeCheckUpdate.bikeId)
      })
      .catch(error => {
        context.commit('SET_BIKE_CHECK_UPDATED', false)
      })
  }
}

export default new Vuex.Store({
  state: {
    athlete: undefined,
    stravaAuthorised: undefined,
    athleteStats: undefined,
    loadingAthleteStats: undefined,
    athleteStatsLoadError: undefined,
    gettingStravaAccessToken: undefined,
    stravaError: undefined,
    bike: undefined,
    bikeChecks: undefined,
    bikeCheckAdded: undefined,
    bikeCheckUpdated: undefined,
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
