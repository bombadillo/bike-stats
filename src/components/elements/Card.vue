

<template>
  <div class="flex mb-4 justify-center">
    <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full"> 
      <slot></slot>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'

console.log(config)

export default {
  name: 'Card'
}
</script>

<style scoped>
</style>
