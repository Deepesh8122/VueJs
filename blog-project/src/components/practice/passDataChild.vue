<template>
    <div class="">
        <h2>
            {{ pTitle }}
        </h2>
        <h3>
           Pass Normal text: <code> {{ msg }} </code>
        </h3>
        <h3>
           Pass Normal Data: <code>{{ normalData }}</code>
        </h3>
        <h3>
           Pass Normal Data in loop: 
           <ul>
            <li v-for="users in normalDataLoop" :key="users.id">
                <code>{{ users }} </code>
            </li>
           </ul>
        </h3>
        <h3>
           Pass Function: 
           <button v-on:click="normalFunction('Getting Data from the parent component')">
            Click Me
           </button>
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
        normalData: String,
        normalDataLoop: Array,
        normalFunction: Function
    }
}
</script>