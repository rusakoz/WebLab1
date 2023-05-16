<!doctype html>
<?php
include "path.php";
include "logic/Controllers/users.php";
?>

<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="assets/main.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/f8998f952b.js" crossorigin="anonymous"></script>
</head>
<body>

<!--Header-->
<?php include("logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div class="container-fluid reg_form">
  <form class="row justify-content-center" method="post" action="Registerration.php">
    <h2 class="col-12"> Регистрация</h2>
    <div class="mb-3 col-12 col-md-4 error">
        <p><?php echo $outErr; ?></p>
    </div>
    <div class="w-100"></div>
    <div class="mb-3 col-12 col-md-4">
      <label for="formGroupExampleInput" class="form-label">Логин</label>
      <input name="login" value="<?php echo $login; ?>" type="text" class="form-control" id="formGroupExampleInput" placeholder="Введите ваш логин">
    </div>
    <div class="w-100"></div>
    <div class="mb-3 col-12 col-md-4">
      <label for="exampleInputEmail1" class="form-label">Адресс электронной почты</label>
      <input name="email" value="<?php echo $email; ?>" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваш email">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="w-100"></div>
    <div class="mb-3 col-12 col-md-4">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input name="firstPass" type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите пароль">
    </div>
    <div class="w-100"></div>
    <div class="mb-3 col-12 col-md-4">
      <label for="exampleInputPassword2" class="form-label">Пароль</label>
      <input name="secondPass" type="password" class="form-control" id="exampleInputPassword2" placeholder="Повторите пароль">
    </div>
    <div class="w-100"></div>
    <div class="mb-3 col-12 col-md-4">
      <button type="submit" class="btn btn-secondary" name="button-registration">Зарегистрироваться</button>
      <a href="authorize.php">Авторизоваться</a>
    </div>
  </form>
</div>
<!--Main-->

<!--Footer-->
<?php include("logic/Include/Footer.php"); ?>
<!--Footer-->


</body>
</html>