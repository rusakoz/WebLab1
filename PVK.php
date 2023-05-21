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
            <form class="row justify-content-around" method="post" action="PVK.php">
                <div>
                    <h1> Пройдите опрос по профессиям, выберите профессию, прочитайте к ней описание и подбереите к профессии ПВК</h1>
                </div>
                <div id="profession-list" class="col-4">
                    <label for="profSelect" class="form-label"><?php echo $errPvk; ?></label>
                    <?php if ($_SESSION['select'] === 'true'): ?>
                        <select id="profSelect" class="form-select" aria-label="Disabled select example" disabled>
                            <option>Профессии</option>
                            <option>Профессия 1</option>
                            <option>Профессия 2</option>
                            <option>Профессия 3</option>
                        </select>
                        <div>
                            <h2> <?php echo $outPutInfoOfProf; ?></h2>
                        </div>
                        <div id="profession-button2" class="mb-3 col-12 col-md-4">
                            <button type="submit" class="btn btn-secondary" name="button-profession2"><a href="<?php echo BASE_URL . 'clearProfession.php'?>">Выход</a> </button>
                        </div>
                        <div id="profession-button22" class="container-fluid">
                            <button type="submit" class="btn btn-success" name="button-profession-result">Отправить</button>
                            <?php echo $_SESSION['login'] ?>
                        </div>
                    <?php elseif ($_SESSION['select'] === 'false' || $_SESSION['select'] === null): ?>
                        <select name="profession" id="profSelect" class="form-select">
                            <option>Профессии</option>
                            <option>Профессия 1</option>
                            <option>Профессия 2</option>
                            <option>Профессия 3</option>
                        </select>
                        <div id="profession-button" class="mb-3 col-12 col-md-4">
                            <button type="submit" class="btn btn-secondary" name="button-profession">Подтвердить</button>
                        </div>
                    <?php endif; ?>
                </div>
                <!--FirstBlockPVK-->
                <div class="col-4">
                    <?php if ($_SESSION['select'] === 'true'): ?>
                        <label for="pvkSelect" class="form-label">Выбор ПВК</label>
                        <select name="PVK" id="pvkSelect" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect2" class="form-label"></label>
                        <select name="pvkSelect2" id="profSelect2" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect3" class="form-label"></label>
                        <select name="pvkSelect3" id="profSelect3" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect4" class="form-label"></label>
                        <select name="pvkSelect4" id="profSelect4" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect5" class="form-label"></label>
                        <select name="pvkSelect5" id="profSelect5" class="form-select">
                            <?php func(); ?>
                        </select>
                    <?php elseif ($_SESSION['select'] === 'false' || $_SESSION['select'] === null): ?>
                        <label for="pvkSelect" class="form-label">Выбор ПВК</label>
                        <select name="PVK" id="pvkSelect" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect2" class="form-label"></label>
                        <select name="pvkSelect2" id="profSelect2" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect3" class="form-label"></label>
                        <select name="pvkSelect3" id="profSelect3" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect4" class="form-label"></label>
                        <select name="pvkSelect4" id="profSelect4" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect5" class="form-label"></label>
                        <select name="pvkSelect5" id="profSelect5" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                    <?php endif; ?>
                </div>
                <!--SecondBlockPVK-->
                <div class="col-4">
                    <?php if ($_SESSION['select'] === 'true'): ?>
                        <label for="pvkSelect" class="form-label">Выбор ПВК</label>
                        <select name="PVK" id="pvkSelect" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect2" class="form-label"></label>
                        <select name="pvkSelect2" id="profSelect2" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect3" class="form-label"></label>
                        <select name="pvkSelect3" id="profSelect3" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect4" class="form-label"></label>
                        <select name="pvkSelect4" id="profSelect4" class="form-select">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect5" class="form-label"></label>
                        <select name="pvkSelect5" id="profSelect5" class="form-select">
                            <?php func(); ?>
                        </select>
                    <?php elseif ($_SESSION['select'] === 'false' || $_SESSION['select'] === null): ?>
                        <label for="pvkSelect" class="form-label">Выбор ПВК</label>
                        <select name="PVK" id="pvkSelect" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect2" class="form-label"></label>
                        <select name="pvkSelect2" id="profSelect2" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect3" class="form-label"></label>
                        <select name="pvkSelect3" id="profSelect3" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                        <label for="profSelect4" class="form-label"></label>
                        <select name="pvkSelect4" id="profSelect4" class="form-select" aria-label="Disabled select example">
                            <?php func(); ?>
                        </select>
                        <label for="profSelect5" class="form-label"></label>
                        <select name="pvkSelect5" id="profSelect5" class="form-select" aria-label="Disabled select example" disabled>
                            <?php func(); ?>
                        </select>
                    <?php endif; ?>
                </div>
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