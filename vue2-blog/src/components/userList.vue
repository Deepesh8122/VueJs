<template>
    <div class="container">
      <p><router-link to="/about">Back</router-link></p>
      <h2>User List {{userid}}</h2>
    </div>
</template>
<script>
export default {
    name: 'userList',
    data(){
        return {
            userid: this.$route.params.id
        }
    }
}
</script>