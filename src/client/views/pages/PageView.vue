<script setup>
	// const newTopic = ref(null);
	// const topicsTest = async () => {
	// 	try{
	// 		const response = await api.post('topics/create', {title: newTopic.value});
	// 		console.log(response);
	// 	} catch(error){
	// 		console.log(error);
	// 	}
	// };

// const editorOneId = 'my-editor';
	// const editorTwoId = 'editor-2';
	// const { editor: editor1 } = useEditor(editorOneId);
	// const { editor: editor2 } = useEditor(editorTwoId);

	import { onMounted, onUnmounted, reactive, ref } from 'vue';
	import draggable from 'vue3-draggable-next';
	import { useRoute, useRouter } from 'vue-router';
	import api from '@/util/api.js';
	import { useEditor } from '@/composables/useEditor.js';
	import SearchInput from '@/components/SearchInput.vue';
	
	const router = useRouter();
	const route = useRoute();

	let page = reactive({
		title: null,
		sections: [],
	});
	let newSectionId = ref(1);

	onMounted(async () => {
		try{
			const pageId = route.params.id;
			const response = await api.get('pages/' + pageId);
			Object.assign(page, response.data.page);
			//page.value = response.data.page
		} catch(error){
			console.log(error)
			console.log(error.response.data.message);
		}
	});

	const handleAddSection = () => {
		newSectionId.value += 1;
		page.sections.push({
			id: newSectionId.value,
			content: 'Section content #' + newSectionId.value
		});
	}


	const onSectionDrag = (id, content) => {
		const section = page.sections.find(b => b.id === id)
		if (section) section.content = content
	}
	
</script>


<template>
	<!-- Page Title -->
	<h1> {{ page.title }}</h1>
	
	<!-- Search Input -->
	<h2 style="margin-top: 20px;">Topics</h2>
	<SearchInput 
		:limit=5
		requestName="TopicsSearch"
		requestUrl="topics/search"
	/>

	<h2 style="margin-top: 40px;">Page Types</h2>
	<select>
		<option></option>
	</select>

	<h2 style="margin-top: 20px;">Sections</h2>
	<button @click="handleAddSection" class="no-mar">Add Section</button>

	<draggable v-model="page.sections" item-key="id" @change="onSectionDrag">
		<template #item="{ element }">
			<section style="padding: 20px 0; font-size: 1.5rem; border: 1px solid #DDD; cursor: pointer;">
				{{ element.content }}
			</section>
		</template>
	</draggable>

	<!-- <h1>Node ORM's</h1>
	<p class="lar">There are several Node Object-Relational Mappers that can be used to connect your database with your backend logic. The most common of these is Sequelize, but other ones like Prisma, Drizzle, TypeORM, and Knex can also be useful choices based on the requirements of your project.</p>

	<h2>Sequelize</h2>
	<p>The most common of the bunch, it is the standard choice for out of the box object-relational mapping.</p>

	<div :id="editorOneId"></div>
	<div :id="editorTwoId"></div> -->

</template>


