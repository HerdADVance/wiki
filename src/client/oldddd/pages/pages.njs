{% extends "layout.njs" %}

{% block content %}
	<h1>All Pages</h1>
	<table>
	{% for page in pages %}
		<tr>
			<td>{{ page.title }}</td>
			<td><a href="/pages/{{ page.id }}">Edit/View</a></td>
			<td>
				<form action="/pages/delete/{{ page.id }}" method="POST">
					<button type="submit">Delete</button>
				</form>
			</td>
		</tr>
	{% endfor %}
	</table>
	
	<h2>Create New Page</h2>
	<form action="/pages/create" method="POST">
		<input placeholder="Page Title" type="text" name="title">
		<input placeholder="Page Intro" type="text" name="intro">
		<select name="topic">
			{% for topic in topics %}
				<option value="{{ topic.id }}">{{ topic.title }}</option>
			{% endfor %}
		</select>
		<button type="submit">Create page</button>
	</form>
{% endblock %}