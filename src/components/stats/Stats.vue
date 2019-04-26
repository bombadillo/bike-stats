<template>
  <div>
    <LoaderWithoutImage v-if="loadingAthleteStats" />

    <Goal
      v-if="athleteStats"
      :current="athleteStats.ytd_ride_totals.distance"
      goal="7000"
    />

    <Card
      v-if="athleteStats"
      class="text-center"
    >
      <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3 text-center">
        <i class="fas fa-chart-line"></i> Stats
      </h2>

      <Message
        v-if="error"
        message="Failed getting Recent stats"
      />

      <div
        v-if="athleteStats && !error"
        class="mt-6"
      >
        <div class="flex">
          <div class="w-1/2">
            <h2>Recent</h2>
            <StatItem
              :statName="'Rides'"
              :statValue="athleteStats.recent_ride_totals.count"
            />
            <StatItem
              :statName="'Distance'"
              :statValue="
                    convertToMiles(athleteStats.recent_ride_totals.distance)
                  "
            />
            <StatItem
              :statName="'Elevation'"
              :statValue="
                    convertToFeet(
                      athleteStats.recent_ride_totals.elevation_gain
                    )
                  "
            />
            <StatItem
              :statName="'Moving time'"
              :statValue="
                    convertToTime(athleteStats.recent_ride_totals.moving_time)
                  "
            />
          </div>

          <div class="w-1/2">
            <h2>YTD</h2>
            <StatItem
              :statName="'Rides'"
              :statValue="athleteStats.ytd_ride_totals.count"
            />
            <StatItem
              :statName="'Distance'"
              :statValue="
                    convertToMiles(athleteStats.ytd_ride_totals.distance)
                  "
            />
            <StatItem
              :statName="'Elevation'"
              :statValue="
                    convertToFeet(athleteStats.ytd_ride_totals.elevation_gain)
                  "
            />
            <StatItem
              :statName="'Moving time'"
              :statValue="
                    convertToTime(athleteStats.ytd_ride_totals.moving_time)
                  "
            />
          </div>

        </div>

        <div class="flex">
          <div class="w-1/2 ml-auto mr-auto">
            <h2>Total</h2>
            <StatItem
              :statName="'Rides'"
              :statValue="athleteStats.all_ride_totals.count"
            />
            <StatItem
              :statName="'Distance'"
              :statValue="
                    convertToMiles(athleteStats.all_ride_totals.distance)
                  "
            />
            <StatItem
              :statName="'Elevation'"
              :statValue="
                    convertToFeet(athleteStats.all_ride_totals.elevation_gain)
                  "
            />
            <StatItem
              :statName="'Moving time'"
              :statValue="
                    convertToTime(athleteStats.all_ride_totals.moving_time)
                  "
            />
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
