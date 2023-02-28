<template>
     <div class="">
        <h1>
            Hello From Events component
        </h1>
    <h2>
        Vue Js Events 
    </h2>

    <button v-on:click="hello('Clicked Me')">
        Click Me
    </button>
    <br />
    <br />

    <button v-on:mouseover="mouseover('mouseover get')">
        mouseover Me
    </button>
    <br />
    <br />

    <button v-on:mouseleave="mouseleave('Clicked mouseleave')">
        mouseleave Me
    </button>
    <br />
    <br />
    <hr />
     </div>
</template>

<script>
export default {
    name: 'VueEvents',
    props: {
        data: String
    },
    methods: {
        hello(data) {
            alert(data)
        },
        mouseover(data) {
            alert(data)
        },
        mouseleave(data) {
            alert(data)
        },
    }
}
</script>