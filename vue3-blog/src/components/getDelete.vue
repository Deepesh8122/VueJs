<template>
    <div class="container">
        <h2>
            {{pTitle }}
        </h2>
        <div class="row align-items-center">
            <table class="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in userList" :key="item.id">
                        <td>{{item.id }}</td>
                        <td>{{item.title }}</td>
                        <td>{{item.author }}</td>
                        <td>
                            <button type="button" class="btn btn-info" v-on:click="deleteUser(item.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
// import VueAxios from 'vue-axios';
import axios from 'axios';

// this.use(VueAxios,axios);

export default {
    name: 'getDeleteUser',
    data(){
        return {
            pTitle: 'Hello From the Data delete with API / Delete method',
            userList: []
        }
    },
    methods:{
        getDataOutput(){
            axios.get('http://localhost:3000/posts').then(response => {
            console.log('finial',response.data)
            this.userList=response.data
        })
        },
        deleteUser(id){
            axios.delete('http://localhost:3000/posts/'+id).then(response => {
            console.log('Delete',response.data)
            // this.userList=response.data
            this.getDataOutput()
            
        })
        }
    },
    mounted(){
       this.getDataOutput()
    }
}
</script>