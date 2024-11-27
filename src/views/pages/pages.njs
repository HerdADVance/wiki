{% extends "index.njs" %}

{% block content %}
	<h1>All Pages</h1>
	{% for page in pages %}
		<p><a href="/pages/{{ page.id }}">{{ page.title }}</a></p>
	{% endfor %}
	
	<h2>Create New Page</h2>
	<form action="/pages/create" method="POST">
		<input placeholder="Page Title" type="text" name="title">
		<input placeholder="Page Intro" type="text" name="intro">
		<button type="submit">Create page</button>
	</form>
{% endblock %}