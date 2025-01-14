<script setup>	

	// === IMPORTS ===
	import { onMounted, onUnmounted, reactive, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { useApi } from '@/composables/useApi.js';

	// === COMPONENTS ===
	import PageSections from '@/components/pages/PageSections.vue';
	import PageTopics from '@/components/pages/PageTopics.vue';

	// === COMPOSABLES ===
	const { callApi, loading, resData, resError } = useApi();
	const route = useRoute();

	// === REF/REACTIVE ===
	let page = reactive({
		title: null,
		sections: [
			{id: 1, order: 1, title: 'Section 1', blocks: [
				{id: 4, type: 'editor', content: '<p>HTML Content from WYSIWYG #1 here</p>'},
				{id: 5, type: 'title', content: 'Section 1 Title'},
				{id: 6, type: 'editor', content: '<p>HTML Content from WYSIWYG #2 here</p>'},
			]},
			{id: 2, order: 2, title: 'Section 2', blocks: [
				{id: 7, type: 'editor', content: '<p>HTML Content from WYSIWYG #3 here</p>'},
				{id: 8, type: 'title', content: 'Section 2 Title'},
				{id: 9, type: 'editor', content: '<p>HTML Content from WYSIWYG #4 here</p>'},
			]},
			{id: 3, order: 3, title: 'Section 3', blocks: [
				{id: 10, type: 'editor', content: '<p>HTML Content from WYSIWYG #5 here</p>'},
				{id: 11, type: 'title', content: 'Section 3 Title'},
				{id: 12, type: 'editor', content: '<p>HTML Content from WYSIWYG #6 here</p>'},
			]}
		],
	});
	
	// === METHODS ===
	const getPage = async (id) => {
		try{
			await callApi('get', 'pages/' + id);
			Object.assign(page, resData.value.page);
		} catch(error){
			//console.log(error)
			//console.log(error.response.data.message);
		}
	};

	// === LIFECYCLE HOOKS ===
	onMounted(async () => {
		getPage(route.params.id);
	});

	
	
</script>


<template>
	<!-- Page Title -->
	<h1> {{ page.title }}</h1>

	<!-- Topics associated with Page -->
	<PageTopics />
	
	<!-- Sections associated with Page -->
	<PageSections v-model="page.sections" />

	<!-- 	<h2 style="margin-top: 40px;">Page Types</h2>
	<select>
		<option></option>
	</select> -->

</template>


