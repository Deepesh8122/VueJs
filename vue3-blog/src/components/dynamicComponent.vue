<template>
    <div class="container pt-4">
        <h4>
            {{pTitle}}
        </h4>
        <hr>
        <div class="mt-4">
            <!-- <signin />
            <login /> -->
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('login')">
                Log In
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('signin')">
                Sign In
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('getuserData')">
                Get API
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('postuserData')">
                Post API
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('deleteuserData')">
                Delete API Data
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('computed')">
                Computed Property
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('watch')">
                Watcher Property
            </button>
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('solts')">
                Slots
            </button>
            
            <button class="btn btn-warning mx-2 mb-3" :class="{hasActive}" v-on:click="openForms('dynamicComponentTwo')">
                Dynaic Component way 2
            </button>

            <component v-bind:is="cmp" class="mt-4"></component>

        </div>
    </div>
</template>

<script>
import LoginForm from './loginForm.vue'
import SignUpForm from './signup.vue'
import getUserList from './getUserAPI.vue'
import dataSubmitAPI from './postdataForm.vue'
import getDeleteUser from './getDelete.vue'
import computedProprety from './computedProprety.vue'
import watcherProperty from './watcherProperty.vue'
import soltsVue from './slots.vue'
import dynamicComponentTwo from './dynamicComponentWat2.vue'

export default {
    name: 'dynamicCompoment',
    components:{
        'login':LoginForm,
        'signin':SignUpForm,
        'getuserData': getUserList,
        'postuserData': dataSubmitAPI,
        'deleteuserData': getDeleteUser,
        'computed': computedProprety,
        'watch': watcherProperty,
        'solts': soltsVue,
        dynamicComponentTwo
    },
    data(){
        return{
            pTitle: 'Dynamic component',
            cmp:'deleteuserData',
            hasActive: null
        }
    },

    methods:{
        openForms(item){
            this.cmp=item;
            // this.hasActive=item
        }
    }
}
</script>