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
            pokemon: null
        }
    },
    created(){
        //Los métodos de peticiones http deben hacerse aquí, también podrían hacerse
        //en mounted pero lo mejor es aquí porque ya está montado y creado y se puede
        //manipular
        this.getPokemon()
        /*Tal cual lo tenemos si no pulsamos dos veces intro aunque cambiemos
        en la ruta el id no pasa nada porque el componente ya está creado y se está llamando
        cuando se crea */
    },
    methods: {
        async getPokemon() {
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( r => r.json() );
            console.log(pokemon)
            this.pokemon = pokemon
        }
    }
}
</script>
