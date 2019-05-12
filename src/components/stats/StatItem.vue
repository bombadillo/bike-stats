<template>
  <div class="flex my-4">
    <div class="w-full">
      <div>
        <div class="uppercase text-grey-dark font-bold text-xs mb-1">
          {{ statName }}
        </div>
        <div class="font-bold">{{ statValue }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatItem',
  props: ['statName', 'statValue']
}
</script>

<style scoped></style>
