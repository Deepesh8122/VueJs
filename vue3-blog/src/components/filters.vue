<template>
    <div>
        <h1>
            Hello from Vue Js Filters
        </h1>

        <h3>
            {{title}}
        </h3>
        <h3>
            {{amount}}
        </h3>
    </div>

</template>


<script>
export default {
    name: 'VuejsFilter',
    data(){
        return{
            title: 'Deepesh k. Yogi',
            number: 30,
            amount: '$30'
        }
    }
    
    
}
</script>