<template>
  <div>
      <!--Si quiero tener más control sobre el routerling-->
      <CustomLink
        v-for="link in links" :key="link.to" :link="link"
        
      />
      <!--Sólo puedo usar el to porque es único-->
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import CustomLink from './CustomLink.vue'
/**Funcionaría también si lo importamos del core, pero lo vamos a dejar así
 */
export default {
    data() {
        return {
            links: [
                /**Las url son volátiles es mejor por nombres */
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'Por ID', id: 151},
                { to: 'pokemon-about', name: 'About'},
                
                { to: 'dbz-characters', name: 'Personajes'},
                { to: 'dbz-about', name: 'DBZ About'},
                
                { to: 'https://google.com', name: 'Google'}
            ]
        }
    },
    /**Cuando tenemos dos o tres componentes ya se puede hacer recomendable
     * tener lazy load
     */
    components: {
        /**Le ponemos el nombre al componente que queramos dentro de este archivo */
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

        CustomLink
<style scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

</style>