<template>
  <div>
      <router-link to="/">Pokemon List</router-link>
      <router-link to="/id">Pokemon por id</router-link>
      <router-link to="/about">About</router-link>
      <!--Con vue router no usa a, usa router-link
      aunque en el navegador web lo termina traduciendo a "a"
      Para que las clases de estilos sólo se apliquen a los elementos
      de los componentes, cuando se renderiza (en el html lo podemos ver)
      se les asigna un hash para que no se apliquen a todo. Si quitamos el
      scoped sí se aplica a todo.-->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

a.router-link-exact-active {
    /*Esta clase se activa cuando el link está activo 
    También funciona con a porque es lo que termina traduciendo*/
    color: #42b983;
}
</style>