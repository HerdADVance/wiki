
const loadView = (view) => {
  return () => import(`@/views/pages/${view}.vue`);
};

const pagesRoutes = [
	{path: "/page", name: "page", component: loadView('PageView')},
	{path: "/pages", name: "pages", component: loadView('PagesView'), meta: {requiresAuth: true} },
];

export default pagesRoutes;
