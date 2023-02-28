<template>
    <div>
        <h1>
           Hello from Signup Form
        </h1>
        <h2>
            Vue Js Signup Form
        </h2>

        <div class="">
            <label for="name">
                Enter Your Name
            </label><br/>
            <input type="text" id="name" v-model="signUp.username" placeholder="Username here">
            <br /><br />
        </div>

        <div class="">
            <label for="password1">
                Enter Your Password
            </label><br/>
            <input type="password" id="password1" v-model="signUp.passWord" placeholder="password here">
            <br /><br />
        </div>

        <div class="">
            <h3>
                Choose your Hobbies
            </h3>
            <label for="cricket"> 
                <input type="checkbox" id="cricket" value="cricket" v-model="signUp.hobbies">
                Cricket New
            </label>
            <label for="footbol"> 
                <input type="checkbox" id="footbol" value="footbol" v-model="signUp.hobbies">
                Football
            </label>
            <br /><br />
        </div>
        <div class="">
            <h3>
                Select your Gender
            </h3>
            <label for="male"> 
                <input type="radio" id="male" value="male" v-model="signUp.gender">
                Male
            </label>
            <label for="female"> 
                <input type="radio" id="female" value="female" v-model="signUp.gender">
                Female
            </label>
            <br /><br />
        </div>
        <button type="submit" v-on:click="subbmitForm">
            Submit
        </button>

        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>
</template>

<script>
export default {
    name: 'SignUpForm',
    data(){
        return {
            signUp: {
                username:null,
                passWord:null,
                hobbies:[],
                gender:[]
            }
        }
    },
    methods:{
        subbmitForm(){
            console.table(this.signUp)
        }
    }
}
</script>