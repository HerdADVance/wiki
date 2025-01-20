<script setup>
	import { onMounted, onUnmounted, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import Form from '@/components/forms/Form.vue';
	import CreatePageForm from '@/forms/createPageForm.js';
	import api from '@/util/api.js';
	import { clearFormErrors, displayFormErrors, gatherValidData } from '@/forms/util.js';
	import { createPageValidator } from '@/validators/pagesValidators.js';

	const route = useRoute();
	const router = useRouter();

	const createPageForm = ref(CreatePageForm);

	const createPageRequest = async () => {
		clearFormErrors(createPageForm);
		const validationErrors = createPageValidator(createPageForm);
		if(validationErrors) displayFormErrors(createPageForm, validationErrors);
		else{
			const data = gatherValidData(createPageForm.value.fields);
			try{
				const response = await api.post('pages/create', data);
				const newPageId = response.data.newPageId;
				console.log(newPageId);
				router.push({ name: 'Page', params: {id: newPageId} })
			} catch(error){
				console.log(error)
				console.log(error.response.data.message);
			}
		}
	};

</script>


<template>

	<h1>Create Page</h1>
	<form @submit.prevent="createPageRequest" class="">
		<Form :form="createPageForm" :showLabel="false" />
	</form>

</template>


