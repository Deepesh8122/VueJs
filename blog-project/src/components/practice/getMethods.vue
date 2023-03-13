<template>
    <div>
        <h2>
            {{ pTitle }}
        </h2>
        <ul>
            <li>
                Name: {{ uName }}
            </li>
            <li>
                Email: {{ uEmail }}
            </li>
        </ul>
        <br />
        <ul>
            <li>
                Update the Information
            </li>
            <li>
                Name: {{ UpdateDetails().name }}
            </li>
            <li>
                Email: {{ UpdateDetails().email }}
            </li>
        </ul>
        <br />
        <ul>
            <li>
                Update the Information inner function
            </li>
            <li>
                Name: {{ UpdateDetailsInner('Deepesh8122') }}
            </li>
            <li>
                Email: {{ UpdateDetailsInner('Deepesh8122@gmail.com') }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'defineMethodsComp',
    data(){
        return {
            pTitle: 'Hello from the Methods with Params',
            uName: 'Deepesh',
            uEmail: 'deepesh@yogi.com'
        }
    },
    methods: {
        UpdateDetails(){
            return {
                name: 'Deepak',
                email: 'Deepak@8122.com'
            }
        },
        UpdateDetailsInner(e){
            return e
        }
    }
}
</script>