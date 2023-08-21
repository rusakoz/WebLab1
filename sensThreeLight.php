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
    <script src="logic/Include/sensThreeLight.js" defer> </script> <!-- defer - запуск скрипта после загрузки html страницы -->
</head>
<body>

<!--Header-->
<?php include("logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-expert" class="main container-fluid">
    <div id="expert-button" class="main-content container">
        <div class="row">
            <div class="main about col" style="cursor: pointer;">

                <div id='sens' class='container-fluid col-md-3 offset-md-5'>
                    <button id="sensThreeLight" type='submit' class='btn btn-success' name='sensLight' style="background: black; height: 70px; width: 70px; border-radius: 60px;"></button>
                </div>

                <div id='sens2' class='container-fluid col-md-3 offset-md-5'>
                    <button id="sensThreeLight2" type='submit' class='btn btn-success' name='sensLight' style="background: black; height: 70px; width: 70px; border-radius: 60px; margin-top: 5px"></button>
                </div>

                <div id='sens3' class='container-fluid col-md-3 offset-md-5'>
                    <button id="sensThreeLight3" type='submit' class='btn btn-success' name='sensLight' style="background: black; height: 70px; width: 70px; border-radius: 60px; margin-top: 5px"></button>
                </div>

                <div id="sens4" class="container-fluid col-md-3 offset-md-5" style="margin-top: 5px">
                    <button id="sensThreeLight5" type='submit' class='btn btn-success' name='sensLight' style="background: black; height: 80px; width: 80px; color: #ded5d5; margin-top: 5px">Начать</button>
                </div>

<!--                <div id="sens4" class="container-fluid col-md-3 offset-md-5" style="margin-top: 5px">-->
<!--                    <button id="sensThreeLight4" type='submit' class='btn btn-success' name='sensLight' style="background: black; height: 80px; width: 80px; color: #ded5d5; margin-top: 5px">Выход</button>-->
<!--                </div>-->

                <div class="results container-fluid col-md-3 offset-md-5" style="margin-top: 5px">
                    <h3> </h3>
                    <span></span>
                    <p>Для прохождение теста используйте клавиши Z для КРАСНОГО, C для ЗЕЛЁНОГО, X для ЖЁЛТОГО</p>
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