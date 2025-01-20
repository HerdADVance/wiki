const loadView = (view) => {
  return () => import(`@/views/main/${view}.vue`);
};

const mainRoutes = [
	{path: "/", name: "dashboard", component: loadView('DashboardView')},
];

export default mainRoutes;
