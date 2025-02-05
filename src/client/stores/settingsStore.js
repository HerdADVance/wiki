
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSettingsStore = defineStore('settings', () => {
	
	const editMode = ref(true);

	function toggleEditMode() {
		editMode.value = !editMode.value;
	}

	return { editMode, toggleEditMode }

});