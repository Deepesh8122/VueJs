<template>
    <div class="">
        <h2>{{ pTitle }}</h2>
        <input type="text" placeholder="Name here..." id="name" v-model="formData.name">
        <br />
        <input type="email" placeholder="email here..." id="email" v-model="formData.email">
        <br >
        <br >
        <p>
            Name: {{formData.name }}
        </p>
        <p>
            Email: {{formData.email }}
        </p>
        <br >
        <button type="button" v-on:click="GetData()">
            Submit
        </button>
    </div>
</template>
<script>
export default {
    name: 'getInputValue',
    data(){
        return {
            pTitle: 'Welcome to the Get input value',
            formData: {
                name: undefined,
                email: undefined
            }
        }
    },
    methods: {
        GetData(){
            console.table(this.formData);
        }
    }
}
</script>