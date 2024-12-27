<script setup>
	import { ref } from 'vue';
	import axios from 'axios';
	axios.defaults.withCredentials = true;
	import { loginValidator, registrationValidator } from '@/validators/authValidators.js'
	import loginForm from '@/forms/loginForm.js'
	import Form from '@/components/Form.vue';
	

	const login = ref(loginForm);


	const loginRequest = async () => {

	  const field = login.value.fields.find(field => field.name === 'Username');
	  field.value = 'Yooosername'


	  //const formData = new FormData(loginForm.value);
	  //const validatedData = loginValidator(formData, loginFormInfo.value.fields);

     
      //console.log(validatedLogin);
      
      // try {
      //   const response = await axios.post('http://localhost:8000/login', {
      //     username: 'jjjjj',
      //     password: 'alexvance',
      //   });
      //   console.log(response.data);
      // } catch (error) {
      //   console.error(error.response.data);
      // }
    };

    const regForm = ref(null);
	const register = async () => {

	  const validated = registrationValidator(data);
      console.log(validated);

      // try {
      //   const response = await axios.post('/api/login', {
      //     username: this.username,
      //     password: this.password,
      //   });
      //   console.log(response.data.message);
      // } catch (error) {
      //   console.error(error.response.data.message);
      // }
    };

</script>

<template>
	<div class="tall wide flex flex-col">
		
		<h1>Login</h1>

		<form @submit.prevent="loginRequest">
			<Form :form="login" />
		</form>

		<h1>Register</h1>
		<form ref="regForm" @submit.prevent="register">
			<label>Email</label>
			<input name="email" type="text">
			
			<label>Username</label>
			<input name="username" type="text">
			
			<label>Password</label>
			<input name="password" type="password">

			<label>Confirm Password</label>
			<input name="passwordConfirm" type="password">
			
			<button type="submit">Register</button>
		</form>

	</div>

</template>