<script setup>
	
	import { ref } from 'vue';
	import api from '@/util/api.js';

	const props = defineProps({
		limit: Number,
		requestName: String,
		requestUrl: String
	})

	let input = ref(null);
	let results = ref([]);
	let timer = null;


	// Track keystrokes in input, send search request after 1 second delay
	const onInputChange = () => {
		clearTimeout(timer);
    timer = setTimeout(searchRequest, 1000);
	};

	// API Request for most similar search terms
	const searchRequest = async () => {
		const data = {input: input.value, limit: props.limit}
		try{
			const response = await api.post(props.requestUrl, data);
			console.log(response.data);
			results.value = response.data.results;
		} catch(error){
			console.log(error)
			console.log(error.response.data.message);
		}
	};

</script>


<template>
	<input v-model="input" @input="onInputChange">
	<ul v-for="result in results">
		<li>{{ result.title }}</li>
	</ul>
</template>