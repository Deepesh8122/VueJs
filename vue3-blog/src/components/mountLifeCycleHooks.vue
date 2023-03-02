<template>
    <div class="">
        <h1>
            Hello From the beforeMount and Mounted life cycle Methods
        </h1>

        <h2 id="title">
            {{name}}
        </h2>
        <h2>
            {{description}}
        </h2>

        <br />
        <br />
        <br />
        <hr />
    </div>
</template>
<script>
export default {
    name: 'MountsLifeCycleMethods',
    data(){
        return {
            name: 'Mounts Methods',
            description: 'this is using for the Mounts life cycle methods/hooks'
        }
    },
    beforeMount(){
        // this.name='New Name'
        console.warn('BeforeMount »', document.getElementById('title'))
    },
    mounted(){
        console.warn('Mounted »»»»',document.getElementById('title'))
    }
}
</script>