<template>
  <div>
    <div v-if="check.lastChecked" class="w-full">
      <div v-if="lastCheckedPercentage > 0 && lastCheckedPercentage < 100">
        <div
          :class="`h-2 mt-4 bg-${progressColour}-light`"
          :style="{ width: lastCheckedPercentage + '%' }"
        ></div>
      </div>

      <div v-if="lastCheckedPercentage >= 0 && lastCheckedPercentage < 70">
        <div class="mt-4 text-green-light">
          <i class="far fa-check-circle"></i> {{ milesSinceLastCheck }} miles
          since last check
        </div>
      </div>

      <div v-if="lastCheckedPercentage >= 70 && lastCheckedPercentage < 100">
        <div class="mt-4 text-orange-base">
          <i class="far fa-check-circle"></i> {{ milesSinceLastCheck }} miles
          since last check
        </div>
      </div>

      <div v-if="lastCheckedPercentage >= 100" class="w-full">
        <div class="h-2 mt-4 bg-red-light w-ful"></div>
        <div class="mt-4 text-red-light">
          <i class="fas fa-exclamation"></i> Hasn't been checked in
          {{ milesSinceLastCheckReadable }}!
        </div>
      </div>
    </div>
    <div v-if="!check.lastChecked" class="w-full">
      <div class="h-2 mt-4 bg-red-light w-ful"></div>
      <div class="mt-4 text-red-light">
        <i class="fas fa-exclamation"></i> Never been checked
      </div>
    </div>
  </div>
</template>

<script>
import dateFormatter from '../../services/date/dateFormatter'
import convertor from '../../services/conversion'
import { mapGetters } from 'vuex'

export default {
  name: 'BikeCheckLastChecked',
  props: ['check'],
  computed: {
    ...mapGetters(['bike'])
  },
  data: function() {
    return {
      lastCheckedPercentage: undefined,
      milesSinceLastCheck: undefined,
      milesSinceLastCheckReadable: undefined,
      progressColour: undefined
    }
  },
  methods: {
    processLastCheck: function(check, currentDistance) {
      this.getMilesSinceCheck(check, currentDistance)
      this.getPercentageSinceLastCheck(check, currentDistance)
      this.calculateProgressColour()
    },
    getMilesSinceCheck: function(check, currentDistance) {
      this.milesSinceLastCheck = convertor.metreToMileValue(
        currentDistance - check.distance
      )
      this.milesSinceLastCheckReadable = convertor.metreToMile(
        currentDistance - check.distance
      )
    },
    getPercentageSinceLastCheck: function(check, currentDistance) {
      let percentage = Math.ceil(
        (this.milesSinceLastCheck / check.distanceInterval) * 100
      )

      this.lastCheckedPercentage = percentage
    },
    calculateProgressColour: function() {
      if (this.lastCheckedPercentage >= 0 && this.lastCheckedPercentage < 70) {
        this.progressColour = 'green'
      } else if (
        this.lastCheckedPercentage >= 70 &&
        this.lastCheckedPercentage < 100
      ) {
        this.progressColour = 'orange'
      }
    },
    formatDate: date => dateFormatter.format(date)
  },
  created() {
    this.processLastCheck(this.check, this.bike.distance)
  },
  // TODO see if we can have one method to call this
  updated() {
    this.processLastCheck(this.check, this.bike.distance)
  }
}
</script>
