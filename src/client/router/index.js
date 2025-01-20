
// === IMPORTS ===
import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/main/DashboardView.vue';

// === IMPORTED ROUTES ===
import authRoutes from './authRoutes';
import mainRoutes from './mainRoutes';
import pagesRoutes from './pagesRoutes';
import topicsRoutes from './topicsRoutes';

// === DECLARE ROUTES ===
const routes = [
	...authRoutes,
	...mainRoutes,
	...pagesRoutes,
	...topicsRoutes,
];

// === ROUTER ===
const router = createRouter({
	history: createWebHistory(),
	routes
});


export default router;

