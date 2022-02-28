import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
        /*Poniendo los nombres tengo más control*/
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            /**Se comporta igual porque las rutas hijas tienen el path absoluto */
            {
                path: '/home', 
                name: 'home',
                component: () => import(/* webpackChunkName: "ListPage"*/ '../modules/pokemon/pages/ListPage') //Lazy Load
            },
            {
                path: '/about',
                name: 'about', 
                component: () => import(/* webpackChunkName: "AboutPage"*/ '../modules/pokemon/pages/AboutPage') //Lazy Load
            },
            {
                
                path: '/pokemonid/:id', 
                name: 'pokemon-id', 
                component: () => import(/* webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'), //Lazy Load
                props: ( route ) => {
                    const id  = Number(route.params.id)
                    return isNaN( id ) ? { id: 1 } : { id }
                        
                } 
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        //component: () => import(/* webpackChunkName: "NoPageFound"*/ '../modules/shared/pages/NoPageFound') //Lazy Load
        redirect: '/home'
    }, 

]

const router = createRouter({
    history: createWebHashHistory(), //Cómo quiero que maneje la historia
    routes
})

export default router