<template>
  <Card>
    <content-placeholders
      :rounded="true"
      :animated="true"
      :centered="true"
      class="mt-4"
    >
      <content-placeholders-img />
      <content-placeholders-heading />
      <content-placeholders-text />
    </content-placeholders>
  </Card>
</template>

<script>
export default {
  name: 'LoaderWithImage'
}
</script>
