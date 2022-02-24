<template>
    <!--
        https://vuejs.org/api/composition-api-lifecycle.html
        https://vuejs.org/guide/essentials/application.html#lifecycle-diagram
    -->
    <h1>About Page</h1>
    <hr>
    <h2>{{ name }}</h2>
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
            //Con el watch detectaríamos los cambis en las propiedades, con el 
            //ciclo de vida detectamos los cambios en el componente
        }
    },
    beforeCreate() {
        /*Aquí no debemos hacer las peticiones http para renderizar en el componente
        porque aún no se ha creado el componente, por lo tanto la data no se ha creado
        y cuando se crea se sobreescriben los valores*/
        this.name = 'Juan Carlos' //No se visualiza
        console.log('beforeCreate')
    },
    created() {
        this.name = 'Juan Carlos'
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
