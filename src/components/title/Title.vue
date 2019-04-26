<template>
  <div class="flex my-4 justify-center text-grey-darker">
    <h1 v-if="!size">{{ title }}</h1>
    <h2 v-if="size === 'medium'">{{ title }}</h2>
    <h4 v-if="size === 'small'">{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'size']
}
</script>

<style scoped></style>
