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
        path: '/:id', //Los : indican que va a ser un parámetro de nombre id
        name: 'pokemon-id', /*podemos establecer un nombre para la ruta */
        component: () => import(/* webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'), //Lazy Load
        props: ( route ) => {
            console.log(route);
            /*Con esto tengo acceso a toda la ruta, puedo hacer y deshacer y lo que ponga que retorno
            son las propiedades que voy a mandar al componente y desaparece el warning
            que indicaba que faltaba el 100*/
            return {
                id: 100,
                nombre: 'Inma',
                apellido: 'Gijón'
            }
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