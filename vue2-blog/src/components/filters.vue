<template>
    <div>
        <h1>
            Hello from Vue Js Filters
        </h1>

        <h3>
            {{title | uCase}}
        </h3>
        <h3>
            $ {{amount | INRTodoller}}
        </h3>
        <h3>
            INR {{amount2 | dollerToINR}}
        </h3>
        <br />
        <br />
        <br />
        <hr />
    </div>

</template>


<script>
export default {
    name: 'VuejsFilter',
    data(){
        return{
            title: 'Deepesh k. Yogi',
            amount2: 30,
            amount: 50023
        }
    }
}
</script>