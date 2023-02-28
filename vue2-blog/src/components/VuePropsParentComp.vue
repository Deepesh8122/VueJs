<template>
    <div>
        <h1>
            Hello From Vue Props component
        </h1>
        <h2>
            Vue Js Props 
        </h2>

         <!-- <VuejsChild v-bind:Name="Deepesh"/> -->

        <!-- <VuejsChild v-bind:nameN="nameN"/>  -->

        <VuejsChild v-bind:userlist="userlist" v-bind:nameN="nameN"/>

        <br />
        <br />
        <br />
        <br />
        <hr />

    </div>
</template>

<script>

import VuejsChild from './VuePropsChildComp.vue'

export default {
    name: 'VueJsProps',
    components: {
        VuejsChild
    },
    data(){
        return {
            userlist: [
                {name: 'Bruce', email:'bruse@email.com', phone: 9899},
                {name: 'Tony', email:'Tony@email.com', phone: 9892},
                {name: 'Nick', email:'Nick@email.com', phone: 9893},
                {name: 'Jonh', email:'jonh@email.com', phone: 9894}
            ],
            nameN: 'Deepesh Kumar Yogi',
            name: String
        }
    }
}

</script>