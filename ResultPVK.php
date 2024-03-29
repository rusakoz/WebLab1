<!doctype html>
<?php
include "path.php";
include "logic/Controllers/ExpertPVK.php";
include "logic/Include/SelectPVK.php";

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
<div id="main-pvk" class="main container-fluid">
    <!--<div class="main-content container">-->
    <div class="row">
        <form class="row justify-content-around" method="post" action="ResultPVK.php">
            <div>
                <h1> Оцените каждое ПВК по пятибальной шкале, где 1 - совсем не нужно, 5 - очень нужно </h1>
            </div>
            <?php func2(); ?>
            <?php if (!isset($_POST['button-pvk-result'])): ?>
            <div id="pvk-button" class="container-fluid col-md-3 offset-md-5">
                <button type="submit" class="btn btn-success" name="button-pvk-result">Отправить</button>
            </div>
            <?php else: ?>
                <div id="pvk-button2" class="container-fluid col-md-3 offset-md-5">
                    <button formaction="<?php echo BASE_URL . 'menu/main/expert.php'?>" type="submit" class="btn btn-success" name="button-pvk-redirect">Выйти</button>
                </div>
            <?php endif; ?>
        </form>
    </div>
    <!--</div>-->
</div>
<!--Main-->

<!--Footer-->
<?php include("logic/Include/Footer.php"); ?>
<!--Footer-->


</body>
</html>