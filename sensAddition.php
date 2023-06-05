<!doctype html>
<?php
include "path.php";
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
    <script src="logic/Include/sensAddition.js" defer> </script> <!-- defer - запуск скрипта после загрузки html страницы -->
</head>
<body>

<!--Header-->
<?php include("logic/Include/Header.php"); ?>
<!--Header-->

<audio autoplay>
    <source src="" type="audio/mpeg">
</audio>
<!--Main-->
<div id="main-expert" class="main container-fluid">
    <div id="expert-button" class="main-content container">
        <div class="row">
            <div class="main about col" style="cursor: pointer;">

                <div id='sensHardSound' class='container-fluid col-md-3 offset-md-5'>
                    <p>Когда будете готовы, нажмите на панель. <br>Вы услышите два числа, сложите их в уме и введите ответ внутрь поля, нажмите Enter.</p>
                    <input id="even" type="button" value="ЧЁТ" hidden> <input id="odd" type="button" value="НЕЧЁТ" hidden>
                    <button>START</button>
                    <p class="randomNums">...</p>
                    <div class="results col-md-3 offset-md-5">
                        <p>Ожидание</p>
                    </div>
                    <div class="time col-md-3 offset-md-5">
                        <p>00.000</p>
                    </div>
                </div>

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