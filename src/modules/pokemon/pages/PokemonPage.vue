<template>
    <h1>Pokemon <span>#{{ id }}</span></h1>
</template>
<script>

export default {
    props: {
        //Vamos a ver la alternativa de tener id como propiedad en el componente en lugar
        //de como parámetro.
        id: {
            type: Number,
            required: true
        },
        nombre: {
            type: String
            /*Con esto nombre deja de ser un attr aunque sigan siendo reactivos */
        }
    },
    data(){
        return {
        }
    },
    created(){
        /*La impresión de los atributos sale así porque son reactivas */
        console.log(this.$attrs)
    }
}
</script>
