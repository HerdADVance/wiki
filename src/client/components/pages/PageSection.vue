<script setup>

	// === IMPORTS ===
	import { defineModel, onMounted, ref } from 'vue';
	import draggable from 'vue3-draggable-next';

	// === COMPONENTS ===
	import PageSectionBlock from '@/components/pages/PageSectionBlock.vue';

	// === PROPS ===
	const props = defineProps({
		section: Object,
	})

	// === COMPOSABLES & EMITS ===
	// const editorOneId = 'my-editor';
	// const editorTwoId = 'editor-2';
	// const { editor: editor1 } = useEditor(editorOneId);
	// const { editor: editor2 } = useEditor(editorTwoId);


	// === REF ===
	//let newSectionId = ref(1);

	// === METHODS ===
	const onBlockDrag = (id, content) => {
		// console.log(id);
		// console.log(content);
		// if (block) block.content = content;
		// const block = props.section.blocks.find(b => b.id === id);
	}

	onMounted(async () => {
		//console.log(props.section.blocks);
	});

</script>


<template>
	<section style="padding: 1rem; border: 1px solid #DDD">
		<h3>{{ section.title }}</h3>
		<input type="text" v-model="section.title">

		<!-- Draggable list of blocks as PageSectionBlock child -->
		<draggable v-model="section.blocks" group="children" item-key="id" :group="{ name: `child-${element.id}`, pull: false, put: false }">
			<template #item="{ element }">
				<PageSectionBlock :block="element" />
			</template>
		</draggable>
	</section>
</template>


