<template>
  <Card class="text-center">
    <div v-if="!redirecting">
      <div class="text-xl mb-2 px-2 pt-4">
        <button v-on:click="redirect" to="strava/getauth" class="bg-blue text-white py-2 px-4 border border-grey-light rounded shadow lg:w-1/2 no-underline">
          <i class="fab fa-strava"></i>
          <small> Get my stats</small>
        </button>
      </div>
      <p class="text-grey-darker px-6 py-4 text-sm">
        Strava authentication required
      </p>
    </div>
    <div v-if="redirecting" class="text-center">
      <p class="text-grey-darker px-6 py-4 text-sm">
        <i class="fab fa-strava"></i> {{redirectionMessag}}
      </p>
    </div>
  </Card>
</template>

<script>
import stravaRedirector from '../../services/strava/stravaRedirector'

export default {
  name: 'StravaRedirect',
  data() {
    return {
      redirecting: false,
      redirectionMessag: 'Redirecting to strava...'
    }
  },
  methods: {
    redirect: function() {
      this.redirecting = true
      stravaRedirector.redirect()
    }
  }
}
</script>

<style scoped>
</style>
