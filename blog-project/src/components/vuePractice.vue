<template>
    <div class="">
        <hr />
        <h1>
            {{ pTitle }}
        </h1>
        <hr />
        <Interpolation_and_Data />
        <hr />
        <defineMethodsComp />
        <hr />
        <VuejsEvents />
        <hr />
        <twoWayBinding />
        <hr />
        <getInputValue />
        <hr />
        <getFormValue />
        <hr />
        <ifElseCondition />
        <hr />
        <forLoop />
        <hr />
        <passDataChild msg="Test 123" :normalData="PassDataChildCompo.normalData.uName" :normalDataLoop="PassDataChildCompo.usersList" :normalFunction="getData" />
        <hr />

        <h2>
            Welcome to the Reuseable Component
        </h2>
        <ul>
            <li v-for="member in reusableComponent.memebrDetails" :key="member.id">
                <componentReuse :data="member" :getName="getMemberEmail"/>
            </li>
        </ul>
    </div>
    
</template>
<script>

import Interpolation_and_Data from './practice/interpolation-and-data.vue';
import defineMethodsComp from './practice/getMethods.vue';
import VuejsEvents from './practice/events.vue';
import twoWayBinding from './practice/twoWayBinding.vue';
import getInputValue from './practice/inputValue.vue';
import getFormValue from './practice/getFormValue.vue';
import ifElseCondition from './practice/ifElseCondition.vue';
import forLoop from './practice/forLoop.vue';
import passDataChild from './practice/passDataChild.vue';
import componentReuse from './practice/itemReuse.vue'


export default {
    name: 'VueJsPracticesComponents',
    components: {
        Interpolation_and_Data,
        defineMethodsComp,
        VuejsEvents,
        twoWayBinding,
        getInputValue,
        getFormValue,
        ifElseCondition,
        forLoop,
        passDataChild,
        componentReuse
    },
    data(){
        return {
            pTitle: 'Welcome to the VueJs Pratices Component',
            PassDataChildCompo: {
                normalData: {
                    uName: 'Deepesh',
                },
                usersList: ['Deepesh', 'Arun', 'Pawan', 'Mohit']
            },
            reusableComponent: {
                memebrDetails: [
                    {mName: 'Jonh', mId: '01', email: 'Jonh@gmail.com'},
                    {mName: 'Mark', mId: '02', email: 'Mark@gmail.com'},
                    {mName: 'Keli', mId: '03', email: 'Keli@gmail.com'},
                    {mName: 'Thomas', mId: '04', email: 'Thomas@gmail.com'},
                ]
            }
        }
    },
    methods: {
        getData (i){
            alert(i);
        },
        getMemberEmail (mail){
            alert(mail)
        }
    }
}
</script>