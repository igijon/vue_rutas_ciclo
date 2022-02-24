<template>
    <!--
        https://vuejs.org/api/composition-api-lifecycle.html
        https://vuejs.org/guide/essentials/application.html#lifecycle-diagram
    -->
    <h1>About Page</h1>
    <hr>
    <!-- <h2>{{ name }}</h2> -->
    <button @click="onChangeName">
        Cambiar nombre
    </button>
</template>

<script>

export default {

    data(){
        return {
            name: 'Fernando'
        }
    },
    methods: {
        onChangeName() {
            console.log('Se cambiará el nombre a Melissa')
            this.name = 'Melisa'
            console.log(this.name)
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated() {
        console.log('activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    },
    errorCaptured() {
        console.log('errorCaptured')
    },
    renderTracked() {
        console.log('renderTracked')
    },
    renderTriggered() {
        console.log('renderTriggered')
    } 
    
}
</script>
