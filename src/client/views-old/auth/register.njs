{% extends "layout.njs" %}

{% block content %}
	<h1>Register</h1>
	<form id="reg-form">
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

	<script>
		async function submitRegistrationForm(form){
			const formData = new FormData(form);
			const userData = Object.fromEntries(formData.entries());

			const response = await fetch('/register', {
		      method: 'POST',
		      headers: { 'Content-Type': 'application/json' },
		      body: JSON.stringify(userData)
		    });

		    const errorData = await response.json();
		    console.log(errorData.details);
		}

		const form = document.querySelector('#reg-form');
		form.addEventListener('submit', function(event) {
		  event.preventDefault();
		  submitRegistrationForm(form);
		});

	    
	</script>
{% endblock %}