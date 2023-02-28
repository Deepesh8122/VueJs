<template>
    <div>
        <h2>
            {{title}}
        </h2>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>
                        Photo
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="U in userLists" :key="U.id">
                    <td :id="U.id">
                        {{U.id}}
                    </td>
                    <td>
                        {{U.photo}}
                    </td>
                    <td>
                        {{U.name}}
                    </td>
                    <td>
                        {{U.email}}
                    </td>
                    <td>
                        {{U.status}}
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <br>
        <hr />
    </div>
</template>

<script>

import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);


export default {
    name: 'getUserList',
    data(){
        return {
            title: 'Hello from Get Users List APIs',
            userLists: []
        }
    },
    methods: {

    },
    mounted(){
        Vue.axios.get('https://gorest.co.in/public/v2/users').then(result => {
            // console.table(result.data);
            this.userLists=result.data;
        })
    }
}
</script>