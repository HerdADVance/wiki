{% extends "layout.njs" %}

{% block content %}
	<h1>Register</h1>
	<form method="POST" action="/register">
		<label>Email</label>
		<input name="email" type="text">
		
		<label>Username</label>
		<input name="username" type="text">
		
		<label>Password</label>
		<input name="password" type="password">

		<!--label>Confirm Password</label>
		<input name="password-confirm" type="password"-->
		
		<button type="submit">Register</button>
	</form>
{% endblock %}