<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>
        <h4>
            Name: {{ name }}
        </h4>
        <h4>
            Mobile No.: {{ MobileNo = 7732864367 }}
        </h4>
    </div>
</template>
<script>
    export default {
        name: 'Interpolation_and_Data',
        data (){
            return {
                pTitle: 'Hello from the Interpolation & Data',
                name: 'Deepesh',
                MobileNo: 8619595022
            }
        }
    }
</script>
