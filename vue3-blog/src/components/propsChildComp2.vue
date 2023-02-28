<template>
    <div class="">
        <h3>
            Send data Child to Parent
        </h3>
        <button v-on:click="updateTitle">
            Update the Content
        </button>
    </div>
</template>
<script>
export default {
    name: 'ChildComponent2',
    methods: {
        updateTitle(){
            // console.warn('Updated');
            this.$emit('chnageTitle', 'Parent Updated')
        }
    }
}
</script>
