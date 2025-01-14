<script setup>

	// === IMPORTS ===
	import { defineModel, onMounted, ref } from 'vue';
	import draggable from 'vue3-draggable-next';
	

	// === COMPONENTS ===
	import PageSection from '@/components/pages/PageSection.vue';

	// === PROPS AS MODEL ===
	const model = defineModel();

	// === COMPOSABLES & EMITS ===


	// === REF ===
	let newSectionId = ref(1);

	// === METHODS ===
	const handleAddSection = () => {
		newSectionId.value += 1;
		model.value.push({
			id: newSectionId.value,
			content: 'Section content #' + newSectionId.value
		});
	}

	const onSectionDrag = (id, content) => {
		console.log(id)
		console.log(content)
		//const section = model.value.find(b => b.id === id)
		//console.log(section);
		//if (section) section.content = content
	}

	onMounted(async () => {
		//console.log(model.value);
	});

</script>



<template>
	<h2>Sections</h2>

	<!-- Add Section -->
	<button @click="handleAddSection" class="no-mar">Add Section</button>

	<!-- Draggable list of sections, each in PageSection child -->
	<draggable :list="model" item-key="id" @change="onSectionDrag">
		<template #item="{ element }">
			<PageSection :section="element" />
		</template>
	</draggable>

</template>


