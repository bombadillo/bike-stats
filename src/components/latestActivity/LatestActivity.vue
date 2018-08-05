<template>
  <Card v-if="latestActivity" class="text-center">
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3">
      <i class="fas fa-bicycle"></i> Latest Activity </h2>
    <h3 class="mt-4">{{latestActivity.name}}</h3>

    <Map v-if="latestActivity" :activity="latestActivity" />

    <div class="flex pt-6">
      <div class="w-1/3 h-12 border-solid border-r border-solid border-grey-lighter">
        <div class="uppercase text-grey-dark font-bold text-xs mb-1">Distance</div>
        <div class="font-bold">{{convertToMiles(latestActivity.distance)}}</div>
      </div>
      <div class="w-1/3 h-12">
        <div class="uppercase text-grey-dark font-bold text-xs mb-1">Elevation</div>
        <div class="font-bold">{{convertToFeet(latestActivity.total_elevation_gain)}}</div>

      </div>
      <div class="w-1/3 h-12 border-solid border-l border-solid border-grey-lighter">
        <div class="uppercase text-grey-dark font-bold text-xs mb-1">Moving time</div>
        <div class="font-bold">{{convertToTime(latestActivity.moving_time)}} </div>
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
