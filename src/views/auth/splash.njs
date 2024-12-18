

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="/img/favicon.ico">
    <title>Pool Party</title>
    <link rel="stylesheet" href="/css/styles.css" />
</head>
<body class="splash-body">
    <div class="row" id="splash-container">

        <div id="summernote" style="height: 500px;"></div>

        <div class="col-md-4 no-pad d-flex align-items-center justify-content-center" id="splash-forms">
            <div class="container text-center">
                <h1>Pool Party</h1>
                <div class="auth-form" id="login-form">
                    <form method="POST" action="">

                        <label>Email:</label>
                        <input type="text" name="email" placeholder="Enter Email" />

                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Enter Password" />

                        <input type="hidden" name="form-type" value="login" />
                        <input type="submit" value="Login" />
                    </form>

                    <p>Haven't signed up?</p>
                    <button class="toggle-forms" id="register">Register</button>
                </div>

                <div class="auth-form" id="reg-form">
                    <form method="POST" action="">
                        <label>Email:</label>
                        <input type="text" name="email" placeholder="Enter Email" />

                        <label>Username</label>
                        <input type="text" name="usenrame" placeholder="Enter Email" />

                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Enter Password" />

                        <label>Password Confirm:</label>
                        <input type="password" name="password-confirm" placeholder="Enter Password" />

                        <input type="hidden" name="form-type" value="register" />
                        <input type="submit" value="Register" />
                    </form>

                    <p>Already signed up?</p>
                    <button class="toggle-forms" id="login">Login</button>
                </div>

                <button class=""><a href="/">View Available Contests</a></button>
            </div>
        </div>

        <div class="col-md-8 no-pad" id="splash-info">
            <p>Other column</p>
        </div>

    </div>

    <script>
        // $('.toggle-forms').click(function(){
        //     $('.auth-form').toggle()
        // })
        $(document).ready(function() {
          $('#summernote').summernote();
        });
    </script>
</body>

<html>