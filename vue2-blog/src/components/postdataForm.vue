<template>
    <div class="container">
        <h2>
            {{pTitle}}
        </h2>
        <div class="row align-items-center flex-column">
            <div class="col-6" v-if="error.length">
                <div v-for="errors in error" :key="errors.id" class="alert alert-danger" role="alert">
                    {{errors}}
                </div><br />
            </div>
            <div class="col-6">
                <form @submit="submitRegisterFrom" method="post">
                    <div class="form-group text-left">
                        <label for="exampleInputtitle">title</label>
                        <input type="text" v-model="getRegister.title" class="form-control" id="exampleInputtitle" aria-describedby="titleHelp">
                        <small id="titleHelp" class="form-text text-muted">We'll never share your title with anyone else.</small>
                    </div>
                    <div class="form-group text-left">
                        <label for="exampleInputauthor1">author</label>
                        <input type="author" v-model="getRegister.author" class="form-control" id="exampleInputauthor1">
                    </div>
                    <!-- <div class="form-group text-left form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> -->
                    <button type="submit" v-on:click="PushData" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <hr />
        <div class="mt-5">
            <h2>
                Get the Books details
            </h2>
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in getBooksDetails" :key="item.id">
                        <td>{{item.id }}</td>
                        <td>{{item.title }}</td>
                        <td>{{item.author }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios,axios);

export default {
    name: 'dataSubmitAPI',
    data(){
        return {
            pTitle: 'Post the Data in API',
            getRegister: {
                title: null,
                author: null
            },
            error: [],
            getBooksDetails: []
        }
    },
    methods:{
        PushData(){
            this.error=[];
            if(this.getRegister.title && this.getRegister.author) {
                alert('All has good');
            }
            if(!this.getRegister.title){
                this.error.push('Title is Required');
                // alert('Title is Required');
            }
            if(!this.getRegister.author){
                this.error.push('Author is Required');
                // alert('Author is Required');
            }
            // e.preventDefault()
        },
        getDataOutput(){
            Vue.axios.get('http://localhost:3000/posts').then(getResp => {
            console.warn('New Data', getResp.data);
            this.getBooksDetails=getResp.data;
        })
        },
        submitRegisterFrom(e){
            if(!this.getRegister.title || !this.getRegister.author){
                alert('add the details');
            } else {
                this.PushData=this.axios.post('http://localhost:3000/posts', this.getRegister).then(resp =>{
                    console.log('Submitted Data', resp);
                    this.getDataOutput
                })
                this.getDataOutput()
            }

            // console.log(this.getRegister)
            e.preventDefault();
        }
       
    },
    mounted(){
        this.getDataOutput()
    },
    watch: {
        getDataOutput(){}
        
    }

}
</script>