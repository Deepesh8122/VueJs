<template>
    <div class="container mt-4">
        <h2>
            {{pageTitle}}
        </h2>
        <dynamicCompoment />
    </div>
</template>

<script>
import dynamicCompoment from '../dynamicComponent.vue'

export default {
    name: 'examplesPage',
    components: {dynamicCompoment},
    data(){
        return {
            pageTitle: 'Welcome to the example page'
        }
    }
}
</script>