<template>
  <div>
    <Title :title="'Dashboard'" />
    <LatestActivity v-if="athlete" />
    <Stats v-if="athlete" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['athlete'])
  },
  methods: {
    ...mapActions(['getAthlete'])
  },

  created: async function() {
    this.getAthlete()
  }
}
</script>

<style scoped>
</style>
