<template>
  <div
    class="bg-red-lightest border-l-4 border-red text-red-dark p-4 mt-4"
    role="alert"
  >
    <p class="font-bold">Oops <i class="far fa-sad-cry"></i></p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'message',
  props: ['message']
}
</script>

<style scoped></style>
