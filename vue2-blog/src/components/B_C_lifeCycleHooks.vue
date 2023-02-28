<template>
    <div>
        <h1>
            Hello from BeforeCreate and Created Life Cycle Methods
        </h1>

        <h2>
            {{name}}
        </h2>

        <br />
        <br />
        <br />
        <hr />
    </div>
</template>


<script>
export default {
    name: 'BeforeAndCreatedHooks',

    data(){
        return {
            name: 'Deepesh Yogi'
        }
    },
    beforeCreate() {
        console.warn('Before');
        // alert('Before Life Cycle Hook',this.name)
    },
    created(){
        this.name='Deepesh Kumar Yogi';
        // alert(this.name)
        console.warn('Created Life Cycle Hook')
    }
}

</script>