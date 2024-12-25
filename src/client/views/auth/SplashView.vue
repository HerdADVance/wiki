<script setup>
	import axios from 'axios';
	axios.defaults.withCredentials = true;
	    
	const login = async () => {
	  console.log('sending login to axios');
      try {
        const response = await axios.post('http://localhost:8000/login', {
          username: 'jjjjj',
          password: 'alexvance',
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

	const register = async () => {
      try {
        const response = await axios.post('/api/login', {
          username: this.username,
          password: this.password,
        });
        console.log(response.data.message);
      } catch (error) {
        console.error(error.response.data.message);
      }
    };

</script>

<template>
	<div class="tall wide flex flex-col">
		
		<h1>Login</h1>
		<form @submit.prevent="login" id="login-form">
			<label>Usernameeee</label>
			<input name="username" type="text">
			
			<label>Passwordddd</label>
			<input name="password" type="password">
			
			<button type="submit">Login</button>

			<p>loginError</p>
		</form>

		<h1>Register</h1>
		<form @submit.prevent="register" id="reg-form">
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

	<!--script>
		// async function submitLoginForm(form){
		// 	const formData = new FormData(form);
		// 	const userData = Object.fromEntries(formData.entries());

		// 	const response = await fetch('/login', {
		//       method: 'POST',
		//       headers: { 'Content-Type': 'application/json' },
		//       body: JSON.stringify(userData)
		//     });

		//     const result = await response.json();
		//     console.log(result);
		// }

		// const form = document.querySelector('#login-form');
		// form.addEventListener('submit', function(event) {
		//   event.preventDefault();
		//   submitLoginForm(form);
		// });

		// =====================

		// async function submitRegistrationForm(form){
		// 	const formData = new FormData(form);
		// 	const userData = Object.fromEntries(formData.entries());

		// 	const response = await fetch('/register', {
		//       method: 'POST',
		//       headers: { 'Content-Type': 'application/json' },
		//       body: JSON.stringify(userData)
		//     });

		//     const errorData = await response.json();
		//     console.log(errorData.details);
		// }

		// const form = document.querySelector('#reg-form');
		// form.addEventListener('submit', function(event) {
		//   event.preventDefault();
		//   submitRegistrationForm(form);
		// });

	    
	</script-->
</template>