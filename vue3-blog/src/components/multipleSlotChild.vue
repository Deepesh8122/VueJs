<template>
    <div class="custom-card d-flex flex-column">
        <div class="custom-card-header">
            <slot name="header">
            </slot>
        </div>
        <div class="custom-card-body">
            <slot name="body">
            </slot>
        </div>
        <div class="custom-card-footer">
            <slot name="footer">
            </slot>
        </div>
    </div>
</template>
<script>

export default {
    name: 'multipleSlotChild',
    data(){
        return {}
    }
}
</script>

<style>
.custom-card {
    border: 1px solid;
    border-radius: 5px;;
}
.custom-card .custom-card-header,
.custom-card .custom-card-footer {
    padding: 1rem;
    text-align: left;
}

</style>