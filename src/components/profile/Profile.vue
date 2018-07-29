<template>
  <div>
    <div class="flex my-4 justify-center">
      <h1>My Profile</h1>
    </div>
      <Card>
        <div class="mt-4">
          <p v-if="!athlete" class="text-green-dark px-6 py-4 text-center">
            <i class="fab fa-strava"></i> {{msg}}
          </p>

          <div v-if="athlete" class="px-6 pt-4 pb-6 text-center">             
            <img v-if="athlete.profile" class="w-20 h-20 rounded-full" v-bind:src="athlete.profile" alt="Avatar">              
            <div class="pt-4">
              <h4>Name</h4>  
              <p class="pt-2">
                  {{athlete.firstname}} {{athlete.lastname}}
              </p>  
              <h4 class="pt-4">Location</h4>
              <p class="pt-2">
                  {{athlete.city}}, {{athlete.country}}
              </p>
              <h4 class="pt-4">Strava Membership</h4>
              <p class="pt-2"> 
                <span v-if="athlete.premium"><i class="fas fa-crown"></i> Premium</span>
                <span v-if="!athlete.premium"><i class="far fa-user"></i> Basic</span>
              </p>
              <h4 class="pt-4">Strava Member Since</h4>
              <p class="pt-2"> 
                {{formatDate(athlete.created_at)}}
              </p>              
            </div>
            
          </div>
        
        </div>
      </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import dateFormatter from '../../services/date/dateFormatter'

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
  },
  methods: {
    formatDate: function(date) {
      return dateFormatter.format(date)
    }
  }
}
</script>

<style scoped>
</style>
