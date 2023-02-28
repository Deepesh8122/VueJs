<template>
    <div>
        <h1>
            Hello From pros child to parent
        </h1>

        <h2>
            {{title}}
        </h2>
        
        <ChildComponent2 v-on:chnageTitle="updateTitle($event)" />


        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>
</template>

<script>

import ChildComponent2 from './propsChildComp2.vue'

export default {
    name: 'ParentComponent2',
    components: {
        ChildComponent2
    },
    data(){
        return{
            title: 'Props Tutorials'
        }
    },
    methods: {
        updateTitle(title){
            this.title=title
        }
    }
}
</script>