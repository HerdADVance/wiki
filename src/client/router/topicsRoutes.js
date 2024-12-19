const loadView = (view) => {
  return () => import(`@/views/topics/${view}.vue`);
};

const topicsRoutes = [
	{path: "/topic", name: "topic", component: loadView('TopicView')},
	{path: "/topics", name: "topics", component: loadView('TopicsView')},
];

export default topicsRoutes;
