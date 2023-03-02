<template>
    <div class="container">
        <h1>
            {{title}}
        </h1>
        <div class="mb-2">
    <b-avatar src="https://placekitten.com/300/300"></b-avatar>
    <b-avatar src="https://placekitten.com/300/300" size="100px" class="ml-2"></b-avatar>
    <div class="mt-5 row align-items-center">
        <div class="col-md-8 mx-auto">
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in usersList" :key="item.id">
                        <td>
                            {{item.id}}
                        </td>
                        <td>
                            <b-avatar :src="item.avatar"></b-avatar>
                        </td>
                        <td>
                            {{item.first_name}}
                        </td>
                        <td>
                            {{item.last_name}}
                        </td>
                        <td>
                            {{item.email}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios,axios)

export default {
    name: 'getBootstrap',
    data(){
        return {
            title: 'Hello From the Bootstrap Component',
            usersList: []
        }
    },
    mounted(){
        Vue.axios.get('https://reqres.in/api/users/').then(resul => {
            // console.table(resul.data.data);
            this.usersList=resul.data.data
        })
    }
}
</script>