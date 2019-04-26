<template>
  <div class="flex mb-4 justify-center">
    <div
      class="lg:w-1/2 py-6 px-4 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full relative bg-white"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
</style>
