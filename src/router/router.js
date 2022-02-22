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
        path: '/id', 
        component: () => import(/* webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage') //Lazy Load
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