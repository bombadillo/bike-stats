

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import config from '@/config/index'

console.log(config)

export default {
  name: 'Foo',
  data() {
    return {
      msg: 'This is foo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
