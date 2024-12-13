{% extends "layout.njs" %}

{% block content %}
	<h1>Login</h1>
	<form action="/login" method="POST" id="login-form">
		<label>Username</label>
		<input name="username" type="text">
		
		<label>Password</label>
		<input name="password" type="password">
		
		<button type="submit">Login</button>
	</form>

	<script>
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

	    
	</script>

{% endblock %}