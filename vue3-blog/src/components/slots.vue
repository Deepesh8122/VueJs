<template>
    <div>
        <h4 v-h_Size="'medium'">
            {{ pTitle }}
        </h4>
        <!-- <slotChild :msg="msg" :number="number"/> -->
        <div class="row mt-4 pt-4">
            <div class="col-md-6">
                <slotChild id="slotes1">
                    <h2>
                        PHPDots
                    </h2>
                </slotChild>
                <slotChild id="slotes2">
                    <span> Check Links </span>
                </slotChild>
                <slotChild id="slotes3">
                    <img class="img-fluid" src="https://images.pexels.com/lib/api/pexels.png" alt="img">
                </slotChild>
                <slotChild id="slotes4">
                    
                </slotChild>
            </div>
            <div class="col-md-6">
                <multipleSlotChild>
                    <template v-slot:header>
                        <h2>
                            Title
                        </h2>
                    </template>
                    <template v-slot:body>
                        <img class="img-fluid" src="https://cdn.pixabay.com/photo/2023/02/08/08/50/frequency-wave-7776034_1280.jpg" alt="img">
                    </template>
                    <template v-slot:footer>
                        <div class="d-flex flex-column">
                            <p>
                                Get a full fake REST API with zero coding in less than 30 seconds (seriously) Created with for front-end developers who need a quick back-end for prototyping and mocking.
                            </p>
                            <button class="btn btn-warning font-bold">
                                Buy Now
                            </button>
                        </div>      
                    </template>

                </multipleSlotChild>
            </div>
        </div>
    </div>
</template>

<script>
    import slotChild from './slotChild.vue';
    import multipleSlotChild from './multipleSlotChild.vue'

    export default {
        name: 'soltsVue',
        components: {
            slotChild,
            multipleSlotChild
        },
        data(){
            return {
                pTitle: 'Welcome to Slot Property',
                msg: 'Deepesh Ji',
                number: 8619595022
            }
        }
    }
</script>