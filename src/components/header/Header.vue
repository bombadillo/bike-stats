<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo-darker p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <router-link
          to="/"
          class="no-underline text-white brand"
        >
          <span class="logo">🚲</span> <span class="text">Bike Stats</span>
        </router-link>
      </span>
    </div>

    <Hamburger @clicked="toggleMobileDropdown"></Hamburger>
    <HeaderMobileMenu v-if="showMobileDropdown && stravaAuthorised"></HeaderMobileMenu>

    <div
      v-if="stravaAuthorised"
      class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto text-right"
    >
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >Home</router-link>
        <router-link
          to="Activities"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >Activities</router-link>
        <router-link
          to="/profile"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >My Profile</router-link>
        <router-link
          to="/bikes"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >My Bikes</router-link>
        <router-link
          to="/logout"
          class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
        >Logout</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data() {
    return {
      msg: 'header',
      showMobileDropdown: false
    }
  },
  computed: {
    ...mapGetters(['stravaAuthorised'])
  },
  methods: {
    toggleMobileDropdown: function(hide) {
      this.showMobileDropdown = hide ? false : !this.showMobileDropdown
    }
  }
}
</script>

<style scoped>
.brand .logo {
  line-height: 0px;
}

.brand .text {
  line-height: 18px;
  vertical-align: bottom;
}
</style>
