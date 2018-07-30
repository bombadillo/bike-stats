<template>
  <Card class="text-center">
    <h4>{{ msg }}</h4>
  </Card>
</template>

<script>
import config from '@/config/index'

export default {
  name: 'Logout',
  data() {
    return {
      msg: 'Logging out...'
    }
  },
  created: function() {
    localStorage.clear()
    this.$router.push('/')
  }
}
</script>

<style scoped>
</style>
