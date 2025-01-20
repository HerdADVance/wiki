
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { useApi } from '@/composables/useApi.js';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {

	// === COMPOSABLES ===
	const { apiCall, apiLoading, apiData, apiError } = useApi();
	const router = useRouter();
	
	// === REF/REACTIVE === 
	let user = ref(null);

	// === METHODS ====
	const login = async (reqData) => {
		await apiCall('post', 'login', reqData);
		setUser(apiData.value.user);
		router.push({ name: 'dashboard' });
	};

	const logout = async () => {
		await apiCall('post', 'logout');
		user.value = null;
		router.push({ name: 'splash' });
	};

	const register = async (reqData) => {
		await apiCall('post', 'register', reqData);	
		//router.push({ name: 'dashboard' });
	};

	const setUser = (userData) => {
		console.log(userData);
		user.value = userData;
	};
	
	const validateUser = async () => {
		await apiCall('get', 'validate-user');
		console.log(apiData.value);
		const userData = apiData.value.user;
		if (userData) setUser(userData);
	};

	// === RETURN ===
	return { login, logout, register, user, validateUser }

});