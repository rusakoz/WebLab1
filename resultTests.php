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
    <script src="logic/Include/lock/getResultsInfo.js" crossorigin="anonymous" defer></script>
    <script src="logic/Include/resultFromTests.js" crossorigin="anonymous" defer></script>
    <script type="text/javascript" defer crossorigin="anonymous">
        var idSession = <?php echo json_encode($_SESSION['id']); ?>;
    </script>
<!--    <script src="logic/Include/resultTests.js" defer> </script> defer - запуск скрипта после загрузки html страницы -->
</head>
<body>

<!--Header-->
<?php include("logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-result" class="main container-fluid">
    <div id="result-button" class="main-content container">
        <div class="row">
            <div id="main-row" class="main-cols about col">

<!--                    <li id="li1"><a href="PVKtest.php"> Результаты ПВК</a></li>-->
                    <button class="c-button" id="button1"> Результаты теста на звук</button>
                    <button class="c-button" id="button2"> Результаты теста на свет</button>
                    <button class="c-button" id="button3"> Результаты теста на 3 цвета</button>
                    <button class="c-button" id="button4"> Результаты теста на сложение в уме по звуку</button>
                    <button class="c-button" id="button5"> Результаты теста на сложение в уме визуально</button>
                    <button class="c-button" id="button6"> Результаты теста 3-й лабы легкий</button>
                    <button class="c-button" id="button7"> Результаты теста 3-й лабы сложный</button>
                    <button class="c-button" id="button8"> Результаты теста на слежение</button>
                    <button class="c-button" id="button9"> Результаты теста на преследование</button>
                    <button class="c-button" id="button10"> Результаты теста на внимание</button>
                    <button class="c-button" id="button11"> Результаты теста на память</button>
                    <button class="c-button" id="button12"> Результаты теста на мышление</button>

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