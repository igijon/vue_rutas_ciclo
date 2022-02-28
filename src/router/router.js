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
            {
                path: 'home', 
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage') //Lazy Load
            },
            {
                path: 'about',
                name: 'pokemon-about', 
                component: () => import(/* webpackChunkName: "AboutPage"*/ '@/modules/pokemon/pages/AboutPage') //Lazy Load
            },
            {
                
                path: 'pokemonid/:id', 
                name: 'pokemon-id', 
                component: () => import(/* webpackChunkName: "PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage'), //Lazy Load
                props: ( route ) => {
                    const id  = Number(route.params.id)
                    return isNaN( id ) ? { id: 1 } : { id }
                        
                } 
            },
            {
                path: '',
                redirect: {
                    name: 'pokemon-about'
                }
                /**Si introuzco la dirección completamente vacía me voy al about, 
                 * pero he perdido la barra de navegación completa
                 */
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NoPageFound"*/ '../modules/shared/pages/NoPageFound') //Lazy Load
        
    }, 

]

const router = createRouter({
    history: createWebHashHistory(), //Cómo quiero que maneje la historia
    routes
})

export default router