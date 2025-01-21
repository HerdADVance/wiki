
const loadView = (view) => {
  return () => import(`@/views/pages/${view}.vue`);
};

const pagesRoutes = [
	{path: "/page/:id", name: "Page", component: loadView('PageView')},
	{path: "/pages", name: "Pages", component: loadView('PagesView')},
	{path: "/page/create", name: "PageCreate", component: loadView('PageCreateView'), meta: {requiresAuth: true} },
];

export default pagesRoutes;
