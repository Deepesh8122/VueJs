<template>
    <!-- {{ pTitle }} -->
    <div class="memebr-list">
        Frient Id: {{getUserDetails.mId}} <br />
        Frient Name: {{getUserDetails.mName}} <br />
        <button v-on:click="getEmailAddress(getUserDetails.email)">
            Email Address
        </button>
        
    </div>
</template>

<script>
export default {
    name: 'componentReuse',
    data(){
        return {
            pTitle: 'Welcome to the Reuseable Component',
        }
    },
    props:{
        getUserDetails: String,
        getEmailAddress: Function
    }
    
}
</script>

<style>
.memebr-list {
    background: skyblue;
    padding: 10px;
    border-radius: 5px;
    border-bottom: 1px solid;
    margin:0 auto 10px auto;
    max-width: 320px;
}
.memebr-list p,
.memebr-list h3 {
    margin: 0;
}
.memebr-list button {
    margin-top: 10px;
}

</style>