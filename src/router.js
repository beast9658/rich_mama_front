import {
    createRouter,
    createWebHistory
} from 'vue-router';
import home from './Home/Home.vue';

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
    ]
})

export default router