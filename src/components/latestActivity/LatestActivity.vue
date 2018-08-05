<template>
  <Card v-if="latestActivity" class="text-center">
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3">
      <i class="fas fa-bicycle"></i> Latest Activity </h2>
    <h3 class="mt-4">{{latestActivity.name}}</h3>

    <Map v-if="latestActivity" :activity="latestActivity" />

    <div class="flex pt-6">
      <div class="w-1/3 h-12 border-solid border-r border-solid border-grey-lighter">
        <StatItem :statName="'Distance'" :statValue="convertToMiles(latestActivity.distance)" />
      </div>
      <div class="w-1/3 h-12">
        <StatItem :statName="'Elevation'" :statValue="convertToFeet(latestActivity.total_elevation_gain)" />
      </div>
      <div class="w-1/3 h-12 border-solid border-l border-solid border-grey-lighter">
        <StatItem :statName="'Moving time'" :statValue="convertToTime(latestActivity.moving_time)" />
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
    ...mapGetters(['latestActivity'])
  },
  methods: {
    ...mapActions(['getLatestActivity']),
    convertToFeet: feet => convertor.metreToFeet(feet),
    convertToMiles: feet => convertor.metreToMile(feet),
    convertToTime: seconds => convertor.secondToTime(seconds, true)
  },
  created: function() {
    this.getLatestActivity()
  }
}
</script>

<style scoped>
</style>
