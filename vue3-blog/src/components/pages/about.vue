<template>
    <div class="container mt-4">
        <h2>
            {{ pageTitle }}
        </h2>

        <p class="d-flex flex-column">
            <route-link to="/user-list/1">
                Deepesh
            </route-link>
        </p>

        <p class="d-flex flex-column">
            <route-link to="/user-list/2">
                Yogi
            </route-link>
        </p>

        <p class="d-flex flex-column">
            <route-link to="/user-list/3">
                Jonh
            </route-link>
        </p>
            
        <p class="d-flex flex-column">
            <route-link to="/user-list/4">
                Bruce
            </route-link>
        </p>
        <!-- <router-view></router-view>  -->
        <!-- <userListPage /> -->
    </div>
</template>

<script>

// import userListPage from '../userList.vue'
export default {
    name: 'aboutPage',
    components: {
        // userListPage
    },
    data() {
        return {
            pageTitle: 'About page'
        }
    }
}
</script>