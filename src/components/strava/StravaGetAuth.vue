

<template>
  <div class="flex mb-4 justify-center">
    <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
      <div class="text-center mt-4">
        <p class="text-grey-darker px-6 py-4 text-sm">
          <i class="fab fa-strava"></i> {{msg}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import stravaRedirector from '../../services/strava/stravaRedirector'

export default {
  name: 'StravaGetAuth',
  data() {
    return {
      msg: 'Redirecting to strava...'
    }
  },
  created: function() {
    stravaRedirector.redirect()
  }
}
</script>

<style scoped>
</style>
