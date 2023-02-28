<template>
    <div>
        <h1>
            Hello From Condition Render component
        </h1>
        <h2>
            Vue Js Condition Render
        </h2>

        <div v-if="show" class="">
            Visible the content when condition is <code>True</code>
        </div>
        <div v-else class="">
            Visible the content when condition is <code>False</code>
        </div>

        <button v-on:click="ifelse_condition">
            Toggle Condition
        </button>
        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>

</template>

<script>
    export default {
        name: 'ConditionRender',
        props: {
            data: String
        }, 
        data (){
            return {
                show: true
            }
        },
        methods: {
            ifelse_condition(){
                this.show = !this.show
            }
        }
    }
</script>