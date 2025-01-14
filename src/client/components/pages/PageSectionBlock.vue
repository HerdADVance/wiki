<script setup>

	// === IMPORTS ===
	import { defineModel, onMounted, ref } from 'vue';
	import { useEditor } from '@/composables/useEditor.js';

	// === COMPONENTS ===
	//import Section from '@/components/pages/PageSectionBlock.vue';

	// === PROPS ===
	const props = defineProps({
		block: Object,
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
		//console.log(props.block);
	});

</script>


<template>
	<h4 style="border: 1px solid green; padding: 0.25rem;">{{ block.content }}</h4>
</template>


