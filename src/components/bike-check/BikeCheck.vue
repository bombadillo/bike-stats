<template>
  <div>
    <Title :title="'Bike checks'" :size="'medium'" />

    <LoaderWithImage v-if="!bikeChecks" />

    <div v-if="bikeChecks">
      <Card
        class="bike-check text-grey-darkest"
        v-for="check in bikeChecks"
        :key="check._id"
      >
        <div class="px-6 pt-4 pb-6 text-center">
          <div class="t mt-2">
            <Title class="capitalize" :title="check.name" :size="'medium'" />
          </div>
          <div class="mt-2">
            <strong class="capitalize"
              >Every {{ check.distanceInterval }} miles</strong
            >
          </div>

          <BikeCheckLastChecked :check="check" />

          <div class="mt-4">
            <button
              v-on:click="updateBikeCheck(check)"
              class="bg-indigo-dark hover:bg-indigo-light text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Update
            </button>
          </div>
        </div>
      </Card>

      <Card
        v-if="bikeChecks.length === 0"
        class="text-grey-darkest text-center"
      >
        <h3>No bike checks found</h3>
      </Card>

      <BikeCheckAddButton />
    </div>
  </div>
</template>

<script>
import config from '@/config/index'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Bike',
  computed: {
    ...mapGetters(['bikeChecks', 'bikeCheckUpdated'])
  },
  methods: {
    ...mapActions(['getBikeChecks', 'updateBikeCheck'])
  },
  created: function() {
    this.getBikeChecks(this.$route.params.id)
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
