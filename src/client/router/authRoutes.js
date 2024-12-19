const loadView = (view) => {
  return () => import(`@/views/auth/${view}.vue`);
};

const authRoutes = [
	{path: "/splash", name: "splash", component: loadView('SplashView')},
];

export default authRoutes;
