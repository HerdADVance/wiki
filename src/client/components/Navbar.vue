<script setup>
	import { RouterLink, useRoute } from 'vue-router';
</script>

<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/page">Page</RouterLink>
	</nav>
</template>