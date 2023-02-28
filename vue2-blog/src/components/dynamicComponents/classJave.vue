<template>
    <div>
        <h3 v-h_Size="'normal'" class="text-blue">
            {{ pTitle }}
        </h3>
    </div>
</template>
<script>

export default {
    name: 'ClassJava',
    data(){
        return {
            pTitle: 'Welcome to the Java Class'
        }
    }
}
</script>
<style>
.text-blue {
    color: blue
}
</style>