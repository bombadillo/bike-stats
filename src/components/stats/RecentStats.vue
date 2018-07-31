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

      <div v-if="athleteStats" class="mt-6">
        <div class="flex mb-4">
          <div class="w-1/3 h-12">
            <strong>{{athleteStats.recent_ride_totals.count}}</strong>
            <br /> Rides
          </div>
          <div class="w-1/3 h-12">
            <strong>{{convertToMiles(athleteStats.recent_ride_totals.distance)}}</strong>
            <br /> Distance
          </div>
          <div class="w-1/3 h-12">
            <strong>{{convertToFeet(athleteStats.recent_ride_totals.elevation_gain)}}</strong>
            <br /> Elevation
          </div>
        </div>

        <div class="flex">
          <div class="w-1/2 h-12">
            <strong>{{athleteStats.recent_ride_totals.achievement_count}}</strong>
            <br /> Achievements
          </div>
          <div class="w-1/2 h-12">
            <strong>{{convertToHours(athleteStats.recent_ride_totals.moving_time)}}</strong>
            <br /> Moving time
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
    convertToHours: seconds => convertor.secondToHour(seconds)
  },
  created: function() {
    this.getAthleteStats(this.athlete.id)
  }
}
</script>

<style scoped>
</style>
