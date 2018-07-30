<template>
  <div id="app">
    <Header></Header>

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
      stravaAuthMsg: 'Failed to sync with Strava'
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
