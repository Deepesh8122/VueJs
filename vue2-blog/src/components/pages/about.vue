<template>
    <div class="container mt-4">
        <h2>
            {{ pageTitle }}
        </h2>
        <div class="">
            <h4>
            Dynamic Routers
            </h4>
        </div>
        <ul class="list-unstyle d-flex flex-row align-items-center justify-content-center p-0 mx-auto">
          <li class="px-2"> 
            <router-link to="/user/1">User 1</router-link>
          </li>
          <li class="px-2"> 
            <router-link to="/user/2">User 2</router-link>
          </li>
          <li class="px-2"> 
            <router-link to="/user/3">User 3</router-link>
          </li>
          <li class="px-2"> 
            <router-link to="/user/4">User 4</router-link>
          </li>
      </ul>
    </div>
</template>

<script>


export default {
    name: 'aboutPage',
    components: {
    },
    data() {
        return {
            pageTitle: 'About page',
        }
    }
}
</script>