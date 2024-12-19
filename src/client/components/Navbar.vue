<script setup>
	import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/splash">Splash</RouterLink>
		<RouterLink to="/page">Page</RouterLink>
		<RouterLink to="/pages">Pages</RouterLink>
		<RouterLink to="/topic">Topic</RouterLink>
		<RouterLink to="/topics">Topics</RouterLink>
	</nav>
</template>