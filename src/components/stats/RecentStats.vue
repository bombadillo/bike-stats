<template>
  <Card class="text-center">
    <h2>
      <i class="far fa-clock"></i> Recent Stats </h2>
    <div v-if="error" class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mt-4" role="alert">
      <p class="font-bold">Oops
        <i class="far fa-sad-cry"></i>
      </p>
      <p>Failed getting Recent stats</p>
    </div>

    <div v-if="athleteStats" class="mt-4">
      <ul class="list-reset">
        <li>
          <strong>Rides</strong> {{athleteStats.recent_ride_totals.count}}
        </li>
        <li class="mt-2">
          <strong>Achievements</strong> {{athleteStats.recent_ride_totals.achievement_count}}
        </li>
        <li class="mt-2">
          <strong>Distance</strong> {{athleteStats.recent_ride_totals.distance}}
        </li>
        <li class="mt-2">
          <strong>Elevation</strong> {{athleteStats.recent_ride_totals.elevation_gain}}
        </li>
        <li class="mt-2">
          <strong>Moving time</strong> {{athleteStats.recent_ride_totals.moving_time}}
        </li>
      </ul>
    </div>
  </Card>
</template>

<script>
import { mapGetters } from 'vuex'
import athleteStatsRetriever from '../../services/strava/athleteStatsRetriever'

export default {
  name: 'RecentStats',
  data() {
    return {
      error: false,
      athleteStats: undefined
    }
  },
  computed: {
    ...mapGetters({
      athlete: 'getAthlete'
    })
  },
  created: function() {
    if (!this.athlete) {
      return
    }

    athleteStatsRetriever
      .retrieveById(this.athlete.id)
      .then(stats => {
        this.athleteStats = stats
        console.log(stats)
        this.$store.dispatch('setAthleteStats', this)
      })
      .catch(error => {
        this.error = true
      })
  }
}
</script>

<style scoped>
</style>
