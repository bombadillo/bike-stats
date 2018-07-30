

<template>
  <Card v-if="stravaError || stravaAuthorised" class="text-center">
    <p v-if="stravaError" class="text-red-dark px-6 py-4">
      <i class="fab fa-strava"></i> {{stravaAuthErrorMsg}}
    </p>
    <p v-if="stravaAuthorised" class="text-gree-dark px-6 py-4">
      <i class="fab fa-strava"></i> {{stravaAuthSuccessMsg}}
    </p>

  </Card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'StravaAuthorised',
  data() {
    return {
      stravaAuthErrorMsg: 'Failed to sync with strava',
      stravaAuthSuccessMsg: 'Success 😄'
    }
  },
  computed: {
    ...mapGetters(['stravaError', 'stravaAuthorised'])
  },
  methods: {
    ...mapActions(['getStravaAuthCode'])
  },
  created: function() {
    localStorage.setItem('stravaAuthCode', this.$route.query.code)
    this.getStravaAuthCode(this.$route.query.code)
    setTimeout(() => {
      this.$router.push('/')
    }, 500)
  }
}
</script>

<style scoped>
</style>
