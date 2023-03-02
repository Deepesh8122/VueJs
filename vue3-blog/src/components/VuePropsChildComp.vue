<template>
    <div>
        <h3>
            {{Name}}
        </h3>
        <h3>
            {{nameN}}
        </h3>
        <table border="1">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in userlist" :key="user.id">
                    <td>
                        {{user.name}}
                    </td>
                    <td>
                        {{user.email}}
                    </td>
                    <td>
                        {{user.phone}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'VuejsChild',
    props: ['userlist','nameN','namel']
}

</script>

<style scoped>
table {
    margin: 0 auto;
}
</style>