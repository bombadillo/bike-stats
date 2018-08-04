<template>
  <Card v-if="latestActivity" class="text-center">
    <h2>
      <i class="fas fa-bicycle"></i> Latest Activity </h2>
    <h3 class="mt-4">{{latestActivity.name}}</h3>

    <div class="flex mb-4 mt-4">
      <div class="w-1/2 h-12">
        <strong>{{convertToMiles(latestActivity.distance)}}</strong>
        <br /> Distance
      </div>
      <div class="w-1/2 h-12">
        <strong>{{convertToFeet(latestActivity.total_elevation_gain)}}</strong>
        <br /> Elevation
      </div>
    </div>

    <div class="flex">
      <div class="w-1/2 h-12">
        <strong>{{latestActivity.kudos_count}}</strong>
        <br /> Kudos
      </div>
      <div class="w-1/2 h-12">
        <strong>{{convertToHours(latestActivity.moving_time)}}</strong>
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
    convertToHours: seconds => convertor.secondToHour(seconds, true)
  },
  created: function() {
    this.getLatestActivity()
    console.log(this.latestActivity)
  }
}
</script>

<style scoped>
</style>
