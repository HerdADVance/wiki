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
		clearFormErrors(loginForm);
		const validationErrors = loginValidator(loginForm);
		if(validationErrors) displayFormErrors(loginForm, validationErrors);
		else{
			const data = gatherValidData(loginForm.value.fields);
			try{
				console.log(data);
				const response = await api.post('login', data);
				console.log(response.data);
				router.push({ name: 'topics' })
			} catch(error){
				console.log(error.response.data.message);
			}
		}
	};

	const registrationRequest = async () => {
		const registrationData = registrationValidator(registrationForm);
		try{
			const response = await api.post('register', registrationData);
		} catch(error){
			console.log(error);
		} 
	};

</script>


<template>
	<div class="row tall full">
		
		<div class="col-8 splash-image img-bg rel">
			<div class="overlay open">
				<p class="bold">Save all of the knowledge you never want to forget in one easily accessible place</p>
			</div>
		</div>
		
		<div class="col-4 splash-auth flex flex-center flex-col">
			<div>
				<img src="/assets/img/logo2.png" alt="Devpedia logo">
				<template v-if="showLogin">
					<form @submit.prevent="loginRequest" class="form-auth">
						<Form :form="loginForm" :showLabel="false" />
					</form>
					<p class="center no-mar"><a @click="toggleShowLogin">Don't have an account? Register</a></p>

				</template>

				<template v-else>
					<form @submit.prevent="registrationRequest" class="form-auth">
						<Form :form="registrationForm" :showLabel="false" />
					</form>
					<p class="center no-mar"><a @click="toggleShowLogin">Already have an account? Login</a></p>
				</template>
			</div>
		</div>

	</div>	
</template>

