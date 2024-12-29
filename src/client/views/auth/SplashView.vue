<script setup>
	import { ref } from 'vue';
	import { RouterView, useRoute, useRouter } from 'vue-router';
	import api from '@/util/api.js';

	import Form from '@/components/Form.vue';
	import LoginForm from '@/forms/loginForm.js';
	import RegistrationForm from '@/forms/registrationForm.js';
	import { clearFormErrors, displayFormErrors, gatherValidData } from '@/forms/util.js';
	import { loginValidator, registrationValidator } from '@/validators/authValidators.js';

	// Router 
	const router = useRouter();
	const route = useRoute();
	
	// Forms
	const loginForm = ref(LoginForm);
	const registrationForm = ref(RegistrationForm);

	// Login/Register switch button
	const showLogin = ref(true);
	const toggleShowLogin = () => {
		showLogin.value = !showLogin.value;
	};


	// Requests
	const loginRequest = async () => {
		const validationErrors = loginValidator(loginForm);
		if(validationErrors) displayFormErrors(loginForm, validationErrors);
		else{
			clearFormErrors(loginForm);
			const data = gatherValidData(loginForm.value.fields);
			try{
				const response = await api.post('/login', data);
				console.log(response.data);
				router.push({ name: 'topics' })
			} catch(error){
				console.log(error);
				console.log(error.response.data.message);
			}
		}
	};

	const registrationRequest = async () => {
		const registrationData = registrationValidator(registrationForm);
		try{
			const response = await api.post('/register', registrationData);
		} catch(error){
			console.log(error);
		} 
	};

</script>


<template>
	<div class="tall wide flex flex-col">
		
		<template v-if="showLogin">
			<h1>Login</h1>
			<form @submit.prevent="loginRequest">
				<Form :form="loginForm" />
			</form>
			<button @click="toggleShowLogin">Register</button>
		</template>

		<template v-else>
			<h1>Register</h1>
			<form @submit.prevent="registrationRequest">
				<Form :form="registrationForm" />
			</form>
			<button @click="toggleShowLogin">Login</button>
		</template>

	</div>
</template>

