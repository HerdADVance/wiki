{% extends "layout.njs" %}

{% block content %}
	<div id="switchable">
		<h1 id="page-title">{{ page.title }}</h1>
		<input type="text" id="page-title-text" style="display:none;">
		<button id="page-title-text-save" style="display: none;">Save</button>
	</div>
	<span>Double click to edit</span>
	<p>{{ page.intro }}</p>

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

	<script>
		const element = document.getElementById('switchable');
		element.addEventListener('dblclick', function() {
		    $('#page-title').toggle();
		    $('#page-title-text').toggle();
		    $('#page-title-text').val($('#page-title').text());
		    $('#page-title-text-save').toggle();
		});
	</script>
{% endblock %}