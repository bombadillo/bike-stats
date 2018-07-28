<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <router-link to="/" class="no-underline text-white">🚲 Bike Stats</router-link>
      </span>
    </div>

    <Hamburger @clicked="toggleMobileDropdown"></Hamburger>
    <HeaderMobileMenu v-if="showMobileDropdown"></HeaderMobileMenu>

    <div class="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" v-on:click="toggleMobileDropdown" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Home</router-link>
        <router-link to="/foo" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Foo</router-link>
      </div>
    </div>    
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'header',
      showMobileDropdown: false
    }
  },
  methods: {
    toggleMobileDropdown: function() {
      console.log('hey, child')
      this.showMobileDropdown = !this.showMobileDropdown
    }
  }
}
</script>

<style scoped>
</style>
