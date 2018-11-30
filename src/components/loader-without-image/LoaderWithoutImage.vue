<template>
  <Card>
    <content-placeholders
      :rounded="true"
      :animated="true"
      :centered="true"
      class="mt-4"
    >
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
  </Card>
</template>

<script>
export default {
  name: 'LoaderWithoutImage'
}
</script>
