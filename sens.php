<!doctype html>
<?php
include("path.php");
include "logic/DB/database.php";
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
    <!--START LOCK logic-->
    <script src="logic/Include/lock/getResultsInfo.js" defer crossorigin="anonymous"></script>
    <script src="logic/Include/lock/LOCK-Test.js" defer crossorigin="anonymous"></script>
    <script src="menu/lock/LOCK-lab2.js" defer crossorigin="anonymous"></script>
    <script type="text/javascript" defer crossorigin="anonymous">
        var idSession = <?php echo json_encode($_SESSION['id']); ?>;
    </script>
    <!--END LOCK logic-->
</head>
<body>

<!--Header-->
<?php include("logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-expert" class="main container-fluid">
    <div id="expert-button" class="main-content container">
        <div class="row">
            <div class="main about col">
                <h4>ВНИМАНИЕ! Кол-во попыток тестов - 3</h4>
                <ul>
                    <li><a id="sensLight" href="<?php echo BASE_URL . 'sensLight.php'?>">Тест на свет</a></li>
                    <li><a id="sensSound" href="<?php echo BASE_URL . 'sensSound.php'?>">Тест на звук</a></li>
                    <li><a id="sensThreeLight" href="<?php echo BASE_URL . 'sensThreeLight.php'?>">Тест на 3 цвета</a></li>
                    <li><a id="sensHardSound" href="<?php echo BASE_URL . 'sensHardSound.php'?>">Тест на сложение в уме по звуку</a></li>
                    <li><a id="sensAddition" href="<?php echo BASE_URL . 'sensAddition.php'?>">Тест на сложение в уме визуально</a></li>
                </ul>
            </div>

        </div>
    </div>
</div>
<!--Main-->

<!--Footer-->
<?php include("logic/Include/Footer.php"); ?>
<!--Footer-->


</body>
</html>