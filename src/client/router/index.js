import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

import authRoutes from './authRoutes';
import pagesRoutes from './pagesRoutes';
import topicsRoutes from './topicsRoutes';

const routes = [
	...authRoutes,
	...pagesRoutes,
	...topicsRoutes,
	{path: "/", name: "home", component: HomeView},
];


const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;