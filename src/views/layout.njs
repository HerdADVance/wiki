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
      <div class="flex flex-spread">
        <h1 class="no-mar"><a href="/">DevPedia</a></h1>
        <nav class="nav">
          <ul>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/topics">Topics</a></li>
            <li><a href="/pages">Pages</a></li>
          </ul>
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
