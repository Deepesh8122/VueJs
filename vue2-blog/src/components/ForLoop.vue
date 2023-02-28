<template>
    <div>
        <h1>
            Hello From For Loop component
        </h1>
        <h2>
            Vue Js For Loop
        </h2>

        
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                </tr>
            </tbody>
        </table>
        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>

</template>

<style scoped>
    table {
        border-collapse: collapse;
        margin: 0 auto;
    }
    td, th {
        padding: 8px 1rem;
    }
</style>

<script>
    export default {
        name: 'ForLoop',
        props:{

        },
        data(){
            return {
                users:[
                    {id:1,name:'Deep',email: 'deep@gmail.com'},
                    {id:2,name:'Deepesh',email:'deepesh@gmail.com'},
                    {id:3,name:'Deepak',email:'deepak@gmail.com'},
                    {id:4,name:'Deepu',email:'deepu@gmail.com'},
                ]
            }
        },
        methods:{
        }
    }
</script>