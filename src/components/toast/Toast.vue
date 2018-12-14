<template>
  <div class="flex mx-6 my-2">
    <div class="w-full h-12">
      <div class="text-center py-4 lg:px-4">
        <div
          v-bind:class="'p-2 bg-'+ getAlertColour() +'-dark items-center text-'+ getAlertColour() +'-lightest leading-none rounded-full flex inline-flex'"
          role="alert"
        >
          <span v-bind:class="'flex rounded-full bg-'+ getAlertColour() +' uppercase px-2 py-1 text-xs font-bold mr-3'"><i class="fas fa-check"></i></span>
          <span class="font-semibold mr-1 text-left flex-auto">{{message}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: ['message', 'status'],
  methods: {
    getAlertColour: function() {
      if (this.status === 'success') {
        return 'teal'
      } else if (this.status === 'error') {
        return 'red'
      }
    }
  }
}
</script>
