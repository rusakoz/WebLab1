<?php

include "logic/DB/database.php";

$errPvk = '';
$outPutInfoOfProf = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-profession'])){
    $_SESSION['prof'] = $_POST['profession'];


    if ($_SESSION['prof'] === "Профессии"){
        $errPvk = "Выберите профессию";
        $_SESSION['select'] = 'false';
    }elseif ($_SESSION['prof'] === "Программист аналитик"){
        $_SESSION['select'] = 'true';
        $outPutInfoOfProf = 'Программист аналитик - умеет извлекать из данных полезные знания, находить взаимосвязи, визуализировать данные и давать бизнесу полезные рекомендации, которые помогают улучшить продукт или наладить какие-то процессы.';
    }elseif ($_SESSION['prof'] === "Системный программист"){
        $_SESSION['select'] = 'true';
        $outPutInfoOfProf = 'Системный программист - Разрабатывает, тестирует и поддерживает операционные, сетевые или мобильные системы, создает интерфейсы распределенных баз данных.';
    }elseif ($_SESSION['prof'] === "Веб-разработчик"){
        $_SESSION['select'] = 'true';
        $outPutInfoOfProf = 'Веб-разработчик - Специалист, который разрабатывает, тестирует, исправляет, обновляет, совершенствует сайты, веб-сервисы и мультимедийные приложения с помощью языков программирования.';
    }
    else{
        $_SESSION['select'] = 'true';
        $errPvk = "Выберите професси32131ю";
        $outPutInfoOfProf = 'Какая-то информация о профессии';
    }

}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-profession-result'])){

    $_SESSION['PVK1'] = $_POST['PVK1'];
    $_SESSION['PVK2'] = $_POST['PVK2'];
    $_SESSION['PVK3'] = $_POST['PVK3'];
    $_SESSION['PVK4'] = $_POST['PVK4'];
    $_SESSION['PVK5'] = $_POST['PVK5'];
    $_SESSION['PVK6'] = $_POST['PVK6'];
    $_SESSION['PVK7'] = $_POST['PVK7'];
    $_SESSION['PVK8'] = $_POST['PVK8'];
    $_SESSION['PVK9'] = $_POST['PVK9'];
    $_SESSION['PVK10'] = $_POST['PVK10'];

    $_SESSION['listPVK'] = '';

    for ($i = 1; $i <= 10; $i++) {
        if ($_SESSION["PVK{$i}"] !== '0' && $i === 1) {
            $_SESSION['listPVK'] = $_SESSION['listPVK'] . $_SESSION["PVK{$i}"];
        }elseif ($_SESSION["PVK{$i}"] !== '0'){
            $_SESSION['listPVK'] = $_SESSION['listPVK'] .",". $_SESSION["PVK{$i}"];
        }

    }

}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-pvk-result'])){

    $pvkScore = '';

    for ($i = 0; $i < 9; $i++) {
        if (isset($_POST["ResultPVK{$i}"]) && $i === 0) {
            $pvkScore = $pvkScore . $_POST["ResultPVK{$i}"];
        }elseif (isset($_POST["ResultPVK{$i}"])){
            $pvkScore = $pvkScore .",". $_POST["ResultPVK{$i}"];
        }
    }
    $info = [
        'id' => $_SESSION['id'],
        'profession' => $_SESSION['prof'],
        'listPVK' => $_SESSION['listPVK'],
        'pvkScore' => $pvkScore
    ];

    insert('resultPVK', $info);
}