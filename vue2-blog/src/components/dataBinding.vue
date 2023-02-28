<template>
    <div class="">
        <h1>
            Hello From Data binding component
        </h1>
        <h2>
            Vue JsData Binding
        </h2>

        <h3 class="message-print">
            {{messgae}}
        </h3>

        <textarea type="text" v-model="messgae" />

        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>
</template>

<script>
export default {
    name: 'dataBinding',
    data (){
        return {
            messgae: 'Text'
        }
    }
}
</script>

<style scoped>
.message-print {
    white-space: pre-line;
}

</style>