<template>
    <div>
        <h1 class="color-blue">
            Home Component
        </h1>
        <code class="color-orange   ">
            {{msg}}
        </code>
        
    </div>
</template>

<script>
export default {
    name: 'homeComponent',
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .color-blue {
        color: blue;
    }
    .color-orange    {
        color: orange;
    }
</style>