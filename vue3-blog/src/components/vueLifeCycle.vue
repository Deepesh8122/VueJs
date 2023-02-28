<template>
    <div class="">
        <h1>
            Hello From Life Cycle Methods
        </h1>
        <h2>
            Vue Js Life Cycle Methods
        </h2>

        <br />
        <br />
        <br />
        <hr />
    </div>
</template>
<script>

export default {
    name: 'lifeCycleMethods',
    methods:{},
    data(){
        return{

        }
    },
    created: function () {
        console.warn('Cretaed');
    },
    beforeCreate: function () {
        console.warn('Before Create');
    },
    beforeMount: function (){
            console.warn('Before Mount');
    },
    mounted: function (){
        console.warn('Mounted');
    }
}
</script>