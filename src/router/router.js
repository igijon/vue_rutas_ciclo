import { createRouter, createWebHashHistory } from 'vue-router'

import ListPage from '@/modules/pokemon/pages/ListPage'
import AboutPage from '@/modules/pokemon/pages/AboutPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
import NoPageFound from '@/modules/shared/pages/NoPageFound'

const routes = [
    {path: '/', component: ListPage},
    {path: '/about', component: AboutPage},
    {path: '/id', component: PokemonPage},
    {path: '/:pathMatch(.*)*', component: NoPageFound}, //Cualquier URL que no haga match con las anteriores mostraré un 404Page

]

const router = createRouter({
    history: createWebHashHistory(), //Cómo quiero que maneje la historia
    routes
})

export default router