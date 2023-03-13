<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>

        <ul>
            <li v-for="item in technology" :key="item.id">{{item}}</li>
        </ul>
        <table border="1">
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Full Name
                </th>
                <th>
                    Email
                </th>
                <th>
                    Address
                </th>
            </tr>
            <tr v-for="user in usersList" :key="user.id">
                <td>
                    {{ user.id }}
                </td>
                <td>
                    {{ user.fName }}
                </td>
                <td>
                    {{ user.email }}
                </td>
                <td>
                    {{ user.address }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'forLoop',
    data(){
        return {
            pTitle: 'Welcome to the Foor loop',
            technology: ['Jave','PHP','Node','HTML'],
            usersList:{
                user1:{
                    id: '01',
                    fName: 'Deepesh K. Yogi',
                    email: 'deepesh@123.com',
                    address: 'India'
                },
                user2:{
                    id: '02',
                    fName: 'Deepak Yogi',
                    email: 'Deepak@123.com',
                    address: 'USA'
                },
                user3:{
                    id: '03',
                    fName: 'Peter Singh',
                    email: 'Peter@123.com',
                    address: 'Canada'
                }
            },
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
table {
    margin: 0 auto;
    border-collapse: collapse;
}
table th,
table td {
    padding: 5px;
}
</style>