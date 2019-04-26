<template>
  <Card>
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3 text-center">
      <i class="fas fa-bullseye"></i> Goal
    </h2>
    <h6 class="text-center ">{{currentDistanceInMiles}}/{{goal}} miles</h6>
    <div
      :class="`h-2 mt-4 bg-${progressColour}-light`"
      :style="{ width: lastCheckedPercentage + '%' }"
    ></div>
  </Card>
</template>

<script>
import convertor from '../../services/conversion'

export default {
  name: 'Title',
  props: ['goal', 'current'],
  data() {
    return {
      progressColour: 'green',
      lastCheckedPercentage: 80,
      currentDistanceInMiles: undefined
    }
  },
  methods: {
    getPercentageAcheived: function() {
      let percentage = Math.ceil(
        (this.currentDistanceInMiles / this.goal) * 100
      )

      this.lastCheckedPercentage = percentage
    }
  },
  created: function() {
    this.currentDistanceInMiles = convertor.metreToMileValue(this.current)
    this.getPercentageAcheived()
  }
}
</script>

<style scoped>
</style>
