<script setup>
	
	// === IMPORTS ===
	import { ref } from 'vue';
	import { useSettingsStore } from '@/stores/settingsStore.js';

	// === COMPONENTS ===
	import LiveSearchInput from '@/components/forms/LiveSearchInput.vue';

	// === STORE ===
	const store = useSettingsStore();

	// === PROPS AS MODEL ===
	const topics = defineModel();

	// === METHODS ===
	const handleResultClick = (topic) => {
	  topics.value.push(topic);
	};

	const handleTopicClick = (index) => {
  	console.log('single click')
	}

	const handleTopicDblClick = (index) => {
  	topics.value.splice(index, 1)
	}

</script>

<template>
	<h2 class="page-subtitle">Topics</h2>

	<!-- List of Topics for this Page -->
	<ul class="page-topics point">
		<li 
			v-for="(topic, index) in topics"
			@click="handleTopicClick(index)"
			@dblclick="handleTopicDblClick(index)"
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
		@emitClickedResult="handleResultClick"
	/>

</template>