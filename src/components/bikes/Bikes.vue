<template>
  <div>
    <div class="flex my-4 justify-center">
      <h1>My Bikes</h1>
    </div>

    <Card v-if="!athlete || !athlete.bikes">
      <content-placeholders :rounded="true" :animated="true" :centered="true" class="mt-4">
        <content-placeholders-img />
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </Card>

    <div v-if="athlete && athlete.bikes">
      <Card v-for="bike in athlete.bikes" :key="bike.id" class="bike">
        <div class="px-6 pt-4 pb-6 text-center">
          {{bike.name}}
          <div class="text-grey mt-2">
            <strong>{{convertToMiles(bike.distance)}} miles</strong>
          </div>

          <div v-if="bike.primary" class="primary bg-indigo-darker text-white text-xs tracking-wide px-2 py-1">primary</div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'

export default {
  name: 'Bikes',
  computed: {
    ...mapGetters(['athlete'])
  },
  methods: {
    ...mapActions(['getAthlete']),
    convertToMiles: feet => convertor.metreToMile(feet)
  },
  created: function() {
    this.getAthlete()
  }
}
</script>

<style scoped>
.bike {
  position: relative;
}
.primary {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
