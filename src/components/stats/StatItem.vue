<template>
  <div>
    <div class="uppercase text-grey-dark font-bold text-xs mb-1">
      {{ statName }}
    </div>
    <div class="font-bold">{{ statValue }}</div>
  </div>
</template>

<script>
export default {
  name: 'StatItem',
  props: ['statName', 'statValue']
}
</script>

<style scoped></style>
