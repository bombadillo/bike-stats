<template>
  <Card v-if="latestActivity" class="text-center">
    <h2
      class="no-margin border-solid border-b border-solid border-grey-lighter pb-3"
    >
      <i class="fas fa-stopwatch"></i> Latest Activity
    </h2>
    <div class="flex text-xs">
      <div class="w-full">
        <h3 class="mt-4 text-center">{{ latestActivity.name }}</h3>
      </div>
      <div v-if="bike" class="w-3/5">
        <h3 class="mt-4 text-right">
          <i class="fas fa-bicycle"></i> {{ bike.name }}
        </h3>
      </div>
    </div>

    <Map v-if="latestActivity" :activity="latestActivity" />

    <div class="flex pt-6">
      <div class="w-1/3 border-solid border-r border-solid border-grey-lighter">
        <StatItem
          :statName="'Distance'"
          :statValue="convertToMiles(latestActivity.distance)"
        />
      </div>
      <div class="w-1/3">
        <StatItem
          :statName="'Elevation'"
          :statValue="convertToFeet(latestActivity.total_elevation_gain)"
        />
      </div>
      <div class="w-1/3 border-solid border-l border-solid border-grey-lighter">
        <StatItem
          :statName="'Moving time'"
          :statValue="convertToTime(latestActivity.moving_time)"
        />
      </div>
    </div>

    <div class="flex pt-6">
      <div class="w-1/3 border-solid border-r border-solid border-grey-lighter">
        <StatItem :statName="'Kudos'" :statValue="latestActivity.kudos_count" />
      </div>
      <div class="w-1/3">
        <StatItem
          :statName="'Average Speed'"
          :statValue="convertMetresPerSecond(latestActivity.average_speed)"
        />
      </div>
      <div class="w-1/3 border-solid border-l border-solid border-grey-lighter">
        <StatItem :statName="'PRs'" :statValue="latestActivity.pr_count" />
      </div>
    </div>
  </Card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'

export default {
  name: 'LatestActivity',
  computed: {
    ...mapGetters(['latestActivity', 'bike'])
  },
  methods: {
    ...mapActions(['getLatestActivity', 'getBike']),
    convertToFeet: feet => convertor.metreToFeet(feet),
    convertToMiles: metre => convertor.metreToMile(metre),
    convertMetresPerSecond: metre => convertor.convertMetresPerSecond(metre),
    convertToTime: seconds => convertor.secondToTime(seconds, true)
  },
  watch: {
    latestActivity: function() {
      this.getBike(this.latestActivity.gear_id)
    }
  },
  created: function() {
    this.getLatestActivity()
  }
}
</script>

<style scoped></style>
