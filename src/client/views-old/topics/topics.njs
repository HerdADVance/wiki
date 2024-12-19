{% extends "layout.njs" %}

{% block content %}
	<h1>All Topics</h1>

	<table>
	{% for topic in topics %}
		<tr>
			<td>{{ topic.title }}</td>
			<td><a href="/topics/{{ topic.id }}">Edit/View</a></td>
			<td>
				<form action="/topics/delete/{{ topic.id }}" method="POST">
					<button type="submit">Delete</button>
				</form>
			</td>
		</tr>
	{% endfor %}
	</table>

	<h2>Create New Topic</h2>
	<form action="/topics/create" method="POST">
		<input placeholder="Topic Title" type="text" name="title">
		<button type="submit">Create Topic</button>
	</form>
{% endblock %}