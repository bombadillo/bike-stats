<template>
  <div><Dashboard v-if="athlete" /></div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      athlete: 'athlete'
    })
  }
}
</script>

<style scoped></style>
