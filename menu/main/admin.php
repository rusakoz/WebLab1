<!doctype html>
<?php
include("../../path.php");
include "../../logic/DB/database.php";
?>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="../../assets/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/f8998f952b.js" crossorigin="anonymous"></script>
    <script type="text/javascript" defer crossorigin="anonymous">
        var idSession = <?php echo json_encode($_SESSION['id']); ?>;
    </script>
    <script src="../../logic/Include/lock/getResultsInfo.js" defer crossorigin="anonymous"> </script>
    <script src="../scripts/test.js" defer crossorigin="anonymous"> </script> <!-- defer - запуск скрипта после загрузки html страницы -->
    <script src="../scripts/test2.js" defer crossorigin="anonymous"> </script>
</head>
<body>

<!--Header-->
<?php include("../../logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main-admin" class="main container-fluid">
    <div id="admin-button" class="main-content container">
        <div id="main-row" class="row">
            <div id="main-col" class="main about col">

                <button class="c-button" id="buttonOne" type="submit"> Установить срезы по тестам</button>

                <button class="c-button" id="buttonTwo" type="submit"> Установить баллы тестов</button>

                <!--<button class="c-button" id="buttonThree" type="submit"> </button>
                <button class="c-button" id="buttonFour" type="submit"> /button>
                <button class="c-button" id="buttonFive" type="submit"> </button>
                <button class="c-button" id="buttonSix" type="submit"> </button>-->


            </div>
        </div>
    </div>
</div>
<!--Main-->

<!--Footer-->
<?php include("../../logic/Include/Footer.php"); ?>
<!--Footer-->


</body>
</html>