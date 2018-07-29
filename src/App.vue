<template>
  <div id="app">
    <Header></Header>   

    <!-- TODO find out if we can have a card component to reuse the html -->
    <div v-if="!loaded" class="flex mb-4 justify-center">
      <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
        <div class="text-center mt-4">
          <p class="text-black px-6 py-4">
            <i class="fab fa-strava"></i> {{msg}}
          </p>
        
        </div>
      </div>
    </div>

    <div v-if="stravaAuthError" class="flex mb-4 justify-center">
      <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
        <div class="text-center mt-4">
          <p class="text-red-dark px-6 py-4">
            <i class="fab fa-strava"></i> {{stravaAuthMsg}}
          </p>
        
        </div>
      </div>
    </div>    

    <router-view v-if="loaded && !stravaAuthError"/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import stravaAccessTokenRetriever from './services/strava/stravaAccessTokenRetriever'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Syncing with Strava',
      stravaAuthMsg: 'Failed to sync with Strava',
      loaded: false,
      stravaAuthError: false
    }
  },
  created: function() {
    let stravaAuthCode = localStorage.getItem('stravaAuthCode')
    console.log(stravaAuthCode)
    if (!stravaAuthCode) {
      this.loaded = true
      return
    }

    stravaAccessTokenRetriever
      .retrieve(stravaAuthCode)
      .then(response => {
        if (response.athlete) {
          this.loaded = true
          this.athlete = response.athlete
          this.$store.dispatch('setAthlete', this)
        }
      })
      .catch(error => {
        this.loaded = true
        this.stravaAuthError = true
      })
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
