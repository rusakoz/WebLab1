<!doctype html>
<?php
include("../path.php");
include "../logic/DB/database.php";
?>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f8998f952b.js" crossorigin="anonymous"></script>
    <script src="FirstTest.js" defer crossorigin="anonymous"> </script> <!-- defer - запуск скрипта после загрузки html страницы -->
</head>
<body>

<!--Header-->
<?php include("../logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-expert" class="main container-fluid">
    <div id="expert-button" class="main-content container">
        <div class="row" id="super">
            <!--<canvas id="game" width="600" height="600">-->
            <div class="col">
                <h3 id="textTimer"></h3>
            </div>
            <div class="col">
                <form name="form1">
                    <h4>В данном тесте вам необходимо нажимать "ПРОБЕЛ", когда движущийся кружок будет попадать в зеленую и желтые зоны</h4>
                    <select class="form-select" aria-label="Пример выбора по умолчанию" id="timer">
                        <option disabled>Время прохождения теста</option>
                        <option value="10">10сек</option>
                        <option value="60">1 минута</option>
                        <option value="180">3 минуты</option>
                    </select>
                    <button type="submit" class="btn btn-secondary" name="button-lab3-start" style="margin-top: 150px; margin-left: 50px"> Начать тестирование</button>
                </form>
            </div>
            <div class="col">
            </div>
            <!--</canvas>-->
        </div>
    </div>
</div>
<!--Main-->

<!--Footer-->
<?php include("../logic/Include/Footer.php"); ?>
<!--Footer-->


</body>
</html>
