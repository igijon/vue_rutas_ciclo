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
        }
    },
    data(){
        return {
            //id: null
        }
    },
    created(){
        const { id } = this.$route.params
        console.log(id)
        //this.id = id
    }
}
</script>
