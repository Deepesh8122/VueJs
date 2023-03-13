<template>
    <div class="">
        <h2>
            {{ pTitle }}
        </h2>
        <input type="text" id="name1" placeholder="Name" v-model="registerForm.name"><br /><br />    
        <input type="text" id="email1" placeholder="email" v-model="registerForm.email"><br /><br /> 
        <input type="password" id="password" placeholder="password" v-model="registerForm.password"><br /><br />    
        
        <h3>Select gender </h3>
        <label for="male">
            <input type="radio" name="" id="male" value="Male" v-model="registerForm.gender"> Male
        </label> 

        <label for="female">
            <input type="radio" name="" id="female" value="Female" v-model="registerForm.gender"> Female
        </label> 
        <br /><br /> 

        <h3>
            Select Subject 
        </h3>

        <label for="hindi">
            <input type="checkbox" id="hindi" value="Hindi" v-model="registerForm.subjetc"> Hindi
        </label>
        <label for="english">
            <input type="checkbox" id="english" value="English" v-model="registerForm.subjetc"> English
        </label>
        <label for="marwadi">
            <input type="checkbox" id="marwadi" value="Marwadi" v-model="registerForm.subjetc"> Marwadi
        </label><br /><br />    

        <button type="button" v-on:click="submitForm()">
            Submit
        </button>
        <br />
        <br />
        <table border="1" style="margin: 0 auto">
            <tr>
                <th>Input</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{{registerForm.gender}}</td>
            </tr>
            <tr>
                <td>Subjetcs</td>
                <td>{{registerForm.subjetc}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'getFormValue',
    data(){
        return {
            pTitle: 'Welcome to the get CheckBox & Radio button value',
            registerForm: {
                name: null,
                email: null,
                password: null,
                gender:[],
                subjetc:[]
            }
        }
    },
    methods: {
        submitForm(){
            // console.warn('get CheckBox & Radio button value / Form Submit');
            console.table( this.registerForm)
            // return this.registerForm
        }
    }
}
</script>