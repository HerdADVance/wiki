
const loadView = (view) => {
  return () => import(`@/views/pages/${view}.vue`);
};

const pagesRoutes = [
	{path: "/page/:id", name: "Page", component: loadView('PageView')},
	{path: "/pages", name: "Pages", component: loadView('PagesView')},
];

export default pagesRoutes;
