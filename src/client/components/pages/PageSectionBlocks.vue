<script setup>

	// === IMPORTS ===
	import { defineModel, onMounted, ref } from 'vue';
	import { useEditor } from '@/composables/useEditor.js';

	// === COMPONENTS ===
	//import Section from '@/components/pages/PageSectionBlock.vue';

	// === PROPS ===
	const props = defineProps({
		item: Object,
	})

	// === COMPOSABLES & EMITS ===
	// const editorOneId = 'my-editor';
	// const editorTwoId = 'editor-2';
	// const { editor: editor1 } = useEditor(editorOneId);
	// const { editor: editor2 } = useEditor(editorTwoId);


	// === REF ===
	//let newSectionId = ref(1);

	// === METHODS ===
	// const onSectionDrag = (id, content) => {
	// 	const section = model.value.find(b => b.id === id)
	// 	if (section) section.content = content
	// }

	onMounted(async () => {
		console.log(props.item);
	});

</script>


<template>
	<!-- Draggable list of sections, each in PageSection child -->
	<draggable :list="model" item-key="id" @change="onSectionDrag">
		<template #item="{ element }">
			<PageSection :item="element" />
		</template>
	</draggable>
</template>


