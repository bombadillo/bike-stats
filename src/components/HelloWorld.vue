<template>
  <div class="flex mb-4 justify-center">
    <div class="lg:w-1/2 rounded overflow-hidden shadow-lg mx-6 my-2 lg:mt-12 w-full">
      <div class="text-center mt-4 text-grey-darker">
        
      </div>      
      <div class="text-center">
        <div class="text-xl mb-2 px-2 pt-4">
          <button class="bg-blue text-white py-2 px-4 border border-grey-light rounded shadow lg:w-1/2">
            <i class="fab fa-strava"></i><small> Get my stats</small>
          </button>
        </div>
        <p class="text-grey-darker px-6 py-4 text-sm">
          Strava authentication required
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
