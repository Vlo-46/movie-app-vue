import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MovieDetails from '../views/MovieDetails.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: MovieDetails,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
