<template>
    <div>
        <h3 v-h_Size="'normal'" class="text-blue">
            {{ pTitle }}
        </h3>
    </div>
</template>
<script>

export default {
    name: 'ClassNode',
    data(){
        return {
            pTitle: 'Welcome to the Node Class'
        }
    }
}
</script>