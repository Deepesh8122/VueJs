<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <homeComponent msg="Deepesh "/>
  <VueJsPracticesComponents />


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import homeComponent from './components/home.vue'
import VueJsPracticesComponents from './components/vuePractice.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    homeComponent,
    VueJsPracticesComponents
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: blue;
}
h2 {
  color: #3FB883;
}
</style>
