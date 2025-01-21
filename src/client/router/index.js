
// === IMPORTS ===
import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/main/DashboardView.vue';

// === IMPORTED ROUTES ===
import adminRoutes from './adminRoutes';
import authRoutes from './authRoutes';
import mainRoutes from './mainRoutes';
import pagesRoutes from './pagesRoutes';
import topicsRoutes from './topicsRoutes';

// === DECLARE ROUTES ===
const routes = [
	...adminRoutes,
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

