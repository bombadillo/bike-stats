<template>
  <Card>
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3 text-center">
      <i class="fas fa-bullseye"></i> Goal
    </h2>

    <div
      :class="`h-2 mt-4 bg-${progressColour}-light`"
      :style="{ width: goalCompletedPercentage + '%' }"
    ></div>

    <h6 class="text-center ">{{currentDistanceInMiles}}/{{goal}} miles</h6>
    <h6 class="text-center ">{{pace}} miles/pw {{ pace > 0 ? 'ahead of pace' : 'behind pace' }}</h6>

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
      currentDistanceInMiles: undefined,
      goalCompletedPercentage: undefined,
      pace: undefined
    }
  },
  methods: {
    getPercentageAcheived: function() {
      let percentage = Math.ceil(
        (this.currentDistanceInMiles / this.goal) * 100
      )

      this.goalCompletedPercentage = percentage
    },
    calculatePace: function() {
      var now = new Date()
      var start = new Date(now.getFullYear(), 0, 0)
      var diff = now - start
      var oneDay = 1000 * 60 * 60 * 24
      var day = Math.floor(diff / oneDay)
      var weeksPassed = day / 7
      var weeksLeft = 52 - weeksPassed
      var averageWeeklyDistance = Math.floor(
        this.currentDistanceInMiles / weeksPassed
      )

      var goalDifference = this.goal - this.currentDistanceInMiles
      var paceRequired = Math.floor(goalDifference / weeksLeft)
      this.pace = averageWeeklyDistance - paceRequired
    }
  },
  created: function() {
    this.currentDistanceInMiles = convertor.metreToMileValue(this.current)
    this.getPercentageAcheived()
    this.calculatePace()
  }
}
</script>

<style scoped>
</style>
