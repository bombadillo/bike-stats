<template>
  <Card class="text-center">
    <p class="text-grey-darker px-6 py-4 text-sm">
      <i class="fab fa-strava"></i> {{ msg }}
    </p>
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

<style scoped></style>
