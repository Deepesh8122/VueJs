<template>
     <div>
        <h1>
            Hello From Class and Style binding component
        </h1>
        <h2>
            Vue Js Class and Style binding
        </h2>

        <h3 v-bind:style="{color: 'red'}">
            Style Bindind
        </h3>

        <h3 class="normal-class">
            Normal Class
        </h3>

        <h3 v-bind:class="{'font-bold':bold, 'color-blue':color}">
            Class Binding with Object
        </h3>

        <h3 v-bind:class="[bold?'font-light':'font-bold']">
            Class Binding with Array
        </h3>



        
        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>
</template>

<script>
export default {
    name: 'Class_style_Binding',
    data(){
        return {
            bold: true,
            color: true,
        }
    }

}
</script>

<style scoped>
    .font-bold {
        font-weight: 900;
    }
    .font-light {
        font-weight: 100;
    }
    .color-blue {
        color: blue
    }
</style>