<script setup>	

	// === IMPORTS ===
	import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
	import { useRoute } from 'vue-router';
	import { useSettingsStore } from '@/stores/settingsStore.js';
  import { usePageStore } from '@/stores/pageStore.js';
  const route = useRoute();

	// === COMPONENTS ===
	import PageSections from '@/components/pages/PageSections.vue';
	import PageTopics from '@/components/pages/PageTopics.vue';

	// === STORE ===
	const store = useSettingsStore();
  const pageStore = usePageStore();

	// === SYNC PAGE WITH STORE AND GET PAGE DATA FROM API ===
	let page = computed(()=> pageStore.page)
	const getPage = async (id) => {
		try{
      const pageData = await pageStore.getPageData(id)
      console.log(pageData)
			pageStore.setPage(pageData)
		} catch(error){
			//console.log(error)
			//console.log(error.response.data.message);
		}
	};
  getPage(route.params.id)
	
</script>


<template>
	<button @click="store.toggleEditMode" style="float: right;">Switch Edit/View Mode</button>

	<!-- Page Title -->
	<h1 class="page-title">{{ page.title }}</h1>

	<!-- Topics associated with Page -->
	<PageTopics />
	
	<!-- Sections associated with Page -->
	<PageSections />

	<!-- 	<h2 style="margin-top: 40px;">Page Types</h2>
	<select>
		<option></option>
	</select> -->

</template>


