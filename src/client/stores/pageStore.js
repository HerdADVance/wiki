
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePageStore = defineStore('page', () => {
	
	const page = ref({});

	const setPage = () => {

	}

	return { page }

});