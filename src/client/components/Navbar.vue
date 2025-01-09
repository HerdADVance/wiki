<script setup>
	import { RouterLink } from 'vue-router';
</script>

<template>
	<ul>
		<li><RouterLink to="/">Home</RouterLink></li>
		<li><RouterLink to="/splash">Splash</RouterLink></li>
		<li><RouterLink to="/page">Page</RouterLink></li>
		<li><RouterLink to="/pages">Pages</RouterLink></li>
		<li><RouterLink to="/topic">Topic</RouterLink></li>
		<li><RouterLink to="/topics">Topics</RouterLink></li>
	</ul>
</template>