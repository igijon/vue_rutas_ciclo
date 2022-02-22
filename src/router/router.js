import { createRouter, createWebHashHistory } from 'vue-router'

import ListPage from '@/modules/pokemon/pages/ListPage'
import AboutPage from '@/modules/pokemon/pages/AboutPage'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage'

const routes = [
    {path: '/', component: ListPage},
    {path: '/about', component: AboutPage},
    {path: '/id', component: PokemonPage},

]

const router = createRouter({
    history: createWebHashHistory(), //Cómo quiero que maneje la historia
    routes
})

export default router