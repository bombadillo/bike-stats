<template>
  <div>
    <Card>
      <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3 text-center">
        <i class="fas fa-chart-line"></i> Recent Stats </h2>
      <div v-if="error" class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mt-4" role="alert">
        <p class="font-bold">Oops
          <i class="far fa-sad-cry"></i>
        </p>
        <p>Failed getting Recent stats</p>
      </div>

      <div v-if="athleteStats" class="mt-6">
        <div class="flex">
          <div class="w-full">
            <div class="flex mb-4">
              <div class="w-1/2">
                <StatItem :statName="'Rides'" :statValue="athleteStats.recent_ride_totals.count" />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-1/2">
                <StatItem :statName="'Distance'" :statValue="convertToMiles(athleteStats.recent_ride_totals.distance)" />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-1/2">
                <StatItem :statName="'Elevation'" :statValue="convertToFeet(athleteStats.recent_ride_totals.elevation_gain)" />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-1/2">
                <StatItem :statName="'Achievements'" :statValue="athleteStats.recent_ride_totals.achievement_count" />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-1/2">
                <StatItem :statName="'Moving time'" :statValue="convertToTime(athleteStats.recent_ride_totals.moving_time)" />
              </div>
            </div>
          </div>
        </div>
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
import convertor from '../../services/conversion/index'

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
    ...mapActions(['getAthleteStats']),
    convertToFeet: feet => convertor.metreToFeet(feet),
    convertToMiles: feet => convertor.metreToMile(feet),
    convertToTime: seconds => convertor.secondToTime(seconds)
  },
  created: function() {
    this.getAthleteStats(this.athlete.id)
  }
}
</script>

<style scoped>
</style>
