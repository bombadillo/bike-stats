<template>
  <div>
    <div class="flex mx-6 my-2 justify-center">
      <div class="lg:w-1/2 w-full h-12">
        <router-link
          :to="'/bike/' + $route.params.id"
          tag="button"
          class="bg-indigo-dark hover:bg-indigo-light text-white font-bold py-2 px-4 rounded"
        >
          <i class="fas fa-arrow-alt-circle-left"></i> Back to bike
        </router-link>
      </div>
    </div>

    <Card class="bike-check">
      <form class="w-full">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="check"
            >
              What are you wanting to check?
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model="check.name"
              class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
              id="name"
              type="text"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="distanceIntervale"
            >
              Distance interval
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model="check.distanceInterval"
              class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple"
              id="distanceInterval"
              type="text"
            />
          </div>
        </div>
        <div class=" md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              v-on:click="submit"
              class="shadow bg-indigo-darker hover:bg-indigo focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Add check
            </button>
          </div>
        </div>
      </form>
    </Card>

    <Toast
      v-if="bikeCheckAdded"
      :message="'Bike check added'"
      :status="'success'"
    />
  </div>
</template>

<script>
import config from '@/config/index'
import { mapGetters, mapActions } from 'vuex'
import convertor from '../../services/conversion/index'

export default {
  name: 'BikeCheckAdd',
  data() {
    return {
      check: this.getInitialCheckValues()
    }
  },
  computed: {
    ...mapGetters(['bikeCheckAdded'])
  },
  methods: {
    ...mapActions(['addBikeCheck']),
    submit: function() {
      let check = {
        bikeId: this.$route.params.id,
        name: this.check.name,
        distanceInterval: this.check.distanceInterval
      }
      this.addBikeCheck(check)
      this.check = this.getInitialCheckValues()
    },
    getInitialCheckValues: function() {
      return {
        name: '',
        distanceInterval: undefined
      }
    }
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
