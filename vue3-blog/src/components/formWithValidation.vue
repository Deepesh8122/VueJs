<template>
    <div class="">
        <h1>
            Form with Validations
        </h1>
        <div class="" v-if="error.length">
            Check the Details.
            <ul>
                <li v-for="item in error" :key="item.id">
                    {{item}}
                </li>
            </ul>
        </div>
        <form @submit="loginForm">
            <div class="">
                <input type="email" v-model="username" placeholder="Enter username">
            </div><br />
            <div class="">
                <input type="password" v-model="password" placeholder="Enter password">
            </div><br />
            <button>
                Login
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'formWithValidations',
    data(){
        return {
            error: [],
            username: null,
            password: null,
        }
    },
    methods: {
        loginForm(e){
            this.error=[];

            if(this.username && this.password){
                alert('All Good');
            }
            if(!this.username) {
                this.error.push('Name is requaired');
            }
            if(!this.password) {
                this.error.push('Password is requaired');
            }

            console.error('Hello', this.error);
            e.preventDefault();
        }
    }
}
</script>
<style scoped>
ul {
    list-style: none;
    padding: 0;
    color: red;
}
</style>