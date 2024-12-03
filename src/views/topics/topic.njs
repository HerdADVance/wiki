{% extends "layout.njs" %}

{% block content %}
	<h1>{{ topic.title }}</h1>

	<h2>Update Topic</h2>
	<form action="/topics/update/{{ topic.id }}" method="POST">
		<input type="text" name="title" value="{{ topic.title }}">
		<button type="submit">Update Topic</button>
	</form>

{% endblock %}