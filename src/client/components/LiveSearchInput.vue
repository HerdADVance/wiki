<script setup>

	// === IMPORTS ===
	import { computed, defineEmits, reactive, ref } from 'vue';
	import { useApi } from '@/composables/useApi.js';

	// === COMPOSABLES & EMITS ===
	const { callApi, loading, resData, resError } = useApi();
	const emit = defineEmits(['emitClickedResult']);

	// === PROPS & DERIVED ===
	const props = defineProps({
		limit: Number,
		model: String
	})
	const reqUrl = props.model + '/search';

	// === REF/REACTIVE === 
	const reqData = reactive({
		input: ref(''),
		limit: props.limit
	});
	let searchResults = ref([]);
	let showSearchResults = ref(false);


	// === METHODS ===
	// ~ CALL API for Search Results (if search input not blank)
	const sendRequest = async () => {
		if (reqData.input != ''){
			await callApi('post', reqUrl, reqData);
			displaySearchResults(resData.value.results);
		}
	};

	// ~ SHOW the Search Results after receiving them from API
	const displaySearchResults = async (results) => {
		showSearchResults.value = true;
		searchResults.value = results;
	}


	// === EVENTS ===
	// ~ TRACK keystrokes in input, send search request after 1 second delay
	let timer = null;
	const onInputChange = (v) => {
		clearTimeout(timer);
    timer = setTimeout(sendRequest, 1000);
	};

	// ~ HIDE Search Results if open on any click
	const handleAnyClick = () => {
		if(showSearchResults.value) showSearchResults.value = false;
	}

	// ~ EMIT CLICKED RESULT to Parent when user clicks (and hide Search Results)
	const handleResultClick = (result) =>{
		showSearchResults.value = false;
		emit('emitClickedResult', result);
	};

</script>



<template @click="">
	<GlobalEvents @click="handleAnyClick" />

	<!-- Search input text field -->
	<input 
		v-model="reqData.input" 
		@input="onInputChange" 
		class="no-mar live-search-input"
	>

	<!-- Search results list -->
	<ul 
		v-if="searchResults.length > 0 & showSearchResults" 
		class="live-search-results point"
	>
		<li 
			v-for="result in searchResults"
			@click="handleResultClick(result)" 
		>
		{{ result.title }}
		</li>
	</ul>

</template>


