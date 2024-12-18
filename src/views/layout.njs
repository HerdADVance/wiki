<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Add meta tags here" />
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <title>Wiki | {{ title }}</title>
    <link rel="stylesheet" href="/css/style.css" />

    {% if hasEditor %}
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js"></script>
    {% endif %}
  
  </head>

  <body class="shadow">
    <header class="header" id="header">
      <div class="flex flex-spread">
        <h1 class="no-mar"><a href="/">DevPedia</a></h1>
        <nav class="nav">
          <ul>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/pages">Pages</a></li>
          </ul>
          {% if user %}
            <p>Welcome, <span>{{ user.username }}</span></p>
            <form method="POST" action="/logout"><button type="submit">Logout</button></form>
          {% else %}
            <ul>
              <li><a href="/register">Register</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          {% endif %}
        </nav>
      </div>
    </header>

    <main>
      <div class="con tall">
        {% block content %}{% endblock %}
      </div>
    </main>

    <footer class="footer">
      <p>Footer stuff</p>
    </footer>
  
  <script>
  </script>

  </body>
</html>
