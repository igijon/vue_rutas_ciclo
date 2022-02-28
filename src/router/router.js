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
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DBZLayout"*/ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters', 
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DbzCharacters"*/ '@/modules/dbz/pages/Characters') //Lazy Load
            },
            {
                path: 'about',
                name: 'dbz-about', 
                component: () => import(/* webpackChunkName: "DbzAboutPage"*/ '@/modules/dbz/pages/About') //Lazy Load
            },
            {
                path: '',
                redirect: {
                    name: 'dbz-characters'
                }
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

/**Creación de un guard global síncrono => En el commit hay error SINCRONO
 * 
 * https://router.vuejs.org/guide/advanced/navigation-guards.html
 * 
 */
router.beforeEach((to, from, next) => {
    console.log(to, from, next)

    const random = Math.random() * 100
    
    //Voy a hacer lógica aleatoria para hacer funcionar el guard
    //Si el random es mayor de 50 le dejaré pasar
    //Podemos navegar en el navbar y a veces no dejará pasar y mandará al
    //pokemon-home
    if ( random > 50 ) {
        console.log('Auntenticado')
        next()
    } else {
        console.log( random, 'Bloqueado por el beforeEach Guard')
        next({name: 'pokemon-home'})
    }

})
export default router