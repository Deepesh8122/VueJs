<template>
    <div>
        <h1>
           Hello from {{title}} life Cycle Methods
        </h1>
        <h2>
            {{Name}}
        </h2>
        <br />
        <br />
        <br />
    </div>
</template>

<script>
export default {
    name: 'destroyLifeCycleMethods',
    data(){
        return {
            Name:'Deepesh Ji',
            title: 'Destory'
        }
    },
    beforeDestroy(){
        console.warn('Before Destroy',[this.$el])
        // alert(this.$el)
    },
    destroyed(){
        console.warn(' Data has Destroyed')
    }
}

</script>