

<template>
  <Card>
    <div class="text-center mt-4">
      <p class="text-grey-darker px-6 py-4 text-sm">
        <i class="fab fa-strava"></i> {{msg}}
      </p>
    </div>
  </Card>
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
