<template>
  <div>
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

      <content-placeholders :rounded="true" :animated="true" :centered="true" v-if="!athleteStats" class="mt-4">
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RecentStats',
  data() {
    return {
      error: false
    }
  },
  computed: {
    ...mapGetters(['athlete', 'athleteStats'])
  },
  methods: {
    ...mapActions(['getAthleteStats'])
  },
  created: function() {
    this.getAthleteStats(this.athlete.id)
  }
}
</script>

<style scoped>
</style>
