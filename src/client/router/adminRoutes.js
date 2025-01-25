
const loadView = (view) => {
  return () => import(`@/views/admin/${view}.vue`);
};

// All admin routes require the user to be an editor or higher
const editorMeta = {
  requiresEditor: true,
};

const adminMeta = {
  requiresAdmin: true,
};

const adminRoutes = [
	
	// Users
	{
		path: "/admin/users",
		name: "Users", 
		component: loadView('UsersView'), 
		meta: adminMeta
	},

	// Pages
	{
		path: "/admin/page/create",
		name: "PageCreate", 
		component: loadView('PageCreateView'), 
		meta: editorMeta
	},
	{
		path: "/admin/page/edit/:id",
		name: "PageEdit", 
		component: loadView('PageEditView'), 
		meta: editorMeta
	},
	
];

export default adminRoutes;
