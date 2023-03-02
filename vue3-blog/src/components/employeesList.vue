<template>
    <div class="">
        <h1>
            {{title}}
        </h1>

        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="item in empList" v-bind:key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.status}}</td>
                    </tr>
                </tbody>
        </table>
        <br />
        <br />
        <hr />
    </div>
</template>
<script>

import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios);

    export default {
        name: 'empList',
        data(){
            return {
                title: 'Hello From the Employees list',
                empList: []
            }
        },
        mounted(){
            Vue.axios.get('https://gorest.co.in/public/v2/users').then(resp=>{
                console.warn(resp.data)
                this.empList=resp.data
            })
        }
    }
</script>

<style scoped>
    table {
        border-collapse: collapse;
        margin: 0 auto;
    }
    table th {
        font-size: 1.2rem;
    }
    table td {
        padding: 5px 10px;
    }
</style>