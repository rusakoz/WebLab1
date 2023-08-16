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
    <script src="attentive.js" defer> </script> <!-- defer - запуск скрипта после загрузки html страницы -->
</head>
<body>

<!--Header-->
<?php include("../logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-expert" class="main container-fluid" style="width:700px;margin:0px auto;background: #fff; padding-top: 5px;">
    <div id="expert-button" class="main-content container">
        <div class="row" id="super">
            <div class="cell" val="1">1</div>
            <div class="cell" val="2">2</div>
            <div class="cell" val="3">3</div>
            <div class="cell" val="4">4</div>
            <div class="cell" val="5">5</div>
            <div class="cell" val="6">6</div>
            <div class="cell" val="7">7</div>
            <div class="cell" val="8">8</div>
            <div class="cell" val="9">9</div>
            <div class="cell" val="10">10</div>
            <div class="cell" val="11">11</div>
            <div class="cell" val="12">12</div>
            <div class="cell" val="13">13</div>
            <div class="cell" val="14">14</div>
            <div class="cell" val="15">15</div>
            <div class="cell" val="16">16</div>
            <div class="cell" val="17">17</div>
            <div class="cell" val="18">18</div>
            <div class="cell" val="19">19</div>
            <div class="cell" val="20">20</div>
            <div class="cell" val="21">21</div>
            <div class="cell" val="22">22</div>
            <div class="cell" val="23">23</div>
            <div class="cell" val="24">24</div>
            <div class="cell" val="25">25</div>
            <div class="cell" val="1" style="color: red">1</div>
            <div class="cell" val="2" style="color: red">2</div>
            <div class="cell" val="3" style="color: red">3</div>
            <div class="cell" val="4" style="color: red">4</div>
            <div class="cell" val="5" style="color: red">5</div>
            <div class="cell" val="6" style="color: red">6</div>
            <div class="cell" val="7" style="color: red">7</div>
            <div class="cell" val="8" style="color: red">8</div>
            <div class="cell" val="9" style="color: red">9</div>
            <div class="cell" val="10" style="color: red">10</div>
            <div class="cell" val="11" style="color: red">11</div>
            <div class="cell" val="12" style="color: red">12</div>
            <div class="cell" val="13" style="color: red">13</div>
            <div class="cell" val="14" style="color: red">14</div>
            <div class="cell" val="15" style="color: red">15</div>
            <div class="cell" val="16" style="color: red">16</div>
            <div class="cell" val="17" style="color: red">17</div>
            <div class="cell" val="18" style="color: red">18</div>
            <div class="cell" val="19" style="color: red">19</div>
            <div class="cell" val="20" style="color: red">20</div>
            <div class="cell" val="21" style="color: red">21</div>
            <div class="cell" val="22" style="color: red">22</div>
            <div class="cell" val="23" style="color: red">23</div>
            <div class="cell" val="24" style="color: red">24</div>

            <h4>Суть данного теста заключается в том, чтобы сначала выбирать по порядку от 1 до 25 черные числа, а затем от 1 до 24 красные</h4>
            <h3>Результаты теста можно посмотреть в Личном кабинете</h3>
            <!--<canvas id="game" width="600" height="600">-->
            <div class="col">
                <h3 id="textTimer"></h3>
            </div>
            <div class="col">

                <button type="submit" class="btn btn-secondary" name="button-lab5-start" style="margin-top: 30px; margin-left: 50px; margin-bottom: 15px"> Начать тестирование</button>

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
