<template>
    <h1>Pokemon information page</h1>
</template>
<script>

export default {
    created(){
        //Muestra la ruta completa.
        //En params podemos ver el 100 como string
        console.log( this.$route );
    }
}
</script>
