<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>
        <div v-html="name"></div>
        <div v-html="name2"></div>
        {{ name }}
    </div>
</template>

<script>

export default {
    name: 'htmlBinding',
    data(){
        return {
            pTitle:'Welcome to the HTML binding',
            name: '<h3> Jonh Markson </h3>',
            name2: '<h3> Nick handerson </h3>'
        }
    }
}
</script>