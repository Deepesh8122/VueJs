<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>
                    Page Not Fount - <strong>404</strong>
                </h2>
                <h4>
                    Go to Home page
                </h4>
                <route-link to="/">
                    Home
                </route-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pageNotFound',
    data(){
        return {

        }
    }
}
</script>