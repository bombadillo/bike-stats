<template>
  <div>
    <div v-for="activity in activities" v-bind:key="activity.id">
      <Activity :activity="activity" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Activities',
  data() {
    return {
      pageNumber: 1
    }
  },
  computed: {
    ...mapGetters(['activities'])
  },
  methods: {
    ...mapActions(['getActivities'])
  },
  mounted: function() {
    console.log(this)
    this.getActivities(this.pageNumber)
  }
}
</script>

<style scoped></style>
