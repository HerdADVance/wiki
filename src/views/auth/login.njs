{% extends "layout.njs" %}

{% block content %}
	<h1>Login</h1>
	<form method="POST" action="/login">
		<label>Username</label>
		<input name="username" type="text">
		
		<label>Password</label>
		<input name="password" type="password">
		
		<button type="submit">Login</button>
	</form>
{% endblock %}