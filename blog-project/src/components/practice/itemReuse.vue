<template>
    <div class="memebr-list">
       <h3>
           <p> Memebr ID: {{ data.mId }} <br /> Memebr Name: {{ data.mName }}</p>
       </h3>
       <button type="button" @click="getName(data.email)">
        Get Email
       </button>
    </div>
</template>

<script>
export default {
    name: 'componentReuse',
    data(){
        return {
            pTitle: 'Welcome to the Reuseable Component',
        }
    },
    props: {
        data: Object,
        getName: Function
    }
}
</script>

<style>
.memebr-list {
    background: skyblue;
    padding: 10px;
    border-radius: 5px;
    border-bottom: 1px solid;
    margin:0 auto 10px auto;
    max-width: 320px;
}
.memebr-list p,
.memebr-list h3 {
    margin: 0;
}
.memebr-list button {
    margin-top: 10px;
}

</style>