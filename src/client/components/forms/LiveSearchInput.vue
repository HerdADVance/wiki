<script setup>

	// === IMPORTS ===
	import { computed, defineEmits, reactive, ref } from 'vue';
	import { useApi } from '@/composables/useApi.js';

	// === COMPOSABLES & EMITS ===
	const { apiCall, apiLoading, apiData, apiError } = useApi();
	const emit = defineEmits(['emitClickedResult']);

	// === PROPS & DERIVED ===
	const props = defineProps({
		limit: Number,
		table: String,
		classes: String,
		placeholder: String
	})
	const reqUrl = props.table + '/search';

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
			await apiCall('post', reqUrl, reqData);
			displaySearchResults(apiData.value.results);
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
		:class="`live-search-input no-mar ${classes}`"
		:placeholder="`${placeholder}`"
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


