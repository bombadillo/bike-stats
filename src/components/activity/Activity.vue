<template>
  <Card
    v-if="activity"
    class="text-center"
  >
    <h2 class="no-margin border-solid border-b border-solid border-grey-lighter pb-3">
      {{ activity.name }}
    </h2>
    <div class="flex text-xs">
      <div class="w-2/5">
        <h3 class="mt-4 text-left">{{ formatDate(activity.start_date) }}</h3>
      </div>
      <div
        v-if="bike"
        class="w-3/5"
      >
        <h3 class="mt-4 text-right">
          <i class="fas fa-bicycle"></i> {{ bike.name }}
        </h3>
      </div>
    </div>

    <Map
      v-if="activity"
      :activity="activity"
    />

    <div class="flex pt-6">
      <div class="w-1/3 border-solid border-r border-solid border-grey-lighter">
        <StatItem
          :statName="'Distance'"
          :statValue="convertToMiles(activity.distance)"
        />
      </div>
      <div class="w-1/3">
        <StatItem
          :statName="'Elevation'"
          :statValue="convertToFeet(activity.total_elevation_gain)"
        />
      </div>
      <div class="w-1/3 border-solid border-l border-solid border-grey-lighter">
        <StatItem
          :statName="'Moving time'"
          :statValue="convertToTime(activity.moving_time)"
        />
      </div>
    </div>

    <div class="flex pt-6">
      <div class="w-1/3 border-solid border-r border-solid border-grey-lighter">
        <StatItem
          :statName="'Kudos'"
          :statValue="activity.kudos_count"
        />
      </div>
      <div class="w-1/3">
        <StatItem
          :statName="'Average Speed'"
          :statValue="convertMetresPerSecond(activity.average_speed)"
        />
      </div>
      <div class="w-1/3 border-solid border-l border-solid border-grey-lighter">
        <StatItem
          :statName="'PRs'"
          :statValue="activity.pr_count"
        />
      </div>
    </div>
  </Card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'
import dateFormatter from '@/services/date/dateFormatter'

export default {
  name: 'Activity',
  props: ['activity'],
  computed: {
    ...mapGetters(['bike'])
  },
  methods: {
    ...mapActions(['getBike']),
    convertToFeet: feet => convertor.metreToFeet(feet),
    convertToMiles: metre => convertor.metreToMile(metre),
    convertMetresPerSecond: metre => convertor.convertMetresPerSecond(metre),
    convertToTime: seconds => convertor.secondToTime(seconds, true),
    formatDate: date => dateFormatter.format(date)
  },
  mounted: function() {
    if (this.activity.type !== 'Ride') return
    console.log(this.activity)
    this.getBike(this.activity.gear_id)
  }
}
</script>
