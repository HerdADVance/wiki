<script setup>
	
	// === IMPORTS ===
	import { ref } from 'vue';

	// === COMPONENTS ===
	import LiveSearchInput from '@/components/LiveSearchInput.vue';

	// === REF ===
	let topics = ref([]);

	// === METHODS ===
	const handleClickedResult = (data) => {
	  console.log(data);
	};

</script>

<template>
	<h2 style="margin-top: 20px;">Topics</h2>
	<LiveSearchInput 
		model="topics"
		:limit=5
		@emitClickedResult="handleClickedResult"
	/>
</template>