<template>
    <div>
        <h3 v-h_Size="'normal'" class="text-green">
            {{ pTitle }}
        </h3>
        <button type="button" class="btn btn-primary mx-2 my-4" @click="isOpen='ClassPhp'">PHP</button>
        <button type="button" class="btn btn-primary mx-2 my-4" @click="isOpen='ClassNode'">Node</button>
        <button type="button" class="btn btn-primary mx-2 my-4" @click="isOpen='ClassJava'">Java</button>
        <component :is="isOpen"/>
    </div>
</template>
<script>
import ClassJava from './dynamicComponents/classJave.vue'
import ClassNode from './dynamicComponents/classNode.vue'
import ClassPhp from './dynamicComponents/classPhp.vue'


export default {
    name: 'dynamicComponentTwo',
    components: {
        ClassJava,
        ClassNode,
        ClassPhp
    },
    data(){
        return {
            pTitle: 'Welcome to the Dynamic Component way two',
            isOpen: 'ClassJava'
        }
    },
   
}
</script>

<style>
.text-green {
    color: green;
}
</style>