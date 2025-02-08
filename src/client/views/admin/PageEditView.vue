<script setup>	

	// === IMPORTS ===
	import { computed, onMounted, onUnmounted, reactive, ref, watch } from 'vue'
	import { useRoute } from 'vue-router'
  import { usePageStore } from '@/stores/pageStore.js'
  const route = useRoute()

	// === COMPONENTS ===
	import PageSections from '@/components/pages/PageSections.vue'
	import PageTopics from '@/components/pages/PageTopics.vue'
  import apiMessage from '@/components/api/ApiMessage.vue'

	// === STORE & SYNCED ===
  const pageStore = usePageStore()
	let page = computed(()=> pageStore.page)
  let messageFromApi = computed(() => pageStore.messages.page)

  // === GET PAGE DATA FROM API ===
  pageStore.getPageData(route.params.id)
  watch(() => route.path, (newPath, oldPath) => {
    pageStore.getPageData(route.params.id)
  })
  
	
</script>


<template>

  <apiMessage v-if="messageFromApi" :message="messageFromApi.message" :status="messageFromApi.status" />

	<!-- Page Title -->
	<h1 class="page-title">{{ page.title }}</h1>

	<!-- Topics associated with Page -->
	<PageTopics />
	
	<!-- Sections associated with Page -->
	<PageSections />

</template>


