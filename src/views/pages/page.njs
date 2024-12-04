{% extends "layout.njs" %}

{% block content %}
	<h1>{{ page.title }}</h1>
	<p>{{ page.intro }}</p>
	<p>{{ page.topic.id }}</p>

	<h1>Update Page</h1>
	<form action="/pages/update/{{ page.id }}" method="POST">
		<input type="text" name="title" value="{{ page.title }}">
		<input type="text" name="intro" value="{{ page.intro }}">

		<select name="topic">
			<option value="0" selected disabled>Select a Topic</option>
			{% for topic in topics %}
				{% if topic.id == page.topic.id %}
					<option selected value="{{ topic.id }}">{{ topic.title }}</option>
				{% else %}
					<option value="{{ topic.id }}">{{ topic.title }}</option>
				{% endif %}
			{% endfor %}
		</select>

		<button type="submit">Update page</button>
	</form>
{% endblock %}