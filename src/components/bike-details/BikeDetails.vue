<template>
  <div>
    <Title
      v-if="bike"
      :title="bike.name"
    />

    <LoaderWithImage v-if="!bike" />

    <div v-if="bike">
      <Card class="bike">
        <div class="px-6 pt-4 pb-6 text-center">
          <div class="text-grey-darkest mt-2">
            <strong>Total miles</strong>
            {{convertToMiles(bike.distance)}}
          </div>

          <div
            v-if="bike.primary"
            class="primary bg-indigo-darker text-white text-xs tracking-wide px-2 py-1"
          >primary</div>
        </div>
      </Card>
    </div>

    <div v-if="bike">
      <BikeCheck />
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'

export default {
  name: 'Bike',
  computed: {
    ...mapGetters(['bike'])
  },
  methods: {
    ...mapActions(['getBike']),
    convertToMiles: feet => convertor.metreToMile(feet)
  },
  created: function() {
    this.getBike(this.$route.params.id)
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
