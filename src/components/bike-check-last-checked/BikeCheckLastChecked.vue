<template>
  <div>
    <div
      v-if="lastChecked"
      class="w-full"
    >
      <div :class="`h-2 mt-4 ${getColourAndWidth(lastChecked)}`"></div>
      <div class="mt-4 text-green-light"> <i class="far fa-check-circle"></i> Checked {{formatDate(lastChecked)}}</div>
    </div>
    <div
      v-if="!lastChecked"
      class="w-full"
    >
      <div class="h-2 mt-4 bg-red-light w-ful"></div>
      <div class="mt-4 text-red-light"> <i class="fas fa-exclamation"></i> Never been checked</div>
    </div>
  </div>
</template>

<script>
import dateFormatter from '../../services/date/dateFormatter'

export default {
  name: 'BikeCheckLastChecked',
  props: ['lastChecked'],
  methods: {
    getColourAndWidth: lastChecked => {
      return 'bg-green-light w-1/2'
    },
    formatDate: function(date) {
      return dateFormatter.format(date)
    }
  }
}
</script>
