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
import forLoop from './practice/forLoop.vue'


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
        forLoop
    },
    data(){
        return {
            pTitle: 'Welcome to the VueJs Pratices Component'
        }
    }
}
</script>