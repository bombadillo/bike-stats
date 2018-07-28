

<template>
  <div class="flex mb-4 justify-center">
    <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
      <div class="text-center mt-4">
        <p v-if="!athlete" class="text-green-dark px-6 py-4">
          <i class="fab fa-strava"></i> {{msg}}
        </p>

        <div v-if="athlete">          
          <p class="px-6 pt-4 pb-6">
             Yo, {{athlete.firstname}} <i class="far fa-smile"></i>
          </p>  
          <p class="pb-6">
            <router-link to="/" class="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded no-underline">
              View your dashboard
            </router-link>
          </p>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import stravaAccessTokenRetriever from '../../services/strava/stravaAccessTokenRetriever'

export default {
  name: 'StravaGetAuth',
  data() {
    return {
      msg: 'Syncing with strava...',
      athlete: undefined
    }
  },
  created: function() {
    stravaAccessTokenRetriever
      .retrieve(this.$route.query.code)
      .then(response => {
        if (response.athlete) {
          this.athlete = response.athlete
        }
      })
  }
}
</script>

<style scoped>
</style>
