<template>
  <div>
    <div
      v-if="initialLoadComplete"
      id="app"
    >
      <Header></Header>

      <Card v-if="stravaError">
        <p class="text-red-dark px-6 py-4">
          <i class="fab fa-strava"></i> {{ stravaAuthMsg }}
        </p>
      </Card>
      <router-view v-if="!stravaError" />
    </div>

    <Loading :display="!initialLoadComplete" />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      stravaAuthMsg: 'Failed to sync with Strava'
    }
  },
  computed: mapGetters(['stravaError', 'initialLoadComplete']),
  methods: {
    ...mapActions(['getStravaAuthCode'])
  },
  created: function() {
    this.getStravaAuthCode()
  }
}
</script>

<style>
body {
  background-image: url(assets/topography.png);
  background-attachment: fixed;
}
#app {
  font-family: 'Open Sans', sans-serif;
}

.no-margin {
  margin-left: -16px;
  margin-right: -16px;
}
</style>
