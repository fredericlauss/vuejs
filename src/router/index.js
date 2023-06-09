import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import StoreView from '../views/StoreView.vue';
import ContactView from '../views/ContactView.vue';
import LoginView from "../views/LoginView.vue";
import CartView from '../views/CartView.vue';
import BlogView from '../views/BlogView.vue';
import PostView from '../views/PostView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/store',
            name: 'store',
            component: StoreView,
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView,
        },
        {
            path: '/blog/:id',
            name: 'PostView',
            component: PostView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        }
    ],
});

export default router;
