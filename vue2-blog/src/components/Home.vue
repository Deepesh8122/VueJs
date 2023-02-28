<template>
    <div class="">
        <h1>
            Hello From Home component
        </h1>
        <h2>{{data}}</h2>
        <h4>{{msg | uCase}}</h4>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'HomeNew',
        props: {
            data: String,
            msg: String
        }
    }
</script>