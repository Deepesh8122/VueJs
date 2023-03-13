<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>
        <div v-if="conditionCheck">
            <h3>
                This is If part
            </h3>
        </div>
        <div v-else>
            <h3>This is else part</h3>
        </div>

        <div class="">
            <div class="if-area" v-if="toggle">
                <h3>
                    Hello Deepesh <code>if area</code>
                </h3>
            </div>
            <div class="else-area" v-else>
                <h3>
                    Byy Deepesh <code>else area</code>
                </h3>
            </div>
        </div>

        <button type="button" @click="toggleCondition()">
            Toggle
        </button>
    </div>
</template>

<script>
export default {
    name: 'ifElseCondition',
    data(){
        return {
            pTitle: 'Welcome to the If esle condition',
            conditionCheck: true,
            toggle: true
        }
    },
    methods: {
        toggleCondition(){
            this.toggle =! this.toggle
        }
    }
}
</script>

<style scoped>
code {
    color: blueviolet;
}
h3 {
    margin-left: auto;
    margin-right: auto;
}
.if-area h3  {
    background-color: aqua;
}
.else-area h3 {
    background-color:chartreuse
}
</style>