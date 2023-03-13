<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>

        <input type="number" name="" id="" v-model="result">
        <h3>
            {{ result }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'twoWayBinding',
    data() {
        return {
            pTitle: 'Welcome to the Two-way Binding',
            result: 0
        }
    }
}
</script>