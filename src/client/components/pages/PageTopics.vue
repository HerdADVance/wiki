<script setup>
	
	// === IMPORTS ===
	import { computed, ref } from 'vue';
	import { useSettingsStore } from '@/stores/settingsStore.js';
  import { usePageStore } from '@/stores/pageStore.js';

	// === COMPONENTS ===
  import apiMessage from '@/components/api/ApiMessage.vue'
	import LiveSearchInput from '@/components/forms/LiveSearchInput.vue';

	// === COMPUTED FROM STORE ===
	const store = useSettingsStore();
  const pageStore = usePageStore();
  const topics = computed(()=> pageStore.page.topics)
  const messageFromApi = computed(()=> pageStore.messages.topics)

	// === METHODS ===
	const handleTopicAddClick = (topic) => {
    pageStore.addPageTopic(topic)
	};

	const handleTopicClick = (index) => {
  	console.log('single click')
	}

	const handleTopicDblClick = async (index, topic) => {
    pageStore.removePageTopic(index, topic)
	}

</script>

<template>
	<h2 class="page-subtitle">Topics</h2>

  <apiMessage v-if="messageFromApi" :message="messageFromApi.message" :status="messageFromApi.status" />

	<!-- List of Topics for this Page -->
	<ul class="page-topics point">
		<li 
			v-for="(topic, index) in topics"
			@click="handleTopicClick(index)"
			@dblclick="handleTopicDblClick(index, topic)"
		>
			{{ topic.title }}
		</li>
	</ul>

	<!-- Search input to add new Topics -->
	<LiveSearchInput
		v-if="store.editMode"
		table="topics"
		placeholder="Type to add new topics"
		:limit=5
		@emitClickedResult="handleTopicAddClick"
	/>

</template>