<template>
  <div class="flex justify-center">
    <div
      class="lg:w-1/2 py-6 px-4 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full relative bg-white"
      :class="classes"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['classes']
}
</script>

<style scoped>
</style>
