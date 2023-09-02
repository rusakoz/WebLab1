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
</head>
<body>

<!--Header-->
<?php include("../../logic/Include/Header.php"); ?>
<!--Header-->

<!--Main-->
<div id="main" class="main container-fluid">
    <div class="main-content container">
        <div id="main-row" class="row">
            <div id="main-col" class="main about col">

                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            Колонка
                        </div>
                        <div id="test" class="col">
                            Колонка
                        </div>
                        <div class="col">
                            Колонка
                        </div>
                    </div>
                </div>


                <h1> Админ логика</h1>

                <div class="mb-3">

                    <h4 class="getInfo">3313123123</h4>
                </div>
                <div class="mb-3">
                    <label for="customRange3" class="form-label getInfo">Пример диапазона</label>
                    <input type="range" class="form-range getInfo" min="0" max="100" step="10" id="customRange3">

                </div>
                <div class="mb-3 form-check">

                    <h4 class="getInfo">ghfsdgjhgh</h4>
                </div>
                <button type="submit" class="btn btn-primary">Отправить</button>
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