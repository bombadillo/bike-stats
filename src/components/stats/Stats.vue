<template>
  <div>
    <LoaderWithoutImage v-if="loadingAthleteStats" />

    <Card
      v-if="athleteStats"
      class="text-center"
    >
      <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3 text-center">
        <i class="fas fa-chart-line"></i> Stats
      </h2>
      <div
        v-if="error"
        class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mt-4"
        role="alert"
      >
        <p class="font-bold">Oops <i class="far fa-sad-cry"></i></p>
        <p>Failed getting Recent stats</p>
      </div>

      <div
        v-if="athleteStats && !error"
        class="mt-6"
      >
        <div class="flex">
          <div class="w-1/2">
            <h2>Recent</h2>
            <div class="flex my-4">
              <div class="w-full">
                <StatItem
                  :statName="'Rides'"
                  :statValue="athleteStats.recent_ride_totals.count"
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Distance'"
                  :statValue="
                    convertToMiles(athleteStats.recent_ride_totals.distance)
                  "
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Elevation'"
                  :statValue="
                    convertToFeet(
                      athleteStats.recent_ride_totals.elevation_gain
                    )
                  "
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Moving time'"
                  :statValue="
                    convertToTime(athleteStats.recent_ride_totals.moving_time)
                  "
                />
              </div>
            </div>
          </div>

          <div class="w-1/2">
            <h2>Total</h2>
            <div class="flex my-4">
              <div class="w-full">
                <StatItem
                  :statName="'Rides'"
                  :statValue="athleteStats.all_ride_totals.count"
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Distance'"
                  :statValue="
                    convertToMiles(athleteStats.all_ride_totals.distance)
                  "
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Elevation'"
                  :statValue="
                    convertToFeet(athleteStats.all_ride_totals.elevation_gain)
                  "
                />
              </div>
            </div>
            <div class="flex mb-4">
              <div class="w-full">
                <StatItem
                  :statName="'Moving time'"
                  :statValue="
                    convertToTime(athleteStats.all_ride_totals.moving_time)
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'

export default {
  name: 'Stats',
  data() {
    return {
      error: false
    }
  },
  computed: {
    ...mapGetters([
      'athlete',
      'athleteStats',
      'loadingAthleteStats',
      'athleteStatsLoadError'
    ])
  },
  methods: {
    convertToFeet: feet => convertor.metreToFeet(feet),
    convertToMiles: feet => convertor.metreToMile(feet),
    convertToTime: seconds => convertor.secondToTime(seconds),
    ...mapActions(['getAthleteStats'])
  },
  mounted: function() {
    if (!this.athlete) {
      console.log('cannot load stats as athlete not found')
      this.error = true
    }
    this.getAthleteStats(this.athlete.stravaId)
  }
}
</script>

<style scoped>
</style>
