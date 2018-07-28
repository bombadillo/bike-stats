<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>
