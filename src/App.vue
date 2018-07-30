<template>
  <div id="app">
    <Header></Header>

    <Card v-if="gettingStravaAccessToken" class="text-center">
      <p class="text-black px-6 py-4">
        <i class="fab fa-strava"></i> {{msg}}
      </p>
    </Card>

    <Card v-if="stravaError">
      <p class="text-red-dark px-6 py-4">
        <i class="fab fa-strava"></i> {{stravaAuthMsg}}
      </p>
    </Card>

    <router-view />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      msg: 'Syncing with Strava',
      stravaAuthMsg: 'Failed to sync with Strava',
      loaded: false,
      stravaAuthError: false,
      displayStravaAuthenticationMessage: false
    }
  },
  computed: mapGetters([
    'stravaAuthorised',
    'gettingStravaAccessToken',
    'stravaError',
    'stravaAuthenticationRequired'
  ]),
  methods: {
    ...mapActions(['getStravaAuthCode'])
  },

  created: function() {
    this.getStravaAuthCode()
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
