<template>
    <div>
        <h1>
            Hello From Template Property component
        </h1>
        <h2>
            Vue Js Template Property
        </h2>

        <h3>
            Name: {{name}}
        </h3>
        <h3>
            Total Count: {{a + b}}
        </h3>
        <h3>
            My check is {{nameCheck?'Currect':'Wrong'}}
        </h3>

        <button v-on:click="checkcon">
            Check Condition
        </button>
        <br/>
        <br/>
        <div v-html="printHTML">
        </div>
        <br />
        <br />
        <br />
        <br />
        <hr />
    </div>
</template>
<script>
    export default {
        name: 'TemplateProperty',
        data(){
            return {
                name: 'Deepesh',
                email: 'deepesh@phpdots.com',
                a: 10,
                b: 12,
                nameCheck: true,
                printHTML: '<h2><code>Print the HTML</code></h2>'
            }
        },
        methods:{
            checkcon() {
                this.nameCheck = !this.nameCheck
            }
        }
    }
</script>