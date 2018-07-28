

<template>
  <div class="block lg:hidden md:hidden w-full flex-grow">
    <div class="text-sm lg:flex-grow">
      <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Home</router-link>
      <router-link to="/foo" class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">Foo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobileMenu'
}
</script>

<style scoped>
</style>
