

<template>
  <Card>
    <div class="text-center mt-4">
      <p v-if="!athlete && !stravaAuthError" class="text-green-dark px-6 py-4">
        <i class="fab fa-strava"></i> {{msg}}
      </p>

      <p v-if="stravaAuthError" class="text-red-dark px-6 py-4">
        <i class="fab fa-strava"></i> {{stravaAuthErrorMsg}}
      </p>

      <div v-if="athlete">
        <p class="px-6 pt-4 pb-6">
          Yo, {{athlete.firstname}}
          <i class="far fa-smile"></i>
        </p>
        <p class="pb-6">
          <router-link to="/" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded no-underline">
            View your dashboard
          </router-link>
        </p>
      </div>

    </div>
  </Card>
</template>

<script>
import config from '@/config/index'
import stravaAccessTokenRetriever from '../../services/strava/stravaAccessTokenRetriever'

export default {
  name: 'StravaGetAuth',
  data() {
    return {
      msg: 'Syncing with strava...',
      stravaAuthErrorMsg: 'Failed to sync with strava',
      athlete: undefined,
      stravaAuthError: false
    }
  },
  created: function() {
    localStorage.setItem('stravaAuthCode', this.$route.query.code)

    stravaAccessTokenRetriever
      .retrieve(this.$route.query.code)
      .then(response => {
        if (response.athlete) {
          this.athlete = response.athlete
          this.$store.dispatch('setAthlete', this)
          // TODO redirect to profile or some other component
        }
      })
      .catch(error => {
        this.stravaAuthError = true
      })
  }
}
</script>

<style scoped>
</style>
