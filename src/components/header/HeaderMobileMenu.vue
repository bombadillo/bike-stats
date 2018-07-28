

<template>
  <div class="block w-full flex-grow mt-4">
    <div class="text-sm text-center">
      <router-link to="/" class="link block text-white hover:text-white no-underline mt-1">Home</router-link>
      <router-link to="/foo" class="link block text-white hover:text-white no-underline mt-1">Foo</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMobileMenu'
}
</script>

<style scoped>
.link {
  background-color: rgba(0,0,0,0.1);
  padding: 10px;
}
</style>
