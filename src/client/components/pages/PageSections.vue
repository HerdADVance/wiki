<script setup>

	// === IMPORTS ===
	import { computed, defineModel, onMounted, ref } from 'vue';
	import draggable from 'vue3-draggable-next';
  import { usePageStore } from '@/stores/pageStore.js';
	
	// === COMPONENTS ===
	import PageSection from '@/components/pages/PageSection.vue';

	// === STORE ====
  const pageStore = usePageStore()
	const sections = computed(()=> pageStore.page.sections)


	// === METHODS ===
	const handleAddSection = () => {
    pageStore.addSection()
	}

	const onSectionDrag = (id, content) => {
		console.log(id)
		console.log(content)
		//const section = sections.value.find(b => b.id === id)
		//console.log(section);
		//if (section) section.content = content
	}

</script>



<template>
	<h2 class="page-subtitle" style="margin-top: 40px;">Sections</h2>

	<!-- Add Section -->
	<button @click="handleAddSection" class="no-mar">Add Section</button>

	<!-- Draggable list of sections, each in PageSection child -->
	<draggable v-model="sections" group="parent" item-key="id" @change="onSectionDrag">
		<template #item="{ element }">
			<PageSection :section="element" />
		</template>
	</draggable>

</template>


