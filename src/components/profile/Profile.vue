<template>
  <div class="flex mb-4 justify-center">
    <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
      <div class="text-center mt-4">
        <p v-if="!athlete" class="text-green-dark px-6 py-4">
          <i class="fab fa-strava"></i> {{msg}}
        </p>

        <div v-if="athlete">          
          <p class="px-6 pt-4 pb-6">
             {{athlete.firstname}} {{athlete.lastname}}
          </p>  
        </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {
      msg: 'Loading profile...'
    }
  },
  computed: {
    ...mapGetters({
      athlete: 'getAthlete'
    })
  }
}
</script>

<style scoped>
</style>
