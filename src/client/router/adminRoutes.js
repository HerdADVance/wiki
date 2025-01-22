
const loadView = (view) => {
  return () => import(`@/views/admin/${view}.vue`);
};

// All admin routes require the user to be an editor or higher
const editorMeta = {
  requiresEditor: true,
};

const adminRoutes = [
	{
		path: "/admin/page/create",
		name: "PageCreate", 
		component: loadView('PageCreateView'), 
		meta: editorMeta
	},
];

export default adminRoutes;
