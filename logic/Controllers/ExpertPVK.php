<?php


include "logic/DB/database.php";


if ($_SERVER['REQUEST_METHOD'] === 'GET'){
    $_SESSION['select'] = 'false';
}

$errPvk = '';
$outPutInfoOfProf = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-profession'])){
    $_SESSION['prof'] = $_POST['profession'];



    if ($_SESSION['prof'] === "Профессии"){
        $errPvk = "Выберите профессию";
        //$_SESSION['select'] = 'false';
    }elseif ($_SESSION['prof'] === "Программист аналитик"){

        $select = selectAll('resultpvk', ['id'=>$_SESSION['id'], 'profession'=>$_SESSION['prof']]);
        if (!$select){
            $_SESSION['select'] = 'true';
            $outPutInfoOfProf = 'Программист аналитик - умеет извлекать из данных полезные знания, находить взаимосвязи, визуализировать данные и давать бизнесу полезные рекомендации, которые помогают улучшить продукт или наладить какие-то процессы.';
        }else{
            $errPvk = 'Вы уже прошли опрос по данной профессии';
        }

    }elseif ($_SESSION['prof'] === "Системный программист"){

        $select = selectAll('resultpvk', ['id'=>$_SESSION['id'], 'profession'=>$_SESSION['prof']]);
        if (!$select){
            $_SESSION['select'] = 'true';
            $outPutInfoOfProf = 'Системный программист - Разрабатывает, тестирует и поддерживает операционные, сетевые или мобильные системы, создает интерфейсы распределенных баз данных.';
        }else{
            $errPvk = 'Вы уже прошли опрос по данной профессии';
        }

    }elseif ($_SESSION['prof'] === "Веб-разработчик"){

        $select = selectAll('resultpvk', ['id'=>$_SESSION['id'], 'profession'=>$_SESSION['prof']]);
        if (!$select){
            $_SESSION['select'] = 'true';
            $outPutInfoOfProf = 'Веб-разработчик - Специалист, который разрабатывает, тестирует, исправляет, обновляет, совершенствует сайты, веб-сервисы и мультимедийные приложения с помощью языков программирования.';
        }else{
            $errPvk = 'Вы уже прошли опрос по данной профессии';
        }

    }
    else{
        $_SESSION['select'] = 'true';
        $errPvk = "ERROR";
        $outPutInfoOfProf = 'ERROR';
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-profession-result'])){

    $_SESSION['PVK0'] = $_POST['PVK1'];
    $_SESSION['PVK1'] = $_POST['PVK2'];
    $_SESSION['PVK2'] = $_POST['PVK3'];
    $_SESSION['PVK3'] = $_POST['PVK4'];
    $_SESSION['PVK4'] = $_POST['PVK5'];
    $_SESSION['PVK5'] = $_POST['PVK6'];
    $_SESSION['PVK6'] = $_POST['PVK7'];
    $_SESSION['PVK7'] = $_POST['PVK8'];
    $_SESSION['PVK8'] = $_POST['PVK9'];
    $_SESSION['PVK9'] = $_POST['PVK10'];

    $_SESSION['listPVK'] = '';

    for ($i = 1; $i <= 9; $i++) {
        if ($_SESSION["PVK{$i}"] !== '0' && $i === 1) {
            $_SESSION['listPVK'] = $_SESSION['listPVK'] . $_SESSION["PVK{$i}"];
        }elseif ($_SESSION["PVK{$i}"] !== '0'){
            $_SESSION['listPVK'] = $_SESSION['listPVK'] .",". $_SESSION["PVK{$i}"];
        }

    }

}

//$array = [true, false, null, '', 0, '0', 123, '123'];
//echo count($array);
//var_dump(array_unique($array));
//$re = new Set($array);
//echo count($re);
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['button-pvk-result'])){

    $pvkScore = '';

    for ($i = 0; $i < 10; $i++) {
        if (isset($_POST["ResultPVK{$i}"])) {
            $info = [
                'id' => $_SESSION['id'],
                'profession' => $_SESSION['prof'],
                'listPVK' => $_SESSION["PVK{$i}"],
                'pvkScore' => $_POST["ResultPVK{$i}"]
            ];
            insert('resultPVK', $info);
//            print_r($_POST);
//            print_r($info);
        }
    }

}