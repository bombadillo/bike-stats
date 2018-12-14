<template>
  <div>
    <!-- TODO make title component-->
    <Title :title="'Dashboard'" />
    <LatestActivity />
    <Stats />
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped></style>
