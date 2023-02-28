<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <mainHeader /> -->
    <p class="gap-2">
     <ul class="list-unstyle d-flex flex-row align-items-center justify-content-center p-0 mx-auto">
        <li class="px-2"> 
          <router-link to="/home">Home</router-link>
        </li>
        <li class="px-2"> 
          <router-link to="/about">About</router-link>
        </li>
        <li class="px-2"> 
          <router-link to="/settings">Settings</router-link>
        </li>
        <li class="px-2"> 
          <router-link to="/vue-examples">Testing</router-link>
        </li>
     </ul>
    </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>



  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import mainHeader from './components/mainHeader.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld
    // mainHeader
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
  margin-top: 0;
}
.list-unstyle {
  list-style: none;
}
</style>
