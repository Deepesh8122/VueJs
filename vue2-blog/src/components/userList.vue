<template>
    <div class="container">
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