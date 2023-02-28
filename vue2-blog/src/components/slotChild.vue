<template>
    <div>
        <!-- <h4 v-h_Size="'normal'">
            {{ pTitle }}
        </h4>
        <p>
            Name: {{msg}}
        </p>
        <p>
           Number: {{number}}
        </p> -->
        <slot >
            <p v-h_Size="'normal'" class="mt-4">
                Slot Child Component empty
            </p>
        </slot>
    </div>
</template>

<script>
    export default {
        name: 'slotChild',
        props:{
            msg: String,
            number: String
        },
        data(){
            return {
                pTitle: 'Welcome to Slot Child component'
            }
        }
    }
</script>