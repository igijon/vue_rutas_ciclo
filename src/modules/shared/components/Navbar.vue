<template>
  <div>
      <!--Si quiero tener más control sobre el routerling-->
      <CustomLink/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import CustomLink from './CustomLink.vue'
/**Funcionaría también si lo importamos del core, pero lo vamos a dejar así
 */
export default {
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