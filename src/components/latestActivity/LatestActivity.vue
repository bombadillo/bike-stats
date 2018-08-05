<template>
  <Card v-if="latestActivity" class="text-center">
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3">
      <i class="fas fa-bicycle"></i> Latest Activity </h2>
    <h3 class="mt-4">{{latestActivity.name}}</h3>

    <Map v-if="latestActivity" :activity="latestActivity" />

    <div class="flex mt-4">
      <div class="w-1/3 h-12 border-solid border-r border-solid border-grey-lighter">
        <strong>{{convertToMiles(latestActivity.distance)}}</strong>
        <br /> Distance
      </div>
      <div class="w-1/3 h-12">
        <strong>{{convertToFeet(latestActivity.total_elevation_gain)}}</strong>
        <br /> Elevation
      </div>
      <div class="w-1/3 h-12  border-solid border-l border-solid border-grey-lighter">
        <strong>{{convertToTime(latestActivity.moving_time)}}</strong>
        <br /> Moving time
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
