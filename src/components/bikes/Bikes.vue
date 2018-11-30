<template>
  <div>
    <Title :title="'My Bikes'" />

    <LoaderWithImage v-if="!athlete || !athlete.bikes" />

    <div
      v-if="athlete && athlete.bikes"
      v-for="bike in athlete.bikes"
      :key="bike.id"
    >
      <router-link
        :to="'/bike/' + bike.id"
        tag="div"
        class="bike"
      >
        <Card>
          <div class="px-6 pt-4 pb-6 text-center">
            <strong>{{bike.name}}</strong>
            <div class="text-grey-darkest mt-2">
              {{convertToMiles(bike.distance)}}
            </div>

            <div
              v-if="bike.primary"
              class="primary bg-indigo-darker text-white text-xs tracking-wide px-2 py-1"
            >primary</div>
          </div>
        </Card>
      </router-link>
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
