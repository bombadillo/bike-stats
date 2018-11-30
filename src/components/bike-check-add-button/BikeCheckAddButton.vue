<template>
  <div class="text-center mb-4">
    <router-link
      :to="$route.params.id + '/bikeCheck/add'"
      tag="button"
      class="bg-indigo-dark hover:bg-indigo-light text-white font-bold py-2 px-4 rounded"
    >
      Add bike check <i class="fas fa-plus-circle"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BikeCheckAddButton'
}
</script>
