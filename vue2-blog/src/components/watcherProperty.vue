<template>
    <div class="">
        <h4 v-h_Size="'medium'">
            {{ pTitle }}
        </h4>
        <p v-h_Size="'normal'">
            {{ count }}
        </p>
        <button class="btn btn-info mx-2 px-4" v-h_Size="'medium'" v-on:click="increaseCount()">+</button>
        <button class="btn btn-info mx-2 px-4" v-h_Size="'medium'" v-on:click="decreaseCount()">-</button>
    </div>
</template>
<script>
export default {
    name: 'watcherProperty',
    data(){
        return {
            pTitle: 'Welcome to Watcher Property',
            count: 0
        }
    },
    methods:{
        increaseCount(){
            this.count=this.count+1
        },
        decreaseCount(){
            this.count=this.count-1
        }
    },
    watch: {
        count(next,prev){
            if(next>5 && prev<next){
                alert('This is max value')
            } else if(prev<1 && prev>next){
                alert('Not allowed');
                this.count=0
            }
        }
    }
}
</script>