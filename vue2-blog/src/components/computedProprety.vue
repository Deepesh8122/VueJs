<template>
    <div>
        <h4 v-h_Size="'medium'" class="mb-3">
            {{ pTitle }}
        </h4>
        <p v-for="item in 3" :key="item.id" v-h_Size="'normal'">
            INR 1 <sub><code>data()</code></sub> : {{(amount*dollerVal)/discount}}
        </p>
        <hr>
        <p v-for="item in 3" :key="item.id" v-h_Size="'normal'">
            INR 2 <sub><code>methods</code></sub> : {{getResultMethod()}}
        </p>
        <hr>
        <p v-for="item in 6" :key="item.id" v-h_Size="'normal'">
            INR 3 <sub><code>computed</code></sub> : {{getResultMethod()}}
        </p>
    </div>
</template>
<script>
export default {
    name: 'computedProprety',
    data(){
        return {
            pTitle: 'Welcome to Complete Property',
            amount: 900,
            dollerVal: 75,
            discount: 10,
           
        }
    }, 
    methods: {
        getResultMethod() {
                return (this.amount*this.dollerVal/this.discount)
            }
    },
    computed: {
        getResult() {
                return (this.amount*this.dollerVal/this.discount)
            }
    }
}
</script>