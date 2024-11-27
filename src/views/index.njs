<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Wiki | {{ title }}</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Add meta tags here" />
    <link rel="stylesheet" href="/css/style.css" />
    <!--link rel="icon" type="image/x-icon" href="/images/favicon.png"-->
  </head>

  <body class="shadow">
    <header class="header" id="header">
      <h1>Site Title</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/topics">Topics</a></li>
          <li><a href="/pages">Pages</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="con">
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
