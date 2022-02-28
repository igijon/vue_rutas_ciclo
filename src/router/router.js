import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage"*/ '../modules/pokemon/pages/ListPage') //Lazy Load
    },
    {
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage"*/ '../modules/pokemon/pages/AboutPage') //Lazy Load
    },
    {
        /*Si cambio la ruta sigue funcionando, porque lo que estoy utilizando
        en nabvar es el name */
        path: '/pokemonid/:id', //Los : indican que va a ser un parámetro de nombre id
        name: 'pokemon-id', /*podemos establecer un nombre para la ruta */
        component: () => import(/* webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'), //Lazy Load
        props: ( route ) => {
            const id  = Number(route.params.id)
            return isNaN( id ) ? { id: 1 } : { id }
                /*Esperaba un número y tenía un string, tenemos que hacer una validación
                intentando hacer una conversión 
                Si introduzco un valor no válido en la ruta porque no sea un entero
                el valor que tomará id en este caso será 1*/
                
        } 
    },
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound"*/ '../modules/shared/pages/NoPageFound') //Lazy Load
    }, //Cualquier URL que no haga match con las anteriores mostraré un 404Page

]

const router = createRouter({
    history: createWebHashHistory(), //Cómo quiero que maneje la historia
    routes
})

export default router