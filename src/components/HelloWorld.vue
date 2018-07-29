<template>
  <Card>
    <div class="text-center mt-4">
      <div class="text-xl mb-2 px-2 pt-4">
        <router-link to="strava/getauth" class="bg-blue text-white py-2 px-4 border border-grey-light rounded shadow lg:w-1/2 no-underline">
          <i class="fab fa-strava"></i>
          <small> Get my stats</small>
        </router-link>
      </div>
      <p class="text-grey-darker px-6 py-4 text-sm">
        Strava authentication required
      </p>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
</style>
