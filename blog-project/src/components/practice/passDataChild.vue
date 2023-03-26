<template>
    <div class="">
        <h2>
            {{ pTitle }}
        </h2>
        <h3>
           Pass normal text: <code>{{ msg }}</code>
        </h3>
        <h3>
            Pass Name from Dynamic Data: <code>{{ PassContentDynamic }}</code>
        </h3>
        <h3>
            Pass Users List from the Parent
            {{  }}
            <p v-for="usersListname in usersList" :key="usersListname.name">
                <code>Id = {{usersListname.mId}}</code> | 
                <code>Name = {{usersListname.mName}}</code> | 
                <code>email : <button v-on:click="getEmailAddress(usersListname.email)">Check Email Address</button> </code>
            </p>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'passDataChild',
    data(){
        return {
            pTitle: 'Pass Data Parent to Child Component',
        }
    },
    props:{
        msg: String,
        PassContentDynamic: String,
        usersList: Object,
        getEmailAddress: Function
    },
    methods:{}
}
</script>