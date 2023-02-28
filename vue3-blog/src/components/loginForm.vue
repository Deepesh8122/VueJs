<template>
    <div>
        <h1>
            Login Form
        </h1>
        <div>
            <label for="name">
                Enter Your Name
            </label><br />
            <input type="text" id="name" v-model="loginformFields.username">
            <br />
            <br />
        </div>
        <div>
            <label for="passW">
                Enter Your Password
            </label><br />
            <input type="password" id="passW" v-model="loginformFields.password">
            <br />
            <br />
        </div>
        <button v-on:click="loginformBtn">
            LogIn
        </button>
    </div>
</template>
<script>
    export default {
        name: 'LoginForm',
        data(){
            return {
                loginformFields: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            loginformBtn(){
                console.table(this.loginformFields)
            }
        }
    }
</script>