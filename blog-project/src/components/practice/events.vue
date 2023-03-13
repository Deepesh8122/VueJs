<template>
    <div class="">
        <h2>
            {{ pTitle }}
        </h2>

        <button v-on:click="clickAlert('Click on button 1')">
            Click Me
        </button>

        <button v-on:click="clickAlert('Click on button 2')">
            Click Me 2
        </button>

        <button v-on:dblclick="clickAlert('Here is the Double click event')">
            Double Click Event
        </button>

        <p>
            Count: {{ couent }}
        </p>

        <button v-on:click="countIncrese()">
            Increse Number
        </button>
    </div>
</template>

<script>

export default {
    name: 'VuejsEvents',
    data(){
        return {
            pTitle: 'Welcome to the Event with example, click event',
            couent: 0
        }
    },
    methods: {
        clickAlert(lable){
            alert(lable)
        },
        countIncrese() {
            console.warn(this.couent)
            this.couent = this.couent + 1
        }
        
    }

}
</script>